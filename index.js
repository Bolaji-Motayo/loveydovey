prompt ("What is your name?:")
prompt ("What is their name?:")

var loveScore = Math.random () * 100;
loveScore = Math.floor(loveScore) + 1;


if (loveScore > 70) {
    alert ("Your love score is " + loveScore + ", you love like Kanye loves Kanye");

} else {
    alert ("Your love score is " + loveScore);
}


if (loveScore > 70) {
    alert ("Your love score is " + loveScore + " you love like Kanye loves Kanye");

} else if(loveScore > 30 && loveScore <=70) {
    alert ("Your love score is " + loveScore);
} else if (loveScore <= 30) {
    alert ("Your love score is " + loveScore + " you love like oil and water");

}
