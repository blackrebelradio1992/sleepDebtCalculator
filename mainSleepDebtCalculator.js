/* this is the input data fore each day*/
const getSleepHours = (day) => {
  if (day === 'monday') {
    return 7;
  } else if (day === 'tuesday') {
    return 5;
    } else if (day === 'wednesday') {
      return 6;
    } else if (day === 'thursday') {
      return 10;
    } else if (day === 'friday') {
      return 7;
    } else if (day === 'saterday'){
      return 12;
    } else if (day === 'sunday') {
      return 9;
    } else {
      return 'error';
    }
};


/*algorithm for ActualSleepHours*/
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saterday') + getSleepHours('sunday')
/*test print for getSleepHours & getActualSleepHours*/
console.log(getSleepHours('friday'));
console.log(getActualSleepHours());
/*algorithm for idealSleepHOurs*/
const getIdealSleepHours = () => {
  let  idealHours = 8;
  return idealHours * 7;
};


/*test print for getIdealSleepHours*/
console.log(getIdealSleepHours());


/*alogorithm for calculsteSleepDebt*/
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
/*conditions for algorithm*/
  if (actualSleepHours === idealSleepHours) {
    console.log('you get the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('you sleep to much!');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};


//print
console.log(calculateSleepDebt());
