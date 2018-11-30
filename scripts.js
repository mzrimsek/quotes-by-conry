const spreadsheet = 'https://docs.google.com/spreadsheets/d/1sZuF7YsUy8rLJJcB3tOQyaZsbdUcMsF7XMnsYlidEoQ/edit#gid=0';

const handleResults = function (error, _options, response) {
  if (!error) {
    const quoteData = response.rows.slice(1); // ignore header row
    const quotes = quoteData.map(data => {
      const text = data.cellsArray[0];
      const author = data.cellsArray[1] ? data.cellsArray[1] : 'Anonymous';

      return {
        text,
        author
      };
    });
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $('body').append(`
      <div class="quote">
        ${quote.text} - ${quote.author}
      </div>
    `);
  }
}

sheetrock({
  url: spreadsheet,
  query: 'select A, B',
  callback: handleResults
});