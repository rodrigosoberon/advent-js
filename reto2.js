function countHours(year, holidays) {
  let days = 0;
  holidays.forEach((holiday) => {
    let myDate = new Date(holiday + "/" + year);
    if (myDate.getDay() > 0 && myDate.getDay() < 6) {
      days++;
    }
  });
  return days * 2;
}

console.log(countHours(2023, ['01/06', '04/01', '12/25'])); 
