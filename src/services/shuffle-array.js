// https://flaviocopes.com/how-to-shuffle-array-javascript/
export const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5)
