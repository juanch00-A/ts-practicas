//Inferenca

//const a= 1
//const b= 2
//
//const c = a+b
//
//let cadenaDeTexto = "Hola"
//n.toLocaleLowerCase()
//
//n = 2
//
//Any
//
//let obj : any = {x: 0}
//
//obj.foo()
//obj()
//obj.bar = 100
//obj = "Hello"
//const r: number = obj

//Funciones

//function saludar(name: string){
//    console.log(`Hola ${name}`)}

//function saludar({name, age}: {name: string, age: number}){
//    console.log(`Hola ${name}, tienes ${age} año`)
//}
//
//saludar({name: "Pepe", age: 2})


//    function saludar({name, age}: {name: string, age: number}){
//    console.log(`Hola ${name}, tienes ${age} año`)
//    return age 
//}
//
//let userName: string
//userName= saludar({name: "Pepe", age: 2})


//const sayHiFromFun = (fn) => {
//    return fn("pepe")
//}
//
//sayHiFromFun((name) =>{
//    console.log(`Hola ${name}`)
//})

//Tipar "Arrow functions, hay 2 metodos"

// const sumar = (a: number, b:number): number =>{
//     return a + b
// }
// 
// const restar : (a: number, b:number)=> number = (a,b) =>{
//     return a - b
// }


//Never son funciones que nunca van a devolver nada
//function throwError(message: string): never{
//    throw new Error(message);
//    
//}


//Inferencia funciones anonimas segun 
//const avengers = ["Spidey","Hul", "Avengers"]
//
//avengers.forEach(function (avengers){
//    console.log(avengers.toUpperCase())
//})


//Objetos
//let hero = {
//    name: "Thor",
//    age: 1500
//}
//
//hero.power= 100


//Type Alias

//type Hero = {
//    name: string,
//    age: number
//}
//
//let hero: Hero = {
//    name: "Thor",
//    age: 1500
//}
//
//function createHero(hero : Hero): Hero{
//    const {name, age} = hero
//    return{name, age}
//}
//
//const thor = createHero({name: 'Thor', age:1500})



//Optional Properties

//type HeroId = `${string}-${string}-${string}-${string}-${string}`
//
//type Hero = {
//    readonly id?: HeroId
//    name: string
//    age: number
//    isActive?: boolean
//}
//
//let hero: Hero = {
//    name: "Thor",
//    age: 1500
//}
//
//function createHero(hero : Hero): Hero{
//    const {name, age} = hero
//    return{id: crypto.randomUUID(), name, age, isActive: true}
//}
//
//const thor = createHero({name: 'Thor', age:1500})
//thor.id?.toString()
//
//Templete union types
//
//type HexadecimalColor = `#${string}`
//
//const color: HexadecimalColor =  '0033ff' // Hexadecimal
//const color2: HexadecimalColor = '#0033ff' //Hexadecimal


//Union Types

//type HeroId = `${string}-${string}-${string}-${string}-${string}`
//type HeroPoweScale= 'local' |  'planetary' | 'galactic' | 'universal' | 'multiversal' 
//
//
//type Hero = {
//    readonly id?: HeroId
//    name: string
//    age: number
//    isActive?: boolean
//    powerScale?: HeroPoweScale
//}
//
//let hero: Hero = {
//    name: "Thor",
//    age: 1500
//}
//
//function createHero(hero : Hero): Hero{
//    const {name, age} = hero
//    return{id: crypto.randomUUID(), name, age, isActive: true}
//}
//
//const thor = createHero({name:"Thor", age: 1500})
//thor.powerScale = 'multiversal'


// Intersection Types

//type HeroId = `${string}-${string}-${string}-${string}-${string}`
//type HeroPoweScale= 'local' |  'planetary' | 'galactic' | 'universal' | 'multiversal' 
//
//type HeroBasicInfo = {
//    name: string
//    age: number
//}
//
//
//type HeroProperties = {
//    readonly id?: HeroId
//    isActive?: boolean
//    powerScale?: HeroPoweScale
//}
//
//type Hero = HeroBasicInfo & HeroProperties
//
//let hero: Hero = {
//    name: "Thor",
//    age: 1500
//}
//
//function createHero(input: HeroBasicInfo): Hero{
//    const {name, age} = input
//    return{id: crypto.randomUUID(), name, age, isActive: true}
//}
//
//const thor = createHero({name:"Thor", age: 1500})
//thor.powerScale = 'multiversal'


// Type Indexing

//type HeroProperties ={
//    isActive: boolean,
//    address: {
//        planet: string,
//        city: string
//    }
//}
//
//const addressHero: HeroProperties['address'] = {
//    planet: 'Marte',
//    city: 'Madrid'
//}

//Type from value

//const address  ={
//    planet: 'Marte',
//    city: 'Madrid'
//}
//
//type Address = typeof address
//
//const addressTwitch: Address = {
//    planet: 'Mars',
//    city: 'Twitch'
//}



//Type from function return

//function createAddress() {
//    return{
//        planet: 'Tierra',
//        city: 'Barcelona'
//    }
//}
//
//type Address = ReturnType<typeof createAddress>



//Arrays

const lenguages: (string | number | Boolean)[] = [] //Que simrep este vacio

lenguages.push('Hola mundo')
lenguages.push('Hola mundo')
lenguages.push('Hola mundo')
lenguages.push('Hola mundo')
lenguages.push(181103)
lenguages.push(true)









