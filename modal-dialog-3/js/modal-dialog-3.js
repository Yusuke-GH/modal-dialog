
$(function(){
    var winScrollTop;   //変数定義
    $('.js-modal-open').each(function(){    //複数ある.js-modal-openのそれぞれに処理を適用する。
        $(this).on('click',function(){    //.js-modal-openがクリックされたら、処理を実行する。
            //スクロール位置を取得
            winScrollTop = $(window).scrollTop();   //スクロール位置を取得する。
            var target = $(this).data('target');    //クリックされた.js-modal-openのdata-targetの値を取得する。（modal01 or modal02）
            var modal = document.getElementById(target);    //target(modal01 or modal02)を持つidを検索する。該当のHTML要素を戻り値として返す。
            $(modal).fadeIn();    //該当のHTML要素にfadeInメソッドを適用する。
            return false;   //a要素の場合、左記命令文を書かないとリンクとして処理されてしまう。→ リングとしての処理をやめる。
        });
    });
    $('.js-modal-close').on('click',function(){   //.js-modal-close'がクリックされたら、処理を実行する。
        $('.js-modal').fadeOut();   //.js-modalにfadeOutメソッドを適用する。
        $('body,html').stop().animate({scrollTop:winScrollTop}, 100);   //現在実行中のアニメーションを停めて、変数winScrollTopの位置まで移動する。
        return false;   //a要素の場合、左記命令文を書かないとリンクとして処理されてしまう。→ リングとしての処理をやめる。
    });
});
