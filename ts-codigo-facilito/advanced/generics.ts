interface MyInterface<T> {
    field: T
}

class MyClass<T> {
    field: T ;

    constructor(field: T){
        this.field = field
    }
}
function getData<T>(id: string): Promise<T> | void {}

//Example with classes
interface UserResponse {
    id: number;
    name: string;
}

class HttpResponse<T> {
    data: T
    status: number
    code: number

    constructor(data: T, status: number, code: number){
        this.data= data
        this.status= status
        this.code= code
    } 
}

const fetchUser = () => {
    return{
        id: 1,
        name: 'Juan'
    }
}

const myUser = fetchUser()
const res = new HttpResponse(myUser,200,1)
console.log(res)

