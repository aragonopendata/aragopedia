<?php
/**
 * Vector - Modern version of MonoBook with fresh look and many usability
 * improvements.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * http://www.gnu.org/copyleft/gpl.html
 *
 * @todo document
 * @file
 * @ingroup Skins
 */

if ( !defined( 'MEDIAWIKI' ) ) {
	die( -1 );
}

/**
 * SkinTemplate class for Vector skin
 * @ingroup Skins
 */
class SkinVector extends SkinTemplate {

	protected static $bodyClasses = array( 'vector-animateLayout' );

	var $skinname = 'vector', $stylename = 'vector',
		$template = 'VectorTemplate', $useHeadElement = true;

	/**
	 * Initializes output page and sets up skin-specific parameters
	 * @param $out OutputPage object to initialize
	 */
	public function initPage( OutputPage $out ) {
		global $wgLocalStylePath;

	
	parent::initPage( $out );

		// Append CSS which includes IE only behavior fixes for hover support -
		// this is better than including this in a CSS file since it doesn't
		// wait for the CSS file to load before fetching the HTC file.
		$min = $this->getRequest()->getFuzzyBool( 'debug' ) ? '' : '.min';
		$out->addHeadItem( 'csshover',
			'<!--[if lt IE 7]><style type="text/css">body{behavior:url("' .
				htmlspecialchars( $wgLocalStylePath ) .
				"/{$this->stylename}/csshover{$min}.htc\")}</style><![endif]-->"
		);

		$out->addModules( array( 'skins.vector.js', 'skins.vector.collapsibleNav' ) );
	}

	/**
	 * Loads skin and user CSS files.
	 * @param $out OutputPage object
	 */
	function setupSkinUserCss( OutputPage $out ) {

parent::setupSkinUserCss( $out );
		$styles = array( 'skins.vector' );
		wfRunHooks( 'SkinVectorStyleModules', array( &$this, &$styles ) );
		$out->addModuleStyles( $styles );
	}

	/**
	 * Adds classes to the body element.
	 *
	 * @param $out OutputPage object
	 * @param &$bodyAttrs Array of attributes that will be set on the body element
	 */
	function addToBodyAttributes( $out, &$bodyAttrs ) {
		if ( isset( $bodyAttrs['class'] ) && strlen( $bodyAttrs['class'] ) > 0 ) {
			$bodyAttrs['class'] .= ' ' . implode( ' ', static::$bodyClasses );
		} else {
			$bodyAttrs['class'] = implode( ' ', static::$bodyClasses );
		}
	}
}

/**
 * QuickTemplate class for Vector skin
 * @ingroup Skins
 */
class VectorTemplate extends BaseTemplate {

	/* Functions */

