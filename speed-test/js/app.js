let msg = document.getElementById("msg");
let userInput = document.getElementById("userInput");
let btn = document.getElementById("btn");

const wordsArray = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    "Life is what happens when you're busy making other plans."
];
let startTime, endTime;

//Listening event listener on button
btn.addEventListener("click", function () {
    if (btn.innerHTML == "Start") {
        userInput.disabled = false;
        btn.innerHTML = "Done";
        showWords();
    } else {
        userInput.disabled = true;
        btn.innerHTML = "Start";
        calculateSpeed();
    }
});

function showWords() {
    //displaying the sentence to type
    let index = Math.floor(Math.random() * wordsArray.length);
    msg.innerText = wordsArray[index];
    //calculating the start time
    let date = new Date();
    startTime = date.getTime();
}

function calculateSpeed() {
    //calculating the end time
    let date = new Date();
    endTime = date.getTime();
    //calculating the total time taken in seconds
    totalTime = Math.floor((endTime - startTime) / 1000)
    //calculating the words typed count
    let typedWords = userInput.value.split(" ");
    let typedWordsCount = typedWords.length;
    //calculating speed of typing per minutes
    let speed = Math.floor(typedWordsCount / totalTime * 60);
    let msgText = msg.innerText.split(" ");
    //calling function to calculate correct typed words
    let correctCount = calcCorrectWords(typedWords, msgText);
    //displaying typing speed
    msg.innerText = `You typed ${correctCount} correct and ${typedWordsCount - correctCount} incorrect words at a speed of ${speed} words per minute`
    userInput.value = "";
}

function calcCorrectWords(userInputVal, msgInnerText) {
    let count = 0;
    for (let i = 0; i < userInputVal.length; i++) {
        if (userInputVal[i] == msgInnerText[i]) {
            count++;
        }
    }
    return count;
}