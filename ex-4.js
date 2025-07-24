//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
switch (lightBulbStatus) {
    case "On":
    case "Off":
    case "Broken":
        console.log(`Light bulb is ${lightBulbStatus}`);
        break;
    default:
        console.log(`มองดูหลอดไฟของคุณพี่ก่อนจ้า`);
        break;
}