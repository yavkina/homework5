const husband = {
  name: 'Enriki',
  age: 30,
  wife: 'Sara',
  daughter: 'Ann',
  occupation: 'programmer',
  city: 'London',
  hobby: 'jogging in the morning',
  favouriteDrink: 'fresh juice'
};

console.log (husband);

const wife = {
  name:'Sara',
  age: 26,
  husband: 'Enriki',
  occupation: 'laywer',
  city: 'London',
  daughter: 'Ann',
  hobby: 'watch TV series and write articles'
};

console.log (wife);

const daughter = {
  name: 'Ann',
  age: 4,
  parents: 'Enriki and Sara',
  occupation: 'kindergarten',
  hobby: 'paint',
  friend: 'Tommi'
};

console.log (daughter);

const friend = {
    name: 'Tommi',
    friend: 'Ann',
    occupation: 'kindergarten'
};

console.log (friend);

const momOfSara = (name, age, husband, daughter, city, occupation, hobby) => {
      return {
          name: name,
          age: age,
          husband: husband,
          daughter: daughter,
          city: city,
          occupation: occupation,
          hobby: hobby
      }
  };

  console.log (momOfSara ('Kelly', 60, 'Jim', 'Sara', 'Manchester', 'retiree', 'travel across England'));

  const dadOfSara = (name, age, wife, daughter, city, occupation, hobby) => {
    return {
        name: name,
        age: age,
        wife: wife,
        daughter: daughter,
        city: city,
        occupation: occupation,
        hobby: hobby
    }
};

console.log (momOfSara ('Jim', 60, 'Kelly', 'Sara', 'Manchester', 'retiree', 'travel across England'));

const momOfEnriki = (age, husband, son, city) => {
  return {
      age: age,
      husband: husband,
      son: son,
      city: city
  }
};

console.log (momOfEnriki (66, 'Николай', 'Enriki', 'Liverpool'));

const stepfatherOfEnriki = (name,age, placeOfBirth, wife, city, occupation, hobby) => {
  return {
      name: name,
      age: age,
      placeOfBirth: placeOfBirth,
      wife: wife,
      city: city,
      occupation: occupation,
      hobby: hobby
  }
};

console.log (stepfatherOfEnriki ("Nikolay", 70,"Siberia", "Enrika's mom", "Liverpool", "head of security in a huge business center", "plays first violin in the Liverpool Orchestra"));