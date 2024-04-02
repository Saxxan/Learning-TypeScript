// TYPESCRIPT TYPES

const commonHobbies = ['Sports', 'Cooking', 'Music'];

// Enum
enum Role {
    //ADMIN, // 0
    //READ_ONLY, // 1
    //AUTHOR // 2
    ADMIN = 'ADMIN',
    READ_ONLY = 'READ ONLY',
    AUTHOR = 'AUTHOR'
}

// Object
const person = {
    // String
    name: 'Salvador',
    // Number
    age: 27,
    // String[]
    hobbies: [...commonHobbies, 'Programming'],
    // Tuple: Fixed legth and type array
    roles: [2, 'frontend'],
    role: Role.ADMIN
}

console.log(person.name); // Salvador

for (const hobby of person.hobbies) {
    console.log(hobby); // Sports, Cooking, Music, Programming
}

console.log(person.role); // ADMIN