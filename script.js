console.log("hello");
function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.2;
    }
    return tip;
}


console.log("For a bill of 100, the tip is " + calcTip(100));
console.log("For a bill of 500, the tip is " + calcTip(500));
console.log("For a bill of 30, the tip is " + calcTip(30));

let tip1 = calcTip(100);
let tip2 = calcTip(500);
let tip3 = calcTip(30);

