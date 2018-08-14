var panel = $("#quiz-area");

// Questions
var questions = [{
  question: "1. What is a cheesemonger",
  answers: ["A cheese addict", "A bad cheese maker", "A professional cheese supplier", "A lover of all cheeses"],
  correctAnswer: "A professional cheese supplier"
}, {
  question: "2. Which English cheese is known as the 'King of Cheeses?",
  answers: ["Stilton", "Red Leicester", "Camembert", "Roquefort"],
  correctAnswer: "Stilton"
}, {
  question: "3. All of the following are examples 'soft-ripened' cheeses except",
  answers: ["Brie de Meaux", "Swiss", "Cheddar", "Bucheron"],
  correctAnswer: "Cheddar"
}, {
  question: "4. Speaking of 'soft-ripened' cheese, which of the following is false?",
  answers: ["They're covered with penicillin mold", "They're only 'ripe' for a short period of time", "They're sometimes wiped with brine", "They ripen from the inside out"],
  correctAnswer: "They ripen from the inside out"
}, {
  question: "5. An American favorite, Cheddar, derives its orange color from what?",
  answers: ["Orange food coloring", "From 10 percent Buttermilk added to the curds", "Occurs naturally because of the long aging period", "Annatto seeds"],
  correctAnswer: "From 10 percent Buttermilk added to the curds"
}];

// Variable that holds setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 90,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIMES UP!");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
