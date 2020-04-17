
$(function(){
    $('.js-modal-open').on('click',function(){    //.js-modal-openがクリックされたら、処理を実行する。
        $('.js-modal').fadeIn();    //.js-modalにfadeInメソッドを適用する。
        return false;   //a要素の場合、左記命令文を書かないとリンクとして処理されてしまう。→ リングとしての処理をやめる。
    });
    $('.js-modal-close').on('click',function(){   //.js-modal-close'がクリックされたら、処理を実行する。
        $('.js-modal').fadeOut();   //.js-modalにfadeOutメソッドを適用する。
        return false;   //a要素の場合、左記命令文を書かないとリンクとして処理されてしまう。→ リングとしての処理をやめる。
    });
});
