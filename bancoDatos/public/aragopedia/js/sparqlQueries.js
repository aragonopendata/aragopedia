function selectedReport(idx, item, id) {
	showModalWaiting2();
	var idReport = item.desc;
	var title = item.label;
	$.ajax({
		url: urlDSD + idReport + ".json?api_key=9557f4fc4e0de71125e3d1959490b28b",
		dataType: "json",
		complete: function( data ) {
								hideModalWaiting2();
		},
		success: function( data ) {
			var str = "<div class='negrita textosNormales dimensionTitle'>" + title + "</div>";
			$("#dimensionsSearch" + id + idx).hide();
			str += "<input type='hidden' value='" + idReport + "' id='idReport" + id + idx + "'>";
			str += "<ul>";
			$.map(data.result.items, function (item) {
					// Nos saltamos la unidad territorial y el refPeriod
					// http://purl.org/linked-data/sdmx/2009/dimension#refPeriod

				if (item != "http://purl.org/linked-data/sdmx/2009/dimension#refArea") {
					if ((item._about == "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod") 
								|| (item == "http://purl.org/linked-data/sdmx/2009/dimension#refPeriod") ) {
						str += "<li style='float:left;'><div class='dimensionText textosNormales'>A&ntilde;o de referencia:</div>";
						str += "<input hidden class='dimensionId' value = 'http://purl.org/linked-data/sdmx/2009/dimension#refPeriod'>";
						str += "<input hidden class='dimensionType' value = 'refPeriod'>";
						str += "<select class='dimensionOperator' disabled>";
						str += "<option value='='>IGUAL</option>";
						str += "</select>";
						str += "<select class='dimensionValues'>";

						var typeTerritorialUnit = getTypeTerritorialUnit(selectedItemsType);
						var query = "select distinct ?value where {\n";
						query += "{ ?obs0 a qb:Observation .\n";
						query += "?obs0 qb:dataSet <http://opendata.aragon.es/recurso/iaest/dataset/" + idReport + typeTerritorialUnit + ">.\n";
						query += "?obs0 <http://purl.org/linked-data/sdmx/2009/dimension#refPeriod> ?value\n";
						query += "}}\n"; 
						query += "ORDER BY DESC(?value)";
						//console.log(query);
						var queryUrl = urlSparqlEndpoint + "?default-graph-uri=&query="+ encodeURIComponent(query) + "&format=json";
						$.ajax({
							url: queryUrl,
							async: false,
							dataType: "json",
							success: function( data ) {
										if (data.results.bindings) {
											$.map(data.results.bindings, function (item) {
												var value = item.value.value.replace("http://reference.data.gov.uk/id/year/", "");
												str += "<option value='" + value + "'>" + value + "</option>";
											});
										}
						//			parseResultsSparqlQuery(data.results.bindings);
								}
						});
						str += "</select>";
						str += "</li>";
					} else {
						str += "<li class='i_i'><div class='dimensionText textosNormales'>" + item.label + "</div>";
						// TODO: Check si es necesario?
						str += "<input hidden class='dimensionId' value = '" + item._about + "'>";
						if (item.range == "http://www.w3.org/2004/02/skos/core#Concept") {
								// Codelist
							str += "<input hidden class='dimensionType' value = 'Codelist'>";
							str += "<select class='dimensionOperator'>";
							str += "<option value='='>IGUAL</option>";
							str += "<option value='!='>DISTINTO</option>";
							str += "</select>";
							str += "<select class='dimensionValues'>";
							var urlCodeList = item["qb_codeList"]._about + ".json?api_key=9557f4fc4e0de71125e3d1959490b28b";
							//var urlCodeList = item["qb:codeList"] + ".json";
							urlCodeList = urlCodeList.replace("opendata.aragon.es", document.location.host);
							//urlCodeList = urlCodeList.replace("alzir.dia.fi.upm.es", "localhost");
							$.ajax({
								url:urlCodeList,
								async: false,
								dataType: "json",
								success: function( data ) {
										if (data.result.items[0] ) {
											if (data.result.items[0].skos_hasTopConcept.length ) {
												$.map(data.result.items[0].skos_hasTopConcept, function (item) {
													str += "<option value='" + item._about + "'>" + item.skos_prefLabel + "</option>";
												});
											} else {
													str += "<option value='" + data.result.items[0].skos_hasTopConcept._about + "'>" + data.result.items[0].skos_hasTopConcept.skos_prefLabel + "</option>";
											}
										}
								}
							});
							str += "</select>";
						} else {
								// Value (Measure) 
							str += "<input hidden class='dimensionType' value = 'Measure'>";
							str += "<select class='dimensionOperator'>";
							str += "<option value='='>IGUAL</option>";
							str += "<option value='!='>DISTINTO</option>";
						
								// solo mostrar estos operadores si son tipos numÃ©ricos
								// xsd:int, xsd:double y xsd:string
							if ((item.range == "http://www.w3.org/2001/XMLSchema#int")
								|| (item.range == "http://www.w3.org/2001/XMLSchema#double") 
								|| (item.range == "http://www.w3.org/2001/XMLSchema#nonNegativeInteger")) {
								str += "<option value='>'>MAYOR</option>";
								str += "<option value='>='>MAYOR O IGUAL</option>";
								str += "<option value='<'>MENOR</option>";
								str += "<option value='<='>MENOR O IGUAL</option>";
							} else {
								str += "<option value='%'>CONTIENE</option>";
							}
							str += "</select>";
							str += "<input type='text' class='dimensionValues'>";
						}
						str += "</li>";
					}
				}
			});
			str += "</ul>";
			$("#dimensions" + id + idx).removeClass("oculto");
			$("#dimensions" + id + idx).html(str);
		
			var config	= {
				disable_search: true
			};
		
			/*Seleccion Condicionada*/
			if ($("select.dimensionOperator").length > 0){
				$("select.dimensionOperator").chosen(config).chosen();
			}
			if ($("select.dimensionValues").length > 0){
				$("select.dimensionValues").chosen(config).chosen();
			}
			/*if ($(".dimensionId").length > 0){
				$(".dimensionId").chosen(config).chosenImage();
			}
			if ($(".dimensionType").length > 0){
				$(".dimensionType").chosen(config).chosenImage();
			}*/
		}
	});
}

