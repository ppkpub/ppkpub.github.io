(function(){
	
//ChangeDiv切换效果
function ChangeDiv(args){
	for(var i in args){
		this[i] = args[i];	
	}	
	this.type = this.type ? this.type : "mouseover";
	this.load();
}

ChangeDiv.prototype = {
	constructor : this,
	load : function(){
		var _this = this;
		this.btns.each(function(num){
			if(_this.type == "click"){
				$(this).click(function(){
					_this.change(num)	
				});		
			}else{
				$(this).mouseover(function(){
					_this.change(num)	
				});		
			}			
		});	
	},
	change : function(num){
		var _this = this;
		
		this.btns.each(function(n){
			if(n ==num){
				$(this).addClass("hover");		
			}else{
				$(this).removeClass("hover");		
			}				
		});
		
		this.divs.each(function(n){
			if(n ==num){
				$(this).addClass("show");		
			}else{
				$(this).removeClass("show");		
			}				
		});
	}	
};

window.ChangeDiv = ChangeDiv;
//ChangeDiv切换效果

//清除所有input的value
	function ClearValue(forms){
		this.forms = forms;
		this.load();	
	}
	
	ClearValue.prototype = {
		constructor : this,
		load : function(){
			var _this = this;			
			this.forms.each(function(){
				_this.clearValue($(this));	
			});
		},
		clearValue : function(fm){			
			this.inputs = $("input.text,input.keyword",fm);
			this.textarea = $("textarea",fm);
			var _this = this;
			var dValues = [];	
			var aValues = [];		
			this.inputs.each(function(n){
				dValues[n] = $(_this.inputs[n]).val();
			});
			this.textarea.each(function(n){
				aValues[n] = $(_this.textarea[n]).html();
			});
						
			this.inputs.each(function(n){
				$(this).focus(function(){
					if($(this).val() == dValues[n]){
						$(this).val("");	
						$(this).addClass("text_hover");
					}
				});	
				$(this).blur(function(){
					if($(this).val() == ""){
						$(this).val(dValues[n]);	
						$(this).removeClass("text_hover");
					}else{
						$(this).addClass("text_hover");	
					}
				});
			});	
			this.textarea.each(function(n){
				$(this).focus(function(){
					if($(this).val() == aValues[n]){
						$(this).val("");	
						$(this).addClass("text_hover");
					}
				});	
				$(this).blur(function(){
					if($(this).val() == ""){
						$(this).val(aValues[n]);	
						$(this).removeClass("text_hover");
					}else{						
						$(this).removeClass("text_hover");		
					}
				});	
			});
		}	
	};
	
	window.ClearValue = ClearValue;
	//清除所有input的value

})();

$(function(){


	
	//判断设备
	window.isPc=false;
	window.isSmall=false;	
	window.isPad=false;
	window.isPhone=false;
	function ckDevice(){
		if(!$(".is_pc").is(":hidden")){
			isPc=true;	
		}
		if(!$(".is_small").is(":hidden")){
			isSmall=true;	
		}
		if(!$(".is_pad").is(":hidden")){
			isPad=true;	
		}
		if(!$(".is_phone").is(":hidden")){
			isPhone=true;	
		}		
	}
	ckDevice();
	$(window).resize(function(){
		ckDevice();	
	});
	
	new ClearValue($("form"));

	$(".menu-btn").click(function(){
		if($(this).hasClass("menu-btnshow")){
			$(".nav-mb").removeClass("nav-mbshow");
			$(this).removeClass("menu-btnshow");	
		}else{
			$(".nav-mb").addClass("nav-mbshow");
			$(this).addClass("menu-btnshow");	
		}
	});
	
	$(".nav-mb .par").click(function(){
		var _par = $(this).parents("dl");	
		if(_par.hasClass("down")){
			_par.removeClass("down");	
		}else{
			$(".nav-mb dl").removeClass("down");	
			_par.addClass("down");		
		}
	});
	

});	