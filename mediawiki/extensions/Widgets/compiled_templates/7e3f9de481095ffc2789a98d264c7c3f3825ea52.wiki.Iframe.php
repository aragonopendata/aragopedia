<?php /* Smarty version Smarty-3.1.7, created on 2014-02-05 19:47:00
         compiled from "wiki:Iframe" */ ?>
<?php /*%%SmartyHeaderCode:156420874552cfbed0d34c12-14831220%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7e3f9de481095ffc2789a98d264c7c3f3825ea52' => 
    array (
      0 => 'wiki:Iframe',
      1 => 20140205133026,
      2 => 'wiki',
    ),
  ),
  'nocache_hash' => '156420874552cfbed0d34c12-14831220',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_52cfbed102bd5',
  'variables' => 
  array (
    'url' => 0,
    'border' => 0,
    'width' => 0,
    'height' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_52cfbed102bd5')) {function content_52cfbed102bd5($_smarty_tpl) {?><?php if (!is_callable('smarty_modifier_validate')) include '/var/www/mediawiki/extensions/Widgets/smarty_plugins/modifier.validate.php';
?><iframe src="<?php echo smarty_modifier_validate($_smarty_tpl->tpl_vars['url']->value,'url');?>
" frameborder="<?php echo (($tmp = @smarty_modifier_validate($_smarty_tpl->tpl_vars['border']->value,'int'))===null||$tmp==='' ? 0 : $tmp);?>
" width="<?php echo (($tmp = @htmlspecialchars($_smarty_tpl->tpl_vars['width']->value, ENT_QUOTES, 'UTF-8', true))===null||$tmp==='' ? 400 : $tmp);?>
" height="<?php echo (($tmp = @htmlspecialchars($_smarty_tpl->tpl_vars['height']->value, ENT_QUOTES, 'UTF-8', true))===null||$tmp==='' ? 300 : $tmp);?>
"></iframe><?php }} ?>