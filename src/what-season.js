const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if(date==null){
    return 'Unable to determine the time of year!';
  }else{
    let time_of_year = '';
    switch (springDate.getMonth()){
        case 12:
        case 1:
        case 2:
            time_of_year = "winter";
        case 3:
        case 4:
        case 5:
            time_of_year = "spring";
        case 6:
        case 7:
        case 8:
            time_of_year = "summer";
        case 9:
        case 10:
        case 11:
            time_of_year = "autumn";
        default:
            time_of_year = "Invalid date!";
    }
    return time_of_year;
  }
  
}

module.exports = {
  getSeason
};
