//1.
function checkDayOfTheWeek(dayHint) {
  let dayInfo;
  switch (dayHint.toLowerCase()) {
    case "sun":
      dayInfo = `Day: Sunday | Day Number: 1.`;
      break;
    case "mon":
      dayInfo = "Day: Monday | Day Number: 2.";
      break;
    case "tue":
      dayInfo = "Day: Tuesday | Day Number: 3.";
      break;
    case "wed":
      dayInfo = "Day: Wednesday | Day Number: 4.";
      break;
    case "thu":
      dayInfo = "Day: Thursday | Day Number: 5.";
      break;
    case "fri":
      dayInfo = "Day: Friday | Day Number: 6.";
      break;
    case "sat":
      dayInfo = "Day: Saturday | Day Number: 7.";
      break;
    default:
      console.log("Invalid input");
      break;
  }
  return dayInfo;
}
console.log(checkDayOfTheWeek("MON"));
console.log(checkDayOfTheWeek("Sat"));

//2.
function launchBrowser(browser) {
  switch (browser.toLowerCase()) {
    case "chrome":
      console.log(`Launch the '${browser.toLowerCase()}' browser`);
      break;
    case "firefox":
      console.log(`Launch the '${browser.toLowerCase()}' browser`);
      break;
    case "safari":
      console.log(`Launch the '${browser.toLowerCase()}' browser`);
      break;
    case "edge":
      console.log(`Launch the '${browser.toLowerCase()}' browser`);
      break;
    default:
      console.log("Invalid input.");
      break;
  }
}
launchBrowser("ChRome");
launchBrowser("Opera");


function launchUrl(url){
  switch(url){
    case "Amazon":
      console.log("amazon.com");
      break;
    case "Flipkart":
      console.log("flipkart.com");
      break;
    default:
      console.log("Invalid input");
      break;
  }
}
launchUrl("Amazon");