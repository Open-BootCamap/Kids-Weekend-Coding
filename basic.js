// alert("Testing");

// let x = 5;
// alert(x);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const now = 2024;
// const ageDaniel = 1968;
// const ageMicheal = 1987;

// const averaggeAge = (ageDaniel + ageMicheal) / 2;
// console.log(averaggeAge, ageDaniel, ageMicheal);

// const weightEmeka = 78;
// const heightEmeka = 1.69;
// const weightJenny = 92;
// const heightJenny = 1.95;

// console.log(weightEmeka, weightJenny, heightEmeka, heightJenny);

// BMIEmeka = (weightEmeka / (heightEmeka * heightEmeka)).toFixed(2);
// BMIJenny = (weightJenny / (heightJenny * heightJenny)).toFixed(2);

// console.log("Emeka's BMI is:" + " " + BMIEmeka);
// console.log("Jenny's BMI is:" + " " + BMIJenny);

const firstName = "Davis";
const lastName = "Ogbonna";
const job = "Dev";
const birthYear = 1993;
const now = 2024;

const whoIs = `I'm ${firstName} ${lastName}, a ${now - birthYear} old ${job}.`;

console.log(whoIs);

const pinNumberSuffix = `DSC`;
let pinNumber = 132980;
if (pinNumber < 132988) {
  console.log(
    `The PIN number for Davis Ogbonna is:${pinNumberSuffix + pinNumber}`
  );
  pinNumber++;
} else {
  console.log(`No more Pin numbers available`);
}
