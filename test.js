
function inverseString(word){

    let inversed = '';

    for(let i = word.length - 1;  i >= 0; i-- ){
        inversed+= word[i];
    }
    return inversed;
}