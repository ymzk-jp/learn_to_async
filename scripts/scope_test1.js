val_global1 = "global1";
var val_global2 = "global2";
const scope =()=> {
    // グローバルスコープ
    function globalValue1() {
        console.log("val_global1 = " + val_global1);
        console.log("val_global2 = " + val_global2);

        val_global2 = "global3";
        console.log("val_global2 modified = " + val_global2);
    }
    globalValue1();
};
/**
val_global1 = global1
val_global2 = global2
val_global2 modified = global3
 */