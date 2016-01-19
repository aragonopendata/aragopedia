
<?php
# This file was automatically generated by the MediaWiki 1.21.1
# installer. If you make manual changes, please keep track in case you
# need to recreate them later.
#
# See includes/DefaultSettings.php for all configurable settings
# and their default values, but don't forget to make changes in _this_
# file, not there.
#
# Further documentation for configuration settings may be found at:
# http://www.mediawiki.org/wiki/Manual:Configuration_settings

# Protect against web entry
if ( !defined( 'MEDIAWIKI' ) ) {
	exit;
}

## Uncomment this to disable output compression
# $wgDisableOutputCompression = true;

$wgSitename = "AragoPedia";

## The URL base path to the directory containing the wiki;
## defaults for all runtime URL paths are based off of this.
## For more information on customizing the URLs
## (like /w/index.php/Page_title to /wiki/Page_title) please see:
## http://www.mediawiki.org/wiki/Manual:Short_URL
###$wgScriptPath = "/mediawiki";
#$wgScriptPath = "";
$wgScriptPath = "http://opendata.aragon.es/aragopedia";
$wgScriptExtension = ".php";

## The protocol and server name to use in fully-qualified URLs
#$wgServer = "";
$wgServer = "http://opendata.aragon.es/aragopedia";
#$wgServer = "http://opendata4";

## The relative URL path to the skins directory
###$wgStylePath = "$wgScriptPath/skins";
$wgStylePath = "$wgServer/skins";

## The relative URL path to the logo.  Make sure you change this from the default,
## or else you'll overwrite your logo when you upgrade!
#$wgLogo             = "$wgStylePath/common/images/wiki.png";
$wgLogo             = "$wgScriptPath/Aragopedia/images/01-Simbolo-Aragopedia.png";

## UPO means: this is also a user preference option

$wgEnableEmail = true;
$wgEnableUserEmail = false; # UPO

$wgEmergencyContact = "opendata@aragon.es";
$wgPasswordSender = "opendata@aragon.es";

$wgEnotifUserTalk = false; # UPO
$wgEnotifWatchlist = false; # UPO
$wgEmailAuthentication = true;

## Database settings
$wgDBtype = "";
$wgDBserver = "";
$wgDBname = "";
$wgDBuser = "";
$wgDBpassword = "";

# Postgres specific settings
$wgDBport = "";
$wgDBmwschema = "";

## Shared memory settings
#Configuracion apc
#$wgMainCacheType = CACHE_ACCEL;
#$wgMemCachedServers = array();

#Configuracion memcached
$wgMainCacheType = CACHE_MEMCACHED;
$wgParserCacheType = CACHE_MEMCACHED; # optional
$wgMessageCacheType = CACHE_MEMCACHED; # optional
$wgMemCachedServers = array( "127.0.0.1:11211" );

$wgSessionsInObjectCache = true; # optional
$wgSessionCacheType = CACHE_MEMCACHED; # optional

## To enable image uploads, make sure the 'images' directory
## is writable, then set this to true:
$wgEnableUploads = true;
#$wgUseImageMagick = true;
#$wgImageMagickConvertCommand = "/usr/bin/convert";

# InstantCommons allows wiki to use images from http://commons.wikimedia.org
$wgUseInstantCommons = false;

## If you use ImageMagick (or any other shell command) on a
## Linux server, this will need to be set to the name of an
## available UTF-8 locale
$wgShellLocale = "en_US.utf8";

## If you want to use image uploads under safe mode,
## create the directories images/archive, images/thumb and
## images/temp, and make them all writable. Then uncomment
## this, if it's not already uncommented:
#$wgHashedUploadDirectory = false;

## Set $wgCacheDirectory to a writable directory on the web server
## to make your wiki go slightly faster. The directory should not
## be publically accessible from the web.
#$wgCacheDirectory = "/var/www/mediawiki/cache";

# Site language code, should be one of the list in ./languages/Names.php
$wgLanguageCode = "es";

$wgSecretKey = "";

# Site upgrade key. Must be set to a string (default provided) to turn on the
# web installer while LocalSettings.php is in place
$wgUpgradeKey = "";

## Default skin: you can change the default skin. Use the internal symbolic
## names, ie 'standard', 'nostalgia', 'cologneblue', 'monobook', 'vector':
$wgDefaultSkin = "vector";

## For attaching licensing metadata to pages, and displaying an
## appropriate copyright notice / icon. GNU Free Documentation
## License and Creative Commons licenses are supported so far.
$wgRightsPage = ""; # Set to the title of a wiki page that describes your license/copyright
$wgRightsUrl = "https://creativecommons.org/licenses/by/4.0/";
$wgRightsText = "Creative Commons Reconocimiento";
$wgRightsIcon = "{$wgStylePath}/common/images/cc-by.png";

# Path to the GNU diff3 utility. Used for conflict resolution.
$wgDiff3 = "/usr/bin/diff3";

# Query string length limit for ResourceLoader. You should only set this if
# your web server has a query string length limit (then set it to that limit),
# or if you have suhosin.get.max_value_length set in php.ini (then set it to
# that value)
$wgResourceLoaderMaxQueryLength = -1;

# The following permissions were set based on your choice in the installer
$wgGroupPermissions['*']['createaccount'] = false;
$wgGroupPermissions['*']['edit'] = false;

# End of automatically generated settings.
# Add more configuration options below.


# incluidos Aragopedia

# The following permissions were set based on your choice in the installer
$wgGroupPermissions['*']['createaccount'] = false;
$wgGroupPermissions['*']['edit'] = false;


# End of automatically generated settings.
# Add more configuration options below.
require_once("/var/www/mediawiki/extensions/Widgets/Widgets.php");
require_once("/var/www/mediawiki/extensions/FormatNum-master/FormatNum.php");
require_once("/var/www/mediawiki/extensions/pchart4mw/pChart4mw.php");
require_once("/var/www/mediawiki/extensions/Cite/Cite.php");
#Configurar memcached
require_once("/var/www/mediawiki/extensions/Memcached/Memcached.php");

$wgPdfExportDomPdfConfigFile = '/var/www/mediawiki/extensions/PdfExport/dompdf/dompdf_config.inc.php';
$wgPdfExportAttach = true;
$wgCollectionFormats = array(
        'rl' => 'PDF',
        'odf' => 'ODT'
);
$wgFavicon = "http://opendata.aragon.es/public/i/favicon.ico";
$wgHooks['SkinTemplateOutputPageBeforeExec'][] = 'lfChangeMainPageURL';
function lfChangeMainPageURL( $sk, &$tpl ) {
	$tpl->data['nav_urls']['mainpage']['href'] = "http://preopendata.aragon.es/aragopedia";
	return true;
}

$wgPChart4mwCacheDir = "pChart4mw";
ini_set('max_execution_time', 0);
