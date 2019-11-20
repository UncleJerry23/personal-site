export const getRandomMathFact = () => {
  return fetch('http://numbersapi.com/21/math', {
    headers: {
      'Content-Type': 'text/plain'
    },
  })
    .then(res => res.text());
};
