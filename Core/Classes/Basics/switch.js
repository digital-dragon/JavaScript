function switchFunction(month) {
    switch(month) {
        case "Jan":
            console.log("New year!");
            break;
        case "Feb":
            console.log("Still cold");
            break;
        default:
            console.log("Don't know what to say!")
            break;
    }
}

switchFunction("Feb");
switchFunction("Jan");
switchFunction("Mar");