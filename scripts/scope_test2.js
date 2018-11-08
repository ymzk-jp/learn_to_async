val_global1 = "global1";
var val_global2 = "global2";
(()=> {
    // 関数スコープ
    const myFunc=()=>{
        console.log("val_global1 = " + val_global1);
        console.log("val_global2 = " + val_global2);
 
        var val_global2 = "local2"; // <=ここが違う
        console.log("val_gloval2 to local2 = " + val_global2);
    }
    myFunc();
})();
/**
val_global1 = global1
val_global2 = undefined
val_gloval2 to local2 = local2
 */

// ホスティングが起きているので下記の様に変化する
/**
    const myFunc=()=>{
        var val_global2;
        console.log("val_global1 = " + val_global1);
        console.log("val_global2 = " + val_global2); //<=よってこの時点ではundefinedとなる
 
        val_global2 = "local2"; //<= ここで初めて値が代入される
        console.log("val_gloval2 to local2 = " + val_global2);
    }
 */