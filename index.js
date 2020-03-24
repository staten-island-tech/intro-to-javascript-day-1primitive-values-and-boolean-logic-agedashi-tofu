console.log("Connected")

//stoplight

let stoplight = "red";
if (stoplight == "red") {
    console.log("The stoplight is red, so stop");
} else if (stoplight == "yellow") {
    console.log("The stoplight is yellow, so caution");
} else if (stoplight == "green") {
    console.log("The stoplight is green, so go");
}

//coffee
let Kristy = "lactose";
let BaoBao = "not lactose";
if (Kristy == "lactose" || BaoBao == "lactose") {
    console.log("Either Kristy or Bao Bao are lactose intolerant, so they will have almond milk and milk");
} else if (Kristy == lactose && BaoBao == lactose) {
    console.log("Both Kristy and Bao Bao are lactose intolerant, so they will have only have almond milk");
} else {
    console.log("Neither Kristy or Bao Bao are lactose intolerant, so they will have only have milk");
}

//temperature
let temp = 74;
if (temp < 68) {
    console.log("Too cold!");
} else if (temp => 68 && temp <= 72) {
    console.log("The temperature is perfect!");
} else if (temp => 73 && temp <= 76) {
    console.log("It's warm.");
} else if (temp > 76) {
    console.log("Too hot!");
}