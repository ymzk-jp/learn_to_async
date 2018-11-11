const getA = (f) => {
    console.log(1);
    let n = "n";
    f(n);
}

getA((n) => {
    console.log(2);
    console.log(n);
});
// => 1 2 n

// 上に等価な関数を定義する
const getB = () => {
    console.log(11);
    let n = 'n';
    return new Promise((resolve) => {
        console.log(12);
        resolve(n);
    });
}

getB().then(
    f => {
        console.log(13);
        console.log(f);
    }
);
/**
1
2
n
11
12
13
n
 */