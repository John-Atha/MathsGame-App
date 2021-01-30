function hideAll() {
    document.querySelector('#select-page').style.display="none";
    document.querySelector('#menu-page').style.display="none";
    document.querySelector('#about-page').style.display="none";
    document.querySelector('#winner-page').style.display="none";
    document.querySelector('#score-page').style.display="none";
    document.querySelector('#scoresheet').style.display="none";
    document.querySelector('#problem-page').style.display="none";
}

var list4 = [];
if (!localStorage.getItem('list4')) {  // h "list4" tha mpei edw
    ;
}
else { 
    list4 = JSON.parse(localStorage.getItem('list4'));
}

let score = 0;
let num1 = 1;
let num2 = 1;
let operator="+";
let start = true;
let timer = 0;
let final_timer = 0;
let good_message = "";
let bad_message = "";
let counter = 0;
let correct =false;
let scoresheet;
let choice;
let first = true;


function add_sub_proposals() {
    let a = Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10) + 1;
    if (a>b) {
        num1=a;
        num2=b;
    }
    else {
        num1=b;
        num2=a;
    }
}

function mul_proposals() {
    num1 = Math.floor(Math.random() * 10)+1;
    num2 = Math.floor(Math.random() * 10);
}
            
function div_proposals() {
    let a = (Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10))*3;
    let b = Math.floor(Math.random() * 10) + 1;
    if (a>b) {
        num1=a;
        num2=b;
    }
    else {
        num1=b;
        num2=a;
    }
}

function correct_ans() {
    if (!correct) {
        counter=0;
    }              
    correct=true;
    counter++;
    score++;
    good_message = "Correct !!!";
    bad_message = "";
}

function wrong_ans() {
    if (counter>0) {
        counter=-1;
    }
    else if (counter<-4) {
        counter=-1;
    }
    else {
        counter--;
    }
    correct = false;
    score--;
    bad_message = "Wrong, try again !!!";
    good_message = "";
}

function decide () {
        const ans = document.querySelector('#ans-input').value;
        switch (operator) {
            case "+":
                if (ans==num1+num2) {
                    correct_ans();
                }
                else {
                    wrong_ans();
                }
                break;
            case "*":
                if (ans==num1*num2) {
                    correct_ans();
                }
                else {
                    wrong_ans();
                }
                break; 
            case "-":
                if (ans==num1-num2) {
                    correct_ans();
                }
                else {
                    wrong_ans();
                }
                break;
            case "/":
                if (ans==Math.floor(num1/num2)) {
                    correct_ans();
                }
                else {
                    wrong_ans();
                }
                break;
        }
}   

function good_message_decide() {
    switch (counter) {
        case 1:
            good_message="Good job !";
            break;
        case 2:
            good_message="Nice !";
            break;
        case 3:
            good_message="Looks like you are finding your steps !";
            break;
        case 4:
            good_message="Keep it up !";
            break;
        case 5:
            good_message="That's a good streak for sure !";
            break;
        case 6:
            good_message="Someone is on FIRE !!";
            break;
        case 7:
            good_message="Have you ever thought of becoming a maths teacher ?!";
            break;
        case 8:
            good_message="Unbelievable !!!";
            break;
        case 9:
            good_message="Almost Perfect, just one more !";
            break;
    }
}

function bad_message_decide() {
    switch (counter) {
        case -1:
            bad_message="Wrong, try again !!!";
            break;
        case -2:
            bad_message="Think harder !!";
            break;
        case -3:
            bad_message="Take your time !";
            break;
        case -4:
            bad_message="Try writing it down !";
            break;
        case -5:
            bad_message="Come on !!";
            break;
    }
}

function end_game() {
    score = 0;
    start = true;
    final_timer = 0 ;
    document.querySelector('#score-page').style.display="none";
    document.querySelector('#ans-input').value = "";
    hideAll();
}

function end_middle_game() {
    score = 0;
    start = true;
    final_timer = 0;
    document.querySelector('#score-page').style.display="none";
    document.querySelector('#ans-input').value = "";
    document.querySelector('#problem-page').style.display="none";
    document.querySelector('#about-page').style.display="none";
    document.querySelector('#menu-page').style.display="grid";
    document.querySelector('#select-page').style.display="none";
}

function time() {
    timer++;
    let str = "";
    let mins = Math.floor(timer / 60);
    let secs = timer % 60;
    if (mins < 10 && secs<10) {
        if (mins>=1) {
            str="min";
        }
        else {
            str="sec";
        }
        document.querySelector('#hurry').innerHTML= `Hurry up!<br>
                                                0${mins}:0${secs} ${str}` 
    }
    else if (mins<10 && secs>=10) {
        if (mins>=1) {
            str="min";
        }
        else {
            str="sec";
        }
        document.querySelector('#hurry').innerHTML= `Hurry up!<br>
                                                0${mins}:${secs} ${str}` 
    }
    else if (mins>=10 && secs<10) {
        document.querySelector('#hurry').innerHTML= `Hurry up!<br>
                                                ${mins}:0${secs} min` 
    }
    else if (mins>=10 && secs>=10) {
        document.querySelector('#hurry').innerHTML= `Hurry up!<br>
                                                ${mins}:${secs} min` 
    }

}
setInterval(time, 1000);

