//-------------------------------------------
//画面読み込み時に実行する処理
//-------------------------------------------
window.onload = function() {
    //テーブルオブジェクト
    var tbl = document.getElementsByTagName("table").item(0);
    // 行に対するループ
    var rows = tbl.rows;
    for (var i=0, len=rows.length; i<len; i++) {
        var cols = rows[i].cells.length;
        // 列に対するループ
        for (var j=0; j<cols; j++) {
            //奇数番の場合は背景色を付ける
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                rows[i].cells[j].style.backgroundColor = "#00ffff";
    	    }
        }
    }  
}

//-------------------------------------------
//隣り合う二マスを繋いだ時余りが出ないか
//-------------------------------------------
function checkResult(){
    //奇数番の個数を格納する変数
    var oddnum = 0;
    //偶数番の個数を格納する変数
    var evennum = 0;
    
    //テーブルオブジェクト
    var tbl = document.getElementsByTagName("table").item(0);
    // 行に対するループ
    var rows = tbl.rows;
    for (var i=0, len=rows.length; i<len; i++) {
        var cols = rows[i].cells.length;
        // 列に対するループ
        for (var j=0; j<cols; j++) {
            //奇数番をインクリメント
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                if (rows[i].cells[j].innerText != "✕"){
                    oddnum ++;
                }
            //偶数番をインクリメント
            }else{
                if (rows[i].cells[j].innerText != "✕"){
                    evennum ++;
                }
            }
        }
    }
    
    //alert("奇数："+oddnum+" / 偶数："+evennum);
    
    //奇数と偶数が同じ数ならば余りは出ない
    if (oddnum == evennum){
        alert("全てに線が引けます！");
    }else{
        alert("線が引けないマスが余ります！");
    }
}

//-------------------------------------------
//選択したマスに✕を付ける
//-------------------------------------------
function setCellVal(rowno, cellno){
    var tbl = document.getElementsByTagName("table").item(0);
    tbl.rows[rowno].cells[cellno].innerText = "✕";
}
