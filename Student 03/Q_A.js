
let timeTaken = 0;
document.getElementById("countdown").innerHTML=
    2 + ":" + 0;
Begin_countdown(); //countdown



function Begin_countdown() {
    var begin = document.getElementById("countdown").innerHTML;
    var count =  begin.split(/[:]+/);
    var min = count[0];
    timeTaken++;
    console.log(timeTaken);
    var second = check_time((count[1] - 1));
    if (second == 59){min=min-1}
    if (min<0){
        showMarks(timeTaken);
        Begin_countdown().stop();
    }

    document.getElementById("countdown").innerHTML =
        min + ":"+second;
    setTimeout(Begin_countdown,1000);
}

function check_time (secound) {
    if (secound < 10 && secound>= 0) {secound = "0" + secound}
    if (secound < 0){secound = "59"}
    return secound;
}

function countoff() {
    document.getElementById("countdown").innerHTML =
        0 + ":" + 0 ;


}


function Quizes (questions) {  //constructor
    this.mark = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.correct =0;
}

Quizes.prototype.getQuestionIndex = function () { //creating functions
    return this.questions[this.questionIndex];
}

Quizes.prototype.ended = function () {
    return this.questions.length === this.questionIndex;
}

Quizes.prototype.userGuess = function (ans) {
    if(this.getQuestionIndex().correctAnswer(ans)) {
        this.mark+=2;
        this.correct++;
    }else {
        this.mark-=1;
    }
    this.questionIndex++;
}

function Questions(text, choose, ans) {
    this.text = text;
    this.choose = choose;
    this.ans = ans;
}

Questions.prototype.correctAnswer = function (choos) {
    return choos === this.ans;
}

function display() {  //calling function
    if (q.ended()) {  //auto submits when countdown stops
        showMarks();

    }else {

        var element = document.getElementById("quest");
        element.innerHTML = q.getQuestionIndex().text;


        var choose1 = q.getQuestionIndex().choose;
        for (var a = 0; a < choose1.length; a++) {
            var element = document.getElementById("choose" + a);
            element.innerHTML = choose1[a];
            find("button" + a, choose1[a]);

            showresult();
        }
    }
}

function find(id, guess) {
    var buttons = document.getElementById(id);
    buttons.onclick = function () {
        q.userGuess(guess);
        display();
    }
}

function showresult() {
    var currentQuestion = q.questionIndex + 1;
    var element = document.getElementById("current_ques");
    element.innerHTML = "Question " + currentQuestion+ " of " + q.questions.length;
}

function showMarks( ) {
    console.log(timeTaken);
    if (q.mark === 10){
        var que = "<h1>Results</h1>";
        que += "<br>"+"<h2>Question: "+q.correct+"  out of "+q.questions.length+"</h2>"+"<br>"
            +"<h2 id='marks'> marks: " + q.mark +" out of "+2*q.questions.length+ "</h2>" +"<br>"+
            "<h2 id='timeTaken'> Time Taken : " + timeTaken+"Sec</h2>";
        var element = document.getElementById("q");
        element.innerHTML = que;
        Background();

    }else if(q.mark >= 5) {
        var que = "<h1>Results</h1>";
        que += "<br>"+"<h2>Question: "+q.correct+"  out of "+q.questions.length+"</h2>" +"<br>"
            +"<h2 id='marks'> marks: " + q.mark +" out of "+2*q.questions.length+ "</h2>"+"<br>"+
            "<h2 id='timeTaken'> Time taken: " + timeTaken+" Sec</h2>";
        var element = document.getElementById("q");
        element.innerHTML = que;
        Background();

    }else if (q.mark >= 0) {
        var que = "<h1>Results</h1>";
        que += "<br>"+ "<h2>Question: "+q.correct+" out of "+q.questions.length+"</h2>"+"<br>"
            +"<h2 id='marks'> marks: " + q.mark +" out of "+2*q.questions.length+ "</h2>"+"<br>"+
            "<h2 id='timeTaken'> Time taken: " + timeTaken+" Sec </h2>";
        var element = document.getElementById("q");
        element.innerHTML = que;
        Background();

    } else {
        var que = "<h1>Results</h1>";
        que += "<br>"+"<h2>Question: "+q.correct+"  out of "+q.questions.length+"</h2>"+"<br>"
            +"<h2 id='marks'> marks: " + q.mark .toString()+" out of "+2*q.questions.length+ "</h2>"+"<br>"+
            "<h2 id='timeTaken'> Time taken: " + timeTaken+"Sec</h2>";
        var element = document.getElementById("q");
        element.innerHTML = que;
        Background();
    }

}
function Background() {
    if (q.correct ==10) {
        document.getElementById("col").style.backgroundColor = "green";
    }else if (q.correct >= 5 ){
        document.getElementById("col").style.backgroundColor = "yellow";
    }else if (q.correct >0){
        document.getElementById("col").style.backgroundColor = "orange";
    }else {
        document.getElementById("col").style.backgroundColor = "red";
    }

}





var questions = [
    new Questions("A Harley Davidson dealer wants to show you a CVO model, what does CVO stand for?",["Current Value Operation","Custom Vehicle Operation",
        "Custom Vehicle Order","Current Value Order"],"Custom Vehicle Operation"),
    new Questions("What company did Harley Davidson merge with in 1969?",
        [" Yamaha","Honda"," Custom Motorcycles Inc.","AMF"],"AMF"),
    new Questions("What saloon in Sturgis, SD has part of the name of a Harley Davidson engine as its name?",
        ["Panhead Pub","Full Throttle Saloon","Knuckle Saloon","Buffalo Chip"],"Knuckle Saloon"),
    new Questions("When riders are discussing Harley Davidson Motorcycles what does (Flathead) refer to?",
        ["Motorcycle Helmet"," Gas Tank","Custom Seat"," Engine"],"Engine"),
    new Questions("What family of Harley Davidson Motorcycles is the Ultra Classic motorcycle in?",
        ["Dyna"," Touring","Sportster"," Softail"],"Touring"),
    new Questions("What does the designation of (B) stand for on the engine type? For example a 2000 softail engine would be a Twin Cam 88B.",
        ["Beautiful Crome"," Balanced Crank","Bold","Blueprinted"],"Balanced Crank"),
    new Questions("What is the association that would award a patch for a 1000 mile ride in a 24 hour period?",
        ["Long Riders Association"," Long Distance Association"," Tough Men Association","Iron Butt Association"],"Iron Butt Association "),
    new Questions("What motorcycle has a fairing that is attached to the frame and doesn't turn with the front forks?",
        [" Road King","Street Glide"," Dyna Wide Glide"," Road Glide"],"Road Glide"),
    new Questions("Where are the shocks located on the Softail Model?",
        ["On the bottom","Softails don't have shocks","On the side"," Softails have air ride shocks"],"On the side"),
    new Questions("What company did Harley Davidson merge with in 1969?",
        [" Yamaha","Honda"," Custom Motorcycles Inc.","AMF"],"AMF"),
];

var q = new Quizes(questions);

display();
