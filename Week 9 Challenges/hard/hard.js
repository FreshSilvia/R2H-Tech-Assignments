'use strict'
//Create object pii, with name and ssn

function Person(){  
    const pii = {
        name: 'John Jones',
        address: '1115 Hallie Dr.',
        email: 'john.jones@yahoo.com',
        ssn: '123456789',
    };
    return {
        getName() {
            return pii.name;
        },
        getAddress(){
            return pii.address;
        },
        getEmail() {
            return pii.email;
        },
    }
};

const person = Person();
console.log(person.getName());
console.log(person.getAddress());
console.log(person.getEmail());
console.log(Person());

//Another way to do the assignment

// function security(name,ssn){
//         var pii = {
//             name: this.name,
//             ssn: this.ssn,
//         }

//         function getInfo(){
//             return name
//         }

//         getInfo()
//     }

// security("Jordan", 46945987)
