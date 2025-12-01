<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Spanish Mini Quiz</title>
  <style>
body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: none;
      height: 100vh;
      margin: 20px;
	color: black;
background-color: beige;
    }
    h1 {
	margin-top: 150px;
      margin-bottom: 50px;
    }
    .question-box {
      background: #f8e5c5;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 80%;
      max-width: 50%;
}
    .options button {
      display: block;
      margin: 10px auto;
      padding: 20px;
      width: 80%;
      border: none;
      border-radius: 5px;
      background-color: #fac499;
      cursor: pointer;
      font-size: 1em;
}
    .options button:hover {
      background-color: #edc685;
    }
    .result {
      margin-top: 20px;
      font-weight: bold;
    }

  </style>
</head>
<body>
<h1>Spanish Mini Quiz</h1>
  <div class="question-box">
    <div id="question" style="font-weight: bold; font-style: italic; padding: 10px;">Loading...</div>
    <div class="options" id="options"></div>
    <div class="result" id="result"></div>
  </div>
<script>
    const words = [
      ["el perro", "the dog"], ["el gato", "the cat"], ["la casa", "the house"], ["el libro", "the book"],
      ["la silla", "the chair"], ["el coche", "the car"], ["la mesa", "the table"], ["el árbol", "the tree"],
      ["el niño", "the boy"], ["la niña", "the girl"], ["el zapato", "the shoe"], ["la escuela", "the school"],
      ["el sol", "the sun"], ["la luna", "the moon"], ["el agua", "the water"], ["el pan", "the bread"],
      ["el queso", "the cheese"], ["el reloj", "the watch"], ["la ventana", "the window"], ["la puerta", "the door"],
      ["el amigo", "the friend"], ["la playa", "the beach"], ["el río", "the river"], ["la montaña", "the mountain"],
      ["la ciudad", "the city"], ["el campo", "the countryside"], ["la calle", "the street"], ["el edificio", "the building"],
      ["la comida", "the food"], ["la bebida", "the drink"], ["el tren", "the train"], ["el avión", "the airplane"],
      ["el mar", "the sea"], ["el jardín", "the garden"], ["la flor", "the flower"], ["el pez", "the fish"],
      ["el pájaro", "the bird"], ["el huevo", "the egg"], ["la leche", "the milk"], ["el teléfono", "the phone"],
      ["la computadora", "the computer"], ["el papel", "the paper"], ["el lápiz", "the pencil"],
      ["el bolígrafo", "the pen"], ["el trabajo", "the job"], ["la oficina", "the office"],
      ["el jefe", "the boss"], ["la camisa", "the shirt"], ["el pantalón", "the pants"],
      ["la chaqueta", "the jacket"], ["el vestido", "the dress"]
    ];

    while (words.length < 100) {
      words.push(...words.slice(0, Math.min(100 - words.length, words.length)));
    }
const allTranslations = [...new Set(words.map(w => w[1]))];
    const quiz = words.slice(0, 100).map(([spanish, correct]) => {
      const wrong = allTranslations.filter(w => w !== correct);
      const options = [...wrong.sort(() => 0.5 - Math.random()).slice(0, 2), correct].sort(() => 0.5 - Math.random());
      return {
        question: `What does '${spanish}' mean?`,
        options,
        answer: correct
      };
    });

    let current = 0;

    function loadQuestion() {
      const q = quiz[current];
      document.getElementById("question").textContent = q.question;
      const optionsBox = document.getElementById("options");
      optionsBox.innerHTML = "";
      document.getElementById("result").textContent = "";
q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => handleAnswer(option);
        optionsBox.appendChild(btn);
      });
    }

    function handleAnswer(selected) {
      const isCorrect = selected === quiz[current].answer;
      document.getElementById("result").textContent = isCorrect ? "✅ Correct!" : `❌ Wrong. Correct answer: ${quiz[current].answer}`;
      setTimeout(() => {
        current++;
        if (current < quiz.length) {
          loadQuestion();
        } else {
          document.getElementById("question").textContent = "Quiz complete!";
          document.getElementById("options").innerHTML = "";
        }
      }, 1500);
    }

    loadQuestion();
  </script>
</body>
</html>
