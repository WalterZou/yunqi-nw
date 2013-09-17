/**
*  Author   : Walter Zou
*  Created  : 2013-09-17 16:02
*  Function : Custiomize scrollbar
*/
'use strict';
(function($){
    $.fn.iScroll = function(opt){
        return this.each(function(){
            var scrollDiv=document.createElement('div');
            scrollDiv.style.cssText='width:5px;height:10px;background:rgba(0;0;0;.5);border-radius:2px;position:absolute;top:42px;right:8px';
            $(this).append(scrollDiv);
            console.log($(this),this);
        });
    };
})(jQuery)