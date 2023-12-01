type Person ={
    name: string,
    code: string | number
    description?:string
}

const newPerson: Person = {
    name: 'Juan',
    code: 'H'
}

type ServiceResponse = string| null | number | undefined

type UserCharges = 'Admin' | 'Null' | 'SuperUser' ;
let response: ServiceResponse

const myUserType: UserCharges = 'Admin'


