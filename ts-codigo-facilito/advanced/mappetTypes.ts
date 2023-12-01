interface Person {
    name: string
    age: number
}

//interface GetPeson {
//    getName: () => string
//    getAge: () => number
//}

type Getter<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property]
}

type GetPeson = Getter<Person>








