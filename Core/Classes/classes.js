class FirstClass {

    constructor(field1, field2) {
        console.log("Constructing first class");
        this.field1 = field1;
        this.field2 = field2;
        console.log("Done constructing first class");
    }

    print() {
        console.log(this);
        console.log(this.field1 + " " + this.field2);
    }
}

class SecondClass extends FirstClass {
    constructor(field1, field2, field3) {
        console.log("Constructing second class")
        super(field1, field2);
        this.field3 = field3;
        console.log("Done constructing second class")
    }

    print() {
        console.log(this);
        console.log(this.field1 + " " + this.field2 + " " + this.field3);
    }
}

const firstClass = new FirstClass(1, 2);
firstClass.print();

const secondClass = new SecondClass(3,4,5);
secondClass.print();