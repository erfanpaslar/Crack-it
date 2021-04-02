import eel
import random
DIGITS = 0
REPEATED_DIGITS = 0


def generateANumber(digits, repeated=REPEATED_DIGITS):
    if not repeated:
        # todo
        i = 0
        returnNumber = ""
        while i < digits:
            num = str(random.randrange(0, 10))
            if num in returnNumber:
                i -= 1
            else:
                returnNumber += num
            i += 1
        return returnNumber
    else:
        return str(random.randrange(10**(digits-1),  10**digits))


def getUserGuess(digits, userGuess, repeated=REPEATED_DIGITS):
    if not repeated:
        for i in range(0, 10):
            if (userGuess.count(str(i)) > 1):
                print("DUDE you are cheating.")
                return -1  # ! repeated digits error
    # else:
    #    # todo ...

    if len(userGuess) == digits:
        return userGuess
    else:
        print("WTF ?!")
        return -2  # ! length error


def checkTheNumber(theNumber, userGuess):
    isIn = 0  # * is in
    isIt = 0  # * is in right place
    if (theNumber == userGuess):
        return DIGITS, DIGITS, True

    for i in range(DIGITS):
        if userGuess[i] in theNumber:
            isIn += 1
        if userGuess[i] == theNumber[i]:
            isIt += 1

    return isIn, isIt, False


eel.init('.//web')

WON = False
THE_NUMBER = 0


@eel.expose
def start(digits=4):
    global WON, THE_NUMBER, DIGITS
    DIGITS = digits
    WON = False
    THE_NUMBER = generateANumber(DIGITS)


@eel.expose
def game(userGuess):
    global WON, THE_NUMBER

    userGuess = getUserGuess(DIGITS, userGuess)
    if int(userGuess) > 0:  # ! if not int will get error
        isIn, isIt, WON = checkTheNumber(THE_NUMBER, userGuess)
        eel.gameState(isIn, isIt, WON, userGuess)()
    elif int(userGuess) == -1:
        # todo cheating js
        eel.showMessage(0)()

    elif int(userGuess) == -2:
        # todo sth went wrong reset
        showMessage("WTF?!", "error")


eel.start('index.html', size=(800, 700))
