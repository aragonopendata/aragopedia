

var theToken; // token de edición
var index=0;  //índice de results que se está procesando
var results; //vector de municipios proporcionado por solr (indices pares, en los impares estará el nº de resultados del municipio)
var total_munis=0;  //total unidades a actualizar

/**
 * Inicializa la aplicación
 */
function init(){
	document.getElementById("units").selectedIndex=0;
	document.getElementById("modificarWiki").disabled=true;
	showLoading(false);
}

/**
 * Codifica caracteres extraños
 * @param oldString cadena a codificar
 * @returns cadena con los caracteres extraños codificados
 */
function makeXMLsafe(oldString) {
	oldString = oldString.replace(/&/g, "%26");
	oldString = oldString.replace(/'/g, "%27");
	oldString = oldString.replace(/\+/g, "%2B");
	return oldString;
}

/**
 * Logueo en wiki
 * @param token token de logueo. Estará vacío inicialmente y luego con el token de logueo proporcionado para completar el inicio de sesión
 */
function login(token) {
	var wiki_user = document.getElementById("user").value;
	var wiki_pwd = document.getElementById("pwd").value;
	url =urlServer + "api.php?action=login&lgname="+wiki_user+"&lgpassword="+wiki_pwd;
	if (token != null){
		url = url + "&lgtoken="+theToken;
	}
	$.ajax({
		type: 'POST',
		url: url,

		success: function(data){
			if (token != null){  // ya está logueado
				// obtener el token de edición
				getToken();
			}
			else{
				// completar el inicio de sesión con el token de logueo recibido
				processResultLogin(data);
			}
		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			alert("problema en login:"+textStatus +" "+errorThrown);

		}
	});


}

/**
 * Obtiene el token de edición
 */
function getToken() {
	$.ajax({
		type: 'GET',
		url: urlServer + "api.php?action=query&prop=info&intoken=edit&titles=P%e1gina_principal",

		success: function(data){

			processResultToken(data);

		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			alert("problema obteniendo token:"+textStatus +" "+errorThrown);
		}
	});

}

/**
 * Carga la lista de secciones 
 */
function loadSections(){
	showLoading(true);

	$("#secciones").append("<div><input  class=\"section\" value=0 type=\"checkbox\">Principal</input></div>");
	for (var i=1;i<secciones_nombres.length; i++){
		$("#secciones").append("<div><input  class=\"section\" value="+i+" type=\"checkbox\">"+secciones_nombres[i]+"</input></div>");

	}


}


/**
 * Carga la lista de unidades
 */
function loadUnitsList(){
	showLoading(true);
	for (var i=0; i<unidades.length;i++){
		$("#units_list").append("<div><input  class=\"unit\" value=\""+unidades[i]+"\" type=\"checkbox\">"+unidades[i]+"</input></div>");
	}
	showLoading(false);
}



/**
 * Selecciona todas las unidades en la lista
 */
function selectAllUnits(){
	$("#units_list input").each(function(  ) {
		this.checked=true;
	});
}

/**
 * Deselecciona todas las unidades de la lista
 */
function unselectAllUnits(){
	$("#units_list input").each(function(  ) {
		this.checked=false;
	});
}

/**
 * Selecciona todas las secciones de la lista
 */
function selectAllSection(){
	$("#secciones input").each(function(  ) {
		this.checked=true;
	});
}

/**
 * Deselecciona todas las secciones de la lista
 */
function unselectAllSection(){
	$("#secciones input").each(function(  ) {
		this.checked=false;
	});
}


/**
 * Obtiene los datos de un municipio del servicio Solr
 * @param muni_ine codigo ine del municipio
 * @param muni_name nombre del municipio (primera en mayuscula resto en minuscula)
 * @param section_list lista de secciones a actualizar
 */
function getSolrMuniData(muni_ine,muni_name,section_list){
	var ine_muni=muni_ine;
	var nombre_muni=muni_name;

	var seccionesWiki=new Array();
	seccionesWiki[seccion_principal]=["nombre = "+nombre_muni];  //añadir el nombre del municipio a la sección principal
	seccionesWiki[seccion_principal].push("ine = "+muni_ine);
	seccionesWiki[seccion_principal].push("nomenclator = "+cabecera[muni_ine]);
	seccionesWiki["Ficha de padron municipal"]=[padron[muni_ine]];
	seccionesWiki["siua"]=["{{siua\n\r| ine = "+muni_ine+"\n\r}}"];
	seccionesWiki["toponimia"]=["{{toponimia\n\r| ine = "+muni_ine+"\n\r}}"];
	seccionesWiki["estadistica"]=["{{estadistica\n\r| ine = "+muni_ine+"\n\r}}"];
	var title=nombre_muni;  // titulo de la pagina que se va a editar
	// se sustituyen algunos caracteres conflictivos por el comodín ?
	if (nombre_muni=="Beranuy"){
		nombre_muni = "Veracruz";
	}
	nombre_muni = nombre_muni.replace(/\(/g,"?").replace(/\)/g,"?").replace(/ /g,"?");
	
	$.ajax({
		type: 'GET',
		url: urlSolrServer + "q=clave:"+nombre_muni+"&rows=1000&wt=json",
		async:false,
		success: function(data){
			// parsear respuesta y hacer la siguiente petición del municipio (otro formato de clave)
			parseSolrResult1(data,seccionesWiki,nombre_muni,section_list,nombre_muni,ine_muni,title);

		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += textStatus +" "+errorThrown+ "<br/>";
		}
	});


}

/**
 * Obtiene los datos de una comarca (o en el futuro otras unidades) del servicio Solr
 * @param clave nombre de la comarca
 * @param section_list lista de secciones a editar
 */
function getSolrData(clave,section_list,names_list){

	var seccionesWiki=new Array();
	seccionesWiki[seccion_principal]=["nombre = "+clave]; // se añade el nombre de la unidad a la sección principal
	if (codigos){
		var indice = unidades.indexOf(clave.replace(" (provincia)",""));
		seccionesWiki[seccion_principal].push("codigo = "+codigos[indice]);
		seccionesWiki["estadistica_"+document.getElementById("units").value]=["{{estadistica_"+document.getElementById("units").value+"\n\r| codigo = "+(codigos[indice]<10 ? '0':'')+codigos[indice]+"\n\r}}"];
	}
	var title=clave;  // titulo de la pagina a editar
	var completados=0;
	for (var i=0; i<names_list.length; i++){
		// se sustituyen algunos caracteres conflictivos por el comodín ?
		var nombre = names_list[i];//.replace(/\(/g,"?").replace(/\)/g,"?").replace(/ /g,"?").replace(/\//g,"*\*");
		if (nombre.indexOf("\"")<0){
			nombre = nombre.replace(/\(/g,"?").replace(/\)/g,"?").replace(/ /g,"?").replace(/\//g,"*\*");
		}
		$.ajax({
			type: 'GET',
			url: urlSolrServer + "q=clave:"+nombre+"&rows=1000&wt=json",
			
			success: function(data){
				// parsear respuesta y obtener los predicados asociados con el nombre en mayúsculas
				parseSolrResult(false,data,seccionesWiki,nombre,section_list,title);

				
			},
			error: function(  jqXHR,  textStatus,  errorThrown ){
				document.getElementById("problema").innerHTML += nombre + ": "+textStatus +" "+errorThrown+ "<br/>";
				
			},
			complete: function(){
				completados++;
				if (completados==names_list.length){
					updateSolrPage(section_list,title,seccionesWiki);
				}
			}
		});
	

	}
}







/**
 * Actualiza en Aragopedia las secciones seleccionadas de las páginas correspondientes a las
 * unidades seleccionadas 
 */
function loadWiki(){
	showLoading(true);
	document.getElementById("txtInformacion").innerHTML ="Recopilando información ...";
	document.getElementById("problema").innerHTML ="Problemas en:";
	var section_list = new Array();
	total_units=0;
	index=0;
	
	// Crear la lista de secciones a actualizar
	$("#secciones input").each(function(  ) {
		if (this.checked){
			section_list.push(this.value);
		}

	});

	if (section_list.length==0){
		alert("Debe seleccionar alguna sección");
	}
	else{
		
		var unit = document.getElementById("units").value;
		// Obtener el número total de unidades a actualizar para indicarlo en el progreso de la ejecución
		$("#units_list input").each(function(  ) {
			if (this.checked){
				
					total_units ++;
			}
		});

		// Actualizar cada una de las unidades seleccionadas
		$("#units_list input").each(function(  ) {
			if (this.checked){

				if (unit =="municipios"){
					var idx = this.value.indexOf(" ");
					if (idx>0){
						var ine = this.value.substr(0,idx);
						getSolrMuniData(ine,this.value.substr(idx+1,this.value.length),section_list);
						if ((nombre_antiguo[ine]!=null)&&(nombre_antiguo[ine].length)&&(nombre_antiguo[ine].length>=2)){
							updateOldPage(nombre_antiguo[ine][0],this.value.substr(idx+1,this.value.length),nombre_antiguo[ine][1]);
						}
					}
				}
				else{
					var names_list = new Array();
					
					if (unit=="comarcas"){
						if (this.value == "Tarazona y el Moncayo"){
							var nombre = "Tarazona y el  Moncayo";
							names_list.push(nombre);
							names_list.push(nombre.toUpperCase());
							names_list.push("\" TARAZONA Y EL MONCAYO \"");
						}
						else{
							names_list.push(this.value);
							names_list.push(this.value.toUpperCase());
							var valor = this.value.toUpperCase().replace(/Ü/g,"U").replace(/Á/g,"A").replace(/É/g,"E").replace(/Í/g,"I").replace(/Ó/g,"O").replace(/Ú/g,"U");
							if (valor =="ANDORRA-SIERRA DE ARCOS"){
								valor="ANDORRA/SIERRA DE ARCOS";
							}else if (valor =="BAJO ARAGON-CASPE/ BAIX ARAGO-CASP"){
								valor="BAJO ARAGON-CASPE/BAIX ARAGO-CASP";
							}else if (valor =="D.C. ZARAGOZA"){
								valor="ZARAGOZA";
							}else if (valor =="D.C. ZARAGOZA"){
								valor="ZARAGOZA";
							}
							
							names_list.push("\" "+valor+" \"");
						}
						getSolrData(this.value,section_list,names_list);
					}
					else if (unit=="provincias"){
						names_list.push(this.value);
						names_list.push("Total "+this.value);
						names_list.push("Provincia de "+this.value);
						names_list.push("TOTAL PROVINCIA "+this.value.toUpperCase());
						names_list.push("PROVINCIA DE "+this.value.toUpperCase());
						getSolrData(this.value+ " (provincia)",section_list,names_list);
					}
					else if (unit=="aragon"){
						names_list.push(this.value);
						names_list.push(this.value.toUpperCase());
						names_list.push("Total "+this.value);
						names_list.push("TOTAL ARAGON");
						names_list.push("TOTAL ARAGÓN");
						names_list.push("TOTAL  ");
						getSolrData(this.value,section_list,names_list);
					}
				}

			}
		});
	}
}



/**
 * Carga los datos del municipio devueltos por Solr con el primer formato de nombre y
 * pide los correspondientes al nombre del municipo en mayúscula
 * @param data datos del municipio devueltos por Solr
 * @param seccionesWiki vector con los pares clave-valor agrupados  por sección
 * @param clave nombre de la unidad
 * @param section_list lista de secciones que hay que actualizar
 * @param nombre_muni nombre del municipio
 * @param ine_muni codigo ine del municipio
 * @param title titulo de la página a actualizar
 */
function parseSolrResult1(data,seccionesWiki,clave,section_list,nombre_muni,ine_muni,title){
	// carga de los datos obtenidos
	parseSolrResult(false,data,seccionesWiki,clave,section_list,title);
	
	// petición de los datos con el nombre en mayusculas
	nombre_norm = getNombreMayus(nombre_muni);
	if (nombre_norm == "CAPDESASO"){
		nombre_norm = "CAPDESACO";
	}else if (nombre_norm == "PERALTA?DE?CALASANZ"){
		nombre_norm = "PERALTA?DE?CALASANT";
	}
	$.ajax({
		type: 'GET',
		url: urlSolrServer + "q=clave:"+nombre_norm+"&rows=1000&wt=json",
		async: false,
		success: function(data){

			parseSolrResult2(data,seccionesWiki,nombre_norm,section_list,nombre_muni,ine_muni,title);


		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += textStatus +" "+errorThrown+ "<br/>";
		}
	});



}

/**
 * Carga los datos del municipio devueltos por Solr con el segundo formato de nombre y
 * pide los correspondientes al codigo ine seguido del nombre del municipo 
 * @param data datos del municipio devueltos por Solr
 * @param seccionesWiki vector con los pares clave-valor agrupados  por sección
 * @param clave nombre de la unidad
 * @param section_list lista de secciones que hay que actualizar
 * @param nombre_muni nombre del municipio
 * @param ine_muni codigo ine del municipio
 * @param title titulo de la página a actualizar
 */
function parseSolrResult2(data,seccionesWiki, clave,section_list,nombre_muni,ine_muni,title){

	parseSolrResult(false,data,seccionesWiki,clave,section_list,title);
	$.ajax({
		type: 'GET',
		url: urlSolrServer + "q=clave:"+ine_muni+"?"+nombre_muni+"&rows=1000&wt=json",
		async: false,
		success: function(data){

			parseSolrResult3(data,seccionesWiki,ine_muni+"?"+nombre_muni,section_list,nombre_muni,ine_muni,title);

		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += textStatus +" "+errorThrown+ "<br/>";
		}
	});



}

/**
 * Obtiene la clave a usar en Solr en el formato mayúsculas. Convierte a mayúsculas y 
 * realiza algunas conversiones en casos particulares
 * @param nombre_muni nombre del municipio
 * @returns nombre en mayúsculas correspondiente
 */
function getNombreMayus(nombre_muni){
	if (nombre_muni.toUpperCase()=="BAELLS"){
		return "BA?LLS";
	}else if(nombre_muni.toUpperCase()=="LASCELLAS-PONZANO"){
		return "LASCELLAS?-?PONZANO";
	}else if(nombre_muni.toUpperCase()=="MONESMA?Y?CAJIGAR"){
		return "MONESMA?Y?CAJ?GAR";
	}else if(nombre_muni.toUpperCase()=="MONFLORITE-LASCASAS"){
		return "MONFLORITE-LAS?CASAS";
	}else if(nombre_muni.toUpperCase()=="PUEYO?DE?ARAGUÁS??EL?"){
		return "PUEYO?DE?ARAG??S";
	}else if(nombre_muni.toUpperCase()=="SANTA?CILIA"){
		return "SANTA?CILIA?DE?JACA";
	}else if(nombre_muni.toUpperCase()=="SANTALIESTRA?Y?SAN?QUÍLEZ"){
		return "SANTA?LIESTRA?Y?SAN?QU?LEZ";
	}else if(nombre_muni.toUpperCase()=="VALLE?DE?BARDAJÍ"){
		return "VALLE?DE?BARDAG?";
	}else if(nombre_muni.toUpperCase()=="SAN?MIGUEL?DEL?CINCA"){
		return "SAN?MIGUEL?DE?CINCA";
	}else if(nombre_muni.toUpperCase()=="AGUILAR?DEL?ALFAMBRA"){
		return "AGUILAR?DE?ALFAMBRA";
	}else if(nombre_muni.toUpperCase()=="PERALES?DEL?ALFAMBRA"){
		return "PERALES?DE?ALFAMBRA";
	}else if(nombre_muni.toUpperCase()=="CASTELLOTE"){
		return "CASTELLOTE?Y?ABENFIGO";
	}else if(nombre_muni.toUpperCase()=="SEGURA?DE?LOS?BAÑOS"){
		return "SEGURA?DE?BAÑOS";
	}else if(nombre_muni.toUpperCase()=="PURUJOSA"){
		return "PUROJOSA";
	}else if(nombre_muni.toUpperCase()=="QUINTO"){
		return "QUINTO?DE?EBRO";
	}else if(nombre_muni.toUpperCase()=="SAMPER?DEL?SALZ"){
		return "SAMPER?DE?SALZ";
	}else if(nombre_muni.toUpperCase()=="SAN?MARTÍN?DE?LA?VIRGEN?DE?MONCAYO"){
		return "SAN?MART?N?DE?LA?VIRGEN?DEL?MONCAYO";
	}else if(nombre_muni.toUpperCase()=="SANTA?CRUZ?DE?MONCAYO"){
		return "SANTA?CRUZ?DEL?MONCAYO";
	}else if(nombre_muni.toUpperCase()=="SAVIÑÁN"){
		return "SABIÑ?N";
	}else if(nombre_muni.toUpperCase()=="ÉPILA"){
		return "ÉPILA";
	} else{  // no es niguno de los casos especiales
		// convertir a mayúsuclas y sustituir caracteres especiales por el comodín
		return nombre_muni.toUpperCase().replace(/Ü/g,"?").replace(/Á/g,"?").replace(/É/g,"?").replace(/Í/g,"?").replace(/Ó/g,"?").replace(/Ú/g,"?");
	}
}

/**
 * Carga los datos del municipio devueltos por Solr con el segundo formato de nombre y
 * pide los correspondientes a mayúsculas con espacio al final
 * @param data datos del municipio devueltos por Solr
 * @param seccionesWiki vector con los pares clave-valor agrupados  por sección
 * @param clave nombre de la unidad
 * @param section_list lista de secciones que hay que actualizar
 * @param nombre_muni nombre del municipio
 * @param ine_muni codigo ine del municipio
 * @param title titulo de la página a actualizar
 */
function parseSolrResult3(data,seccionesWiki, clave,section_list,nombre_muni,ine_muni,title){

	nombre_norm = getNombreMayus(nombre_muni);  // nombre en mayúsculas
	
	// transformacines del nombre para casos particulares
	if ((nombre_norm=="HUESCA")||(nombre_norm=="TERUEL")||(nombre_norm=="ZARAGOZA")){
		nombre_norm=nombre_norm+"-CAPITAL*";

	}else if(nombre_muni.toUpperCase()=="ALMUNIA?DE?DOÑA?GODINA??LA?"){
		nombre_norm= "ALMUNIA?DE?DÑA?GODINA??LA??";
	} 
	else if(nombre_muni.toUpperCase()=="LOSCORRALES"){
		nombre_norm= "CORRALES??LOS??";
	}
	else if (nombre_norm=="TELLA-SIN"){
		nombre_norm="TELLA?-?SIN?";
	}
	else if (nombre_norm=="A?NSA-SOBRARBE"){
		nombre_norm="A?NSA?-?SOBRARBE?";
	}
	else if (nombre_norm=="FUENTES?CALIENTES"){
		nombre_norm="FUENTES?-?CALIENTES?";
	}
	else if (nombre_norm=="FUENTES?CLARAS"){
		nombre_norm="FUENTES?-?CLARAS?";
	}
	else if (nombre_norm=="MONROYO"){
		nombre_norm="MONRROYO?";
	}
	else if (nombre_norm=="PERALEJOS?DE?ALFAMBRA"){
		nombre_norm="PERALEJOS?";
	}
	else if (nombre_norm=="SANTA?CRUZ?DE?NOGUERAS"){
		nombre_norm="SANTA?CRUZ?DE?NOGUERA?";
	}
	else if (nombre_norm=="VILLANUEVA?DEL?REBOLLAR?DE?LA?SIERRA"){
		nombre_norm="VILLANUEVA?DEL?REBOLLAR?";
	}
	else if (nombre_norm=="PUEBLA?DE?ALFIND?N??LA?"){
		nombre_norm="PUEBLA?DE?ALFIND?N?";
	}
	else if (nombre_norm=="VILLAFRANCA?DE?EBRO"){
		nombre_norm="VILLAFRANCA?EBRO?";
	}else{  // no es un caso particular
		// añadir el comodin para simular el espacio en blanco
		nombre_norm = nombre_norm+"?";
	}

	// parsear resultado anterior
	parseSolrResult(false,data,seccionesWiki,clave,section_list,title);
	// hacer la petición con el formato actual
	$.ajax({
		type: 'GET',
		url: urlSolrServer + "q=clave:"+nombre_norm+"&rows=1000&wt=json",
		async: false,
		success: function(data){
			parseSolrResult4(data,seccionesWiki,nombre_norm,section_list,nombre_muni,ine_muni,title);

			//parseSolrResult(true,data,seccionesWiki,nombre_norm,section_list,title);
		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += nombre_norm+":"+ textStatus +" "+errorThrown+ "<br/>";
		}
	});



}

/**
 * Carga los datos del municipio devueltos por Solr con el segundo formato de nombre y
 * pide los correspondientes a mayúsculas con espacio al final
 * @param data datos del municipio devueltos por Solr
 * @param seccionesWiki vector con los pares clave-valor agrupados  por sección
 * @param clave nombre de la unidad
 * @param section_list lista de secciones que hay que actualizar
 * @param nombre_muni nombre del municipio
 * @param ine_muni codigo ine del municipio
 * @param title titulo de la página a actualizar
 */
function parseSolrResult4(data,seccionesWiki, clave,section_list,nombre_muni,ine_muni,title){

	nombre_norm = nombre_muni.toUpperCase().replace(/Ü/g,"?").replace(/Á/g,"?").replace(/É/g,"?").replace(/Í/g,"?").replace(/Ó/g,"?").replace(/Ú/g,"?");  // nombre en mayúsculas
	
	// transformacines del nombre para casos particulares
	if ((nombre_norm=="BELVER?DE?CINCA")){
		nombre_norm="\\%20BELVER\\%20";

	}
	else if (nombre_norm=="FUEVA??LA?"){
		nombre_norm="\\%20FUEVA??LA\\%20";
	}
	else if (nombre_norm=="GRADO??EL?"){
		nombre_norm="\\%20GRADO??EL\\%20";
	}
	else if (nombre_norm=="LASCELLAS?-?PONZANO"){
		nombre_norm="\\%20LASCELLAS-PONZANO\\%20";
	}
	else if (nombre_norm=="PEÑAS?DE?RIGLOS??LAS?"){
		nombre_norm="\\%20PEÑAS?DE?RIGLOS??LAS\\%20";
	}
	else if (nombre_norm=="PUEBLA?DE?CASTRO??LA?"){
		nombre_norm="\\%20PUEBLA?DE?CASTRO??LA\\%20";
	}
	else if (nombre_norm=="PUEYO?DE?ARAGU?S??EL?"){
		nombre_norm="\\%20PUEYO?DE?ARAGU?S??EL\\%20";
	}
	else if (nombre_norm=="SOTONERA??LA?"){
		nombre_norm="\\%20SOTONERA??LA\\%20";
	}
	else if (nombre_norm=="CAÑADA?DE?VERICH??LA?"){
		nombre_norm="\\%20CAÑADA?DE?VERICH??LA\\%20";
	}
	else if (nombre_norm=="CASTELLAR??EL?"){
		nombre_norm="\\%20CASTELLAR??EL\\%20";
	}
	else if (nombre_norm=="CEROLLERA??LA?"){
		nombre_norm="\\%20CEROLLERA??LA\\%20";
	}
	else if (nombre_norm=="CODOÑERA??LA?"){
		nombre_norm="\\%20CODOÑERA??LA\\%20";
	}
	else if (nombre_norm=="CUBA??LA?"){
		nombre_norm="\\%20CUBA??LA\\%20";
	}
	else if (nombre_norm=="CUERVO??EL?"){
		nombre_norm="\\%20CUERVO??EL\\%20";
	}
	else if (nombre_norm=="FRESNEDA??LA?"){
		nombre_norm="\\%20FRESNEDA??LA\\%20";
	}
	else if (nombre_norm=="GINEBROSA??LA?"){
		nombre_norm="\\%20GINEBROSA??LA\\%20";
	}
	else if (nombre_norm=="HOZ?DE?LA?VIEJA??LA?"){
		nombre_norm="\\%20HOZ?DE?LA?VIEJA??LA\\%20";
	}
	else if (nombre_norm=="IGLESUELA?DEL?CID??LA?"){
		nombre_norm="\\%20IGLESUELA?DEL?CID??LA\\%20";
	}
	else if (nombre_norm=="MATA?DE?LOS?OLMOS??LA?"){
		nombre_norm="\\%20MATA?DE?LOS?OLMOS??LA\\%20";
	}
	else if (nombre_norm=="OLMOS??LOS?"){
		nombre_norm="\\%20OLMOS??LOS\\%20";
	}
	else if (nombre_norm=="PARRAS?DE?CASTELLOTE??LAS?"){
		nombre_norm="\\%20PARRAS?DE?CASTELLOTE??LAS\\%20";
	}
	else if (nombre_norm=="POBO??EL?"){
		nombre_norm="\\%20POBO??EL\\%20";
	}
	else if (nombre_norm=="PORTELLADA??LA?"){
		nombre_norm="\\%20PORTELLADA??LA\\%20";
	}
	else if (nombre_norm=="PUEBLA?DE?H?JAR??LA?"){
		nombre_norm="\\%20PUEBLA?DE?H?JAR??LA\\%20";
	}
	else if (nombre_norm=="PUEBLA?DE?VALVERDE??LA?"){
		nombre_norm="\\%20PUEBLA?DE?VALVERDE??LA\\%20";
	}
	else if (nombre_norm=="VALLECILLO??EL?"){
		nombre_norm="\\%20VALLECILLO??EL\\%20";
	}
	else if (nombre_norm=="ZOMA??LA?"){
		nombre_norm="\\%20ZOMA??LA\\%20";
	}
	else if (nombre_norm=="ALMOLDA??LA?"){
		nombre_norm="\\%20ALMOLDA??LA\\%20";
	}
	else if (nombre_norm=="ALMUNIA?DE?DOÑA?GODINA??LA?"){
		nombre_norm="\\%20ALMUNIA?DE?DOÑA?GODINA??LA\\%20";
	}
	else if (nombre_norm=="BURGO?DE?EBRO??EL?"){
		nombre_norm="\\%20BURGO?DE?EBRO??EL\\%20";
	}
	else if (nombre_norm=="BUSTE??EL?"){
		nombre_norm="\\%20BUSTE??EL\\%20";
	}
	else if (nombre_norm=="CUERLAS??LAS?"){
		nombre_norm="\\%20CUERLAS??LAS\\%20";
	}
	else if (nombre_norm=="FAYOS??LOS?"){
		nombre_norm="\\%20FAYOS??LOS\\%20";
	}
	else if (nombre_norm=="FRAGO??EL?"){
		nombre_norm="\\%20FRAGO??EL\\%20";
	}
	else if (nombre_norm=="FRASNO??EL?"){
		nombre_norm="\\%20FRASNO??EL\\%20";
	}
	else if (nombre_norm=="JOYOSA??LA?"){
		nombre_norm="\\%20JOYOSA??LA\\%20";
	}
	else if (nombre_norm=="MUELA??LA?"){
		nombre_norm="\\%20MUELA??LA\\%20";
	}
	else if (nombre_norm=="PEDROSAS??LAS?"){
		nombre_norm="\\%20PEDROSAS??LAS\\%20";
	}
	else if (nombre_norm=="PINTANOS??LOS?"){
		nombre_norm="\\%20PINTANOS??LOS\\%20";
	}
	else if (nombre_norm=="PUEBLA?DE?ALFIND?N??LA?"){
		nombre_norm="\\%20PUEBLA?DE?ALFIND?N??LA\\%20";
	}
	else if (nombre_norm=="VILUEÑA??LA?"){
		nombre_norm="\\%20VILUEÑA??LA\\%20";
	}
	else if (nombre_norm=="ZAIDA??LA?"){
		nombre_norm="\\%20ZAIDA??LA\\%20";
	}
	else if (nombre_norm=="SANTALIESTRA?Y?SAN?QU?LEZ"){
		nombre_norm="\\%20SANTA?LIESTRA?Y?SAN?QUILEZ\\%20";
	}
	else if (nombre_norm=="VALLE?DE?BARDAJ?"){
		nombre_norm="\\%20VALLE?DE?BARDAG?\\%20";
	}
	else if (nombre_norm=="VERACRUZ"){
		nombre_norm="\\%20BERANUY\\%20";
	}
	else if (nombre_norm=="VILLANUEVA?DE?SIGENA"){
		nombre_norm="\\%20VILLANUEVA?DE?SIJENA\\%20";
	}
	else if (nombre_norm=="SAN?MIGUEL?DEL?CINCA"){
		nombre_norm="\\%20SAN?MIGUEL?DE?CINCA\\%20";
	}
	else if (nombre_norm=="SEGURA?DE?LOS?BAÑOS"){
		nombre_norm="\\%20SEGURA?DE?BAÑOS\\%20";
	}
	else if (nombre_norm=="TORREMOCHA?DE?JILOCA"){
		nombre_norm="\\%20TORREMOCHA?DEL?JILOCA\\%20";
	}
	else if (nombre_norm=="PUEBLA?DE?ALBORT?N"){
		nombre_norm="\\%20PUEBLA?DE?ALBORT?N??LA\\%20";
	}
	else if (nombre_norm=="SAN?MART?N?DE?LA?VIRGEN?DE?MONCAYO"){
		nombre_norm="\\%20SAN?MART?N?DE?LA?VIRGEN?DEL?MONCAYO\\%20";
	}
	else if (nombre_norm=="SAVIÑ?N"){
		nombre_norm="\\%20SABIÑ?N\\%20";
	}
	else{  // no es un caso particular
		// añadir el comodin para simular el espacio en blanco
		nombre_norm = "\\%20"+nombre_norm+"\\%20";
	}

	// parsear resultado anterior
	parseSolrResult(false,data,seccionesWiki,clave,section_list,title);
	// hacer la petición con el formato actual
	$.ajax({
		type: 'GET',
		url: urlSolrServer + "q=clave:"+nombre_norm+"&rows=1000&wt=json",
		async: false,
		success: function(data){
			parseSolrResult(true,data,seccionesWiki,nombre_norm,section_list,title);
		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += nombre_norm+":"+ textStatus +" "+errorThrown+ "<br/>";
		}
	});



}
/**
 * Elimina los decimales si es un entero
 * @param value valor
 * @returns valor sin el .0 al final
 */
function formatValue(value){
	return  value.replace(/\.0$/,"").replace(/\.0 $/,"");
}
/**
 * guarda los datos proporcionados y los carga en la wiki si ya se han almacenado todos
 * @param lastResult son los últimos datos de la unidad
 * @param response datos devueltos por Solr
 * @param seccionesWiki vector con los pares clave-valor agrupados  por sección
 * @param clave nombre de la unidad
 * @param section_list lista de secciones que hay que actualizar
 * @param title titulo de la página a actualizar
 */
function parseSolrResult(lastResult,response,seccionesWiki,clave,section_list,title) {

	var results = JSON.parse(response).response;
	if (results.numFound<=0){  //la petición a Solr no dio resultados
		// puede ser indicativo de que el nombre de la unidad no está en el formato correcto
		document.getElementById("problema").innerHTML += "No se encontraron predicados para "+clave+ "<br/>";
	}
	// almacenar los pares predicado-valor en el vector seccionesWiki
	for (var i=0; i<results.numFound;i++){
		var result = results.docs[i];
		// Sustituimos las palabras reservadas por su comodín (provincia y año) en el nombre del predicado
		var pred_norm = result.predicado.replace("ZARAGOZA","*").replace("HUESCA","*").replace("TERUEL","*").replace(/[0-9]{4}/,"aaaa");
		// Obtener la sección en la que va el predicado
		var seccion_dato = seccion[pred_norm];
		if (seccion_dato==null){  // no está incluido en ninguna sección
			// irá a la de datos no previstos
			seccion_dato=seccion_no_prevista;
		}
		if(seccionesWiki[seccion_dato]==null){ // la sección correspondiente no tiene todavía datos
			// se inicializa
			seccionesWiki[seccion_dato]=new Array();
		}
		if (!((seccion_dato==seccion_no_prevista)&&(((title.indexOf("provincia")>0)&&(result.predicado.indexOf("_MUNIC")>0))||
				((title.indexOf("provincia")<0)&&(result.predicado.indexOf("CONSUMO_GASOL")>=0))))){
			if (result.predicado == "SIMBOLO_MUNICIPIO"){
				if ((result.valor.toLowerCase().indexOf("bandera")>=0)&&(result.valor.toLowerCase().indexOf("bandera")<10)){
					seccionesWiki[seccion_dato].push("BANDERA_MUNICIPIO"
							+" = "+formatValue(result.valor));
				}
				else if((result.valor.toLowerCase().indexOf("escudo")>=0)&&(result.valor.toLowerCase().indexOf("escudo")<10)){
					seccionesWiki[seccion_dato].push("ESCUDO_MUNICIPIO"
							+" = "+formatValue(result.valor));
				}
				else{
					seccionesWiki[seccion_dato].push(result.predicado.replace(/ /g,"_").replace("_ZARAGOZA","").replace("_HUESCA","").replace("_TERUEL","")
							+" = "+formatValue(result.valor));
				}
				
			}else{
		// se almacena el predicado (sustituyendo espacios por guiones) con su valor
		seccionesWiki[seccion_dato].push(result.predicado.replace(/ /g,"_").replace("_ZARAGOZA","").replace("_HUESCA","").replace("_TERUEL","")
				+" = "+formatValue(result.valor));
		if ((seccion_dato == "Ficha de datos de usos del suelo")&&(formatValue(result.valor)!="0")){
			var year = result.predicado.match(/[0-9]{4}/);
			seccionesWiki[seccion_dato].push("#chart_"+year+"#"+etiquetas[pred_norm]+","+result.valor);
			seccionesWiki[seccion_dato].push("#tabla#"+year+"#"+etiquetas[pred_norm]+"#"+result.valor);
				
		}
			}
		}
	}

	if (lastResult){  // ya se han almacenado todos los predicados del a unidad
		// actualizar la pagina correspondiente
			updateSolrPage(section_list,title,seccionesWiki);
	}
}

/**
 * Actualiza en la página indicada las secciones indicadas con los datos proporcionados
 * @param section_list secciones a actualizar
 * @param title página a actualizar
 * @param seccionesWiki pares variable valor de cada sección (incluye todas, no solo las que hay que actualizar)
 */
function updateSolrPage(section_list,title,seccionesWiki){
	// Obtener las secciones actuales de la página con sus índices
	$.ajax({
		type: 'POST',
		url: urlServer + "api.php?action=parse&page="+ title + "&prop=sections&format=json",

		success: function(data){
			// obtener los índices de las secciones a actualizar y efectuar la actualización
			parsePageSections(data,section_list,title,seccionesWiki);
		},
		error: function(  jqXHR,  textStatus,  errorThrown ){
			document.getElementById("problema").innerHTML += title+":"+ textStatus +" "+errorThrown+ "<br/>";
			index ++;  // para indicar que sí se ha procesado pero no se ha completado
		}
	});
}

/**
 * Parsea el listado de secciones de una página y actualiza las secciones correspondiente
 * @param data respuesta de la wiki con las secciones
 * @param section_list lista de secciones a editar
 * @param title titulo de la página a editar
 * @param seccionesWiki vector con los pares variable/valor de cada sección
 */
function parsePageSections(data,section_list,title,seccionesWiki){

	var page_sections = new Array(); // listado ordenado de secciones de la página
	page_sections.push(""); //sección principal
	if (typeof data.parse !="undefined"){ 
		var sections = data.parse.sections;
		// crear el listado ordenado de secciones de la página a editar
		for (var i=0;i<sections.length;i++){
			if (parseInt(sections[i].index)>0){
				page_sections.push(sections[i].line);
				/*if (i<secciones_nombres.length-1){
				page_sections.push(secciones_nombres[i+1]);
				}*/
			}

		}
	}
	// actualizar las secciones que corresponda
	updatePage(section_list,page_sections,title,seccionesWiki);

}

/**
 * actualiza en la página indicada las secciones indicadas
 * @param section_list lista de secciones a actualizar
 * @param page_sections lista ordenada de secciones de la página a actualizar
 * @param title título de la página a editar
 * @param seccionesWiki vector de pares variable/valor de cada sección
 */
function updatePage(section_list,page_sections,title,seccionesWiki){
	var end_sections=0; // secciones actualizadas en la página
	var txt_new_section="";
	var nuevas = 0;
	// actualizar cada una de las secciones
	for (var i=0; i<section_list.length;i++){
		// indice de la sección a actualizar
		var section_idx = page_sections.indexOf(secciones_nombres[section_list[i]])+nuevas;
		// texto a escribir en la sección
		var txtSafe = getSectionVars(section_list[i],seccionesWiki,section_idx!=0);
		if (section_idx<0){ // la sección que hay que actualizar no existe en la página
			// crearla
			section_idx="new";
		}
		
		var last =( i==section_list.length-1); // última actualización que hay que hacer en la página
		if ((section_idx=="new") &&!last){
			txt_new_section = txt_new_section + txtSafe +"\n\r";
			end_sections++;
		}
		else{
			var texto = makeXMLsafe(txt_new_section+txtSafe);
			if (txt_new_section!=""){
				txt_new_section ="";
				nuevas++;
			}
		// ejecutar la actualización
		$.ajax({
			type: 'POST',
			url: urlServer + "api.php?action=edit&title="+ title + "&section="+section_idx+"&summary=&token="+theToken,
			data: { 
				'text': texto
			},
			async:(section_idx!="new"),  //si es sección nueva ejecutar de forma sincrona para asegurar que las nuevas se añaden en orden
			complete: function(){
				end_sections++;
				if (end_sections==section_list.length){  // actualización de la página completada
					index++;
					document.getElementById("txtInformacion").innerHTML = "Actualizados " + (index) +" de "+total_units;
					if (index==total_units){ // completadas todas las actualizaciones solicitadas
						showLoading(false);
						alert("fin");
					}
					//parseSolrMuni();
				}
			},
			error: function(  jqXHR,  textStatus,  errorThrown ){
				document.getElementById("problema").innerHTML += title+":"+ textStatus +" "+errorThrown+ "<br/>";
			}
		});
	}
	}
}

/**
 * actualiza la pagina de una antigua denominacion
 * @param old_name antigua denominacion
 * @param new_name denominación actual
 * @param year año en el que se produjo el cambio de denominación
 */
function updateOldPage(old_name, new_name, year){

		// ejecutar la actualización
		$.ajax({
			type: 'POST',
			url: urlServer + "api.php?action=edit&title="+ old_name + "&section=0&summary=&token="+theToken,
			data: { 
				'text': "{{"+seccion_nombre_antiguo+"\n\r"+"| viejoNombre = "+old_name+"\n\r"+"| nuevoNombre = "+new_name+"\n\r"+"| cambio = "+year+"\n\r}}"
			},
			
			error: function(  jqXHR,  textStatus,  errorThrown ){
				document.getElementById("problema").innerHTML += old_name+":"+ textStatus +" "+errorThrown+ "<br/>";
			}
		});

	
}
/**
 * Obtiene el código wiki correspondiente a una sección
 * @param section_idx índice de la sección
 * @param seccionesWiki pares variable/valor correspondientes a cada sección
 * @param include_title incluir el título de sección
 * @returns {String} codigo wiki de la sección
 */
function getSectionVars(section_idx,seccionesWiki, include_title){
	if(secciones[section_idx]=="Ficha de pleno municipal")
		return "";
	if((seccionesWiki[secciones[section_idx]])&&(seccionesWiki[secciones[section_idx]].length==1)&&
			(seccionesWiki[secciones[section_idx]][0].indexOf("{{")==0)){
		if (include_title)
			return "== "+secciones_nombres[section_idx]+" ==\n\r"+seccionesWiki[secciones[section_idx]]+"\n\r";
		else
			return seccionesWiki[secciones[section_idx]]+"\n\r";
	}
	var txtSafe = "{{";
	
	
	txtSafe= txtSafe + secciones[section_idx]+"\n\r";  // referencia a plantilla
	if (seccionesWiki[secciones[section_idx]]){ // hay valores para la sección
		// añadir todas las variables con sus valores
		var valor;
		var especial_vars=new Array();
		var especial_vars_names=new Array();
		var table_data = new Array();
		var table_rows_names = new Array();
		var table_column_names = section_table_columns[secciones[section_idx]];
		for (var j=0; j<seccionesWiki[secciones[section_idx]].length; j++){
			valor = seccionesWiki[secciones[section_idx]][j];
			if (valor.indexOf("#")==0){  // especial, pasar como datos de gráfico
				var datos = valor.split("#");
				
				if (datos.length==3){// grafica
					if (especial_vars[datos[1]]== null){
						especial_vars[datos[1]]="";
						especial_vars_names.push(datos[1]);
					}
					especial_vars[datos[1]] = especial_vars[datos[1]]+datos[2]+"\n\r";
				}
				else if (datos.length >3){//tabla
					var columna =table_column_names.indexOf(datos[2]);
					var fila = datos[3];
					var valor = datos[4];
					if(table_data[fila]==null){
						table_data[fila]=new Array();
						
						table_rows_names.push(datos[3]);
					}
					table_data[fila][columna]=valor;
					
					
				}
			}
			else{ // predicado = valor
			txtSafe = txtSafe+"| "+valor+"\n\r";
			}
		}
		
		for (var i=0; i<especial_vars_names.length ;i++){
			txtSafe = txtSafe+"| "+especial_vars_names[i]+"="+especial_vars[especial_vars_names[i]]+"\n\r";
		}
	}
	

	txtSafe= txtSafe + "}}\n\r";
	
	var previo ="";
	if (include_title){
		
		previo="== "+secciones_nombres[section_idx]+" ==\n\r";
	}
	if (table_column_names!=null){
		previo = previo + "{| border=\"1\" cellspacing=\"0\"\n\r";
		for (var i=0; i< section_table_headers[secciones[section_idx]].length ;i++){
			previo = previo + "! "+section_table_headers[secciones[section_idx]][i]+"\n\r";
		}
		for (var i=0; i< table_rows_names.length ;i++){
			var row = table_data[table_rows_names[i]];
			previo = previo +"|-\n\r";
			previo = previo +"|"+table_rows_names[i]+"\n\r";
			for (var j=0; j<row.length; j++){
				previo = previo +"|"+row[j]+"\n\r";
				
			}
		}
		previo = previo + "|}\n\r";
	}
	
	return previo + txtSafe;
}


/**
 * Extrae el token de edición de la respuesta de la wiki
 * @param result respuesta de la wiki
 */
function processResultToken(result) {
	var strBegin = ' edittoken=&quot;';
	var pos = result.indexOf(strBegin, 1);
	if (pos != -1) {
		var startpos = pos + strBegin.length;
		var endpos = result.indexOf('&quot;',startpos);
		var selectedData = result.substring(startpos, endpos);
		theToken = selectedData;
		theToken = encodeURIComponent(theToken);
		alert("Sesión iniciada correctamente");
		// mostrar usuario conectado y ocultar login y password
		document.getElementById("username").innerHTML = document.getElementById("user").value;
		document.getElementById("login").style.display="none";
		document.getElementById("logged").style.display="block";
		// habilitar botón de ejecutar modificación
		document.getElementById("modificarWiki").disabled=false;
	}
}

/**
 * Desconectar al usuario
 */
function logOut(){
	// mostrar cajas de login y password y ocultar usuario conectado
	document.getElementById("logged").style.display="none";
	document.getElementById("login").style.display="block";
	// deshabilitar botón de ejecutar modificación
	document.getElementById("modificarWiki").disabled=true;
}
/**
 * Extrae el token de logueo de la respuesta de la wiki
 * @param result respuesta de la wiki
 */
function processResultLogin(result) {
	var strBegin = ' token=&quot;';
	var pos = result.indexOf(strBegin, 1);
	if (pos != -1) {
		var startpos = pos + strBegin.length;
		var endpos = result.indexOf('&quot;',startpos);
		var selectedData = result.substring(startpos, endpos);
		theToken = selectedData;
		// completar el logueo con el token de inicio de sesión
		login(theToken);
	}

}

/**
 * Borrar la configuración que estuviese cargada
 */
function cleanClasificacion(){
	if (document.getElementById("clasificacion") != null) { // está cargado el script de configuración de otro mapa
		// elminarlo
		$("#clasificacion").remove();
	}
	delete unidades;
	delete seccion;
	delete seccion_principal;
	delete seccion_no_prevista;
	delete secciones;
	delete secciones_nombres;
	$("#secciones *").remove();
	$("#units_list *").remove();
}

/**
 * Carga la configuración correspondiente a las unidades seleccionadas
 */
function loadClasificacion(){
//	eliminar de memoria la configuración que pudiese estar cargado
	cleanClasificacion();
	var units = document.getElementById("units").value;
	if (units!=""){ // hay un tipo de unidad seleccionado
//		cargar la configuración correspondiente
		var js = document.createElement('script'); // elemento script con referencia al fichero de configuración
		js.id="clasificacion";js.type = "text/javascript"; js.async = true; js.src = "config/clasificacion_"+units+".js";

		if (js.readyState){  // IE
			js.onreadystatechange = function(){
				if (js.readyState == "loaded" ||
						js.readyState == "complete"){
					js.onreadystatechange = null;
					// cargar el listado de secciones y unidades
					loadLists();
				}
			};
		} else {  // Others
			js.onload = function(){
				// cargar el listado de secciones y unidades
				loadLists();
			};

		}
//		añadir el script al html
		document.getElementsByTagName('head')[0].appendChild(js);
	}
	else{

	}
}

/**
 * carga los listados de secciones y unidades según el tipo de unidad seleccionado
 */
function loadLists(){
	loadSections();
	loadUnitsList();
}

/**
 * muestra u oculta el mensaje de cargando
 * @param show si es true se mostrará el mensaje si es false se ocultará
 */
function showLoading(show){
	if (show)
		document.getElementById("loadingOverlay").style.visibility="visible";
	else
		document.getElementById("loadingOverlay").style.visibility="hidden";
}
