/**
 *  Author   : Walter Zou
 *  Created  : 2013-09-17 16:02
 *  Function : Custiomize scrollbar
 */
'use strict';
(function ($) {
    $.fn.iScroll = function (opt) {
        return this.each(function () {
            var scrollDiv = document.createElement('div');
            scrollDiv.style.cssText = 'width:6px;height:30px;background:rgba(0,0,0,0.6);border-radius:2px;position:absolute;top:43px;right:2px;z-index:12;display:none;';
            $(this).after(scrollDiv);

            function setScrollbar(elm) {
                var h = elm.children().height(),
                    _h = 0.1 * h;
                _h > 20 ? $(scrollDiv).css('height', _h) : $(scrollDiv).css('height', '30px');
                console.log(_h, h);
            }
            $(this).bind({
                scroll: function () {
                    var H = $(this).children().height(), //滚动的文档高度
                        h = $(this).height(), //文档容器的高度
                        scollTop = $(this).scrollTop(),
                        top,
                        _h;
                    setScrollbar($(this));
                    _h = $(scrollDiv).height();
                    top = 42 + scollTop * (h - _h) / (H - h);
                    if (scollTop === (H - h)) {
                        top -= 1;
                    } else if (scollTop === 0) {
                        top = 43;
                    }
                    $(scrollDiv).css({
                        top: top
                    });
                }
            });
            $(this).hover(function () {
                setScrollbar($(this));
                $(scrollDiv).fadeIn(500);
            }, function () {
                setScrollbar($(this));
                $(scrollDiv).fadeOut(500);
            });
        });
    };
})(jQuery);