function applyCondicionada() {
	var autoNum = 0;
	var error = false;
	var typeTerritorialUnit = getTypeTerritorialUnit(selectedItemsType);

	var query = "select distinct ?territorialUnit where {\n";
	for (var pos = 0; pos < conditionDondeCounter[selectedItemsType]; pos++) {
					// TODO: USar operador IN para buscar en todos?
		if (pos != 0) {
			if ($("#dondeSeleccionCondicionadaLogical" + selectedItemsType).val() == "OR") {
				query += " UNION ";
			}
		}
		query += "{ ?obs" + pos + " a qb:Observation .\n";
		query += "?obs" + pos + " qb:dataSet <http://opendata.aragon.es/recurso/iaest/dataset/" + $("#idReport" + "condition" + selectedItemsType + pos).val() + typeTerritorialUnit + ">.\n";
		query += "?obs" + pos + " <http://purl.org/linked-data/sdmx/2009/dimension#refArea> ?territorialUnit.\n";
		$("#dimensions" + "condition" + selectedItemsType + pos + " li").each(function () {
			if (this.childNodes[1]) {
				var currentId = this.childNodes[1].value;
				var currentOperatorSelect = this.childNodes[3];
				var currentOperator = currentOperatorSelect[currentOperatorSelect.selectedIndex].value;
				var currentValue = null;
				var isURI = false;
				if (this.childNodes[2].value == "Codelist") {
					var currentValueSelect = this.childNodes[5];
					currentValue = "<" + currentValueSelect[currentValueSelect.selectedIndex].value + ">";
					isURI = true;
				} else if (this.childNodes[2].value == "refPeriod") {
					var currentValueSelect = this.childNodes[5];
					if (currentValueSelect[currentValueSelect.selectedIndex]) {
						currentValue = "<http://reference.data.gov.uk/id/year/" + currentValueSelect[currentValueSelect.selectedIndex].value + ">";
					} else {
						currentValue = "?bar" + pos;
					}
					isURI = true;
				} else {
						// Measure
					currentValue = this.childNodes[5].value;
				}
				if (currentValue == "") {
					error = true;
				}
				query += "?obs" + pos + " <" + currentId + "> ?value" + autoNum + " .\n";
				if (currentOperator != "%") {
					if (isURI) {
						query += "FILTER (?value" + autoNum + " " + currentOperator + " " + currentValue + ") .\n";
					} else if (currentOperatorSelect.length > 3) {
							// number => no poner comilla
						query += "FILTER (?value" + autoNum + " " + currentOperator + " " + currentValue + ") .\n";
					} else {
							// string => poner comilla
						query += "FILTER (?value" + autoNum + " " + currentOperator + " '" + currentValue + "') .\n";
					}
				} else {
					query += "?value" + autoNum + " bif:contains '" + currentValue + "' .\n";
				}
				autoNum++;
			}
		});
		query += "}";
	}
	query += "} LIMIT 2000\n";
	if (! error) {
		//console.log(query);
		var queryUrl = urlSparqlEndpoint + "?default-graph-uri=&query="+ encodeURIComponent(query) + "&format=json";

		showModalWaiting2();		
		$.ajax({
			url: queryUrl,
			dataType: "json",
			complete: function( data ) {
							hideModalWaiting2();
			},
			success: function( data ) {
							parseResultsSparqlQuery(data.results.bindings);
			}
		});
	} else {
		alertDialogModal("Rellene todos los valores", "Error");
	}
}

