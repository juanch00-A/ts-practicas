const sayHi = (name) =>{
    console.log(`Hola ${name}` )
}

sayHi("Juan")



function sayGoodBye(name) {
    console.log(`Adios ${name} cuidate`)
}

sayGoodBye("Juan")

const response = {
    id: 1,
    name: "Codigo Facilito",
    charge: "Developer",
    number: 4
}

function show({name, ...other}: {id; name; charge; number;}): number{
    console.log("El id mandado es: ", name)
    //savePerson({name, ...other})
    return 1
}

show(response)