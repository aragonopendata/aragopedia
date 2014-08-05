<!DOCTYPE html>
<html lang="es" dir="ltr" class="client-nojs">
<head>
<meta charset="UTF-8" /><title>Aragopedia</title>
<meta name="generator" content="MediaWiki 1.22.0" />

<link rel="shortcut icon" href="/favicon.ico" /-->
<link rel="search" type="application/opensearchdescription+xml" href="http://opendata.aragon.es/aragopedia/opensearch_desc.php" title="Aragopedia (es)" />

<link rel="alternate" type="application/atom+xml" title="Feed Atom de Aragopedia" href="http.//opendata.aragon.es/aragopedia/index.php?title=Especial:CambiosRecientes&amp;feed=atom" />
<link rel="stylesheet" href="http://opendata.aragon.es/aragopedia/load.php?debug=false&amp;lang=es&amp;modules=mediawiki.legacy.commonPrint%2Cshared%7Cskins.vector&amp;only=styles&amp;skin=vector&amp;*" />
<meta name="ResourceLoaderDynamicStyles" content="" />
<link rel="stylesheet" href="http://opendata.aragon.es/aragopedia/load.php?debug=false&amp;lang=es&amp;modules=site&amp;only=styles&amp;skin=vector&amp;*" />
<link rel="stylesheet"
	href="ext/jquery/jquery-ui-1.10.3.custom/css/smoothness/jquery-ui-1.10.3.custom.css" />
<link rel="stylesheet" type="text/css" href="css/aragopedia.css" />
<link rel="favourites icon" href="public/i/favicon.ico" />

  <link rel="stylesheet" href="public/themes/aod/style.css" media="screen" type="text/css" />
<script src="config/lista_paginas.js"></script>

<style>a:lang(ar),a:lang(ckb),a:lang(kk-arab),a:lang(mzn),a:lang(ps),a:lang(ur){text-decoration:none}
/* cache key: my_wiki:resourceloader:filter:minify-css:7:07b6a8ccf3fd62e770f192d0a6f8e123 */</style>

<script src="opendata.aragon.es/aragopedia/load.php?debug=false&amp;lang=es&amp;modules=startup&amp;only=scripts&amp;skin=vector&amp;*"></script>
<script src="ext/jquery/jquery-1.8.3.min.js"></script>
<script
	src="ext/jquery/jquery-ui-1.10.3.custom/js/jquery-ui-1.10.3.custom.min.js"></script>
</head>
<body class="mediawiki ltr sitedir-ltr ns-0 ns-subject page-Página_principal skin-vector action-view vector-animateLayout" onload="init()">
<header>
<div id="cabeceraRelacionados">
	<ul>
		<li class="active"><a href="http://opendata.aragon.es" title="Open data">OPEN DATA</a><p class="clear visible-xs"></p></li>
<li class="clear visible-xs tamCero"></li>
		<li><a href="http://aragonparticipa.aragon.es" title="Participaci&oacute;n ciudadana">PARTICIPACI&Oacute;N CIUDADANA</a></li>
	</ul>
</div>
<div id="cabecera">
	<ul>
		<li><a href="http://www.aragon.es" target="_blank"><img src="/public/i/logo_aragob.png" width="127" height="28" alt="Gobierno de Arag&oacute;n" title="Gobierno de Arag&oacute;n" /></a></li>
	</ul>
</div>

<div class="banner">
	<div class="bannerInline" style="text-align: right;" >
		<a href="/" title="ARAGÓN OPEN DATA"><img class=""  id="idTotal" src="http://opendata.aragon.es/public/i/logo_aod.png" alt="ARAGÓN OPEN DATA"></a>
	</div>
	<div class="bannerInline bannerBuscador" style="text-align: left; padding-top: 1.5%;">
		<form id="cajaBusqBanner" action="/catalogo" method="get">
<!--			<label for="cajaDeBusqInput" class="oculto">Buscar conjuntos de datos</label>-->
			
			<input id="cajaDeBusqInput" name="q" value="" class="search anchoSearchBanner" type="text"">
			<button class="btn-search" type="submit">Buscar</button>
			<!--<input id="cajaBusqInput" type="text" name="q" value="" class="search anchoSearchBanner d_d" placeholder="ARAG&Oacute;N OPEN DATA BUSCA DATOS" />-->
		</form>
	</div>
