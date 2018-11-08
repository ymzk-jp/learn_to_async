val_global1 = "global1";
var val_global2 = "global2";
(()=> {
    // グローバルスコープ
    const myFunc=()=> {
        console.log("val_global1 = " + val_global1);
        console.log("val_global2 = " + val_global2);

        val_global2 = "global3";
        console.log("val_global2 modified = " + val_global2);
    }
    myFunc();
})();
/**
val_global1 = global1
val_global2 = global2
val_global2 modified = global3
 */

/**
 * ホスティングは発生せず
 * 元々グローバルスコープで宣言されたval_global2が参照される
 */