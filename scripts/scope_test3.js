val_global1 = "global1";
let val_global2 = "global2";
(()=> {
    // グローバルスコープ
    const myFunc=()=> {
        console.log("val_global1 = " + val_global1);
        try{
            console.log("val_global2 = " + val_global2);
        }catch(err){
        }
        let val_global2 = "global3";

        console.log("val_global2 modified = " + val_global2);
    }
    myFunc();
})();
/**
val_global1 = global1
C:\Users\ymzk-jp\Documents\learn_to_async\scripts\scope_test3.js:7
        console.log("val_global2 = " + val_global2);
                                       ^

ReferenceError: val_global2 is not defined
 */

 /**
letを使うことでホイスティングを抑制できる
抑制された結果not definedでプログラムが強制終了する
  */
