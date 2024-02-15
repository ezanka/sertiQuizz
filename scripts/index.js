var optionsFraise = ["Boule", "Cloche", "Elicoïdale", "Diamantée", "Poire", "Lentille"];
var randomIndexF = Math.floor(Math.random() * optionsFraise.length);
var randomFraise = optionsFraise[randomIndexF];

var optionsSerti = ["Serti à grain", "Serti à griffe", "Serti clos"];
var randomIndexS = Math.floor(Math.random() * optionsSerti.length);
var randomSerti = optionsSerti[randomIndexS];

var optionsEmaux = ["Transparents", "Translucides", "Opaques"];
var randomIndexE = Math.floor(Math.random() * optionsEmaux.length);
var randomEmaux = optionsEmaux[randomIndexE];

var optionsEchoppe = ["Champignon", "Poire", "Boule"];
var randomIndexEc = Math.floor(Math.random() * optionsEchoppe.length);
var randomEchoppe = optionsEchoppe[randomIndexEc];

let questionsData = [
    {
      text: "A quel endroit d'une pierre taillée se situe le feuilletis ?",
      answers: [
        {
          text: "Autour de la table",
          isCorrect: false
        },
        {
          text: "Entre la couronne et la culasse",
          isCorrect: true
        },
        {
          text: "A l'extrémité du la pierre",
          isCorrect: false
        },
        {
          text: "Les parties réflechissantes",
          isCorrect: false
        }
      ]
    },
    {
      text: "Combien y a-t-il de centièmes dans un carat ?",
      answers: [
        {
          text: "10",
          isCorrect: false
        },
        {
          text: "50",
          isCorrect: false
        },
        {
          text: "100",
          isCorrect: true
        },
        {
          text: "1000",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quelle est la pierre de synthèse qui imite le diamant ?",
      answers: [
        {
          text: "Zircon",
          isCorrect: false
        },
        {
          text: "L'oxyde de virconium",
          isCorrect: false
        },
        {
          text: "L'oxyde de zirconium",
          isCorrect: true
        },
        {
          text: "Saphire",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quelle est la dureté et la densité d'un diamant ?",
      answers: [
        {
          text: "Dureté : 10 - densité : 3.50",
          isCorrect: true
        },
        {
          text: "Dureté : 9 - densité : 10",
          isCorrect: false
        },
        {
          text: "Dureté : 3.50 - densité : 10",
          isCorrect: false
        },
        {
          text: "Dureté : 5 - densité : 0.3",
          isCorrect: false
        }
      ]
    },
    {
      text: "Comment fait-on un bâton à cire pour pierre ?",
      answers: [
        {
          text: "Avec de la cire d'abeille, charbon...",
          isCorrect: true
        },
        {
          text: "Avec de la cire d'abeille, poudre d'escampette...",
          isCorrect: false
        },
        {
          text: "Avec un bâtonnet de bois, de l'argile...",
          isCorrect: false
        },
        {
          text: "Avec de la cire de bougie, charbon...",
          isCorrect: false
        }
      ]
    },
    {
      text: "Comment prépare-t-on une poignée de sertisseur ?",
      answers: [
        {
          text: "Chauffer la cire sur la poignée en bois",
          isCorrect: false
        },
        {
          text: "Appliquer de la confiture sur la poignée en bois",
          isCorrect: false
        },
        {
          text: "Chauffer du ciment sur la poignée en bois",
          isCorrect: true
        },
        {
          text: "Mettre de l'argile sur une branche",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quelle est l'utilité d'un marteleur ?",
      answers: [
        {
          text: "Forger une bague",
          isCorrect: false
        },
        {
          text: "Déssertir une pierre",
          isCorrect: false
        },
        {
          text: "Tailler la pierre",
          isCorrect: false
        },
        {
          text: "Sert a rabattre le métal sur les pierres",
          isCorrect: true
        }
      ]
    },
    {
      text: "Citez le nom de différentes fraises ?",
      answers: [
        {
          text: "Tire-bouchon",
          isCorrect: false
        },
        {
          text: randomFraise,
          isCorrect: true
        },
        {
          text: "Pomme",
          isCorrect: false
        },
        {
          text: "Plate",
          isCorrect: false
        }
      ]
    },
    {
      text: "Comment procéder pour faire revenir une échoppe ?",
      answers: [
        {
          text: "La faire revenir avec du beurre",
          isCorrect: false
        },
        {
          text: "La faire jaunir un peu à la flamme",
          isCorrect: true
        },
        {
          text: "Tirer dessus au lance-flamme",
          isCorrect: false
        },
        {
          text: "Limer la partie abimée",
          isCorrect: false
        }
      ]
    },
    {
      text: "Quelle est l'utilité d'un fion ?",
      answers: [
        {
          text: "Stocker ddes noisettes",
          isCorrect: false
        },
        {
          text: "Chier",
          isCorrect: false
        },
        {
          text: "Faire les perloirs",
          isCorrect: true
        },
        {
          text: "Bouler",
          isCorrect: false
        }
      ]
    },
    {
      text: "L'utilisation du touret à meuler nécessite des précautions. Lesquelles ?",
      answers: [
        {
          text: "Blouse, lunettes, gants...",
          isCorrect: true
        },
        {
          text: "Combinaison, ski, batons...",
          isCorrect: false
        },
        {
          text: "Short, lunette, casquette...",
          isCorrect: false
        },
        {
          text: "Scaphandre.",
          isCorrect: false
        }
      ]
    },
    {
      text: "Décrivez trois formes de sertissage ?",
      answers: [
        {
          text: "Serti collé",
          isCorrect: false
        },
        {
          text: "Serti pendu",
          isCorrect: false
        },
        {
          text: "Serti rallye",
          isCorrect: false
        },
        {
          text: randomSerti,
          isCorrect: true
        }
      ]
    },
    {
      text: "Qu'est-ce que l'émail ?",
      answers: [
        {
          text: "Typé d'armure",
          isCorrect: false
        },
        {
          text: "Un courrier éléctronique",
          isCorrect: false
        },
        {
          text: "Un poisson",
          isCorrect: false
        },
        {
          text: "Une poudre vitrifiable",
          isCorrect: true
        }
      ]
    },
    {
      text: "Quels sont les différents émaux du point de vue de la lumière ?",
      answers: [
        {
          text: "Réflechissant",
          isCorrect: false
        },
        {
          text: randomEmaux,
          isCorrect: true
        },
        {
          text: "Mat",
          isCorrect: false
        },
        {
          text: "Linéaire",
          isCorrect: false
        }
      ]
    },
    {
      text: "Depuis quelle époque connaît-on l'usage de l'or ?",
      answers: [
        {
          text: "Environ 2000 ans",
          isCorrect: false
        },
        {
          text: "Environ 50 000 ans",
          isCorrect: false
        },
        {
          text: "Environ 6 000 ans",
          isCorrect: true
        },
        {
          text: "Environ 10 000 ans",
          isCorrect: false
        }
      ]
    },
    {
      text: "Citez trois formes de manche d'échoppe ?",
      answers: [
        {
          text: randomEchoppe,
          isCorrect: true
        },
        {
          text: "Conique",
          isCorrect: false
        },
        {
          text: "Fendu",
          isCorrect: false
        },
        {
          text: "Taillé",
          isCorrect: false
        }
      ]
    },
    {
      text: "Sur quoi faut-il se baser pour équilibrer une pierre sur un chaton ?",
      answers: [
        {
          text: "Sur la météo du jour et l'humeur du chaton",
          isCorrect: false
        },
        {
          text: "En utilisant un pendule",
          isCorrect: false
        },
        {
          text: "Sur la ceinture, le feuilletis et la table",
          isCorrect: true
        },
        {
          text: "Avec un niveau",
          isCorrect: false
        }
      ]
    },
    {
      text: "Pour dégager un grain faut-il partir de la pierre vers le filet ou l'inverse ?",
      answers: [
        {
          text: "De la pierre vers le filet",
          isCorrect: true
        },
        {
          text: "Du filet vers la pierre",
          isCorrect: false
        }
      ]
    },
    {
      text: "Par quel niveau faut-il commencer sur un serti à plusieurs niveaux ?",
      answers: [
        {
          text: "Par le plus haut",
          isCorrect: false
        },
        {
          text: "Par le plus bas",
          isCorrect: true
        }
      ]
    },
    {
      text: "Qu'appelle-t-on une chute de grain ?",
      answers: [
        {
          text: "Particules de métal qui sont dispersées lors d'une opération de meulage ou de polissage",
          isCorrect: false
        },
        {
          text: "Mouture grossière des grains de céréales",
          isCorrect: false
        },
        {
          text: "Combler un espace de métal sans pierres à l'aide de grains",
          isCorrect: true
        },
        {
          text: "Pluie soudaine et abondante qui peut endommager les cultures",
          isCorrect: false
        }
      ]
    }
  ];
  
  let questions = [];
  let score = 0,
  answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
  
    appContainer.appendChild(question.create());
    questions.push(question);
  }
  
  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    // if (answeredQuestions == questions.length) {
    //   setTimeout(function () {
    //     alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
    //   }, 100);
    // }
  });

console.log(questions, questionsData);

let questionIndex = 0;
let nextQuestionButton = document.getElementById('next-question-button');

function displayNextQuestion() {
  if (questionIndex < questions.length) {
    let currentQuestion = questions[questionIndex];
    appContainer.innerHTML = '';
    appContainer.appendChild(currentQuestion.create());
    questionIndex++;
    nextQuestionButton.disabled = true; 
  } else {
    displayFinalScore();
  }
}

function displayFinalScore() {
  let scoreMessage = document.createElement('div');
  scoreMessage.innerText = `Score final : ${score}/${questions.length}`;
  scoreMessage.style.position = 'fixed';
  scoreMessage.style.top = '50%';
  scoreMessage.style.left = '50%';
  scoreMessage.style.transform = 'translate(-50%, -50%)';
  scoreMessage.style.fontSize = '24px';
  scoreMessage.style.fontWeight = 'bold';
  scoreMessage.style.color = 'white';
  scoreMessage.style.border = '1px solid white';
  scoreMessage.style.borderRadius = '10px';
  scoreMessage.style.padding = '10px';
  document.body.appendChild(scoreMessage);

  document.getElementById('app-container').style.display = 'none';

  let restartButton = document.createElement('button');
  restartButton.innerText = 'Recommencer le quiz';
  restartButton.style.position = 'fixed';
  restartButton.style.bottom = '20px';
  restartButton.style.left = '50%';
  restartButton.style.transform = 'translateX(-50%)';
  restartButton.style.fontSize = '18px'; 
  restartButton.style.fontWeight = 'bold'; 
  restartButton.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif'; 
  restartButton.style.color = 'white'; 
  restartButton.style.background = 'rgb(13, 110, 221)'; 
  restartButton.style.padding = '10px 15px'; 
  restartButton.style.borderRadius = '10px'; 
  document.body.appendChild(restartButton);

  restartButton.addEventListener('click', function() {
    location.reload(); 
  });
}

displayNextQuestion();

document.addEventListener("question-answered", () => {
  nextQuestionButton.disabled = false; 
});
  
