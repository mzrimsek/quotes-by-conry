const spreadsheet = 'https://docs.google.com/spreadsheets/d/1sZuF7YsUy8rLJJcB3tOQyaZsbdUcMsF7XMnsYlidEoQ/edit#gid=0';

const handleResults = function (error, _options, response) {
  if (!error) {
    const rawQuotes = response.rows.slice(1); // ignore header row
    const quotes = rawQuotes.map(rawQuote => rawQuote.cellsArray[0]);
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $('body').append(`<div class="quote">${quote}</div>`);
  }
}

sheetrock({
  url: spreadsheet,
  query: 'select A',
  callback: handleResults
});