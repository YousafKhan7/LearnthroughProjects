const questions = [
    {
        question: "Who is pakistan most shitty politician?",
        answer: [
            {
                test: "Nawaz Sharif", correct: false
            },
            {
                test: "Asif Ali Zardari", correct: false
            },
            {
                test: "Imran Khan", correct: true
            },
            {
                test: "Fazul Rehman", correct: false
            }
        ]
    },
    {
        question: "Who is pakistan most Progressive politician?",
        answer: [
            {
                test: "Maryam Nawaz Sharif", correct: false
            },
            {
                test: "Bilawal Bhutto Zardari", correct: true
            },
            {
                test: "Anyone From PTI", correct: false
            },
            {
                test: "None For Now", correct: false
            }
        ]
    },
    {
        question: "Pakistan is in this state because of?",
        answer: [
            {
                test: "S Army", correct: true
            },
            {
                test: "Politics", correct: false
            },
            {
                test: "Economy", correct: false
            },
            {
                test: "confusion to choose between religion and liberalism", correct: false
            }
        ]
    },
    {
        question: "Why Youth Support Imran Khan",
        answer: [
            {
                test: "Due to immaturity", correct: false
            },
            {
                test: "Because of being Sentimental", correct: false
            },
            {
                test: "They do not understand a shit", correct: false
            },
            {
                test: "All of the above and much more", correct: true
            }
        ]
    }
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton    = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;
function startQuiz(){
    resetState();
    questionIndex= 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNumber = questionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
    currentQuestion.answer.forEach(answers =>
        {
                const button = document.createElement('button');
                button.innerHTML = answers.test;
                button.classList.add('btn');
                answerButtons.appendChild(button);
                if(answers.correct){
                    button.dataset.correct = answers.correct
                }
                button.addEventListener('click', selectAnswer)
    });
}

    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect)
        {
            selectedBtn.classList.add("correct");
            score++;
        }
        else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true")
            {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
        
    }
 
    function showScore()
    {
        resetState();
        questionElement.innerHTML = `you scored ${score} out of ${questions.length} !`;
        nextButton.innerHTML ="Play Again";
        nextButton.style.display ="block";
    }

    function handleNextButton(){
        questionIndex++;
        if(questionIndex < questions.length)
        {
            showQuestion();
        }
        else {
            showScore();
        }
    }
    nextButton.addEventListener('click', ()=>{
            if(questionIndex < questions.length)
            {
                handleNextButton();

            }
            else {
                startQuiz();
            }
    
    });
startQuiz();