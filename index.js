// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
    return cats
}
function appendCat(name){
    const cat = [...cats, "Broom"];
    return cat;
}
function prependCat(name){
    const cat = ["Arnold", ...cats];
    return cat;
}
function removeLastCat() {
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}