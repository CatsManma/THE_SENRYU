// recommend.html

// <ons-card>を量産する処理
$(window).on('load',function(){
    // ページの読み込みが完了した後に実行するコード
    for(var i=0; i<3; i++){
        $('#loop').after('hoge<br>')
    }
});