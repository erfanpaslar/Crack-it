var DIGITS = 4;
var GUESSED = 0;
var FREE_PLAY = false;
var LEFT = DIGITS * 2;

function clicked(element, clear = 0, key = 0, back = 0) {
  if (back) {
    let textElem = document.getElementById("entered");

    textElem.innerHTML = textElem.innerHTML.slice(
      0,
      textElem.innerHTML.length - 1
    );
  } else {
    let number = 0;
    if (key) {
      number = element;
    } else {
      number = element.innerText;
    }

    let textElem = document.getElementById("entered");
    if (clear) {
      textElem.innerHTML = "";
    } else {
      if (textElem.innerHTML.length == DIGITS) {
        textElem.innerHTML = "";
        textElem.innerHTML += number;
      } else {
        textElem.innerHTML += number;
        if (textElem.innerHTML.length == DIGITS) {
          // console.log("called a python function");
          GUESSED += 1;
					LEFT -= 1;
					FREE_PLAY = false;
					LEFT = DIGITS * 2;
          updateGuesses(GUESSED);
          eel.game(textElem.innerHTML)(); //python will call another function
        }
      }
    }
  }
}

eel.expose(gameState);
function gameState(isIn, isIt, won, userGuess) {
  let theContainer = document.getElementById("mainContainer");
  let toAddHead = "<div class='row'>";
  let toAddTail = `</div>`;
  // let toAddTail = `</div><div class="clear"></div>`;
  for (let i = 0; i < userGuess.length; i++) {
    toAddHead += `<span class='circleGuessed'>${userGuess[i]}</span>`;
  }

  let toAddIsHead = "<span class='state'>";
  let toAddIsTail = "</span>";
  for (let i = 0; i < isIt; i++) {
    toAddIsHead += "●"; //○●◯⚪⚫⦾⦿⨀⬤
  }
  for (let i = 0; i < isIn - isIt; i++) {
    toAddIsHead += "○";
  }
  theContainer.innerHTML += toAddHead + toAddIsHead + toAddIsTail + toAddTail;

  if (LEFT > 0) {
    showMessage(`${LEFT} more guess`, "");
  } else {
    showMessage("Free play", "");
  }

  if (won) {
    showMessage("You won", "success");
    disableInputs();
  }
}

eel.expose(showMessage);
function showMessage(message, theClass = "") {
  if (message == 0) {
    GUESSED -= 1;
    LEFT += 1;
    updateGuesses(GUESSED);
    document.getElementById("message").innerHTML = "No repeated digits.";
    document.getElementById("message").className = "error";
  } else {
    document.getElementById("message").innerHTML = message;
    document.getElementById("message").className = theClass;
  }
}

function makeSomeExamples(digits, examples, repeat = false) {
  if (!repeat) {
    for (let i = 0; i < examples; i++) {
      let number = "";
      let guessedDigit = 0;
      let added = [];
      for (let j = 0; j < digits; j++) {
        guessedDigit = Math.floor(Math.random() * (10 - 0) + 0);
        if (!added.includes(guessedDigit)) {
          added.push(guessedDigit);
          number += guessedDigit.toString();
        } else {
          j--;
        }
      }
      eel.game(number)();
    }
  } else {
    // todo
  }
}

function updateGuesses(guesses) {
  if (guesses > DIGITS * 2) {
    document.getElementById("guessed").innerHTML = "Free play: " + guesses;
  } else {
    document.getElementById("guessed").innerHTML = "Guessed: " + guesses;
  }
}

function disableInputs(enable = 0) {
  let inputs = document.getElementsByClassName("inputs");
  if (enable) {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
  } else {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = true;
    }
  }
}

function closeHelp() {
  document.getElementById("helpContainer").classList.add("hidden");
}
function openHelp() {
  document.getElementById("helpContainer").classList.remove("hidden");
}
function modifyDigits() {
  let dig = parseInt(document.getElementById("inputDigit").value);

  if (0 < dig && dig < 10) {
    DIGITS = dig;
		document.getElementById("mainContainer").innerHTML = "";
		LEFT = DIGITS*2;
    eel.start(DIGITS)();
    makeSomeExamples(DIGITS, DIGITS);
    closeHelp();
    disableInputs(1);
    document.getElementById("entered").innerHTML = "";
  } else {
    // todo
  }
}

eel.start(DIGITS)();
makeSomeExamples(DIGITS, DIGITS);

document.addEventListener("keydown", function (event) {
  var pressed = event.key;
  switch (pressed) {
    case "0":
      clicked("0", 0, 1);
      break;

    case "1":
      clicked("1", 0, 1);
      break;

    case "2":
      clicked("2", 0, 1);
      break;

    case "3":
      clicked("3", 0, 1);
      break;

    case "4":
      clicked("4", 0, 1);
      break;

    case "5":
      clicked("5", 0, 1);
      break;

    case "6":
      clicked("6", 0, 1);
      break;

    case "7":
      clicked("7", 0, 1);
      break;

    case "8":
      clicked("8", 0, 1);
      break;

    case "9":
      clicked("9", 0, 1);
      break;

    case "c":
      clicked("c", 1, 1);
      break;
    case "c":
      clicked("c", 1, 1);
      break;
    case "Delete":
      clicked("c", 1, 1);
      break;
    case "Backspace":
      clicked("b", 0, 1, 1);
      break;

    default:
      break;
  }
});

// function clicked2(element, clear = 0) {
//   let number = element.innerText;
//   let textElem = document.getElementById("entered");
//   if (clear) {
//     textElem.innerHTML = "";
//   } else {
//     if (textElem.innerHTML.length == DIGITS) {
//       textElem.innerHTML = "";
//       textElem.innerHTML += number;
//     } else {
//       textElem.innerHTML += number;
//       if (textElem.innerHTML.length == DIGITS) {
//         // console.log("called a python function");
//         GUESSED += 1;
//         LEFT -= 1;
//         updateGuesses(GUESSED);
//         eel.game(textElem.innerHTML)(); //python will call another function
//       }
//     }
//   }
// }
