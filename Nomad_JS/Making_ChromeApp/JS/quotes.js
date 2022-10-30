const quotes = [
  {
    quote: 'In a heated argument we are apt to lose sight of the truth.',
    author: 'Publilius Syrus',
  },
  {
    quote:
      'The greatest lesson in life is to know that even fools are right sometimes.',
    author: 'Sir Winston Churchill',
  },
  {
    quote:
      'The greatness of a nation and its moral progress can be judged by the way its animals are treated.',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'Perpetual optimism is a force multiplier.',
    author: 'Colin Powell',
  },
  {
    quote: 'The busy bee has no time for sorrow.',
    author: 'William Blake',
  },
  {
    quote: 'If you would be loved, love and be lovable.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'Love is the delightful interval between meeting a beautiful girl and discovering that she looks like a haddock.',
    author: 'John Barrymore',
  },
  {
    quote: 'Love is the big booming beat which covers up the noise of hate.',
    author: 'Margaret Cho',
  },
  {
    quote:
      'That which is done out of love always takes place beyond good and evil.',
    author: 'Friedrich Nietzsche',
  },
  {
    quote: 'Love is, above all else, the gift of oneself.',
    author: 'Jean Anouilh',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
