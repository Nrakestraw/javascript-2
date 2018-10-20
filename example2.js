// var table= [
//     ["3", "4", "2", "9"],
//     ["nate", "terry", "bob", "chris"],
//     ["hello", "bye", "seeya", "later"],
//     ["java", "script", "fun", "whoa"],
// ]
// for(i= 0; i< table.length; i++){
//     for(j= 0; j< table[i].length; j++){
//         console.log(table[i][j]);
//     }
// }

// var person1= {
//     firstname: "Nate",
//     lastname: "Rakestraw",
//     age: 30
// }

// var person2= {
//     firstname: "Terry",
//     lastname: "Brown",
//     age: 30
// }

// var person3= {
//     firstname: "Sarah",
//     lastname: "Natalie",
//     age: 30
// }

// var people= [ person1, person2, person3]

// console.log(people)

var maths = {
    add: function(x,y){
        var sum = x + y;
        return sum
    },
    subtract: function(x,y){
        var sub = x - y;
        return sub
    },
    divide: function(x,y){
        var div= x / y;
        return div


    },
    multiply: function(x,y){
        var mult = x * y;
        return mult
    }
}

console.log(maths.add(3,4))