	/**
	 * Outputs the entire contents of the (X)HTML page
	 */
	public function execute() {
		global $wgVectorUseIconWatch;

		// Build additional attributes for navigation urls
		$nav = $this->data['content_navigation'];

		if ( $wgVectorUseIconWatch ) {
			$mode = $this->getSkin()->getUser()->isWatched( $this->getSkin()->getRelevantTitle() ) ? 'unwatch' : 'watch';
			if ( isset( $nav['actions'][$mode] ) ) {
				$nav['views'][$mode] = $nav['actions'][$mode];
				$nav['views'][$mode]['class'] = rtrim( 'icon ' . $nav['views'][$mode]['class'], ' ' );
				$nav['views'][$mode]['primary'] = true;
				unset( $nav['actions'][$mode] );
			}
		}

		$xmlID = '';
		foreach ( $nav as $section => $links ) {
			foreach ( $links as $key => $link ) {
				if ( $section == 'views' && !( isset( $link['primary'] ) && $link['primary'] ) ) {
					$link['class'] = rtrim( 'collapsible ' . $link['class'], ' ' );
				}

				$xmlID = isset( $link['id'] ) ? $link['id'] : 'ca-' . $xmlID;
				$nav[$section][$key]['attributes'] =
					' id="' . Sanitizer::escapeId( $xmlID ) . '"';
				if ( $link['class'] ) {
					$nav[$section][$key]['attributes'] .=
						' class="' . htmlspecialchars( $link['class'] ) . '"';
					unset( $nav[$section][$key]['class'] );
				}
				if ( isset( $link['tooltiponly'] ) && $link['tooltiponly'] ) {
					$nav[$section][$key]['key'] =
						Linker::tooltip( $xmlID );
				} else {
					$nav[$section][$key]['key'] =
						Xml::expandAttributes( Linker::tooltipAndAccesskeyAttribs( $xmlID ) );
				}
			}
		}
		$this->data['namespace_urls'] = $nav['namespaces'];
		$this->data['view_urls'] = $nav['views'];
		$this->data['action_urls'] = $nav['actions'];
		$this->data['variant_urls'] = $nav['variants'];

		// Reverse horizontally rendered navigation elements
		if ( $this->data['rtl'] ) {
			$this->data['view_urls'] =
				array_reverse( $this->data['view_urls'] );
			$this->data['namespace_urls'] =
				array_reverse( $this->data['namespace_urls'] );
			$this->data['personal_urls'] =
				array_reverse( $this->data['personal_urls'] );
		}
		// Output HTML Page
		$this->html( 'headelement' );
?>
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
	<ul>
		<li class="i_i bannerLogo">
			<a href="/" title="ARAG&Oacute;N OPEN DATA"><img class="" src="/public/i/logo_aod.png" alt="ARAG&Oacute;N OPEN DATA" /></a>
		</li>
<li class="clear visible-xs tamCero"></li>
		<li class="bannerBuscador">
			<form id="cajaBusqBanner" action="/catalogo" method="get">
				<label for="cajaDeBusqInput" class="oculto">Buscar conjuntos de datos</label>
				<button class="btn-search d_d" type="submit">Buscar</button>
				<input id="cajaDeBusqInput" type="text" name="q" value="" class="search anchoSearchBanner d_d"  />
				<!--<input id="cajaBusqInput" type="text" name="q" value="" class="search anchoSearchBanner d_d" placeholder="ARAG&Oacute;N OPEN DATA BUSCA DATOS" />-->
			</form>
		</li>
	</ul>
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
		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="content" class="mw-body" role="main">
			<a id="top"></a>
			<div id="mw-js-message" style="display:none;"<?php $this->html( 'userlangattributes' ) ?>></div>
			<?php if ( $this->data['sitenotice'] ) { ?>
			<div id="siteNotice"><?php $this->html( 'sitenotice' ) ?></div>
			<?php } ?>
			<h1 id="firstHeading" class="firstHeading" lang="<?php
				$this->data['pageLanguage'] = $this->getSkin()->getTitle()->getPageViewLanguage()->getHtmlCode();
				$this->text( 'pageLanguage' );
			?>"><span dir="auto"><?php $this->html( 'title' ) ?></span></h1>
			<div id="bodyContent">
				<?php if ( $this->data['isarticle'] ) { ?>
				<div id="siteSub"><?php $this->msg( 'tagline' ) ?></div>
				<?php } ?>
				<div id="contentSub"<?php $this->html( 'userlangattributes' ) ?>><?php $this->html( 'subtitle' ) ?></div>
				<?php if ( $this->data['undelete'] ) { ?>
				<div id="contentSub2"><?php $this->html( 'undelete' ) ?></div>
				<?php } ?>
				<?php if ( $this->data['newtalk'] ) { ?>
				<div class="usermessage"><?php $this->html( 'newtalk' ) ?></div>
				<?php } ?>
				<div id="jump-to-nav" class="mw-jump">
					<?php $this->msg( 'jumpto' ) ?>
					<a href="#mw-navigation"><?php $this->msg( 'jumptonavigation' ) ?></a><?php $this->msg( 'comma-separator' ) ?>
					<a href="#p-search"><?php $this->msg( 'jumptosearch' ) ?></a>
				</div>
				<?php $this->html( 'bodycontent' ) ?>
				<?php if ( $this->data['printfooter'] ) { ?>
				<div class="printfooter">
				<?php $this->html( 'printfooter' ); ?>
				</div>
				<?php } ?>
				<?php if ( $this->data['catlinks'] ) { ?>
				<?php $this->html( 'catlinks' ); ?>
				<?php } ?>
				<?php if ( $this->data['dataAfterContent'] ) { ?>
				<?php $this->html( 'dataAfterContent' ); ?>
				<?php } ?>
				<div class="visualClear"></div>
				<?php $this->html( 'debughtml' ); ?>
			</div>
		</div>
		<div id="mw-navigation">
			<h2><?php $this->msg( 'navigation-heading' ) ?></h2>
			<div id="mw-head">
				<?php $this->renderNavigation( 'PERSONAL' ); ?>
				<div id="left-navigation">
					<?php $this->renderNavigation( array( 'NAMESPACES', 'VARIANTS' ) ); ?>
				</div>
				<div id="right-navigation">
					<?php $this->renderNavigation( array( 'VIEWS', 'ACTIONS', 'SEARCH' ) ); ?>
				</div>
			</div>
			<div id="mw-panel">
					<div id="p-logo" role="banner"><a style="background-image: url(<?php $this->text( 'logopath' ) ?>);" href="<?php echo htmlspecialchars( $this->data['nav_urls']['mainpage']['href'] ) ?>" <?php echo Xml::expandAttributes( Linker::tooltipAndAccesskeyAttribs( 'p-logo' ) ) ?>></a></div>
				<?php $this->renderPortals( $this->data['sidebar'] ); ?>
			</div>
		</div>
		<div id="footer" role="contentinfo"<?php $this->html( 'userlangattributes' ) ?>>
			<?php foreach ( $this->getFooterLinks() as $category => $links ) { ?>
				<ul id="footer-<?php echo $category ?>">
					<?php foreach ( $links as $link ) { ?>
						<li id="footer-<?php echo $category ?>-<?php echo $link ?>"><?php $this->html( $link ) ?></li>
					<?php } ?>
				</ul>
			<?php } ?>
			<?php $footericons = $this->getFooterIcons( "icononly" );
			if ( count( $footericons ) > 0 ) { ?>
				<ul id="footer-icons" class="noprint">
<?php			foreach ( $footericons as $blockName => $footerIcons ) { ?>
					<li id="footer-<?php echo htmlspecialchars( $blockName ); ?>ico">
<?php				foreach ( $footerIcons as $icon ) { ?>
						<?php echo $this->getSkin()->makeFooterIcon( $icon ); ?>

<?php				} ?>
					</li>
<?php			} ?>
				</ul>
			<?php } ?>
			<div style="clear:both"></div>
		</div>
		<?php $this->printTrail(); ?>
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


$(document).ready(function() {

      //al inicio, quitarlo si tiene valor porque lo autorrellene el navegador de otras visitas
  if (($("#cajaDeBusqInput").val() != "")) {
    $("#cajaDeBusqInput").css("background", "#FFFFFF");
  }

  $("#cajaDeBusqInput").on('blur', function() {
    if (($("#cajaDeBusqInput").val() != "")) {
      $("#cajaDeBusqInput").css("background", "#FFFFFF");
    }
  });

});
$(function(){
    $(window).scroll(function() {
        $html = $("html");
        if($html.hasClass('webkit')){
            var scrollTop = $("body")[0].scrollTop;
        }else if($html.hasClass('firefox')){
            var scrollTop = $("html")[0].scrollTop;
        }else{
            var scrollTop = $("html")[0].scrollTop;
        }

        if( scrollTop < 160 ){
            $('body').removeClass('mini');
        }else{
            $('body').addClass('mini');
        }
    });
    $("body").trigger('scroll');
});
</script>
	</body>
</html>
<?php
	}