</div>
<div class="clear"></div>
</header>
<nav>
  <div id="navegacion" class="botones botonesSuperiorLista">
    <ul>
      <li onmousedown="javascript:this.className='botonSuperiorClicked first';" onmouseup="javascript:this.className='botonSuperior first';"
            onmouseover="javascript:this.className='botonSuperiorOver first';" onmouseout="javascript:this.className='botonSuperior first';"
            onclick="javascript:window.location='/catalogo';" class="botonSuperior first" title="Datos"><img src="/public/i/header/datos.png" alt="Datos" title="Datos"></li>
      <li onmousedown="javascript:this.className='botonSuperiorClicked second';" onmouseup="javascript:this.className='botonSuperior botonSuperiorClicked second';"
            onmouseover="javascript:this.className='botonSuperiorOver botonSuperiorClicked second';" onmouseout="javascript:this.className='botonSuperior botonSuperiorClicked second';"
            onclick="javascript:window.location='/aragopedia';" class="botonSuperior botonSuperiorClicked second" title="AragoPedia"><img src="/public/i/header/aragopedia.png" alt="AragoPedia" title="AragoPedia"></li>
<li class="clear visible-xs tamCero"></li>
      <li onmousedown="javascript:this.className='botonSuperiorClicked third';" onmouseup="javascript:this.className='botonSuperior third';"
            onmouseover="javascript:this.className='botonSuperiorOver third';" onmouseout="javascript:this.className='botonSuperior third';"
            onclick="javascript:window.location='/portal/social-data';" class="botonSuperior third" title="Social Data"><img src="/public/i/header/socialData.png" alt="Social Data" title="Social Data"></li>
<li class="clear visible-ms tamCero"></li>
      <li onmousedown="javascript:this.className='botonSuperiorClicked fourth';" onmouseup="javascript:this.className='botonSuperior fourth';"
            onmouseover="javascript:this.className='botonSuperiorOver fourth';" onmouseout="javascript:this.className='botonSuperior fourth';"
            onclick="javascript:window.location='/portal/colabora';" class="botonSuperior fourth" title="Colabora"><img src="/public/i/header/colabora.png" alt="Colabora" title="Colabora"></li>
<li class="clear visible-xs tamCero"></li>
      <li onmousedown="javascript:this.className='botonSuperiorClicked fifth';" onmouseup="javascript:this.className='botonSuperior fifth';"
            onmouseover="javascript:this.className='botonSuperiorOver fifth';" onmouseout="javascript:this.className='botonSuperior fifth';" 
            onclick="javascript:window.location='/portal/aplicaciones';" class="botonSuperior fifth" title="Aplicaciones"><img src="/public/i/header/aplicaciones.png" alt="Aplicaciones" title="Aplicaciones"></li>
      <li onmousedown="javascript:this.className='botonSuperiorClicked last';" onmouseup="javascript:this.className='botonSuperior last';"
            onmouseover="javascript:this.className='botonSuperiorOver last';" onmouseout="javascript:this.className='botonSuperior last';" 
            onclick="javascript:window.location='/portal/info';" class="botonSuperior last" title="Informaci&oacute;n sobre Open Data"><img src="/public/i/header/infoOpenData.png" alt="Informaci&oacute;n sobre Open Data" title="Informaci&oacute;n sobre Open Data"></li>
      </ul>
  </div>
</nav>
<div id="aragopedia">
<div id="selection-dialog" title="Selección de página" style="display:none;">

</div>
		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<!---------------- CONTENIDO ------------->
		
		<div id="cabecera_aragopedia" class="contenido">
			<img id="bienvenida" src="images/09-TXT-Bienvenidos-AragoPedia.png"/>
			<img id="txt_bienvenida" src="images/10-TXT-Introduccion-AragoPedia.png"/>
			<div id="infowiki">
			<p>768 ARTÍCULOS</p>
			<p><?php
