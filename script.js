const typedTextSpan = document.querySelector(".typed_text");

const textArray = ["Software Devloper", "Web Devloper", "Buisness Devloper", "Artist"]
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 150;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if(charIndex < textArray[textArrayIndex].length){
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {

        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0)
    {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase, newTextDelay);
    }
    else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newTextDelay);
});



