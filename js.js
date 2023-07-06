checkSpeed(70)

function checkSpeed(speed){
    let point = 0
    if (speed < 73){
        console.log('Ok');
    }
    else if (speed > 70){
        for (speed; (speed - 5) >= 70; speed -= 5){
            point += 1;
            console.log("Point = ", point);
            if (point > 12){
                console.log("License is supended!!")
            }
        }
        
    }
}