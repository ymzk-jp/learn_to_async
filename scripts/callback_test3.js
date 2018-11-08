// 呼び出し元関数内を実行しない
const getA=(f)=>{
    console.log(1);
}

getA((n)=>{
    console.log(2);
    console.log(n);
}); //=>1

// 呼び出し元関数内が実行される
const getB=(f)=>{
    console.log(1);
    f(3);
}
getB((n)=>{
    console.log(2);
    console.log(n); //=> 1 2 3
});