function getArrayCode(type) {
	if (type == "Provincia") {
		return cProvList;
	} else if (type == "Comarca") {
		return cComList;
	} else if (type == "Municipio") {
		return cMuniList;
	} else {
		return null;
	}
}	

function getArrayNames(type) {
	if (type == "Provincia") {
		return dProvList;
	} else if (type == "Comarca") {
		return dComList;
	} else if (type == "Municipio") {
		return dMuniList;
	} else {
		return null;
	}
}

function getTypeTerritorialUnit(type) {
	if (type == "Provincia") {
		return "TP";
	} else if (type == "Comarca") {
		return "TC";
	} else if (type == "Municipio") {
		return "TM";
	} else {
		return "A";
	}
}	

function correctWord(str, word) {
	if (str.endsWith(" (" + word + ")")) {
		return word + " " + str.replace(new RegExp(' [(]' + word + '[)]', 'g'), '');
	} else {
		return str;
	}
}

function correctWordInverse(name, word) {
	var str = name;
	if (str.startsWith(word + " ")) {
		return str.replace(new RegExp(word + ' ', 'g'), '') + " (" + word + ")";
	} else {
		return str;
	}
}

function parseResultsSparqlQuery(results) {
	var type = selectedItemsType;
	var uriPrefix = "http://opendata.aragon.es/recurso/territorio/" + type + "/";
	var arrayCode = getArrayCode(type);
	var funSelect = eval("sel" + type);

	clearPreviousSelection();
	if (results.length == 0) {
		alertDialogModal("No hay resultados", "Información");
	}
	for (var i = 0; i < results.length; i++) {
		var pos = results[i].territorialUnit.value.indexOf(uriPrefix);
		if (pos != -1) {
			var item = results[i].territorialUnit.value.substring(uriPrefix.length);
			item = item.replace(new RegExp('_', 'g'), ' ');
	 		item = item.replace(new RegExp('\/', 'g'), ' / ');
			item = correctWord(item, "La");
			item = correctWord(item, "El");
			item = correctWord(item, "Las");
			item = correctWord(item, "Los");
			if (item == "Veracruz") {
				item = "Beranuy";
			}
			if (item == "Torla") {
				item = "Torla-Ordesa";
			}
			if (item == "Monflorite-Lascasas") {
				item = "Monflorite Lascasas";
			}
			if (item == "Lascellas-Ponzano") {
				item = "Lascellas Ponzano";
			}
			if (item != "") {
					// A veces aparece como "sin clasificar" y entonces sale vacÃ­o
				//item = item.replace(new RegExp('\-', 'g'), ' - ');
				var codItem = arrayCode[normalizaCadena(item).toUpperCase()];	
				if (codItem) {
					funSelect(codItem, false);
				} else {
					alertDialogModal("Problema obteniendo el código de " + item, "Error");
				}
			}
		}
	}
	updateSummaryDonde(getArrayNames(selectedItemsType));
	updateDataPreview();
}

