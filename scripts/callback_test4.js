const getA = (f) => {
    console.log(1);
    f("getA");
    return "getA";
}

const getB = f => {
    console.log(2);
    f("getB");
}

const getC = f =>{
    console.log(3);
    return "getC";
}

(()=>{
    const bark =(n)=>{
        console.log("called"+n);
    }
    console.log(getC());
    getA((n)=>console.log(n));
    getB((n)=>console.log(n));
    console.log(3);
    getA((n)=>{
        console.log(n);
        getB((n)=>{
            console.log(n);
        });
    });
})();
/**
3
getC
1
getA
2
getB
3
1
getA
2
getB
 */