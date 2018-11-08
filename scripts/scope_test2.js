val_global1 = "global1";
var val_global2 = "global2";
const scope = function () {
    // 関数スコープ
    function functionScopeValue1() {
        console.log("val_global1 = " + val_global1);
        console.log("val_global2 = " + val_global2);
 
        var val_global2 = "local2";
        console.log("val_gloval2 to local2 = " + val_global2);
    }
    functionScopeValue1();
}();
/**
val_global1 = global1
val_global2 = undefined
val_gloval2 to local2 = local2
 */