function download(outputFormat) {
	var sparql_query = getQuerySPARQL(false);
	sendQuerySparql_download(sparql_query, outputFormat);
}

function updateDataPreview() {
	showModalWaiting2();
	var sparql_query = getQuerySPARQL(true);
	sendQuerySparql_updateTable(sparql_query, 'json');
}

function getQuerySPARQL(includeLimit) {
	var query = "";
	var typeTerritorialUnit = getTypeTerritorialUnit(selectedItemsType);
	query += 'select distinct ?refArea ?nameRefArea ?refPeriod (strafter(str(?refPeriod), "http://reference.data.gov.uk/id/year/") AS ?nameRefPeriod) ';
	var dimensionList = $("#queItemsHidden").html().split("@");
	var dimensionListRange = $("#queItemsHiddenRange").html().split("@");
	for (var j = 0; j < dimensionList.length; j++) {
		if (dimensionList[j] != "") {
			if ($("#queColumn" + j).prop('checked')) {
				var aux = dimensionList[j].split("#");
				var nomVar = "?dim" + j + " ";
				if (aux.length == 2) {
					nomVar = aux[1].replace(new RegExp('-', 'g'), '_') + " ";
						// if first char is number => start with _ (avoid future error)
					if (! isNaN(parseInt(nomVar.charAt(0)))) {
						nomVar = "_" + nomVar;
					}
					nomVar = "?" + nomVar;
				}
				query += nomVar + " ";
			}
		}
	}
 	query += " where {\n";
	query += " ?obs qb:dataSet <http://opendata.aragon.es/recurso/iaest/dataset/" + $("#idReportQue").val() + typeTerritorialUnit + ">.\n";
	var minYear = $('#cuandoDesdeYear').val();
	var maxYear = $('#cuandoHastaYear').val();
	query += " ?obs <http://purl.org/linked-data/sdmx/2009/dimension#refPeriod> ?refPeriod.\n";

	var uriPrefixUK = "<http://reference.data.gov.uk/id/year/";
	query += "FILTER (?refPeriod IN (";
	query += uriPrefixUK + minYear + ">";
	minYear++;
	for (var i = (minYear); i <= maxYear; i++) {
		query += ',' + uriPrefixUK + i + ">";
	}
	query += ")).\n";
	query += " ?obs <http://purl.org/linked-data/sdmx/2009/dimension#refArea> ?refArea.\n";
	query += " ?refArea rdfs:label ?nameRefArea.";
	query += ' FILTER ( lang(?nameRefArea) = "es" ).';

	if (typeTerritorialUnit != "A") {
		if (selectedItems.length > 0) {
			var uriPrefix = "<http://opendata.aragon.es/recurso/territorio/" + selectedItemsType + "/";
			var arrayCode = getArrayNames(selectedItemsType);
			query += "FILTER (?refArea IN (";
			var currentItem = uriPrefix + getAragopediaURIfromName(arrayCode[selectedItems[0]], selectedItemsType) + ">";
			query += currentItem;
			for (var i = 1; i < selectedItems.length; i++) {
				var currentItem = uriPrefix + getAragopediaURIfromName(arrayCode[selectedItems[i]], selectedItemsType) + ">"; 
				query += "," + currentItem;
			}
			query += ")).\n";
		}
	}

	for (var j = 0; j < dimensionList.length; j++) {
		if (dimensionList[j] != "") {
			var aux = dimensionList[j].split("#");
			var nomVar = "?dim" + j + " ";
			if (aux.length == 2) {
				nomVar = aux[1].replace(new RegExp('-', 'g'), '_') + " ";
					// if first char is number => start with _ (avoid future error)
				if (! isNaN(parseInt(nomVar.charAt(0)))) {
					nomVar = "_" + nomVar;
				}
				nomVar = "?" + nomVar;
			}

			if (dimensionList[j].indexOf("http://opendata.aragon.es/def/iaest/dimension") != -1) {
				if (dimensionListRange[j] == "http://www.w3.org/2004/02/skos/core#Concept") {								
					query += "OPTIONAL { ?obs <" + dimensionList[j] + "> ?foo" + j + ".\n";
					query += " ?foo" + j + " skos:prefLabel " + nomVar + " } .\n";
				} else {
					query += "OPTIONAL {  ?obs <" + dimensionList[j] + "> " + nomVar + " } .\n";
				}
			} else {
				query += "OPTIONAL {  ?obs <" + dimensionList[j] + "> " + nomVar + " } .\n";
			}
		}
	}
	query += "} \n";
	query += "ORDER BY ASC(?refArea) ASC(?refPeriod)\n";
	if (includeLimit) {
		query += "LIMIT 200\n";
	}
	console.log(query);
	return query;
}

