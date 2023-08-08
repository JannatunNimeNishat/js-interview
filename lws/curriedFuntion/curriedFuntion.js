function curriedMultiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}

console.log(curriedMultiply(1)(2)(3));