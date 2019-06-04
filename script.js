
function createArray() {
    let myArray = [];
    for (let i = 1; i <= 100; i++) {
        myArray.push(i);
    }
    return myArray;
}

function replaceNums(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            array[i] = "DuckGoose"
        } else if (array[i] % 3 === 0) {
            array[i] = "Duck"
        } else if (array[i] % 5 === 0) {
            array[i] = "Goose"
        }
    }
    return array;
}

function write(o) {
    let el = document.createElement('pre');
    const div = document.querySelector('div');
    el.textContent = JSON.stringify(o, undefined, 2);
    div.appendChild(el);
}
    
function play() {
    let finalArray = replaceNums(createArray());
    write(finalArray);
}

const button = document.querySelector("button");
button.addEventListener('click', () => {
    play()
});