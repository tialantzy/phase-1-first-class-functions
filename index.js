function receivesAFunction (cb) {
    return (cb ()); 
}

function returnsANamedFunction () {
    return function fn(){
        console.log("returns a named function");
    
    }

}

function returnsAnAnonymousFunction () {
    return () => console.log("returns an anonymous function");
    
}
