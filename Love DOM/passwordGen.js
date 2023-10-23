
const inputSlider = document.querySelector("[data-lengthSlider]")
const lengthDisplaySlider = document.querySelector("[data-lengthNumber]")


const passDisplay = document.querySelector("[data-passwordDisplay]")
const copyBtn = document.querySelector("[data-copy]")
const copyMsg = document.querySelector("[data-copyMsg]")
const upperCaseCheck = document.querySelector("#uppercse")
const lowerCaseCheck = document.querySelector("#lowercase")
const numberCheck = document.querySelector("#numbers")
const symbolCheck = document.querySelector("#symbols")
const indicator = document.querySelector("[data-indicator]")
const genBtn = document.querySelector(".generate-button")
const allcheckBox = document.querySelector("input[type=checkbox]")

const symbol = '~!@#$%^&*()*+,-./|][{};'
let passWord = "";
let passwordLength = 10; // initially fill slider with 10 length
let checkCount = 0;
handleSlider();

function shuffflePassword(array){
    for(let i = array.length-1; i>0; i--){
        const j  = Math.floor(Math.random()*(i+1));

        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let str = "";
    array.forEach((el)=>(str+=el));
    return str;

}




// set passwordLengtth



function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplaySlider.innerText = passwordLength;
}


// set indicator

function setIndicator(color) {
    indicator.style.backgroundColor = color;

}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);


}

function generateRandomNumber() {
    return getRandomInteger(0, 9);
}

function generateLOwerCase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}


function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 91));
}

function generateSymbol() {
    const randNum = getRandomInteger(0, symbol.length);
    return symbol.charAt[randNum];
}


function calcStringth() {
    let hasUper = false;
    let haslower = false;
    let hasNUm = false;
    let hasSym = false;

    if (upperCaseCheck.checked) hasUper = true;
    if (lowerCaseCheck.checked) haslower = true;
    if (numberCheck.checked) hasNUm = true;
    if (symbolCheck.checked) hasSym = true;

    if (hasUper && haslower&&(hasNUm || hasSym) && passwordLength >= 8) setIndicator("#0f0")
    else if ((hasUper || haslower) && (hasNUm || hasSym) && passwordLength >= 6) setIndicator("#ff0")

    else {
        setIndicator("#f00")
    }
}



async function copyContent() {
    try {

        await navigator.clipboard.writeText(passDisplay.value)
        copyMsg.innerText = "Copied"
    }
    catch (e) {
        copyMsg.textContent = "failed to copy"

    }
    // TO make copy msg visible

    copyMsg.classList.add("active")

    setTimeout(() => {
        copyMsg.classList.remove("active")

    }, 2000);



}


// eventListner on slider
//input- bata rha hai ki hamne slider ko  kitna khaskaya hai


inputSlider.addEventListener('input',(e)=>{
    passwordLength = e.target.value;
    handleSlider();
})


// Copy Btn - Event Listener

copyBtn.addEventListener('click',()=>{
    if(passDisplay.value) copyContent();
})


// Track All CheckBox ___________ checked or not

function handleCheckBoxChange(){
    checkCount = 0;
    allcheckBox.forEach((checkbox)=>{
        if(checkbox.checked) checkCount++;
    })

    // special condition

    if(passwordLength<checkCount)  {
        passwordLength = checkCount;
        handleSlider();
    }

}

// allcheckBox.forEach((checkbox)=>{
   
//     checkbox.addEventListener('change', handleCheckBoxChange);
// })


allcheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change', handleCheckBoxChange);
})



// AddeventListner on GEnerate password


genBtn.addEventListener('click',()=>{

    //none checkBox selected
    if(checkCount<=0) return;

    if(passwordLength<checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    // lets start the generating password

    // remove old password

    passWord = "";

    //jo checkbox checked uska char put in pass

    
    // if(upperCaseCheck.checked)   passWord+=generateUpperCase();
    // if(lowerCaseCheck.checked)  passWord+=generateLOwerCase();

    // if(numberCheck.checked)   passWord+=generateRandomNumber();
    // if(symbolCheck.checked)   passWord+= generateSymbol();

    let funArr = [];

    if(upperCaseCheck.checked)  funArr.push(generateUpperCase);

    if(lowerCaseCheck.checked) funArr.push(generateLOwerCase);

    if(numberCheck.checked) funArr.push(generateRandomNumber);

    if(symbolCheck.checked) funArr.push(generateSymbol)
    
    // compulsury addition

    for(let i = 0; i<funArr.length; i++){
        passWord+=funArr[i]();
    }

    // remaining Addition

    for(let i = 0; i<passwordLength-funArr.length; i++){
       let randIndex = getRandomInteger(0, funArr.length);
       passWord+=funArr[randIndex]();
    }

    // password ko shuffle(idhar 0- udhar)

    passWord = shuffflePassword(Array.from(passWord ));

    // showing passWord in

    passDisplay.value = passWord;

    // calculate Stringth

    calcStringth();
    



});
































