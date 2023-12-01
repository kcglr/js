console.log(isLandscape(1920,1080));

function isLandscape(w, h){
    return (w > h);
    
    //return (w > h) ? true:false; // poor way of writing it.
    //we dont need to specify the true false bc if the condition is met the program will automatically return true if not return false.
}