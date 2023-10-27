let two = "абвг";
let three = "дежз";
let four = "ийкл";
let five = "мноп";
let six = "рсту";
let seven = "фхцч";
let eight = "шщъы";
let nine = "ьэюя";
let probel = " ";

function getText(numberText){
let stringText = "";
let count = 0;
for(let i = 0; i < numberText.length; i++){
    if(i+1 < numberText.length && numberText[i + 1] != '-' && numberText[i + 1] != ' '){
        if(numberText[i] == ' '){
            stringText += ' ';
            count = 0;
            continue;
        }
        else if (numberText[i] == '-'){
            count = 0;
            continue;
        }
        count++;
    }
    else if(numberText[i] == '1'){
        stringText += one[count];
        count = 0;
    }
    else if(numberText[i] == '2'){
        stringText += two[count];
        count = 0;
    }
    else if(numberText[i] == '3'){
        stringText += three[count];
        count = 0;
    }
    else if(numberText[i] == '4'){
        stringText += four[count];
        count = 0;
    }
    else if(numberText[i] == '5'){
        stringText += five[count];
        count = 0;
    }
    else if(numberText[i] == '6'){
        stringText += six[count];
        count = 0;
    }
    else if(numberText[i] == '7'){
        stringText += seven[count];
        count = 0;
    }
    else if(numberText[i] == '8'){
        stringText += eight[count];
        count = 0;
    }
    else if(numberText[i] == '9'){
        stringText += nine[count];
        count = 0;
    }
    else if(numberText[i] == ' '){
        stringText += ' ';
        count = 0;
    }
    else if(numberText[i] == '-'){
        i++;
        continue;
    }
}
return stringText;
}

function getNumber(stringText){
    numberText = "";
    for(let i = 0; i < stringText.length; i++){
        if(stringText[i] == 'а'){
            numberText += "2-"
        }
        else if (stringText[i] == "б"){
            numberText += "22-"
        }
        else if (stringText[i] == "в"){
            numberText += "222-"
        }
        else if (stringText[i] == "г"){
            numberText += "2222-"
        }
        else if (stringText[i] == "д"){
            numberText += "3-"
        }
        else if (stringText[i] == "е"){
            numberText += "33-"
        }
        else if (stringText[i] == "ж"){
            numberText += "333-"
        }
        else if (stringText[i] == "з"){
            numberText += "3333-"
        }
        else if (stringText[i] == "и"){
            numberText += "4-"
        }
        else if (stringText[i] == "й"){
            numberText += "44-"
        }
        else if (stringText[i] == "к"){
            numberText += "444-"
        }
        else if (stringText[i] == "л"){
            numberText += "4444-"
        }
        else if (stringText[i] == "м"){
            numberText += "5-"
        }
        else if (stringText[i] == "н"){
            numberText += "55-"
        }
        else if (stringText[i] == "о"){
            numberText += "555-"
        }
        else if (stringText[i] == "п"){
            numberText += "5555-"
        }
        else if (stringText[i] == "р"){
            numberText += "6-"
        }
        else if (stringText[i] == "с"){
            numberText += "66-"
        }
        else if (stringText[i] == "т"){
            numberText += "666-"
        }
        else if (stringText[i] == "у"){
            numberText += "6666-"
        }
        else if (stringText[i] == "ф"){
            numberText += "7-"
        }
        else if (stringText[i] == "х"){
            numberText += "77-"
        }
        else if (stringText[i] == "ц"){
            numberText += "777-"
        }
        else if (stringText[i] == "ч"){
            numberText += "7777-"
        }
        else if (stringText[i] == "ш"){
            numberText += "8-"
        }
        else if (stringText[i] == "щ"){
            numberText += "88-"
        }
        else if (stringText[i] == "ъ"){
            numberText += "888-"
        }
        else if (stringText[i] == "ы"){
            numberText += "8888-"
        }
        else if (stringText[i] == "ь"){
            numberText += "9-"
        }
        else if (stringText[i] == "э"){
            numberText += "99-"
        }
        else if (stringText[i] == "ю"){
            numberText += "999-"
        }
        else if (stringText[i] == "я"){
            numberText += "9999-"
        }
        else if (stringText[i] == ' '){
            numberText = numberText.slice(0, -1);
            numberText += " ";
        }
    }
    if(numberText[numberText.length - 1] == "-"){
        numberText = numberText.slice(0, -1);
    }
    return numberText;
}

document.querySelector('#inputButton').addEventListener('click', ()=> {
    let text = document.querySelector("#text").value;
    if(document.querySelector('#checkbox').checked){
        let stringText = getText(text);
        document.querySelector('#textOutput').value = "";
        document.querySelector("#textOutput").value = stringText;
    }
    else{
        let numberText = getNumber(text);
        document.querySelector('#textOutput').value = "";
        document.querySelector('#textOutput').value = numberText;
    }
})
