(function(a){a.fn.placeholder=function(){return this.each(function(){var b,c;if(this.placeholder&&"placeholder" in document.createElement(this.tagName)){return}b=this.getAttribute("placeholder");c=a(this);if(this.value===""||this.value===b){c.addClass("placeholder").val(b)}c.blur(function(){if(this.value===""){this.value=b;c.addClass("placeholder")}}).on("focus drop keydown paste",function(f){if(c.hasClass("placeholder")){if(f.type==="drop"&&f.originalEvent.dataTransfer){try{this.value=f.originalEvent.dataTransfer.getData("text/plain")}catch(d){this.value=f.originalEvent.dataTransfer.getData("text")}f.preventDefault()}else{this.value=""}c.removeClass("placeholder")}});if(this.form){a(this.form).submit(function(){if(c.hasClass("placeholder")){c.val("").removeClass("placeholder")}})}})}}(jQuery));