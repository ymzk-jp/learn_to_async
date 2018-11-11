const val_scope=()=>{
    for (let i =0; i<3; i++){
        var ans=i;
    }
    console.log(ans);
}
val_scope();
/**
//=> 2
 */
// varで宣言した変数はfor文のスコープを貫通する


const let_scope=()=>{
    for (let i =0; i<3; i++){
        let ans=i;
    }
    console.log(ans);
}
let_scope();
/**
C:\Users\ymzk-jp\Documents\learn_to_async\scripts\scope_test4.js:14
    console.log(ans);
                ^
ReferenceError: ans is not defined
 */
// let,constで定義された変数はfor文を貫通できない
// let,constで定義された変数はローカル変数として定義される