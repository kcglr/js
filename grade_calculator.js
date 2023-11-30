const grades = [50,70,50];

console.log(calculateGrade(grades))

function calculateGrade(grades){
    sum = 0;
    for (let grade of grades){
        sum += grade;
    }
    let average = sum/grades.length;

    if (average < 60){
        return 'F';
    }
    if (average < 70){
        return 'D';
    }
    if (average < 80){
        return 'C';
    }
    if (average < 90){
        return 'B';
    }
    else {
        return 'A';
    }


    // if (average <= 59 && average >= 0){
    //     return 'F';
    // }
    // else if (average <= 69 && average >= 60){
    //     return 'D';
    // }
    // else if (average <= 79 && average >= 70){
    //     return 'C';
    // }
    // else if (average <= 89 && average >= 80){
    //     return 'B';
    // }
    // else{
    //     return 'A';
    // }
}