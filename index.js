
function receivesAFunction(callback){
    callback(callback);
}

function returnsANamedFunction(){
    return receivesAFunction;
};

function returnsAnAnonymousFunction(){
    return function(){
        console.log("hey");
    }
}

returnsAnAnonymousFunction();