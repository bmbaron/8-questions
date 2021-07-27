let start = document.getElementById('start-button').addEventListener("click", chooseQuestion );
const timer = ms => new Promise(res => setTimeout(res, ms));
let questions = document.getElementsByClassName('question');
let actions = document.getElementsByClassName('action');

async function chooseQuestion () {
    
    let randomNum = Math.floor(Math.random() * questions.length+1);
    for(var i = 0; i < randomNum; i++)
    {

        questions[i].style.backgroundColor = "rgb(255, 180, 17)";
        await timer(200);
        questions[i].style.backgroundColor = "rgb(6, 163, 216)";
       if(i == randomNum-1) {            
            questions[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(6, 163, 216)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(6, 163, 216)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(6, 163, 216)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questions[i].style.backgroundColor = "rgb(255, 180, 17)";
            await timer(200);
            questions[i].classList.toggle('flipped');
            await timer(2000);
            chooseAction();
            await timer(3000);
            questions[i].classList.toggle('flipped');
            questions[i].style.backgroundColor = "rgb(6, 163, 216)";
            
       }

    }
    //let randomNum = Math.floor(Math.random() * questions.length);
    //questions[randomNum].style.backgroundColor = "red";
}

async function chooseAction () {
    let randomAct = Math.floor(Math.random()*3);
    actions[randomAct].classList.toggle('action-chosen');
    await timer(3000);
    actions[randomAct].classList.toggle('action-chosen');
   }