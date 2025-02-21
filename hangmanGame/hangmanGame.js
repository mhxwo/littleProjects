const easyMode = ['cat', 'hid', 'key', 'one', 'bed', 'ear', 'toy', 'lie', 'mom', 'dad']; //3 words
const mediumMode = ['phone', 'quiet', 'times', 'beauty', 'listen', 'bottle', 'instead', 'cheese', 'tails', 'library']; //between 5 and 7 words including 5 and 7
const hardMode = ['disappear', 'consequently', 'impossible', 'beautiful', 'basketball', 'sharpness', 'grandfather', 'threatment', 'pineapple', 'grandmother']; //9+ words

let listThatllBeUsed = [], word;

function selectMode() {
    let mode = '';
    
    while (true) {
        mode = prompt('Select the difficulty\nletter E for easy mode\nletter M for medium mode\nletter H for hard mode', 'E');
        if (mode == 'E') {
            listThatllBeUsed = easyMode;
            break;
        } else if (mode == 'M') {
            listThatllBeUsed = mediumMode;
            break;
        } else if (mode == 'H') {
            listThatllBeUsed = hardMode;
            break;
        }
    }
}

function selectWord() {
    let randomNumber = String(Math.random()).replace('0.', '');
    word = listThatllBeUsed[+randomNumber[0]];
}

function play() {
    let stringToComparasion = '';
    
    for (c = 0; c < word.length; c++) {
        stringToComparasion += '-';
    }
    
    const lettersChoosed = [];
    const lettersAllowed = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
        'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    let choice, maxChoices = 0;
    
    while (stringToComparasion.includes('-') && maxChoices != 6) {
        choice = prompt(`Actually: ${stringToComparasion}\nType a letter between a and z or a word`, 'a');
        alert(word);
        if (choice.length == 1 && !lettersAllowed.includes(choice)) {
            alert('You typed a wrong character !');
            continue;
        } else if (choice.length > 1) {
            if (choice == word) {
                alert('You won !');
                break;
            } else {
                alert('You lost !');
                break;
            }
        } else if (lettersChoosed.includes(choice)) {
            alert('Letter already choosed ! Try again');
            continue;
        } 

        lettersChoosed.push(choice);
        
        let c = 0;
        let pastStringToComparasion = stringToComparasion;

        for (letter of word) {
            if (letter == choice) {
                stringToComparasion = stringToComparasion.split('');
                stringToComparasion[c] = letter;
                stringToComparasion = stringToComparasion.join('');
            }
            c++;
        }

        if (pastStringToComparasion == stringToComparasion) {
            maxChoices += 1;
        }

        if (!stringToComparasion.includes('-')) {
            alert('You won !');
            break;
        }

        if (maxChoices == 6) {
            alert('You lost !');
            break;
        }

    }
}

selectMode();
selectWord();
play();