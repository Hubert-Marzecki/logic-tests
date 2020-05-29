import { getBalanceByCategoryInPeriod } from './';

describe('Task1', () => {
  it('returns 0 if there are no transactions', () => {
    const result = getBalanceByCategoryInPeriod(
      [],
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-31T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  it('returns 0 if there are no transactions in selected date period', () => {
    const INPUT = [{
      id: 1,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: -30,
      category: 'groceries',
      time: '2019-03-12T12:34:00Z'
    }];

    const result = getBalanceByCategoryInPeriod(
      INPUT,
      'groceries',
      '2018-03-01T10:34:30.000Z',
      '2018-03-03T10:34:30.000Z',
    );

    expect(result).toEqual(0);
  });

  // Add more tests here...
});
