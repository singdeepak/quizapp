const questions = [
    {
        question : "Which of the following is markup languages..?",
        option1 : "Java",
        option2 : "CPP",
        option3 : "HTML",
        option4 : "CSS",
        answer : "option3"
    },

    {
        question : "In which state city pauri located..?",
        option1 : "Goa",
        option2 : "Uttarakhand",
        option3 : "Maharashtra",
        option4 : "Punjab",
        answer : "option2"
    },

    {
        question : "When, India celebrate its independant day..?",
        option1 : "1950",
        option2 : "1942",
        option3 : "1948",
        option4 : "1947",
        answer : "option4"
    }
];

const ques = document.querySelector('.question');
const radio = document.querySelectorAll('.option');
const btn = document.querySelector('.btn');

let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;

const loadQuestion = index => {
    if(index == questions.length){
        return showResult();
    }
    resetForm();
    ques.innerText = questions[index].question;
    radio[0].nextElementSibling.innerText = questions[index].option1;
    radio[1].nextElementSibling.innerText = questions[index].option2;
    radio[2].nextElementSibling.innerText = questions[index].option3;
    radio[3].nextElementSibling.innerText = questions[index].option4;
}

const showResult = () => {
    document.querySelector('.main').innerHTML = (`Total number of question : ${questions.length}<br>
    Your right answers : ${right}<br> Your wrong answers : ${wrong}`);
}


const getAnswer = () => {
    let ans;
    radio.forEach(input => {
        if(input.checked){
            ans =  input.value;
        }
    });
    return ans;
}

const resetForm = () => {
    radio.forEach(input =>{
        input.checked = false;
    });
}

loadQuestion(index);


btn.addEventListener('click', function(){
    let ans = getAnswer();
    if(ans == questions[index].answer){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion(index);
});