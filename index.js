
function receivesAFunction(callback){
    const spy = "idk";
 callback();
}

function returnsANamedFunction(){
    return function receivesAFunction(){}

}
function returnsAnAnonymousFunction(){
    return function () {console.log("Did this work?");}
}