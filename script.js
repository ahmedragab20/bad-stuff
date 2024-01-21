let questions = [
  {
    id: 1,
    isCorrect: null,
  },
  {
    id: 2,
    isCorrect: null,
  },
  {
    id: 3,
    isCorrect: null,
  },
  {
    id: 4,
    isCorrect: null,
  },
];
let wrongAnsweredQuestions = [];
let count = 0;
const clone = (value) => JSON.parse(JSON.stringify(value));

// null -> true ✅
// null -> false -> null ✅

function loop() {
  console.log(
    `%c${count + 1}`,
    "font-weight: bold; font-size: 18px; color: cadetblue;"
  );
  let loopArray = wrongAnsweredQuestions.length
    ? clone(wrongAnsweredQuestions)
    : clone(questions);

  loopArray.forEach((element) => {
    if ([2, 3].includes(element.id) && !count /* 0 */) {
      element.isCorrect = false;
      return;
    }
    element.isCorrect = true;
  });

  wrongAnsweredQuestions = loopArray
    .filter((el) => !el.isCorrect)
    .map((el) => {
      return {
        ...el,
        isCorrect: null,
      };
    });
  console.log("loop final result: ", questions);
  console.log(wrongAnsweredQuestions);
  if (!count) {
    document.body.style.background = "salmon";
  } else {
    document.body.style.background = "cornflowerblue";
  }

  count++;
  document.body.innerHTML = /*html*/`
    <div>
      <h1>🦉...${count}</h1>
    </div>
  `;
  if (wrongAnsweredQuestions.length) {
    loop();
  } else {
    questions = questions.map((el) => {
      return {
        ...el,
        isCorrect: true,
      };
    });
  }
}

loop();
console.log("final result: ", questions);