date_default_timezone_set('Europe/Madrid');
echo date("j.m.Y | G:i:s"); ?></p>
			</div>
		</div>
		<div id="busqueda" class="contenido">
		<img id="busqueda_txt" src="images/11-TXT-Busqueda-Comarcas-Municipios.png"/>
		<div id="seleccion">
		<input id="busqueda_comarcas" type="text"/>
		<input id="busqueda_municipios" type="text" />
		</div>
		</div>
		<div id="mapa" class="contenido">
		<img id="busqueda_mapa" src="images/14-TXT-Busqueda-Mapa.png"/>
		 <img id="mapa_img" src="images/mapaComarcas.png" usemap="#comarcas" alt="Mapa de comarcas" />
                    <map name="comarcas">
                    <area shape="poly" alt="La Jacetania" coords="114,47,104,43,95,39,106,37,112,30,119,24,124,15,127,5,138,7,146,12,152,19,162,16,164,27,165,39,167,51,162,59,151,62,141,59,131,62,121,59,118,49" href='javascript:openDialog("01")' title="La Jacetania" onMouseOver="self.status='La Jacetania'; return true">
                    <area shape="poly" alt="Alto Gállego" coords="157,57,168,55,166,44,163,34,165,23,170,15,179,11,187,17,188,29,186,40,189,50,193,59,201,64,195,71,192,81,184,76,172,75,158,75,150,70,154,58" href='javascript:openDialog("02")' title="Alto G llego" onMouseOver="self.status='Alto G llego'; return true">
                    <area shape="poly" alt="Sobrarbe" coords="247,28,245,39,242,49,235,56,237,67,239,78,233,85,225,90,213,91,206,85,202,76,197,68,193,59,188,51,184,42,187,32,186,20,195,24,203,29,213,26,223,23,231,28,240,24" href='javascript:openDialog("03")' title="Sobrarbe" onMouseOver="self.status='Sobrarbe'; return true">
                    <area shape="poly" alt="La Ribagorza" coords="279,79,276,90,276,103,272,112,268,121,255,121,250,113,241,109,235,102,230,94,233,84,239,77,236,67,236,54,245,50,245,36,249,27,261,26,271,29,277,37,276,49,277,61,281,70" href='javascript:openDialog("04")' title="La Ribagorza" onMouseOver="self.status='La Ribagorza'; return true">
                    <area shape="poly" alt="Cinco Villas" coords="122,83,128,90,136,95,135,107,127,114,120,120,117,130,108,135,94,137,81,137,76,129,80,119,76,108,73,98,74,86,79,77,80,65,83,55,91,50,98,44,108,47,119,49,121,60,101,59" href='javascript:openDialog("05")' title="Cinco Villas" onMouseOver="self.status='Cinco Villas'; return true">
                    <area shape="poly" alt="Hoya de Huesca" coords="129,96,136,107,135,95,128,89,122,82,126,73,120,65,132,64,139,57,145,65,153,71,161,76,172,78,182,75,189,81,196,87,197,99,197,112,201,121,191,124,178,127,174,118,162,117,153,121,146,127,132,126,124,121,128,111" href='javascript:openDialog("06")' title="Hoya de Huesca" onMouseOver="self.status='Hoya de Huesca'; return true">
                    <area shape="poly" alt="Somontano de Barbastro" coords="217,125,213,134,208,142,202,135,197,127,202,119,196,112,199,102,194,94,192,82,199,76,205,83,210,91,222,89,230,94,235,102,240,112,231,116,226,125" href='javascript:openDialog("07")' title="Somontano de Barbastro" onMouseOver="self.status='Somontano de Barbastro'; return true">
                    <area shape="poly" alt="Cinca Medio" coords="237,113,234,123,237,133,234,143,229,151,224,159,213,157,209,148,212,138,218,131,226,125,227,113" href='javascript:openDialog("08")' title="Cinca Medio" onMouseOver="self.status='Cinca Medio'; return true">
                    <area shape="poly" alt="La Litera" coords="257,121,265,126,263,137,256,144,249,151,243,158,235,152,238,142,236,131,238,118,242,109,251,114,257,121" href='javascript:openDialog("09")' title="La Litera" onMouseOver="self.status='La Litera'; return true">
                    <area shape="poly" alt="Los Monegros" coords="158,119,168,116,176,122,186,125,197,127,202,135,207,143,211,152,209,164,207,176,211,185,209,196,200,201,193,192,187,185,176,182,183,175,174,180,167,174,157,170,152,160,142,157,142,144,150,139,146,128,153,121" href='javascript:openDialog("10")' title="Los Monegros" onMouseOver="self.status='Los Monegros'; return true">
                    <area shape="poly" alt="Bajo Cinca / Baix Cinca" coords="245,184,243,196,247,205,238,210,229,214,221,209,215,202,212,192,211,180,210,167,213,157,224,159,231,153,240,157,245,165,253,170,251,182" href='javascript:openDialog("11")' title="Bajo Cinca / Baix Cinca" onMouseOver="self.status='Bajo Cinca / Baix Cinca'; return true">
                    <area shape="poly" alt="Tarazona y el Moncayo" coords="42,128,53,130,52,142,47,150,42,159,34,154,33,142,29,133,33,124,42,128" href='javascript:openDialog("12")' title="Tarazona y el Moncayo" onMouseOver="self.status='Tarazona y el Moncayo'; return true">
                    <area shape="poly" alt="Campo de Borja" coords="75,159,69,166,58,164,46,161,48,149,52,140,60,134,72,133,78,141,79,153" href='javascript:openDialog("13")' title="Campo de Borja" onMouseOver="self.status='Campo de Borja'; return true">
                    <area shape="poly" alt="Aranda" coords="63,171,61,182,56,190,47,186,39,181,30,177,33,167,38,159,47,163,58,165" href='javascript:openDialog("14")' title="Aranda" onMouseOver="self.status='Aranda'; return true">
                    <area shape="poly" alt="Ribera Alta del Ebro" coords="92,145,103,154,98,162,88,158,80,153,78,142,87,138,101,136,102,148,111,153" href='javascript:openDialog("15")' title="Ribera Alta del Ebro" onMouseOver="self.status='Ribera Alta del Ebro'; return true">
                    <area shape="poly" alt="Valdejalón" coords="96,168,106,171,108,182,97,184,87,187,88,200,77,202,68,198,62,191,70,186,68,175,70,163,78,157,89,159,99,162" href='javascript:openDialog("16")' title="Valdejalón" onMouseOver="self.status='Valdejalón'; return true">
                    <area shape="poly" alt="Zaragoza" coords="98,183,117,120,127,123,138,127,148,131,145,141,142,152,147,160,154,167,161,174,157,183,155,194,148,200,138,196,130,191,121,195,110,192,107,182,110,172,100,168,97,158,109,157,105,148,106,136,114,131,118,122" href='javascript:openDialog("17")' title="Zaragoza" onMouseOver="self.status='Zaragoza'; return true">
                    <area shape="poly" alt="Ribera Baja del Ebro" coords="168,205,156,204,156,189,160,180,167,174,174,180,178,171,176,182,187,185,193,192,197,201,199,212,192,218,181,216,171,213,165,205" href='javascript:openDialog("18")' title="Ribera Baja del Ebro" onMouseOver="self.status='Ribera Baja del Ebro'; return true">
                    <area shape="poly" alt="Bajo Aragón-Caspe / Baix Aragó-Casp" coords="194,211,198,202,211,203,223,204,226,214,236,211,248,208,245,218,241,227,233,232,227,240,216,242,212,233,203,229,194,225,192,213" href='javascript:openDialog("19")' title="Bajo Arag n-Caspe / Baix Arag -Casp" onMouseOver="self.status='Bajo Arag n-Caspe / Baix Arag -Casp'; return true">
                    <area shape="poly" alt="Comunidad de Calatayud" coords="70,228,58,227,54,236,45,240,32,240,24,235,13,233,2,229,1,216,3,205,6,195,13,201,21,196,18,185,20,174,30,177,37,183,47,186,51,195,57,188,63,181,70,187,62,192,70,200,80,203,83,213,76,219,70,226" href='javascript:openDialog("20")' title="Comunidad de Calatayud" onMouseOver="self.status='Comunidad de Calatayud'; return true">
                    <area shape="poly" alt="Campo de Cariñena" coords="117,209,111,218,101,221,89,220,83,213,85,202,86,189,95,185,105,189,112,197,118,204" href='javascript:openDialog("21")' title="Campo de Cariñena" onMouseOver="self.status='Campo de Cari ena'; return true">
                    <area shape="poly" alt="Campo de Belchite" coords="167,203,135,196,145,199,155,203,160,212,151,217,150,229,143,235,133,238,126,232,121,240,117,231,115,219,120,211,118,200,122,191,132,194" href='javascript:openDialog("22")' title="Campo de Belchite" onMouseOver="self.status='Campo de Belchite'; return true">
                    <area shape="poly" alt="Bajo Martín" coords="156,204,166,208,173,215,185,220,190,228,184,235,179,243,170,239,162,244,152,239,150,228,151,215,160,219,156,210" href='javascript:openDialog("23")' title="Bajo Martín" onMouseOver="self.status='Bajo Martín'; return true">
                    <area shape="poly" alt="Campo de Daroca" coords="117,225,115,236,106,230,98,236,88,239,81,245,72,249,69,259,58,261,50,255,43,249,47,239,52,231,65,231,71,224,78,218,89,220,96,226,102,219,115,217" href='javascript:openDialog("24")' title="Campo de Daroca" onMouseOver="self.status='Campo de Daroca'; return true">
                    <area shape="poly" alt="Jiloca" coords="80,241,89,237,100,235,111,237,119,242,113,249,112,261,110,272,108,283,97,285,92,293,85,299,72,301,64,296,61,286,60,274,54,266,62,260,71,255,75,246" href='javascript:openDialog("25")' title="Jiloca" onMouseOver="self.status='Jiloca'; return true">
                    <area shape="poly" alt="Cuencas Mineras" coords="117,248,123,239,135,237,146,239,140,246,146,253,151,261,148,271,155,277,154,289,152,300,143,296,132,294,125,287,120,279,116,270,112,261,110,249" href='javascript:openDialog("26")' title="Cuencas Mineras" onMouseOver="self.status='Cuencas Mineras'; return true">
                    <area shape="poly" alt="Andorra-Sierra de Arcos" coords="159,269,165,277,168,287,155,286,154,274,149,266,148,254,140,249,144,240,157,240,166,244,179,245,176,255,166,258,160,265" href='javascript:openDialog("27")' title="Andorra-Sierra de Arcos" onMouseOver="self.status='Andorra-Sierra de Arcos'; return true">
                    <area shape="poly" alt="Bajo Aragón" coords="181,268,172,272,162,269,166,260,176,257,179,247,183,237,190,230,203,229,212,233,216,242,212,253,211,265,207,274,196,277,191,285,187,275,181,268" href='javascript:openDialog("28")' title="Bajo Aragón" onMouseOver="self.status='Bajo Arag n'; return true">
                    <area shape="poly" alt="Teruel" coords="109,273,119,270,122,280,127,290,134,296,144,303,141,313,142,325,133,329,125,334,118,340,115,350,110,359,107,370,97,367,90,360,82,365,74,360,81,354,89,349,89,336,84,326,80,317,77,307,79,296,90,298,93,288,102,283,107,274" href='javascript:openDialog("29")' title="Teruel" onMouseOver="self.status='Teruel'; return true">
                    <area shape="poly" alt="Maestrazgo" coords="168,287,165,277,173,271,182,275,188,282,185,293,178,299,186,304,188,315,182,322,172,318,165,324,157,319,145,320,138,313,143,304,151,309,153,297,155,286,164,290" href='javascript:openDialog("30")' title="Maestrazgo" onMouseOver="self.status='Maestrazgo'; return true">
                    <area shape="poly" alt="Albarracín" coords="70,304,79,309,80,322,87,328,90,338,93,348,84,352,75,356,62,356,54,348,45,344,42,334,43,322,48,314,54,307,61,301" href='javascript:openDialog("31")' title="Albarracín" onMouseOver="self.status='Albarrac n'; return true">
                    <area shape="poly" alt="Gúdar-Javalambre" coords="112,358,116,349,119,339,126,333,135,328,140,320,151,323,162,325,171,318,181,322,188,329,182,336,178,345,169,349,161,354,157,364,151,373,141,377,134,384,137,394,130,400,128,389,120,384,108,385,111,374,108,364" href='javascript:openDialog("32")' title="G dar-Javalambre" onMouseOver="self.status='G dar-Javalambre'; return true">
                    <area shape="poly" alt="Matarraña" coords="234,238,241,245,240,257,241,270,236,278,229,284,219,288,210,284,201,280,208,274,211,264,213,251,217,242,227,239" href='javascript:openDialog("33")' title="Matarraña" onMouseOver="self.status='Matarraña'; return true">
                    </map>
		</div>
		<!------------------------------->
		<div id="mw-navigation">
			<h2>Menú de navegación</h2>
			<div id="mw-head">

				<div id="left-navigation">
					<div id="p-namespaces" role="navigation" class="vectorTabs" aria-labelledby="p-namespaces-label">
	<h3 id="p-namespaces-label">Espacios de nombres</h3>
	<ul>
					<li  id="ca-nstab-main" class="selected"><span><a href="/aragopedia/index.php/P%C3%A1gina_principal"  title="Ver el artículo [c]" accesskey="c">Página</a></span></li>
					<li  id="ca-talk" class="new"><span><a href="/aragopedia/index.php?title=Discusi%C3%B3n:P%C3%A1gina_principal&amp;action=edit&amp;redlink=1"  title="Discusión acerca del artículo [t]" accesskey="t">Discusión</a></span></li>
			</ul>
