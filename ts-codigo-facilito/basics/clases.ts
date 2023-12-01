class Animal {
    public name: 'Generic Animal'
    private age = 10
    protected identity ='jjj'

    constructor() {}

    sayHi(){
        console.log('Grrr', this.age)
    }
}

class Dog extends Animal {
    type: 'Pastor Animal'
    constructor () {
        super()
        console.log('Perro registrado')
    }
    

    sayHi(){
        this.identity
    }
}

const myAnimal: Animal = new Animal()
myAnimal.sayHi()

const myDog: Dog = new Dog()