function show_time(fin) {
    let str = "";
    let mins = Math.floor(fin / 60);
    let secs = fin % 60;
    if (mins < 10 && secs<10) {
        if (mins>=1) {
            str="min";
        }
        else {
            str="sec";
        }
        return( `0${mins}:0${secs} ${str}`);
    }
    else if (mins<10 && secs>=10) {
        if (mins>=1) {
            str="min";
        }
        else {
            str="sec";
        }
        return(`0${mins}:${secs} ${str}`); 
    }
    else if (mins>=10 && secs<10) {
        return(`${mins}:0${secs} min`); 
    }
    else if (mins>=10 && secs>=10) {
        return(`${mins}:${secs} min`); 
    }
}


function reload () {
    if (score < 10) {
        document.querySelector('#score-save').style.display="none";
        document.querySelector('#select-page').style.display="none";
        document.querySelector('#winner-page').style.display="none";
        document.querySelector('#about-page').style.display="none";
        document.querySelector('#problem-page').style.display="block";
        //document.querySelector('#question').innerHTML = `${num1} ${operator} ${num2} = ?`
        document.querySelector('#score').innerHTML = `Score: ${score}`
        document.querySelector('#ans-input').value = "";
        if (good_message==="") {
            document.querySelector('#good_question').style.animationPlayState = "paused";
            document.querySelector('#good_message').innerHTML = "";
            bad_message_decide();
            document.querySelector('#bad_message').innerHTML = bad_message;
            document.querySelector('#good_question').innerHTML = "";
            document.querySelector('#bad_question').innerHTML = `${num1} ${operator} ${num2} = ?`
        }
        else {
            document.querySelector('#bad_question').innerHTML = "";
            document.querySelector('#good_question').innerHTML = `${num1} ${operator} ${num2} = ?`
            document.querySelector('#good_question').style.animationPlayState = "running";
            setTimeout(function(){ 
                //document.querySelector('#question').style.animationPlayState = "paused";
                switch (operator) {
                    case "+":
                        add_sub_proposals();
                        break;
                    case "*":
                        mul_proposals()
                        break; 
                    case "-":
                        add_sub_proposals();
                        break;
                    case "/":
                        div_proposals();
                        break;
                }
                document.querySelector('#good_question').innerHTML = `${num1} ${operator} ${num2} = ?` },
                500);
                document.querySelector('#good_question').style.animationPlayState = "playing";
            setTimeout(function(){ 
                document.querySelector('#good_question').style.animationPlayState = "paused";},
                600);
            document.querySelector('#bad_message').innerHTML = "";
            good_message_decide();
            document.querySelector('#good_message').innerHTML = good_message;
        }
        
        document.querySelectorAll('#home').forEach( function(button) {
            button.onclick = () => {
                document.querySelector('#bad_message').innerHTML = "";
                document.querySelector('#good_question').innerHTML = ""; 
                end_middle_game();
            }
        })
    }

    else if (score == 10) {
        
        //document.querySelector('#question').style.animationPlayState = "paused";
        
            
        document.querySelector('#ans-input').value = "";
        hideAll();
        document.querySelector('#winner-page').style.display="grid";
        console.log("winner");
        document.querySelector('#playAgain').onclick = () => {
            end_game();
            document.querySelector('#select-page').style.display="grid";
        }

        document.querySelectorAll('#home').forEach( function(button) {
            button.onclick = () => {
                end_game();
                document.querySelector('#bad_message').innerHTML = "";
                document.querySelector('#good_question').innerHTML = "";    
                document.querySelector('#menu-page').style.display="grid";
            }
        })

        document.querySelector('#save-score').onclick = () => {
            hideAll();
            document.querySelector('#score-page').style.display="grid";
            document.querySelector('#score-save').style.display="grid"; 
            document.querySelector('#score-revision').innerHTML=`Your time is ${show_time(final_timer)}`;
            const scoreForm = document.querySelector('#score-form');
            const nickname = document.querySelector('#nickname');
            const scoreSubmit = document.querySelector('#score-submit');
            scoreSubmit.disabled = true;

            nickname.onkeyup = () => {
                if (document.querySelector('#nickname').value.length === 0) {
                    scoreSubmit.disabled = true;
                }
                else {
                    scoreSubmit.disabled = false;
                }
            }                       

            scoreForm.onsubmit = () => {
                let entry = {name: document.querySelector('#nickname').value,
                                game: operator, 
                                timeScore: final_timer,
                                datetime: Date.now()}
                //const entry = `${document.querySelector('#nickname').value}  ${final_timer}`;
                const submit = document.querySelector('#score-submit');
                //console.log(entry);
                list4.push(entry);
                console.log(list4);
                list4.sort(function(a,b) { return (b.timeScore - a.timeScore ) });
                let len=list4.length;
                document.querySelector('#scoresheet').innerHTML="";
                var table = document.querySelector('#scoresheet');
                var title_row = table.insertRow(0);
                var title1 = title_row.insertCell(0);
                var title2 = title_row.insertCell(1);
                var title3 = title_row.insertCell(2);                               
                title1.innerHTML = 'Nickname';                              
                title2.innerHTML = 'Game';
                title3.innerHTML = 'Time';
                for (i=0; i<len; i++) {

                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);                                                    
            
                    row.className = "even-row";
                    cell1.innerHTML = `${list4[i].name}`;                              
                    cell2.innerHTML = `${list4[i].game}`;                              
                    cell3.innerHTML = `${show_time(list4[i].timeScore)}`;

                
                }
                //localStorage.setItem('list4', list4);
                localStorage.setItem('list4', JSON.stringify(list4));
                
                nickname.value = "";
                submit.disabled = true;
                score = 0;
                start = true;
                final_timer = 0;
                document.querySelector('#score-save').style.display="none";
                document.querySelector('#scoresheet').style.display="grid";
                return false;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded',  () => {

    if (first) {
        if (localStorage.getItem('list4')) {  // h "list4" tha mpei edw
            list4 = JSON.parse(localStorage.getItem('list4'));
        }
        let len=list4.length;
        var table = document.querySelector('#scoresheet');
        var title_row = table.insertRow(0);
        var title1 = title_row.insertCell(0);
        var title2 = title_row.insertCell(1);
        var title3 = title_row.insertCell(2);                               
        title1.innerHTML = 'Nickname';                              
        title2.innerHTML = 'Game';
        title3.innerHTML = 'Time';
        for (i=0; i<len; i++) {
            var row = table.insertRow(1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);                                                    
            row.className = "even-row";
            cell1.innerHTML = `${list4[i].name}`;                              
            cell2.innerHTML = `${list4[i].game}`;                              
            cell3.innerHTML = `${show_time(list4[i].timeScore)}`;    
        }
        first = false;

    }
    document.querySelector('#bad_question').innerHTML = "";
    document.querySelector('#good_question').style.animationPlayState = "paused";
    document.querySelector('#ans-input').autofocus = true;
    const form = document.querySelector('#answer-form');
    const submit = document.querySelector('#ans-submit');
    const answer = document.querySelector('#ans-input');
    submit.disabled = true;
    reload();
    
    hideAll();
    document.querySelector('#menu-page').style.display="grid";

    document.querySelectorAll('.menu-button').forEach( function(button) {
        button.onclick = () => {
            hideAll();
            choice = button.dataset.goal;
            switch (choice) {
                case "play":
                    document.querySelector('#select-page').style.display="grid";
                    break;
                case "highscores":
                    document.querySelector('#score-page').style.display="grid";
                    document.querySelector('#scoresheet').style.display="grid";
                    break;
                case "about-us":
                    document.querySelector('#about-page').style.display="grid";
                    break;
            }
        }
    })

    document.querySelectorAll('#home').forEach( function(button) {
        button.onclick = () => {
            hideAll();
            document.querySelector('#menu-page').style.display="grid";

        }
    })
        
    document.querySelectorAll('.operation').forEach( function(button) {
        button.onclick = function () {
            operator = button.dataset.test;
            switch (operator) {
            case "+":
                add_sub_proposals();
                break;
            case "*":
                mul_proposals()
                break; 
            case "-":
                add_sub_proposals();
                break;
            case "/":
                div_proposals();
                break;
        }
            timer = 0;
            hideAll();
            document.querySelector('#problem-page').style.display="grid";
            document.querySelector('#good_message').innerHTML = "Good Luck !!";
            document.querySelector('#bad_question').innerHTML = "";
            document.querySelector('#good_question').innerHTML = `${num1} ${operator} ${num2} = ?`
            setTimeout(function(){ }, 3000);
            document.querySelector('#score').innerHTML = `Your Score:<br>${score}`

            answer.onkeyup = () => {
                if (document.querySelector('#ans-input').value.length===0) {
                    submit.disabled=true;
                }
                else {
                    submit.disabled=false;
                }
            }
            
            form.onsubmit = () => {
                final_timer = timer;
                start = false;
                decide();
                reload();
                document.querySelector('#ans-input').autofocus = true;
                return false;
            }
        }
    })
                    
})

