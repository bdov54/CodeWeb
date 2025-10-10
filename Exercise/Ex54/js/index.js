function MAX(a,b,c){
    return Math.max(a, b, c)
}
function call_MAX(a,b,c,Result){
    r=MAX(a,b,c)
    Result.innerText=r
}
function MIN(a,b,c){
    return Math.min(a, b, c)
}
function call_MIN(a,b,c,Result){
    r=MIN(a,b,c)
    Result.innerText=r
}
function sin(a){
    return Math.sin(a)
}
function call_sin(a,Result){
    r=sin(a)
    Result.innerText=r
}
function cos(a){
    return Math.cos(a)
}
function call_cos(a,Result){
    r=cos(a)
    Result.innerText=r
}
function exp(a,b){
    return Math.pow(a, b)
}
function call_exp(a,b,Result){
    r=exp(a,b)
    Result.innerText=r
}