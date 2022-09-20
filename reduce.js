// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => {
  const sneakers = [];
  brands.forEach(b => b.shoes.reduce((a, s) => {
    a.push(s);
    return a;
  }, sneakers));
  return sneakers;
};

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => {
  return dogs.reduce((a, d) => a + d.age, 0) / dogs.length;
};
