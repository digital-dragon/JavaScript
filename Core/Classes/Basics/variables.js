console.log("Trying to refer two var declarations before declaration");
print(var1, var2);
var var1 = 4;
console.log("Trying to refer a var declaration after declaration");
print(var1);

{
    var var2 = 5;
    const const1 = 10;
    let let1 = 15;
    console.log("Trying to refer one each of var, const, and let declarations after declaration");
    print(var2,const1,let1);
}

try {
    console.log("Creating a class before declaration");
    new TestClass(21);
} catch (ex) {
    console.error("Error thrown while instantiation")
}

class TestClass {
    constructor(var3) {
        this.var3 = var3;
    }
}

function print(...items) {
    for (let i = 0; i < items.length; i++) {
        try {
            if (items[i] === undefined) console.log("Variable is undefined at the moment");
            else console.log("Hoisted variable has value " + items[i]);
        } catch (ex) {
            console.error("Error thrown")
       }
    }
}
