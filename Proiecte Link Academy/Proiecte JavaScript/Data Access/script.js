fetch("https://www.link-elearning.com/linkdl/coursefiles/1470/quiz.json")
  .then((res) => res.json())
  .then((data) => {
    let showResult = document.getElementById("showResult");
    let questions = data.quiz;

    // console.log(data);
    // console.log(questions);

    for (let question in questions) {
      if (questions.hasOwnProperty(question)) {
        let questionData = questions[question];
        console.log(questionData);

        let questionText = questionData.question;
        let options = questionData.options;
        // console.log(options);

        let questionEl = document.createElement("h2");
        questionEl.innerHTML = questionText;
        showResult.appendChild(questionEl);

        for (let i = 0; i < options.length; i++) {
          let responseLabel = document.createElement("label");
          // console.log(responseLabel);
          let responseRadio = document.createElement("input");
          // console.log(responseRadio);
          responseRadio.type = "radio";
          responseRadio.name = question;
          responseRadio.value = options[i];

          responseLabel.appendChild(responseRadio);
          responseLabel.appendChild(document.createTextNode(options[i]));
          showResult.appendChild(responseLabel);
          showResult.appendChild(document.createElement("br"));

          responseRadio.addEventListener("change", function (e) {
            let selectedAnswer = e.target.value;
            localStorage.setItem(question, selectedAnswer);
          });

          let storedAnswer = localStorage.getItem(question);
          if (storedAnswer === options[i]) {
            responseRadio.checked = true;
          }
        }

        showResult.appendChild(document.createElement("br"));
      }
    }
  })
  .catch((err) => console.log(err));
