/**
 * Title: LTabs
 * Description: plugin
 * Author: LiuZhenghe
 * Date: 2018-11-12
 */

(function($) {
    // What does the LTabs plugin do?
    $.fn.LTabs = function(tabStyle, options) {
        if (!this.length) {
            return this;
        }
        var opts = $.extend(true, {}, $.fn.LTabs.defaults, options);

        this.each(function() {
            var $this = $(this);
            var tabs_tit = $(this).find('.tabs_tit');
            var tabs_tit_nav = $(this).find('.tabs_tit .t_nav');
            var tabs_con = $(this).find('.tabs_con');
            var tcon_li = $(this).find('.tabs_con .tcon_li');

            // 初始化样式
            $(tabs_tit_nav).eq(0).addClass('active');
            $(tcon_li).eq(0).css('display', 'block');

            // 点击切换
            // 当不传参时默认为点击切换。
            if (tabStyle == "" || tabStyle == null) {
                $(tabs_tit_nav).click(function(event) {
                    event.preventDefault();
                    $(this).addClass('active').siblings().removeClass('active');
                    var a_index = $(this).index();
                    $(tcon_li).eq(a_index).css('display', 'block');
                    $(tcon_li).eq(a_index).siblings().css('display', 'none');
                });
            };

            // 鼠标移入切换
            // 当传入 mouseover 时为鼠标移入事件。
            if (tabStyle == "mouseover") {
                $(tabs_tit_nav).mouseover(function(event) {
                    $(this).addClass('active').siblings().removeClass('active');
                    var a_index = $(this).index();
                    $(tcon_li).eq(a_index).css('display', 'block');
                    $(tcon_li).eq(a_index).siblings().css('display', 'none');
                });
            };


        });

        return this;

    };

    // default options
    $.fn.LTabs.defaults = {
        tabStyle: null,
        autoPlay: null
    };

})(jQuery);

