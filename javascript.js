

var today = new Date();
var hour = today.getHours();
var day = today.getDay();

if (hour < 12) {
    document.write("<p>Good Morning</p>")
} 
if (hour > 11) {
    document.write("<p>Good Afternoon</p>")
}

if (day == 0) {
    document.write("<p>Today is Sunday, back to work soon.</p>")
}
if (day == 1) {
    document.write("<p>Do you have a case of the Mondays?</p>")
}
if (day == 2) {
    document.write("<p>Tuesday, good ol' Tuesday.</p>")
}
if (day == 3) {
    document.write("<p>It's Wednesday my dudes. AAAAAAAAAAA</p>")
}
if (day == 4) {
    document.write("<p>Thursday, that's the day today. Just Thursday.</p>")
}
if (day == 5) {
    document.write("<p>It's Friday, Friday, gotta get down on Friday-</p>")
}
if (day == 6) {
    document.write("<p>We are on the day of Saturday, a day to be free!</p>")
}