var ncmb = new NCMB(APP_KEY, CLI_KEY); //ncmbにキーを渡してインスタンスを生成
//////////////////////////////////////////////////////////////////////
////テスト用user_masterの全レコードを取得して一行ずつアラームを鳴らす////
var user_master = ncmb.DataStore("user_master") //user_masterのデータストアを取得
user_master.fetchAll() //全件取得
    .then(function (results) {
        for (var i = 0; i < results.length; i++) { //取得した結果はレコードごとの配列になる
            let jsonObject = results[i]; //1レコードずつ取り出す（JSON形式）
            let object = JSON.stringify(jsonObject) //JSON形式から連想配列に変換
            alert(object); //連想配列がそのまま表示される
        }
    })
    .catch(function (err) { //取得でエラーが発生した場合（通信エラーなど）はこちらを通る
        log.d(err)
        alert("通信に失敗")
    });
////////////////////////////////////////////////////////////////////////
