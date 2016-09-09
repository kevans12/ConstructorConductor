//We're going to create the JS for a basic quiz application.

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors.

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

  function QuizUser(name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
  }


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

  function Question(title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
  }


//Create a quizUsers Array which is going to hold all of our users.

  var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

  var user1 = new QuizUser("john", "john@j.com", "pw", 20);
  var user2 = new QuizUser("jim", "jim@j.com", "pw2", 23);
  var user3 = new QuizUser("jack", "jack@j.com", "pw3", 18);

  quizUsers.push(user1, user2, user3);


//Create a questions Array which is going to hold all of our questions

  var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

  var question1 = new Question(1, ["T", "F"], 'Inheritance is achieved in JavaScript through Prototypes?', 5);
  var question2 = new Question(2, ["T", "F"], 'JavaScript is just a scripting version of Java', 2);
  var question3 = new Question(3, ["T", "F"], "In Javascript, == doesn\'t check \'type\' but just the value - where === checks type and value", 5);


//Now push all of your instances of Question into the questions Array

  questions.push(question1, question2, question3)

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

  for (var i = 0; i < quizUsers.length; i++) {
    console.log(quizUsers[i]);
  }
  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i]);
  }