</div>
<div id="p-variants" role="navigation" class="vectorMenu emptyPortlet" aria-labelledby="p-variants-label">
	<h3 id="mw-vector-current-variant">
		</h3>
	<h3 id="p-variants-label"><span>Variantes</span><a href="#"></a></h3>
	<div class="menu">
		<ul>
					</ul>
	</div>
</div>
				</div>
				<!--div id="right-navigation">
					<div id="p-views" role="navigation" class="vectorTabs" aria-labelledby="p-views-label">
	<h3 id="p-views-label">Vistas</h3>
	<ul>
					<li id="ca-view" class="selected"><span><a href="/index.php/P%C3%A1gina_principal" >Leer</a></span></li>
					<li id="ca-edit"><span><a href="/index.php?title=P%C3%A1gina_principal&amp;action=edit"  title="Puedes editar esta página. Utiliza el botón de previsualización antes de guardar [e]" accesskey="e">Editar</a></span></li>
					<li id="ca-history" class="collapsible"><span><a href="/index.php?title=P%C3%A1gina_principal&amp;action=history"  title="Versiones anteriores de esta página y sus autores [h]" accesskey="h">Ver historial</a></span></li>
					<li id="ca-watch" class="icon"><span><a href="/index.php?title=P%C3%A1gina_principal&amp;action=watch&amp;token=8c9a51679e5ce51b7545555d896c1e20%2B%5C"  title="Añadir esta página a tu lista de seguimiento [w]" accesskey="w">Vigilar</a></span></li>
			</ul>
