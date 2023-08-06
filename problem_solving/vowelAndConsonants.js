//Q. Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

function countVowelAndConsonant(myName){
    let vowelCount = 0;
    let consonant = 0;
    const vowel = "aeiouAEIOU"
    for(let i=0; i<myName.length;i++){
        const char = myName[i]
        if(vowel.indexOf(char) !== -1){
            vowelCount ++
        }
        else{
            consonant ++
        }
    
    }
    return {vowelCount, consonant}
}


const {vowelCount, consonant} = countVowelAndConsonant('Md Jannatun Nime Nishat')

console.log(`Number of vowel: ${vowelCount}, Number of consonant: ${consonant}`);


