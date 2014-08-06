
<img src="http://presupuesto.aragon.es/static/assets/logo-gobierno-aragon.png" height="28px" /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>![Logo Aragón Open Data](logoAragonOpenData.png)

##AragoPedia

Este repositorio contiene el código de la aplicación [AragoPedia][1], desarrollada como parte del proyecto [Aragón Open Data][2].

### Introducción
La AragoPedia ofrece algunos de los datos recopilados por la iniciativa Aragón Open Data, organizados territorialmente.

En AragoPedia se presentan los datos organizados por municipios, comarcas, provincias y para el conjunto de Aragón en un formato accesible para todos los públicos. AragoPedia, permite además la incorporación de nuevos contenidos, por parte de usuarios autorizados, a través de su interfaz gráfica, de manera similar a la [Wikipedia][4]. 

Ésta aplicación se basa en la versión 1.21 del software de código abierto [MediaWiki][3]. Entre los principales argumentos que han motivado la utilización de MediaWiki destacan: 
* Está pensado para la creación de Webs colaborativas.
* Es fácilmente personalizable.
* Permite desacoplar los datos del formato de presentación, mediante el uso de plantillas.
* Es el software utilizado por la Wikipedia.
* Proporciona un API de acceso a sus contenidos.
* Tiene posibilidad de ser ampliado mediante extensiones.
* Ofrece amplia documentación para su instalación y desarrollo.
* Dispone de una activa comunidad de desarrolladores. 
* Su coste de licencias es cero.



[1]: http://opendata.aragon.es/aragopedia
[2]: http://opendata.aragon.es/
[3]: https://www.mediawiki.org
[4]: http://es.wikipedia.org


### Instalando en local

Para instalar la aplicación en local es necesario seguir los siguientes pasos:

* Instalar MediaWiki en local. Seguir los pasos de la guía oficial.

* Instalar la librería gd de php para poder incluir gráficos.
		
		apt-get install php5-gd

* Incluir los ficheros existentes en este repositorio, en la carpeta mediawiki. Incluir los nuevos y reemplazar los existentes. Mantener los permisos de los ficheros iguales que los originales.

* Editar LocalSettings.php, y sobreescribir/añadir los parámetros incluidos en el archivo LocalSettings.php.upd

* Dar permiso de escritura en las siguientes carpetas (incluidos los subdirectorios de images):
		
		extensions/Widgets/compiled_templates
		images

* Arrancar el servidor web (se muestra apache)

        $ sudo service apache restart
		
* Cargar los artículos, plantillas y páginas de configuración, almacenados en archivos xml y disponibles en http://opendata.aragon.es/aragopedia/dumps.

        php maintenance/importDump.php < <<nombre del dump>>.xml
		
* Descomprimir el archivo mapas.zip (disponible en http://opendata.aragon.es/aragopedia/dumps) e importar las imágenes en AragoPedia.

		php maintenance/importImages.php <<ruta de la carpeta con las imagenes>> png

* Dependiendo de las versiones, es necesario modificar el fichero extensions/FormatNum-master/FormatNum.hooks.php por el fichero FormatNum.hooks.php.upd 

Para más información, consulta la [documentación técnica de MediaWiki](http://www.mediawiki.org/wiki/Manual:Installing_MediaWiki).

###Licencia

El Gobierno de Aragón a través de Aragón Open Data pone a disposición de usuarios, desarrolladores y comunidad en general la aplicación denominada “AragoPedia” bajo la Licencia Pública de la Unión Europea “European Union Public Licence – EUPL”. Esta licencia, desarrollada en el seno de la Unión Europea, nació con la intención de ser la licencia bajo la cuál se liberasen los programas y aplicaciones desarrolladas por la Administración Pública y con la característica específica de ser compatible con otras licencias denominadas libres, como la GNU General Public License (GNU/GPL). Estas características dotan, a las aplicaciones así liberadas, de mayor seguridad jurídica y fomentan la interoperabilidad de los servicios de la Administración Electrónica.

Que el código de esta aplicación esté publicado bajo la licencia abierta [EUPL 1.1][9999] (European Union Public License 1.1), significa que puedes reutilizarlo, modificarlo y adaptarlo a tus necesidades de forma totalmente libre. Si utilizas el código, a modo de reconocimiento a Aragón Open Data incluye en tu proyecto nuestro logo en el cabecero o en el pie de página, te lo agradeceremos!

![Logo Aragón Open Data](logoAragonOpenData.png)

[9999]: https://joinup.ec.europa.eu/software/page/eupl