	/**
	 * Render a series of portals
	 *
	 * @param $portals array
	 */
	protected function renderPortals( $portals ) {
		// Force the rendering of the following portals
		if ( !isset( $portals['SEARCH'] ) ) {
			$portals['SEARCH'] = true;
		}
		if ( !isset( $portals['TOOLBOX'] ) ) {
			$portals['TOOLBOX'] = true;
		}
		if ( !isset( $portals['LANGUAGES'] ) ) {
			$portals['LANGUAGES'] = true;
		}
		// Render portals
		foreach ( $portals as $name => $content ) {
			if ( $content === false ) {
				continue;
			}

			switch ( $name ) {
				case 'SEARCH':
					break;
				case 'TOOLBOX':
					$this->renderPortal( 'tb', $this->getToolbox(), 'toolbox', 'SkinTemplateToolboxEnd' );
					break;
				case 'LANGUAGES':
					if ( $this->data['language_urls'] ) {
						$this->renderPortal( 'lang', $this->data['language_urls'], 'otherlanguages' );
					}
					break;
				default:
					$this->renderPortal( $name, $content );
				break;
			}
		}
	}

	/**
	 * @param $name string
	 * @param $content array
	 * @param $msg null|string
	 * @param $hook null|string|array
	 */
	protected function renderPortal( $name, $content, $msg = null, $hook = null ) {
		if ( $msg === null ) {
			$msg = $name;
		}
		$msgObj = wfMessage( $msg );
		?>
<div class="portal" role="navigation" id='<?php echo Sanitizer::escapeId( "p-$name" ) ?>'<?php echo Linker::tooltip( 'p-' . $name ) ?> aria-labelledby='<?php echo Sanitizer::escapeId( "p-$name-label" ) ?>'>
	<h3<?php $this->html( 'userlangattributes' ) ?> id='<?php echo Sanitizer::escapeId( "p-$name-label" ) ?>'><?php echo htmlspecialchars( $msgObj->exists() ? $msgObj->text() : $msg ); ?></h3>
	<div class="body">
<?php
		if ( is_array( $content ) ) { ?>
		<ul>
<?php
			foreach ( $content as $key => $val ) { ?>
			<?php echo $this->makeListItem( $key, $val ); ?>

<?php
			}
			if ( $hook !== null ) {
				wfRunHooks( $hook, array( &$this, true ) );
			}
			?>
		</ul>
<?php
		} else { ?>
		<?php echo $content; /* Allow raw HTML block to be defined by extensions */ ?>
<?php
		} ?>
	</div>
</div>
<?php
	}

