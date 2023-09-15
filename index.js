function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}

const string = "HELLO!";
function logShout(string){

console.log(string);
console.log(string.toUpperCase());

string === string.toUpperCase();
}


function logWhisper(string){
console.log(string);
console.log(string.toLowerCase());


string === string.toLowerCase();
}
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return (`I can't hear you!`)
    }else if(string === string.toUpperCase()){
       return ("YES INDEED!")
    }
    else
    {
        return ("I would love to!")
    }
}
