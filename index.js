// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats];
}

function removeLastCat(){
    const cats2 = cats.slice();
    cats2.pop();
    return cats2;
}

function removeFirstCat(){
    const cats2 = cats.slice();
    cats2.shift();
    return cats2;
}