</div>
<div id="p-cactions" role="navigation" class="vectorMenu" aria-labelledby="p-cactions-label">
	<h3 id="p-cactions-label"><span>Acciones</span><a href="#"></a></h3>
	<div class="menu">
		<ul>
							<li id="ca-delete"><a href="/index.php?title=P%C3%A1gina_principal&amp;action=delete"  title="Borrar esta página [d]" accesskey="d">Borrar</a></li>
							<li id="ca-move"><a href="/index.php/Especial:MoverP%C3%A1gina/P%C3%A1gina_principal"  title="Trasladar esta página [m]" accesskey="m">Trasladar</a></li>
							<li id="ca-protect"><a href="/index.php?title=P%C3%A1gina_principal&amp;action=protect"  title="Proteger esta página [=]" accesskey="=">Proteger</a></li>
					</ul>
	</div>
</div--><div id="portada">PORTADA</div>
<div id="p-search" role="search">
	<h3><label for="searchInput">Buscar</label></h3>
	<form action="/aragopedia/index.php" id="searchform">
				<div id="simpleSearch">
						<input name="search" placeholder="Buscar" title="Buscar en Aragopedia [f]" accesskey="f" id="searchInput" />						<button type="submit" name="button" title="Busca este texto en las páginas" id="searchButton"><img src="/aragopedia/skins/vector/images/search-ltr.png?303" alt="Buscar" width="12" height="13" /></button>								<input type='hidden' name="title" value="Especial:Buscar"/>
		</div>
	</form>
