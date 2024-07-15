const questions = [
    {
        question:"what is the value of pi ?",
        answer:[ 
            { text:"3.12",correct:false},
            { text:"0.12",correct:false},
            { text:"3.14",correct:true},
            { text:"3",correct:false}

        ]
    },
    {
        question:"how many type of primitive data type in java ?",
        answer:[
            {text:8,correct:true},
            {text:5,correct:false},
            {text:9,correct:false},
            {text:11,correct:false}

        ]
    }
    ,
    {
        question:"void method does not ______ value  ?",
        answer:[
            {text:" zero ",correct:false},
            {text:" negative ",correct:false},
            {text:" retrun ",correct:true},
            {text:" integer ",correct:false}

        ]
    },
    {
        question:"What does HTML stand for?",
        answer:[
            {text:"hyperlink and text markup language",correct:false},
            {text:"hypertext markup language",correct:true},
            {text:"Home and text markup language",correct:false},
            {text:"Home tool markup language",correct:false}


        ]
    }

,
    {
        question:"Choose the correct HTML element for the largest heading",
        answer:[
            {text:"h6",correct:false},
            {text:"heading",correct:false},
            {text:"head",correct:false},
            {text:"h1",correct:true}

        ]
    },
    {
        question:"What is the correct HTML element for inserting a line break?",
        answer:[
            {text:"hr",correct:false},
            {text:"br",correct:true},
            {text:"head",correct:false},
            {text:"lb",correct:false}

        ]
    },
    {
        question:"Which character is used to indicate an end tag?",
        answer:[
            {text:"/",correct:true},
            {text:"*",correct:false},
            {text:"<",correct:false},
            {text:">",correct:true}

        ]
    },
    {
        question:"Inline elements are normally displayed without starting a new line.",
        answer:[
            {text:"False",correct:false},
           
            {text:"True",correct:true}

        ]
    }
,
    {
        question:"What does SQL stand for?",
        answer:[
            {text:"strong query language",correct:false},
            {text:"structure query language",correct:true},
            {text:"structure question language",correct:false},
            {text:"strong question language",correct:true}

        ]
    },
    {
        question:"Which SQL statement is used to extract data from a database?",
        answer:[
            {text:"GET",correct:false},
            {text:"EXTRACT",correct:false},
            {text:"SELECT",correct:true},
            {text:"OPEN",correct:false}

        ]
    },
    {
        question:"Which SQL statement is used to update data in a database?",
        answer:[
            {text:"upadte",correct:true},
            {text:"modify",correct:false},
            {text:"save",correct:false},
            {text:"save as",correct:false}

        ]
    },
    {
        question:"Which SQL statement is used to insert new data in a database?",
        answer:[
            {text:"insert new",correct:false},
            {text:"insert into",correct:true},
            {text:"add into",correct:false},
            {text:"add ",correct:false}


        ]
    }
];
const Question=document.getElementById("question");
const answerbutton=document.getElementById("answer-button");
const nextbtn=document.getElementById("next-btn");

let questionNum=0; 
let score=0;
let currentQuestion;
function start()
{
    questionNum=0;
    score=0;
    nextbtn.innerHTML="next";
    
    showQuestion();
}



function showQuestion() {
    
    resetState();
    const Question2 = document.getElementById("question");
  
    currentQuestion = questions[questionNum];
    let questionNo = questionNum + 1;
    Question2.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        
        if (answer.correct) {
            button.dataset.correct = "true"; // Ensure dataset is set correctly
        }
        
        button.addEventListener("click", selectedAnswer);
    });
}

function selectedAnswer(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct==="true";
    nextbtn.style.display="block";
    if(iscorrect)
    {
        selectedbtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedbtn.classList.add("Incorrect");

    }
    Array.from(answerbutton.children).forEach(button =>
        {
            if(button.dataset.correct==="true")
            {
                button.classList.add="correct";
            }
          
            button.disabled = true;
        }   
    );
   
}
function resetState()
{
    const result=document.querySelector(".result");
    result.style.display="none"
    nextbtn.style.display="none";
    while(answerbutton.firstChild)
    {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

/***************/
nextbtn.addEventListener("click" , ()=>{
   if(questionNum < questions.length)
   {
    questionNum++;
    handlenextbutton();
   }
   else{
start();
   }
});
function showScore()
{
    const answer=document.getElementById("question");
    resetState();
    const result=document.querySelector(".result");
    result.style.display="block";
    answer.innerHTML=`Your Score is ${score} out of ${questions.length}`;
    answer.style.display="flex";

    answer.style.alignItems="center";
    answer.style.justifyContent="center";

    nextbtn.innerHTML="play Again";
    nextbtn.style.display="block";

    const progressvalue=document.querySelector('.progress-value');
    const circularprogess=document.querySelector('.circular-progress');

    let progress_start=0;
    let progress_end=(score/questions.length)*100;
    let speed=20;

    let progress=setInterval(() =>{
        progress_start++;
        progressvalue.textContent=`${progress_start}%`;
        circularprogess.style.background=`conic-gradient(rgb(9, 12, 192) ${progress_start*3.6}deg, rgb(44, 38, 38) 0deg)`;
        
        if(progress_start >= progress_end)
        {
            clearInterval(progress);
        }

    }, speed);

    


}
function handlenextbutton(){
    
    if(questionNum < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}





start();



