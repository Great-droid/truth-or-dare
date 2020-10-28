
alert('By Great Ihevueme');


//Arrays for truth and dare quesions 
var truthQuestion = [
    'Who was your first kiss', 'do you prefer sex in the dark', 'cats or dogs',
    'what is your greatest fear', 'what is the most weird thing you\'ve ever done',
    'who do you love', 'how do you fight depression', 'what\'s your craziest tots',
    'would you kill for $10million', 'do you pick your nose regularly', 
    'do you get attracted to someone of same sex', 'what are you scared of'
];

var dareQuestion = [
    'twerk for 3mins', 'chose an opposite sex and kiss', 'remove 5 things from you',
    'show us how you do pick your nose', 'chose someone and remove their Bra',
    'chose someone of same sex and kiss', 'have an oral sex with anyone inthe room',
    'sing to us your favorte song', 'give anyone a lap dance', 'kiss your neighbor',
    'play with your body for 3mins', 'do giveaway na', 'spit on your hands and lick it'
];


//Control Flow of the Game
function myTruth () {
    var l = truthQuestion.length;
    var x = Math.floor((Math.random() * l));
    var TOD = document.getElementById('tod');
    TOD.value = truthQuestion[x];
}

function myDare (){
    var l = dareQuestion.length;
    var x = Math.floor((Math.random() * l));
    var TOD = document.getElementById('tod');
    TOD.value = dareQuestion[x];
}