</div>
				</div>
			</div>
			<div id="mw-panel">
					<div id="p-logo" role="banner"><a style="background-image: url(/aragopedia/Aragopedia/images/01-Simbolo-Aragopedia.png);" href="/aragopedia/Aragopedia/aragopedia.php"  title="Visitar la portada"></a></div>
				<div class="portal" role="navigation" id='p-navigation' aria-labelledby='p-navigation-label'>
	<!--h3 id='p-navigation-label'>Navegación</h3-->
	<div class="body">
		<ul>
			<li id="n-Portada"><a href="/Aragopedia/aragopedia.html">Portada</a></li>
			<li id="n-recentchanges"><a href="/aragopedia/index.php/Especial:CambiosRecientes" title="Lista de cambios recientes en el wiki [r]" accesskey="r">Cambios recientes</a></li>
			<li id="n-randompage"><a href="/aragopedia/index.php/Especial:Aleatoria" title="Cargar una página al azar [x]" accesskey="x">Página aleatoria</a></li>
		</ul>
	</div>
</div>
<!--div class="portal" role="navigation" id='p-tb' aria-labelledby='p-tb-label'>
	<h3 id='p-tb-label'>Herramientas</h3>
	<div class="body">
		<ul>
			<li id="t-whatlinkshere"><a href="/index.php/Especial:LoQueEnlazaAqu%C3%AD/P%C3%A1gina_principal" title="Lista de todas las páginas del wiki que enlazan aquí [j]" accesskey="j">Lo que enlaza aquí</a></li>
			<li id="t-recentchangeslinked"><a href="/index.php/Especial:CambiosEnEnlazadas/P%C3%A1gina_principal" title="Cambios recientes en las páginas que enlazan con ésta [k]" accesskey="k">Cambios relacionados</a></li>
			<li id="t-upload"><a href="/index.php/Especial:SubirArchivo" title="Subir imágenes o archivos multimedia [u]" accesskey="u">Subir un archivo</a></li>
			<li id="t-specialpages"><a href="/index.php/Especial:P%C3%A1ginasEspeciales" title="Lista de todas las páginas especiales [q]" accesskey="q">Páginas especiales</a></li>
			<li id="t-permalink"><a href="/index.php?title=P%C3%A1gina_principal&amp;oldid=1" title="Enlace permanente a esta versión de la página">Enlace permanente</a></li>
			<li id="t-info"><a href="/index.php?title=P%C3%A1gina_principal&amp;action=info">Información de la página</a></li>
<li id="t-pdf"><a href="/index.php?title=Especial:PdfPrint&amp;page=P%C3%A1gina_principal">Imprimir en formato PDF</a></li>		</ul>
	</div>
</div-->
<!--div class="portal" role="navigation" id='p-coll-print_export' aria-labelledby='p-coll-print_export-label'>
	<h3 id='p-coll-print_export-label'>Imprimir/exportar</h3>
	<div class="body">
		<ul>
			<li id="coll-create_a_book"><a href="/index.php?title=Especial:Libro&amp;bookcmd=book_creator&amp;referer=P%C3%A1gina+principal">Crear un libro</a></li>
			<li id="coll-download-as-rl"><a href="/index.php?title=Especial:Libro&amp;bookcmd=render_article&amp;arttitle=P%C3%A1gina+principal&amp;oldid=1&amp;writer=rl">Descargar como PDF</a></li>
			<li id="t-print"><a href="/index.php?title=P%C3%A1gina_principal&amp;printable=yes" title="Versión imprimible de esta página [p]" accesskey="p">Versión para imprimir</a></li>
		</ul>
	</div>
