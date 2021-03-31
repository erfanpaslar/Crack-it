let REPEATED_DIGITS = 0;

//
String.prototype.count = function (c) {
  var result = 0,
    i = 0;
  for (i; i < this.length; i++) if (this[i] == c) result++;
  return result;
};
//

function generateANumber(digits, repeated = REPEATED_DIGITS) {
  if (!repeated) {
    // todo

    let i = 0;
    let returnNumber = "";

    while (i < digits) {
      let num = Math.floor(Math.random() * 10).toString();
      if (returnNumber.includes(num)) {
        i -= 1;
      } else {
        returnNumber += num;
      }
      i += 1;
    }
    return returnNumber;
  } else {
    // todo
    // return str(random.randrange(10**(digits-1),  10**digits))
  }
}

function getUserGuess(digits, userGuess, repeated = REPEATED_DIGITS) {
  if (!repeated) {
    for (let i = 0; i < 10; i++) {
      if (userGuess.count(i.toString()) > 1) {
        return -1; // ! repeated digits error
      }
    }
  }
  // else{
  //   todo ...}

  if (userGuess.length == digits) {
    return userGuess;
  } else {
    // print("WTF ?!")
    return -2; // ! length error
  }
}

function checkTheNumber(theNumber, userGuess) {
  let isIn = 0; // * is in
  let isIt = 0; // * is in right place
  if (theNumber == userGuess) {
    return [DIGITS, DIGITS, true];
  }

  for (let i = 0; i < DIGITS; i++) {
    if (theNumber.includes(userGuess[i])) {
      isIn += 1;
    }
    if (userGuess[i] == theNumber[i]) {
      isIt += 1;
    }
  }
  if (isIn == 0 && isIt == 0) {
    return [0, 0, false];
  } else {
    return [isIn, isIt, false];
  }
}

let WON = false;
let THE_NUMBER = 0;

function start(digits = 4) {
  // global WON, THE_NUMBER, DIGITS
  DIGITS = digits;
  WON = false;
	FREE_PLAY = false;
	LEFT = DIGITS * 2;
  THE_NUMBER = generateANumber(DIGITS);
}

function game(userGuess) {
  // global WON, THE_NUMBER

  userGuess = getUserGuess(DIGITS, userGuess);
  if (parseInt(userGuess) > 0) {
    // ! if not int will get error
    let result = checkTheNumber(THE_NUMBER, userGuess);
    let isIn = result[0];
    let isIt = result[1];
    WON = result[2];

    gameState(isIn, isIt, WON, userGuess);
    // eel.gameState(isIn, isIt, WON, userGuess)()
  } else if (parseInt(userGuess) == -1) {
    // todo cheating js
    // eel.showMessage(0)()
    showMessage(0);
  } else if (parseInt(userGuess) == -2) {
    //# todo sth went wrong reset
    showMessage("WTF?!", "error");
  }
}
// --------------------------------------------- //

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
          updateGuesses(GUESSED);
          game(textElem.innerHTML); //python will call another function
          // eel.game(textElem.innerHTML)(); //python will call another function
        }
      }
    }
  }
}

// eel.expose(gameState);
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

// eel.expose(showMessage);
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
      // eel.game(number)();
      game(number);
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
    // eel.start(DIGITS)();
    start(DIGITS);
    makeSomeExamples(DIGITS, DIGITS);
    closeHelp();
    disableInputs(1);
    document.getElementById("entered").innerHTML = "";
  } else {
    // todo
  }
}

start(DIGITS);
// eel.start(DIGITS)();
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
