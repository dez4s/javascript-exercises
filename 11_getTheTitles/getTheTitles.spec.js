const getTheTitles = require('./getTheTitles.js');

describe('Return the titles', () => {
  
  const books = [
    {
      title: 'Book',
      author: 'Name',
    },
    {
      title: 'Book2',
      author: 'Name2',
    }
  ];

  test('Return the correct titles', () => {
    expect(getTheTitles(books)).toEqual(['Book', 'Book2']);
  });

});