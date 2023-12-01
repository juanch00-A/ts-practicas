namespace DatabaseEntity {
export class User{
        constructor(public name: string) {}
    }
    
    const  myUser = new User('Juan')
//console.log(myUser)
}

const myOtherUser = new DatabaseEntity.User('Juan 2')
console.log(myOtherUser)










