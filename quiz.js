const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit-quiz');

const myQuestions = [
  {
    question: "When is the graduation date?",
    answers: {
      a: "31.5.2019",
      b: "1.6.2019",
      c: "2.6.2019",
      d: "Never"
            },
    correctAnswer: "b" // ?????
  },

  {
    question: "What is Sebastian Aho known for?",
    answers: {
      a: "Football",
      b: "Floorball",
      c: "Formula one",
      d: "hockey"
            },
    correctAnswer: "d"
  },

  {
    question: "Where is Waldo really?",
    answers: {
      a: "Antarctica",
      b: "Exploring the Pacific Ocean",
      c: "Sitting in a tree",
      d: "Minding his own business, so stop asking"
            },
    correctAnswer: "d"
  },


];

function startQuiz(){
  const output = []; //This is where the HTML code will be

  //For each question-object in the myQuestions-array, execute lines between 46 and 59
  myQuestions.forEach((currentQuestion, index) =>{ //currentQuestion = current question -object, index = index of the question object inside the myQuestions-array

    const answers = []; //answers will be saved to another array
        for(letter in currentQuestion.answers){ //Going through each property (a, b, c, and d) in the answers-object inside the question object
            answers.push(
              `<input type="radio" value ="${letter}" name="${index}">
               <label>
                      ${letter}:
                      ${currentQuestion.answers[letter]}
                </label>`
            ); //Adding this HTML code to answers -array
        }
        //Finally, adding all the HTML code together in the output array
    output.push(`<h3 class="question">${currentQuestion.question}</h3>
                <div class="answers">${answers.join('')}</div>`
              );

  });

  /*Displaying the HTML code on the page.
  Output array looks something like this:
  [
  <h3></h3><div><input><label><input><label></div>,
  <h3></h3><div><input><label><input><label></div>,
  (repeat for as many questions there are)
  ]*/
  quizContainer.innerHTML = output.join("-----");

}

function showResults(){
  //Retrieving the result element from the HTML document
  const resultsContainer = document.getElementById('results');
  let score = 0;
  //Retrieving all the answer containers (divs with class = answer, there are three) to an array.
  const answerContainers = document.querySelectorAll(".answers");

  //Going through each of the divs with class = answers one by one
  for (let i = 0; i < answerContainers.length; i++){
      let currentAnswerContainer = answerContainers[i];
      //Selecting all the input elements from the current div with class = answers
      let inputs = currentAnswerContainer.querySelectorAll("input");
      var userSelected;

      /*Going through each of the input -elements
        inside the current div class = answers  */
      for(let i = 0; i<inputs.length; i++){
          if(inputs[i].checked) userSelected = inputs[i].value;
      }

      //Check if the user selection matches the correct answer found in the array
      if(userSelected === myQuestions[i].correctAnswer){
        score++;
      }

  }

  resultsContainer.innerHTML = `You got ${score} correct.`
}


submitButton.addEventListener('click', showResults);
startQuiz();
