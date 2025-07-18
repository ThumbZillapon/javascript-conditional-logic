//Exercise 4
// Switch Statement
let lightBulbStatus = "Broken";

// switch (lightBulbStatus) {
//   case "On":
//   case "Off":
//   case "Broken":
//     console.log(`Light bulb is ${lightBulbStatus}`);
//     break;
//   default:
//     console.log("Please choose the correct input.");
//     break;
// }

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