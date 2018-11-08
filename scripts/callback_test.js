

console.log(1);
const getDate = (f) => {
    let n = "n";
    console.log(2);
    n=f(n);
    console.log(3);
    console.log(4);
}
console.log(5);
getDate((n) => {
    console.log(6);
    console.log(n);
    n = "m";
    console.log(n);
    console.log(7);
    return n;
    console.log(8);
});
console.log(30);


