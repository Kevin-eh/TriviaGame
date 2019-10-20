$(document).ready(function() {
  var dogquestions = [
    {
      question:
        "A major plot point of the film is a dating profile set up on perfectmatch.com. What other film is this actual dating site prominently featured in?",
      choices: [
        "Love, Actually",
        "Marley and Me",
        "Paul Blart: Mall Cop",
        "Chef"
      ],
      answer: 2
    },
    {
      question:
        "So I learned that Must Love Dogs is based on a novel by Clair Cook and it's part of a series. Which one of these is not an actual book in the Must Love Dogs saga?",
      choices: [
        "Must Love Dogs: Who Let the Cats In?",
        "Must Love Dogs: All Things Are Pawsible",
        "Must Love Dogs: Bark & Roll Forever",
        "Must Love Dogs: Fetch You Later"
      ],
      answer: 1
    },
    {
      question:
        "The titutalar 'Dog' that must be loved is a Newfoundland named after which saint born in Skopje?",
      choices: ["Mother Teresa", "Joan of Arc", "John Paul", "Judith Stein"],
      answer: 0
    },
    {
      question:
        "Must Love Dogs did not win or get nominated for any Golden Globes. However Joan Cusak's character does attend a theatre screening of which film that won the Best Drama Golden Globe in 1965?",
      choices: [
        "Zorba the Greek",
        "Doctor Zhivago",
        "Who's Afraid of Virginia Wolf?",
        "Bonnie and Clyde"
      ],
      answer: 1
    },
    {
      question:
        "Must Love Dogs star Diane Lane is featured on a wikipeida page of 'Notable People Named Diane' which includes other actresses named Diane such as Diane Keaton, Diane Kruger, and Diane Ladd. Diane Ladd, who's won both a BAFTA and a Golden Globe, is also the mother of which 'Big Little Lies' star?",
      choices: ["Laura Dern", "Adam Scott", "Nicole Kidman", "Iain Armitage"],
      answer: 0
    }
  ];
  var correct = 0;
  var incorrect = 0;
  var timer = 30;
  var intervalID;
  var userguess;
  var timerOn = false;
  var QuestionCount = dogquestions.length;
  $("#start").on("click", function(event) {
    $("#intro").hide();
    $("#start").hide();
    displayQuestion();
  });

  function displayQuestion() {
    for (var g = 0; g < dogquestions.length; g++) {
      $("#questiondisplay").append("<h3>" + dogquestions[g].question + "</h3>");
      for (var q = 0; q < dogquestions[g].choices.length; q++) {
        $("#questiondisplay").append(
          "<button class='btn' attr='" +
            [q] +
            "' id='choice'>" +
            dogquestions[g].choices[q] +
            "</button>"
        );
      }
    }
  }

 $(document).on("click", ".choice", function () {
      userGuess = parseInt($(this).attr("data-guessvalue"));
  //   setTimeout(function() {
  //     runtimer();
  //   }, 30000);

  //   function runTimer() {
  //     if ((timerOn = False)) {
  //       intervalId = setInterval(decrement, 1000);
  //       TimerOn = true;
  //     }
  //   }
});
