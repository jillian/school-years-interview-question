// import {} from 'lodash';

// takes an array of school year ranges, as strings, 
// and returns a list of numbers
// ex. input of ["2014-2015", "2015-2016", "2016-2017", "2019-2020"] 
// would produce: [2014, 2015, 2016, 2017, 2019, 2020]
export const parseSchoolYears = (schoolYearsRanges) => {
  // Implementation
};


// takes an array of years (does not need to be sorted) and produces 
// an array of strings of the year ranges
// ex. input of [2014, 2015, 2016, 2017, 2019, 2020] 
// would produce: ["2014 - 2017", "2019 - 2020"]
export const yearRanges = (years) => {
  // Implementation
};


// takes an array of school year strings (such as 2014-2015) 
// and consolidates the ranges input does not need to be sorted.
// ex. input of ["2014-2015", "2015-2016", "2016-2017", "2019-2020"] 
// would produce: ["2014 - 2017", "2019 - 2020"]
export const consolidateSchoolYears = (schoolYearRanges) => {
  return yearRanges(parseSchoolYears(schoolYearRanges));
};
