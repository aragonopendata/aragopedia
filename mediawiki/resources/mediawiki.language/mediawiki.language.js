(function(c,a){var b={procPLURAL:function(d){if(d.title&&d.parameters&&c.language.convertPlural){if(d.parameters.length===0){return""}var e=c.language.convertNumber(d.title,true);return c.language.convertPlural(parseInt(e,10),d.parameters)}if(d.parameters[0]){return d.parameters[0]}return""},convertPlural:function(g,d){var e,f=0;if(!d||d.length===0){return""}e=c.language.getData(c.config.get("wgUserLanguage"),"pluralRules");if(!e){return(g===1)?d[0]:d[1]}f=c.cldr.getPluralForm(g,e);f=Math.min(f,d.length-1);return d[f]},preConvertPlural:function(d,e){while(d.length<e){d.push(d[d.length-1])}return d},gender:function(e,d){if(!d||d.length===0){return""}d=c.language.preConvertPlural(d,2);if(e==="male"){return d[0]}if(e==="female"){return d[1]}return(d.length===3)?d[2]:d[0]},convertGrammar:function(f,e){var d=c.language.getData(c.config.get("wgUserLanguage"),"grammarForms");if(d&&d[e]){return d[e][f]||f}return f}};a.extend(c.language,b)}(mediaWiki,jQuery));