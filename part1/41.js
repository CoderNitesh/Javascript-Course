// object destructuring
const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};


let { famousSong, anotherFamousSong, ...restProps } = band;


console.log(famousSong);
console.log(anotherFamousSong);
console.log(restProps);
