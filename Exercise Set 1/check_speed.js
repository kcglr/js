// Speed Limit = 70
// if car is < 70 return okay
// if car is === 70 return okay
// if car is > 70 by 5 mph they gain 1 pt.
// use math.floor funct. basically converts the floating number to the closest integer
// if pts are above 12 return license suspended msg.

checkSpeed(80);

function checkSpeed(speed){
    const speedLimit = 70;
    const mphPerPoint = 5;

    if (speed < speedLimit + mphPerPoint){
        console.log("okay");
    }
    else {
        const points = Math.floor((speed - speedLimit) / mphPerPoint);
        if (points >= 12){
            console.log("your license is suspended!")
        }
        else{
            console.log("points: ", points);
        }
    }

}