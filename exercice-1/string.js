function ucfirst(str) {
    if(str.length > 0){
        return  str[0].toUpperCase() + str.substring(1,str.length);
    }
    return str;
}

function capitalize(str) {
    if(str.length > 0){
        let tab = str.split(' ');
        let result = '';
        tab.forEach(el => {
            result += ucfirst(el)+' ';
        });
        return result;
    }return str;
}

function camelCase(str) {
    if(str.length > 0 ){
        let tab = capitalize(str).split(' ');
        let result = '';
        tab.forEach(el => {
           result += el;
        });
        return result;
    }return str
}

function snake_case(str) {
    if(str.length > 0){
        str = str.toLowerCase();
        let tab = str.split(' ');
        let result = '';
        tab.forEach(el => {
           result += el+"-"
        });
        return result.substring(0,result.length -1 );
    }else return str;
}

function prop_access(obj,str) {
    if(str.length > 0 && obj !== null ){
        let tab = str.split(".");
        let buffer = obj;
        let bufferString = '';
        for (let el of tab) {
            if (buffer[el] === undefined) {
                return bufferString+"."+el+" not exist";
            }
            bufferString+= el;
            buffer = buffer[el];
        }
        return buffer;
    }return null;
}

function leet(str) {
    let voyelle = ['a','e','i','o','u','y'];
    str = str.toLowerCase();
    if(str.length > 0){
        let result = '';
        for (let el of str) {
            if (voyelle.indexOf(el) > -1) {
                switch (el){
                    case 'a':
                        result += '4';
                        break;
                    case 'e':
                        result += '3';
                        break;
                    case 'i':
                        result += '1';
                        break;
                    case 'o':
                        result += '0';
                        break;
                    case 'u':
                        result += '_';
                        break;
                    case 'y':
                        result += '7';
                        break;
                }
            }else{
                result += el;
            }
        }
        return result;

    } return null
}

function yoda(str) {
    return str.split(' ').reverse().join(' ');
}

function verlan(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}

const vig = (message, key) => {
    var result = [];
    var letterCounter = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    alphabet = alphabet.split("");
    var rowIndex;
    var colIndex;
    while (letterCounter < message.length) {
        for (var i = 0; i < key.length; i++) {
            rowIndex = alphabet.indexOf(key[i]);
            colIndex = alphabet.indexOf(message[letterCounter]);
            result.push(alphabet[(rowIndex + colIndex) % alphabet.length]);
            letterCounter++;
            if (letterCounter >= message.length) break;
        }
    }
    return result.join("");
};


console.log(ucfirst("hello World"));
console.log(capitalize("hello world"));
console.log(camelCase("hello world lol"));
console.log(snake_case("HELLO WORLD LOL"));
let obj = {
    "animal":{
        "type": {
            "name" : "lion"
        }
    }
};
console.log(prop_access(obj,'animal.type.name'));
console.log(prop_access(obj,'animal.lol'));
console.log(leet("anaconda"));
console.log(yoda("Hello World"));
console.log(verlan("Hello World"));
console.log(vig('wikipedia','crypto'));
