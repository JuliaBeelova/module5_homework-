let recipeMap = new Map ([
  ['огурец', 100],
  ['помидор', 200],
  ['перец', 300],
]);

recipeMap.forEach((value, key, map) => {
  console.log(`ключ - ${key}, значение - ${value}`); 
});
