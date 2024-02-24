
// if and switch is most basic type of conditionals

let old: number = 13;

if (old > 18){
    console.log('Adult');
}else if (old < 12){
    console.log('Team');
}else{
    console.log('child');
}

let days: number;

days = 2;

switch (days) {
    
    case 1:
        console.log('monday');
        break;

    case 2:
        console.log('tuesday');
        break;

    case 3:
        console.log('wednesday');
        break;

    case 4:
        console.log('thursday');
        break;
        
    case 5:
        console.log('friday');
        break;

    case 6:
        console.log('saturday');
        break;

    case 7:
        console.log('sunday');
        break;
        
    default:
        console.log('invalid days');
}

