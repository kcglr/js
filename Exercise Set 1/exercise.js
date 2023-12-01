let number = max(2,2);
console.log(number);

function max(x, y){
    if(x > y) {
        return x;
    }

    else if (y > x) {
        return y;
    }

    else{
        console.log("sayilar esit");
    }

    //shorter way of writing it

    //function max(a, b){
        //return (a > b) ? a : b;
    //}
    
}

