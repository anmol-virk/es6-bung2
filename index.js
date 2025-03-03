console.log("Exercise 1")
console.log("---- ---- ----")

const person = {name: "Tony", age: 30}
console.log(person)
person.age = 35
console.log(person)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

const car1 = { make: 'Porsche', model: '911', horsepower: 450 };
const car2 = { make: 'Toyota', model: 'Camry', horsepower: 200 };

const isSportsCar = (car) => {
    if(car.horsepower >= 300) return true
    else return false
}
console.log(isSportsCar(car1))
console.log(isSportsCar(car2))

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

const person1 = { name: 'Ajay', age: 20 };
const isEligible = (person, num) => {
    if(person.age + num > 21) return true
    else return false
}
console.log(isEligible(person1, 1))
console.log(isEligible(person1, 2))

console.log("---- ---- ----")
console.log("Exercise 4")
console.log("---- ---- ----")

const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
const getViews = (blog) => {
    if(blog.views > 1000) return true
    else return false
}
console.log(getViews(blog1))
console.log(getViews(blog2))

console.log("---- ---- ----")
console.log("Exercise 5")
console.log("---- ---- ----")

let a = 1;
let b = 2;
[a, b] = [b, a]
console.log(a) 
console.log(b)

console.log("---- ---- ----")
console.log("Exercise 6")
console.log("---- ---- ----")

const add = (a=30, b=0) => a+b
console.log(add(2, 3));

console.log("---- ---- ----")
console.log("Exercise 7")
console.log("---- ---- ----")

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combineObjects = (obj1, obj2) => ({...obj1, ...obj2})
const combinedObj = combineObjects(obj1, obj2);

console.log(combinedObj);

console.log("---- ---- ----")
console.log("Exercise 8")
console.log("---- ---- ----")

const getData = ({name, address: {city, state}}) => {
    console.log(name)
    console.log(city, state)
}
const personn = {
    name: 'John Doe',
    address: {
      city: 'New York',
      state: 'NY',
    },
  };
  getData(personn);

  console.log("---- ---- ----")
console.log("Exercise 9")
console.log("---- ---- ----")
  const stringToUpperCase = (str) => {
    return str.toUpperCase()
  }
  console.log(stringToUpperCase("hello"))

  console.log("---- ---- ----")
  console.log("Exercise 10")
  console.log("---- ---- ----")

  const concatenateStrings = (str1, str2) => {
    return str1 + str2
  }
  console.log(concatenateStrings("hello ", "world"))

  console.log("---- ---- ----")
  console.log("Exercise 11")
  console.log("---- ---- ----")

  const lastElement = (arr) => {
    return arr[arr.length-1]
  }
  console.log(lastElement([1, 2, 3, 4, 5]))

  console.log("---- ---- ----")
  console.log("Exercise 12")
  console.log("---- ---- ----")

  const firstElement = (arr) => arr[0]
  console.log(firstElement([1, 2, 3, 4, 5]))

  console.log("---- ---- ----")
  console.log("Exercise 13")
  console.log("---- ---- ----")

  const sumFirstElement = (arr, num) => arr[0] + num
  console.log(sumFirstElement([1, 2, 3], 5))

  console.log("---- ---- ----")
  console.log("Exercise 14")
  console.log("---- ---- ----")
  const sumFirstAndLast = (arr) => arr[0] + arr[arr.length-1]
  console.log(sumFirstAndLast([1, 2, 3, 4, 8]))

  console.log("---- ---- ----")
  console.log("Exercise 15")
  console.log("---- ---- ----")

  const personInfo = (person) => {
    return `${person.name} is ${person.age} years old.`
  }
    const personn1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(personn1))
console.log(personInfo(person2))