</div-->
			</div>
		</div>
		<div id="footer" role="contentinfo">
							<!--ul id="footer-info">
											<li id="footer-info-lastmod"> Esta página fue modificada por última vez el 26 dic 2013, a las 19:22.</li>
											<li id="footer-info-viewcount">Esta página ha sido visitada 32 veces.</li>
									</ul-->
							<ul id="footer-places">
											<li id="footer-places-privacy"><a href="/aragopedia/index.php/Aragopedia:Pol%C3%ADtica_de_protecci%C3%B3n_de_datos" title="Aragopedia:Política de protección de datos">Política de protección de datos</a></li>
											<li id="footer-places-about"><a href="/aragopedia/index.php/Aragopedia:Acerca_de" title="Aragopedia:Acerca de">Acerca de Aragopedia</a></li>
											<li id="footer-places-disclaimer"><a href="/aragopedia/index.php/Aragopedia:Limitaci%C3%B3n_general_de_responsabilidad" title="Aragopedia:Limitación general de responsabilidad">Aviso legal</a></li>
									</ul>
										<ul id="footer-icons" class="noprint">
					<li id="footer-poweredbyico">
						<a href="//www.mediawiki.org/"><img src="/aragopedia/skins/common/images/poweredby_mediawiki_88x31.png" alt="Powered by MediaWiki" width="88" height="31" /></a>
					</li>
				</ul>
						<div style="clear:both"></div>
		</div>
		</div>
		<footer>
<div id="pie">
<ul id="pieUL"><li id="pieULLI">
<div class="pieInterior">
	<div class="pieZonaUno">
		<a title="Home Arag&oacute;n Open Data" href="/"><img src="/public/i/footer/textoAOD.png" alt="Arag&oacute;n Open Data" id="pieZonaUnoRoot"/> </a>
<img alt="Flecha" src="/public/i/footer/flechaFooter.png"> 
<a class="footerLink pieEnlace" title="Home Arag&oacute;n Open Data" href="/"> HOME</a>
	</div>
	<div class="clear"></div>
	<div class="pieZonaDos">
		<ul>
		<li>
		<table>
			<tr><td class="titulo"><img height="9"  src="/public/i/footer/textoAvisoLegal.png" alt="Aviso legal"/></td></tr>
			<tr><td><a href="/terminos" title="T&eacute;rminos de uso"><img src="/public/i/footer/cajaTerminosUso.jpg" alt="T&eacute;rminos de uso"/></a></td></tr>
			<tr><td><img src="/public/i/footer/cajaCCconTexto.jpg" alt="Licencia Creative Commons" height="96" width="215"/></td></tr>
			<tr><td><img src="/public/i/footer/banderaUEconTexto.png" alt="Uni&oacute;n Europea - Fondo Europeo de Desarrollo Regional" class="recuadroPie" /></td></tr>
		</table>
		</li>
<li class="clear visible-xs tamCero"></li>
		<li>
		<table>
			<tr><td class="titulo"><img height="9" src="/public/i/footer/textoPoweredBy.png" alt="Powered by"/></td></tr>
			<tr><td><a href="http://ckan.org/" title="CKAN"><img src="/public/i/footer/cajaLogoCKAN.jpg" alt="CKAN"/></a></td></tr>
			<tr><td><a href="http://www.wolfcms.org/" title="Wolf CMS"><img src="/public/i/footer/cajaLogoWolfCMS.jpg" alt="Wolf CMS"/></a></td></tr>
			<tr><td><a href="http://www.mediawiki.org/" title="MediaWiki"><img src="/public/i/footer/cajaLogoMediaWiki.jpg" alt="MediaWiki"/></a></td></tr>
			<tr><td><a href="http://virtuoso.openlinksw.com/" title="Virtuoso"><img src="/public/i/footer/cajaLogoVirtuoso.jpg" alt="Virtuoso"/></a></td></tr>
		</table>
		</li>
<li class="clear visible-xs tamCero"></li>
<li class="clear visible-ms tamCero"></li>
		<li>
		<table>
			<tr><td class="titulo"><img src="/public/i/footer/textoAOD.png" alt="Arag&oacute;n Open Data"/></td></tr>
			<tr><td>
<div class="pieZonaEnlaces">
<ul class="styleDiscUL">
<li><a href="/catalogo" title="Datos" class="pieEnlace">DATOS</a></li>
<li><a href="/aragopedia" title="AragoPedia" class="pieEnlace">ARAGOPEDIA</a></li>
<li><a href="/portal/social-data" title="Social Data" class="pieEnlace">SOCIAL DATA</a></li>
<li><a href="/portal/colabora" title="Colabora" class="pieEnlace">COLABORA</a></li>
<li><a href="/portal/aplicaciones" title="Aplicaciones" class="pieEnlace">APLICACIONES</a></li>
<li><a href="/portal/open-data" title="Informaci&oacute;n Open Data" class="pieEnlace">INFO OPEN DATA</a></li>
</ul>
</div>
</td></tr>
		</table>
		</li>