function sendQuerySparql_updateTable(query, outputFormat) {
	//var queryUrl = urlSparqlEndpoint + "?default-graph-uri=&query="+ encodeURIComponent(query) + "&format=" + outputFormat;
	var queryUrl = urlSparqlEndpoint;

	$.ajax({
		url: queryUrl,
		type: "POST",
		data: {
					query: query,
					format: outputFormat,
					"default-graph-uri": ''
		},
		dataType: outputFormat,
		complete: function( data ) {
						hideModalWaiting2();
		},
		success: function( data ) {
						$("#resultsTableBDA").removeClass("oculto");
						if (tabla != null) {
							tabla.destroy();
						}
						
						$('#resultsTableBDA thead').remove();
						$('#resultsTableBDA tbody').remove();

						parseResultsSparqlQueryShowData(data.results.bindings, data.head.vars, $("#queItemsHiddenLabel").html().split("@"));
		}
	});
}

function sendQuerySparql_download(query, outputFormat) {
	//var queryUrl = urlSparqlEndpoint + "?default-graph-uri=&query="+ encodeURIComponent(query) + "&format=" + outputFormat;
	var queryUrl = urlSparqlEndpoint;

	showModalWaiting2();

/*	var $form = $('<form method="POST" id="downloadForm" target="_blank">' +
								'	<input id="downloadFormQuery" name="query" type="hidden"/>' +
								' <input id="downloadFormGraph" name="default-graph-uri" type="hidden"/>' +
								' <input id="downloadFormFormat" name="format" type="hidden"/>' +
								'</form>').appendTo('body');
*/
 	$('#downloadForm').attr('action', queryUrl);
	$("#downloadFormQuery").val(query);
	$("#downloadFormGraph").val('');
	$("#downloadFormFormat").val(outputFormat);
									
 	$('#downloadForm').submit();
 //	$('#downloadForm').remove();
	hideModalWaiting2();
}

