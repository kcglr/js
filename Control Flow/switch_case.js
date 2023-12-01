let role = 'guest';

switch (role){
    case 'guest':
        console.log('Guest user');
        break; //we need to add a break to jump out of the current case and move on to the next one
    
        case 'moderator':
        console.log('Moderator user');
        break;

    default:
        console.log('Unknown user');
        break;
}       

//Takeaway:
//With switch and case we can compare the value of a variable, against a bunch of other values.