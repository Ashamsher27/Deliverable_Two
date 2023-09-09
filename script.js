let golferName = prompt("Welcome brave golfer! What is your name?")
let howManyHoles = prompt ("Hello " + golferName + "! Would you like to play 3 or 6 holes today?")
let par= 0
let holeNumber = 1
if (howManyHoles == 3) {
    for (let i = 0; i < howManyHoles; i++) {
        let putts = Number( prompt("How many putts for hole " + holeNumber + " (par:3)") );
        holeNumber += 1;
        par += putts;
    }
    par -= 9;
}   else {
    (howManyHoles == 6)
        for (let i = 0; i < howManyHoles; i++) {
            let putts = Number( prompt("How many putts for hole " + holeNumber + " (par:3)") );
            holeNumber += 1;
            par += putts;
        } 
        par -= 18;
}   
if (par > 0) {
    console.log("Nice try, " + golferName + "... Your total par was: +" + par)
} else if (par == 0) {
    console.log("Good game, " + golferName + ". Your total par was: " + par)
} else {
    par *= -1 /* I don't know if adding this rule is necessary because the 
    answer is already negative, but the directions said that the minus needs 
    to be included in the console.log, so that is why I added this *= -1 rule */
    console.log("Great job, " + golferName + "! Your total par was: -" + par)
}