	/**
	 * Render one or more navigations elements by name, automatically reveresed
	 * when UI is in RTL mode
	 *
	 * @param $elements array
	 */
	protected function renderNavigation( $elements ) {
		global $wgVectorUseSimpleSearch;

		// If only one element was given, wrap it in an array, allowing more
		// flexible arguments
		if ( !is_array( $elements ) ) {
			$elements = array( $elements );
		// If there's a series of elements, reverse them when in RTL mode
		} elseif ( $this->data['rtl'] ) {
			$elements = array_reverse( $elements );
		}
		// Render elements
		foreach ( $elements as $name => $element ) {
			switch ( $element ) {
				case 'NAMESPACES':
?>
<div id="p-namespaces" role="navigation" class="vectorTabs<?php if ( count( $this->data['namespace_urls'] ) == 0 ) { echo ' emptyPortlet'; } ?>" aria-labelledby="p-namespaces-label">
	<h3 id="p-namespaces-label"><?php $this->msg( 'namespaces' ) ?></h3>
	<ul<?php $this->html( 'userlangattributes' ) ?>>
		<?php foreach ( $this->data['namespace_urls'] as $link ) { ?>
			<li <?php echo $link['attributes'] ?>><span><a href="<?php echo htmlspecialchars( $link['href'] ) ?>" <?php echo $link['key'] ?>><?php echo htmlspecialchars( $link['text'] ) ?></a></span></li>
		<?php } ?>
	</ul>
</div>
<?php
				break;
				case 'VARIANTS':
?>
<div id="p-variants" role="navigation" class="vectorMenu<?php if ( count( $this->data['variant_urls'] ) == 0 ) { echo ' emptyPortlet'; } ?>" aria-labelledby="p-variants-label">
	<h3 id="mw-vector-current-variant">
	<?php foreach ( $this->data['variant_urls'] as $link ) { ?>
		<?php if ( stripos( $link['attributes'], 'selected' ) !== false ) { ?>
			<?php echo htmlspecialchars( $link['text'] ) ?>
		<?php } ?>
	<?php } ?>
	</h3>
	<h3 id="p-variants-label"><span><?php $this->msg( 'variants' ) ?></span><a href="#"></a></h3>
	<div class="menu">
		<ul>
			<?php foreach ( $this->data['variant_urls'] as $link ) { ?>
				<li<?php echo $link['attributes'] ?>><a href="<?php echo htmlspecialchars( $link['href'] ) ?>" lang="<?php echo htmlspecialchars( $link['lang'] ) ?>" hreflang="<?php echo htmlspecialchars( $link['hreflang'] ) ?>" <?php echo $link['key'] ?>><?php echo htmlspecialchars( $link['text'] ) ?></a></li>
			<?php } ?>
		</ul>
	</div>
</div>
<?php
				break;
				case 'VIEWS':
?>
<div id="p-views" role="navigation" class="vectorTabs<?php if ( count( $this->data['view_urls'] ) == 0 ) { echo ' emptyPortlet'; } ?>" aria-labelledby="p-views-label">
	<h3 id="p-views-label"><?php $this->msg( 'views' ) ?></h3>
	<ul<?php $this->html( 'userlangattributes' ) ?>>
		<?php foreach ( $this->data['view_urls'] as $link ) { ?>
			<li<?php echo $link['attributes'] ?>><span><a href="<?php echo htmlspecialchars( $link['href'] ) ?>" <?php echo $link['key'] ?>><?php
				// $link['text'] can be undefined - bug 27764
				if ( array_key_exists( 'text', $link ) ) {
					echo array_key_exists( 'img', $link ) ? '<img src="' . $link['img'] . '" alt="' . $link['text'] . '" />' : htmlspecialchars( $link['text'] );
				}
				?></a></span></li>
		<?php } ?>
	</ul>
</div>
<?php
				break;
				case 'ACTIONS':
?>
<div id="p-cactions" role="navigation" class="vectorMenu<?php if ( count( $this->data['action_urls'] ) == 0 ) { echo ' emptyPortlet'; } ?>" aria-labelledby="p-cactions-label">
	<h3 id="p-cactions-label"><span><?php $this->msg( 'actions' ) ?></span><a href="#"></a></h3>
	<div class="menu">
		<ul<?php $this->html( 'userlangattributes' ) ?>>
			<?php foreach ( $this->data['action_urls'] as $link ) { ?>
				<li<?php echo $link['attributes'] ?>><a href="<?php echo htmlspecialchars( $link['href'] ) ?>" <?php echo $link['key'] ?>><?php echo htmlspecialchars( $link['text'] ) ?></a></li>
			<?php } ?>
		</ul>
	</div>
</div>
<?php
				break;
				case 'PERSONAL':
?>
<div id="p-personal" role="navigation" class="<?php if ( count( $this->data['personal_urls'] ) == 0 ) { echo ' emptyPortlet'; } ?>" aria-labelledby="p-personal-label">
	<h3 id="p-personal-label"><?php $this->msg( 'personaltools' ) ?></h3>
	<ul<?php $this->html( 'userlangattributes' ) ?>>
<?php
					$personalTools = $this->getPersonalTools();
					foreach ( $personalTools as $key => $item ) {
						echo $this->makeListItem( $key, $item );
					}
?>
	</ul>
</div>
<?php
				break;
				case 'SEARCH':
?>
<div id="p-search" role="search">
	<h3<?php $this->html( 'userlangattributes' ) ?>><label for="searchInput"><?php $this->msg( 'search' ) ?></label></h3>
	<form action="<?php $this->text( 'wgScript' ) ?>" id="searchform">
		<?php if ( $wgVectorUseSimpleSearch && $this->getSkin()->getUser()->getOption( 'vector-simplesearch' ) ) { ?>
		<div id="simpleSearch">
			<?php if ( $this->data['rtl'] ) { ?>
			<?php echo $this->makeSearchButton( 'image', array( 'id' => 'searchButton', 'src' => $this->getSkin()->getSkinStylePath( 'images/search-rtl.png' ), 'width' => '12', 'height' => '13' ) ); ?>
			<?php } ?>
			<?php echo $this->makeSearchInput( array( 'id' => 'searchInput', 'type' => 'text' ) ); ?>
			<?php if ( !$this->data['rtl'] ) { ?>
			<?php echo $this->makeSearchButton( 'image', array( 'id' => 'searchButton', 'src' => $this->getSkin()->getSkinStylePath( 'images/search-ltr.png' ), 'width' => '12', 'height' => '13' ) ); ?>
			<?php } ?>
		<?php } else { ?>
		<div>
			<?php echo $this->makeSearchInput( array( 'id' => 'searchInput' ) ); ?>
			<?php echo $this->makeSearchButton( 'go', array( 'id' => 'searchGoButton', 'class' => 'searchButton' ) ); ?>
			<?php echo $this->makeSearchButton( 'fulltext', array( 'id' => 'mw-searchButton', 'class' => 'searchButton' ) ); ?>
		<?php } ?>
			<input type='hidden' name="title" value="<?php $this->text( 'searchtitle' ) ?>"/>
		</div>
	</form>
</div>
<?php

				break;
			}
		}
	}
}
