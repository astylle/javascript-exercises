const reverseString = function(phrase) {
    let phraseSegment = phrase.split('');
    let reverseSegment = [];
    for(let i = phraseSegment.length; i>=0;i--){
        reverseSegment.push(phraseSegment[i]);
    }    
    let reversePhrase = reverseSegment.join("");
    return reversePhrase;
};

// Do not edit below this line
module.exports = reverseString;