<li class="clear visible-xs tamCero"></li>
		<li>
		<table class="last">
			<tr><td class="titulo"><img height="9"  src="/public/i/footer/textoRedesSociales.png" alt="Redes Sociales"/></td></tr>
			<tr><td><a href="http://www.facebook.com/observatorio.aragones" title="Facebook"><img src="/public/i/footer/cajaLogoFacebook.jpg" alt="Facebook"/></a></td></tr>
			<tr><td><a href="http://www.twitter.com/oasi" title="Twitter"><img src="/public/i/footer/cajaLogoTwitter.jpg" alt="Twitter"/></a></td></tr>
			<tr><td><a href="http://www.youtube.com/watch?v=8d409yteTJM&list=PLQ3k0vA0UZvhBVOz_mCq-9Wyn3VCB6QCe" title="YouTube"><img src="/public/i/footer/cajaLogoYouTube.jpg" alt="YouTube"/></a></td></tr>
			<tr><td><a href="mailto:opendata@aragon.es" title="Contacto AOD"><img src="/public/i/footer/cajaCorreoAOD.jpg" alt="Contacto AOD"/></a></td></tr>
		</table>
		</li>
		</ul>
	</div>
	<div class="clear"></div>
	<div class="pieZonaTres">
		<ul>
			<li class="izquierda textoPie">
				<p>GOBIERNO DE ARAG&Oacute;N</p>
				<p>EDIFICIO PIGNATELLI</p>
				<address>PASEO MAR&iacute;A AGUST&iacute;N, 36 50071 ZARAGOZA TEL. 976 714 000</address>
			</li>
			<li class="derecha">
				<a target="_blank" href="http://www.aragon.es" title="Gobierno de Arag&oacute;n"><img width="132" height="28" alt="Gobierno de Arag&oacute;n" src="/public/i/footer/logo_aragob_pie.png"></a>
			</li>
		</ul>
	</div>
<div class="clear"></div>
</div>
</li></ul>
</div>
</footer>

<script>
jQ=jQuery.noConflict( true );
if(window.mw){
mw.loader.load(["mediawiki.page.patrol.ajax","mediawiki.action.view.postEdit","mediawiki.user","mediawiki.hidpi","mediawiki.page.ready","mediawiki.searchSuggest","mediawiki.page.watch.ajax","skins.vector.collapsibleNav"],null,true);
}</script>

<script>

function init(){

jQ(function(){
    jQ(window).scroll(function() {
        $html = jQ("html");
        if($html.hasClass('webkit')){
            var scrollTop = jQ("body")[0].scrollTop;
        }else if($html.hasClass('firefox')){
            var scrollTop = jQ("html")[0].scrollTop;
        }else{
            var scrollTop = jQ("html")[0].scrollTop;
        }

        if( scrollTop < 160 ){
            jQ('body').removeClass('mini');
        }else{
            jQ('body').addClass('mini');
        }
    });
    jQ("body").trigger('scroll');
});
jQ( "#selection-dialog" ).dialog({
modal: true,
autoOpen: false,
maxHeight:800,
width:280,
 close: function( event, ui ) {
 jQ( "#selection-dialog div" ).remove();
 }
});


//});
//$(function() {
jQ( "#busqueda_comarcas" ).autocomplete({
		source: function(request, response) {
			var results = jQ.ui.autocomplete.filter(comarcas, request.term);
			response(results.slice(0, 20));
		},
		 select: function( event, ui ) {
		 jQ("#busqueda_comarcas").css("background","none");
			location.href = "/aragopedia/index.php/"+ui.item.value;
		 }
	});//});
	//$(function() {
	jQ( "#busqueda_municipios" ).autocomplete({
		source: function(request, response) {
			var results = jQ.ui.autocomplete.filter(municipios, request.term);
			response(results.slice(0, 20));
		},
		 select: function( event, ui ) {
		  jQ("#busqueda_municipios").css("background","none");
			location.href = "/aragopedia/index.php/"+ui.item.value;
		 }
	});//});
document.getElementById("busqueda_comarcas" ).value="";
document.getElementById("busqueda_municipios" ).value="";
}

function openDialog(comarca){
	var lista = municipios_x_comarca[comarca];
	if (lista.length>0){
	//$(function() {
		jQ( "#selection-dialog" ).append('<div>Comarca:<ul><li><a href="/index.php/'+lista[0]+'">'+lista[0]+"</a></li></ul></div>");//});
		var munis = "<div>Municipios:<ul>";
		
		for (var i=1; i<lista.length; i++){
			munis = munis + '<li><a href="/aragopedia/index.php/'+lista[i]+'">'+lista[i]+"</a></li>";
		}
		//$(function() {
		jQ( "#selection-dialog" ).append(munis+"</ul></div>");//});
	}
	else{
	//$(function() {
		jQ( "#selection-dialog" ).append("Error: no se encontraron resultados");//});
	}
	//$(function() {
	jQ( "#selection-dialog" ).dialog( "open" );//});
}

</script>
<!-- Served in 0.404 secs. -->
	</body>
</html>
