//Case 1
//interface Pet {
//    name: string;
//}
//
//class Dog {
//    name: string;
//}
//
//let pet: Pet;
//  // OK, because of structural typing
//pet = new Dog(); 


//case 2
//interface Pet {
//    name: string;
//}
//let pet: Pet;
//  // dog's inferred type is { name: string; owner: string; }
//let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
//pet = dog;



//Case 3
//interface Pet {
//    name: string;
//  }
//  let dog = { name: "Lassie", owner: "Rudd Weatherwax" };
//  function greet(pet: Pet) {
//    console.log("Hello, " + pet.name);
//  }
//  greet(dog); // OK

//Case 4
