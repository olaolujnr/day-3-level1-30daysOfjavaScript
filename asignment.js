/*Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. */
let firstName = "Olaoluwa"
let lastName ="Sholola"
let country = "Nigeria"
let city = "lagos"
let age = 20
let isMarried = true
let year = 2022

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year)) 


/*Check if type of '10' is equal to 10 */
let a ="10"
console.log(typeof(a)==typeof(10))


/*Check if parseInt('9.8') is equal to 10 */
let b = "9.8"
let c =parseInt(b)
console.log(b===c)

/*Write three JavaScript statement which provide truthy value.*/
let asake = "ololade"
console.log(asake=="ololade")

let num = 5
console.log(num<10)

console.log(2>1)


/*Write three JavaScript statement which provide falsy value */
let firboy ="baddo"
console.log(asake=="")

let nums =7
console.log(num>10)

console.log(1>2)


/*Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!="4")
console.log(4=="4")
console.log(4==="4")

let word1 = "python"
let length1 = word1.length
let word2 = "jargon"
let length2 =word2.length
console.log(length1>length2)

/*Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

const now = new Date()
console.log(now)


const years = now.getFullYear()
console.log(year)


const month = now.getMonth()
console.log(month)

const  today = now.getDate()
console.log(today)

const day =now.getDay()
console.log(day) 

const hour = now.getHours()
console.log(hour)

const minutes = now.getMinutes()
console.log(minutes)

const seconds =now.getTime()
console.log(seconds)