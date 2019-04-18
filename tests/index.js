import {expect} from 'chai';

import {
  parseSchoolYears,
  yearRanges,
  consolidateSchoolYears,
} from '../src';

describe.only('parseSchoolYears', () => {
  it('parses a simple case', () => {
    expect(parseSchoolYears(['2014-2015'])).to.eql([2014, 2015]);
  });

  it('parses a more complex case', () => {
    expect(parseSchoolYears(['2015-2016', '2017-2018'])).to.eql([2015, 2016, 2017, 2018]);
  });
});

describe('yearRanges', () => {
  it('returns the expected ranges when the years are all unique', () => {
    expect(yearRanges([2014, 2015, 2016, 2017, 2019, 2020])).to.eql(['2014 - 2017', '2019 - 2020']);
  });

  it('returns a single year instead of a range when all the years are the same', () => {
    expect(yearRanges([2014, 2014, 2014, 2014])).to.eql(['2014']);
  });

  it('returns the expected array of ranges with isolated years by themselves when there are multiple gaps', () => {
    expect(yearRanges([
      2014, 2016, 2016, 2016, 2019, 2020, 2021, 2022, 2023, 2025, 2025, 2027
    ])).to.eql(['2014', '2016', '2019 - 2023', '2025', '2027']);
  });
});

describe('consolidateSchoolYears', () => {
  it('returns an array of consolidated school years', () => {
    expect(consolidateSchoolYears([
      '2014-2015', '2015-2016', '2016-2017', '2019-2020'
    ])).to.eql(['2014 - 2017', '2019 - 2020']);
  });

  it('does not return duplicates', () => {
    expect(consolidateSchoolYears([
      '2014-2015', '2014-2015', '2015-2016', '2016-2017', '2019-2020'
    ])).to.eql(['2014 - 2017', '2019 - 2020']);
  });

  it('returns the expected ranges when the input is out of order', () => {
    expect(consolidateSchoolYears([
      '2019-2020', '2014-2015', '2016-2017', '2014-2015', '2015-2016'
    ])).to.eql(['2014 - 2017', '2019 - 2020']);
  });
});
