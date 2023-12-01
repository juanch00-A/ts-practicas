type Person =  {
    name: string,
    age: number
}

interface Employee extends Person {
    charge: string
}

const newEmployee : Employee = {
    name: '',
    age: 23,
    charge: ''
}

//Union tyes

type User = {
    id: string
}

type Admin = User & Employee

type ServiceResponseToken = string | null | undefined | number 
type UserTypes = 'Admin' | 'SuperUser' | 0

//const myUser : UserTypes = 5


interface Developer {
    name: string;
    stacks: string[] 
}

interface Developer {
    phone: string
}

//const me : Developer = {
//    //phone
//}














