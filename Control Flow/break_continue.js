let i = 0;
while (i<=10){
    //if (i === 5) break; //we use break to jump out of the loop
    if (i%2 === 0){
        i++;
        continue; //not something that we often use, it basically makes the code jump to the beginning of the loop and continues the execution of next iteration.
    }
    console.log(i);
    i++;
}