/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Sunday, 
  Monday,
  Tuesday,
  Wednesday, 
  Thursday, 
  Friday, 
  Saturday,

}
function isWeekend(day: Day): boolean {
  if(day === Day.Sunday || Day.Saturday){
    console.log(`Today is ${day} and we are have a rest`);
    return true
  }else{
    console.log(`Today is ${day} and we are working`);
    return false
  }
  
   
}

isWeekend(Day.Monday)