function getAragopediaURIfromName(itemOrig, type) {
	var item = itemOrig;
	if (type == "Municipio") {
		item = correctWordInverse(item, "La");
		item = correctWordInverse(item, "El");
		item = correctWordInverse(item, "Las");
		item = correctWordInverse(item, "Los");
	}
 	item = item.replace(new RegExp(' \/ ', 'g'), '/');
	if (item == "Beranuy") {
		item = "Veracruz";
	}
	if (item == "Torla-Ordesa") {
		item = "Torla";
	}
	if (item == "Monflorite Lascasas") {
		item = "Monflorite-Lascasas";
	}
	if (item == "Lascellas Ponzano") {
		item = "Lascellas-Ponzano";
	}
	item = item.replace(new RegExp(' ', 'g'), '_');
	return item;
}

function parseResultsSparqlQueryShowData(results, headers, labels) {
	var type = selectedItemsType;
	var uriPrefix = "http://opendata.aragon.es/recurso/territorio/" + type + "/";
	if (type == "Aragon") {
		uriPrefix = "http://opendata.aragon.es/recurso/territorio/ComunidadAutonoma/";
	}
	var arrayCode = getArrayCode(type);

	var str = "";
	if (results.length == 0) {
		//str = "<div class=\"textosNormales\">No hay datos que cumplan con las características seleccionadas</div>";
		str += "<thead><tr>";
		str += "<th class='resultBDA'>Foo</th>";
		str += "</thead><tbody><tr>";
		str += "<th class='resultBDA'>Bar</th>";
		str += "</tr>";
		str += "</tbody>";
		$("#resultsTableBDA").html(str);
		
		$("#resultsTableBDA").addClass("oculto");
		$('#noResults').removeClass("oculto");

	} else {
		str += "<thead><tr>";
		str += "<th class='resultBDA'>&Aacute;rea</th>";
		str += "<th class='resultBDA'>A&ntilde;o</th>";
		for (var i = 0; i < labels.length; i++) {
			if ($("#queColumn" + i).prop('checked')) {
				str += "<th class='resultBDA'>" + labels[i] + "</th>";
			}
		}
		str += "</thead><tbody>";

		for (var i = 0; i < results.length; i++) {
			str += "<tr>";
			for (var j = 0; j < headers.length; j++) {
				var fld = headers[j];
				if (fld != "refArea") {
					if (fld != "refPeriod") {
						if (eval("results[i]." + fld)) {
							str += "<td class='resultBDA'>" + prettifyTableCell(eval("results[i]." + fld + ".value")) + "</td>";
						} else {
							str += "<td class='resultBDA'></td>";
						}
					}
				}	/* else {				
					var pos = results[i].refArea.value.indexOf(uriPrefix);
					if (pos != -1) {
						var item = results[i].refArea.value.substring(uriPrefix.length);
						item = item.replace(new RegExp('_', 'g'), ' ');
		 				item = item.replace(new RegExp('\/', 'g'), ' / ');
						item = correctWord(item, "La");
						item = correctWord(item, "El");
						item = correctWord(item, "Las");
						item = correctWord(item, "Los");
						if (item == "Veracruz") {
							item = "Beranuy";
						}
						if (item == "Torla") {
							item = "Torla-Ordesa";
						}
						if (item == "Monflorite-Lascasas") {
							item = "Monflorite Lascasas";
						}
						if (item == "Lascellas-Ponzano") {
							item = "Lascellas Ponzano";
						}
						if (item != "") {
							str += "<td class='resultBDA'>" + item + "</td>";
						} else {
							str += "<td class='resultBDA'>-</td>";
						}
					}
				}*/
			}
			str += "</tr>";
		}
		str += "</tbody>";
		$("#noResults").addClass("oculto");
		$("#resultsTableBDA").removeClass("oculto");
	}
	//console.log('Los datos internos de la tabla son:\n'+str);

	$("#resultsTableBDA").html(str);
	updateDataTable();
}

function prettifyTableCell(val) {
	return val.replace(new RegExp('http://reference.data.gov.uk/id/year/', 'g'), '');
}
