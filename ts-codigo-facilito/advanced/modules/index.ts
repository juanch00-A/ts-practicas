import { PI, User, generateId }  from "./utils.module"

const myNumber = 10 * PI

const myUser: User = {id: generateId().toString(), name: 'Juan'}

console.log({
    myNumber, myUser
})