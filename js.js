showNumber(10)
function showNumber(number){
    for (let i = 0; i < number; i++){
        return i % 2 === 1 ? "ODD" : "EVEN";
    }
}