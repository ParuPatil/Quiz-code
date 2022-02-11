//for questions we created an array of obj

const quizDB=[
    {
        question: "01.What is full form of HTML?",
        a: "HyperType Markup Language",
        b: "Hey Text Markup Language",
        c: "HyperText Makeup Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "02.To make a comment in HTML we use",
        a: "//",
        b: "/* */",
        c: "<!--  -->",
        d: "#",
        ans: "ans3"
    },
    {
        question: "03.A JS method named toString() returns",
        a: "String as a number",
        b: "Alphanumeric pattern as a string",
        c: "Number as a string",
        d: "Exponential as a string",
        ans: "ans3"
    },
    {
        question: "04.Where in an HTML doc. is to refer an external style sheet?",
        a: "in the <body> section",
        b: "in the <head> section",
        c: "at the end of document",
        d: "in the css section",
        ans: "ans2"
    },
    {
        question: "05.Select the rule set to make all the text in your webpage blue and centered.",
        a: "p{color:blue}",
        b: "body{text-align:left;color:blue}",
        c: "body{text-align:center;color:blue}",
        d: "body{text-align:center;background-color:blue}",
        ans: "ans3"
    },
    {
        question: "06.The element used as container for some text is defined as?",
        a: "span",
        b: "container",
        c: "div",
        d: "style",
        ans: "ans1"
    },
    {
        question: "07.In JS short dates are written in syntax",
        a: "DD/MM/YY",
        b: "MM/DD/YY",
        c: "MM/YYYY",
        d: "DD/YY",
        ans: "ans2"
    },
    {
        question: "08.In HTML elements, CSS can be added in ",
        a: "4 ways",
        b: "2 ways",
        c: "3 ways",
        d: "1 way",
        ans: "ans3"
    },
    {
        question: "09.The typeof operator of JS always returns a/an?",
        a: "Object",
        b: "Function",
        c: "String",
        d: "Number",
        ans: "ans3"
    },
    {
        question: "10.Is JS case-sensitive?",
        a: "No",
        b: "Yes",
        c: "Yes (exception for few cases)",
        d: "None",
        ans: "ans2"
    }
];

/*every place should  be referenced (Q , all options) so we have
all id and class given */
const question = document.querySelector('.question'); //Q is a class so . 
const option1 =  document.querySelector('#option1'); //OPt is an id so #
const option2 =  document.querySelector('#option2');
const option3 =  document.querySelector('#option3');
const option4 =  document.querySelector('#option4');
const submit = document.querySelector('#submit');


//refering  for all opt having same class 
const Ans = document.querySelectorAll('.answer'); //it gives an array

/*refernce is done but Q nd opt should be loaded so we r  
defining a function and then calling a function*/
 
let questionCount = 0;
let score=0;
const loadQuestion = () => {
        /*  console.log(quizDB[0]);  
          //when clicked on submit we get Q1 on console and in ascen alpha order
          console.log(quizDB[0].question); 
          // we r getting Q on console */

       /* question.innerHTML = quizDB[0].question;
        /*this will refers to Q1 given for  const question 
        but get for only 0 index so we will take a counter and inc */
        
        //to make it easy 
        const questionList = quizDB[questionCount]
       question.innerHTML = questionList.question;

       option1.innerHTML = questionList.a;
       option2.innerHTML = questionList.b;
       option3.innerHTML = questionList.c;
       option4.innerHTML = questionList.d;


      }


loadQuestion();


const getCheckAnswer = () => {   // defining a function
       let answer;
       /* we r checking which opt user clicked 
       we check for all opt so create a ref for options 
       as we given a same class (ans) for all opt - so do it up 
       we use forEach to check the currentAns to be checked 
       and after checked if yes then we r returning currAns's id
       bcoz id is diff for opt and gives which opt was selected*/
       Ans.forEach((currAns) => {
           if(currAns.checked){
               answer = currAns.id;
           }
       });
        return answer;//returns the id after loops for 4 opt
    };

    //for deselecting opt everytime when we opt for ans for evry Q

    const deselectAll = () => {
         Ans.forEach((currAns) => currAns.checked = false);
    }



/* so now we have to check the users ans with the correct ans 
when submit is clicked - so we r having an event here
we already had referenced submit before ( const submit )  and
add eventListener when user clicks it we r creating a
  anonymous function(no name yet) by default 
  now to check which opt did user choose - call a function (getCheckAnswer)


*/

submit.addEventListener('click',() =>{
            const checkedAns = getCheckAnswer();
            console.log(checkedAns); // returns in console which is clicked

      
            /*now 1.we should compare the ans 
            and 2.when clicked on submit should load next Q everytime
            */
           if(checkedAns === quizDB[questionCount].ans){
                score++; //define it before
           };
             
           // to load next Q
           questionCount++;  //to go for next Q2 , Q3 Q4 Q5 .....

           // by default - once which opt selected will be by default gone for next Q so
           deselectAll();

           if(questionCount < quizDB.length){
               loadQuestion();
           }
           else{  //after all Q
               showscore.innerHTML = ` 
               <h3> You scored ${score}/${quizDB.length} </h3>
               <button class="btn" onclick="location.reload()">Play Again</button>
               `; //to add 2 elements ``
               showscore.classList.remove('scoreArea');
               /* at last score should be shown 
               so  remove is done bcoz earlier we done class showAcore 
               to  display: none inside this else only */

           }




});