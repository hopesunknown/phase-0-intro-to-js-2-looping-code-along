// Code your solutions in this file

function writeCards(name, event) {
    let messageArray = [];
    for (let i = 0; i < name.length; i++) {
        let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        messageArray.push(message);
}
 return messageArray;
}


function countDown() {
    let number = 10;
    while (number >=0) {
        console.log(number--);
    }
    return countDown;
}