interface Person {
    name: string
    code: string | number
    charge:number
    description?:string
    token: string
    sayHello: () => string
}


let person: Person = {
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: 'hola',
    sayHello: () => {
        //GuardarToken()
        console.log('Holaaaa')
        const personas = [1,2,3,4,]
        personas.map(p => p.toFixed(1))
        return 'Hola'
    }
}

let secondPerson: Person = {
    name: '',
    code: '',
    charge: 0,
    sayHello: () => 'Hola2'
}

