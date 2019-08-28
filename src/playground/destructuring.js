const person = {
    name: 'Emre',
    age: 34,
    location: {
        city: 'Istanbul',
        temp: 55
    }
};

const { name, age } = person;

console.log(name + ' is ' + age);
/*
const {city, temp} = person.location;

if (city && temp) {
    console.log("It's " + temp + ' in ' + city );
}
*/

//
//Array
//

const address = ['12999 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log('You are in ' + city + ' ' + state);