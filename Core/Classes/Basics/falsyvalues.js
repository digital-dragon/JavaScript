if (var1 === undefined) {
    console.log("var1 is hoisted and value is undefined, which is a falsy value, hence printing this")
}

var var1 = 10;

var string1 = "";

if (string1) {
    console.log("string1 " + 1);
} else {
    console.log("string1 has a value of empty string, a falsy value, hence printing");
}

var nanValue = parseInt('Hello world');
if (isNaN(nanValue)) {
    console.log("The expression parseInt('Hello world') evaluates to NaN, a falsy value, hence printing");
}

var nullValue = null;

if (nullValue) {
    console.log(nullValue);
} else {
    console.log("null is a falsy value, hence printing");
}

var zeroValue = 0;

if (zeroValue) {
    console.log(nullValue);
} else {
    console.log("0 is a falsy value, hence printing");
}

var falseValue = false;
if (falseValue) {
    console.log(falseValue);
} else {
    console.log("false is a falsy value, hence printing");
}


if (null === null) {
    console.log("null is equal to null");
} else {
    console.log("null is not equal to null");
}

if (NaN === NaN) {
    console.log("NaN is equal to NaN");
} else {
    console.log("NaN is not equal to NaN");
}


