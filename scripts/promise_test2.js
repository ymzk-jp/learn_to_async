const getB = () => {
    console.log(11);
    return new Promise((resol) => {
        console.log(12);
        resol({
            name: 'getA'
        });
    });
}

getB().then(
    f => {
        console.log(13);
        console.log(f);
        return f;
    }).then(
        f => {
        console.log(f.name);
    }
);
/**
11
12
13
{ name: 'getA' }
getA
 */
// resolveでなくても動く
// return すると使い回せる