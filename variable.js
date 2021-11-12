for (let i = 0; i <10; i ++){
    let j = i;
    console.log(i * j)

    }

// console.log("the value of i is ", i)
// console.log("the value of j is ", j)


    let Native = { 
        name: "",
        age: "",
        gender:  "",
        height:  "",
        hobby: ""

    }

console.log(Native)
    
   let native = new Object()
    console.log(Native)


let othernative = new Object()

function createObject(name, age, gender, height, hobby){
this.name = name
this.age = age
this.gender = gender
this.height = height
this.hobby = hobby

}

let newNative = new createObject("mav", 12, "male", "6.2ft", "sleeping" )

console.log(newNative)

//consolr.log(Object.entries(newNative))


//Retrieval
//we have two methods of retriving values from an object

let age = newNative.age
console.log(age)

let name = newNative.name
console.log(name)

let ageb = newNative["age"]
console.log(age, ageb)

//update data

newNative.age = 11
let newAge = newNative["age"]
console.log(newAge)

//deleting

delete newNative.age
console.log (newNative)

// for (let n in newNative){
//     console.log (n)   
// }
// for (let n in newNative){
//     console.log(newNative[n])   
// }

// console.log(Object.keys(newNative))
// console.log(Object.values(newNative))
// console.log(Object.entries(newNative))

//introduction to this keyword

let cohort8Native = {
    fullname : "tife dami",
    gender : "male",
    height : "4.50ft",
    hobby : "fashion",
    
    getFullname : function(){
        console.log(this)
        return  this.fullname
    }


}

// let returnFullNmae = cohort8Native.getFullname

// console.log(returnFullName())



//introduction to bind keyword
// let returnFullName = cohort8Native.getFullname.bind(cohort8Native)

// console.log(returnFullname())

let firstName = "Ozioma"
let nameArray = firstName.split("i")
console.log(nameArray)

//introducing arrays

let cohort8 = ["ozioma", "jerry", "tife", "cubana", "femi"]
    for ( let i = 0; i < cohort8.length ; i++){
        if (cohort8[i] !== "tife"){
        console.log(cohort8[i])
}
    }    

//   for(let key in cohort8){
//       console.log(cohort8[key])
//   }


//let cohort8Array = ["ozioma", "jerry", "tife", "cubana", "femi"]

// let newArray= cohort8.splice(1, 1)
// console.log(newArray)

// let newArray = cohort8.slice(1, 3)
// console.log(newArray)




//  let arrayb = ["mav", "toska", "ahmad", "giddy"]

//  console.log[arrayb[2]]

 


 function getFirstName (name){

    newName = "";
        for ( count = 0; count < name.length; count++){
            newName = newName +  name[count] + (count+1)
             
    
        }   
    
            return newName

    }     
        console.log(getFirstName("saheed"))

    
    


        function getFirstname (firstName){
            newName = ""

            for(i = 0; i <= firstName.length; i++){
                newName = newName + firstName[i] + (i+1)
                

            }

            
        return newName
        }
            console.log(getFirstName("muqtar"))


    
 


// let name = {

//     firstName = ["Saheed"],
//     getFirstName : function(){
//        // console.log(this)
//         return firstName
    

//     for( count = 0; count <= firstName.length; count++)

//     console.log(name.getFirstName)

//     }

// }
     

let details = {
    sex : "female",
    first_Name: "gideon",
    last_name :  "mojoyin",
    getFullname : function(anotherFunction){
        console.log(anotherFunction(this))
        

    }  
}

details.getFullname((obj) => {
    let fullName = obj.first_Name + " " +  obj.last_name
    if(obj.sex === "male"){
        fullName  = "Mr" + " " + fullName
    }
    else{
        fullName = "Mrs " + " " + fullName
    }

    return fullName
    
})


//02-11-2021


// function a  (b, anotherFunction){

//     let x = b
//     anotherFunction(x)

// }

//     function multiplication (c){
//         let result = 2 * c
//         console.log(result)

//     }
    
//     for (let i = 0; i < 12; i++)
//     {
//          a (i, multiplication)
// }



// function a (num, bodmas){
//     let x = num,

//     for (let y = 1; y <= 12; y++){
//         bodmas (x, y)
//     }
// }

// function multiply (x, y){
//     let result = x * y 

//     console.log('${x} * ${y} = $(result)')

// }

// function addition (x, y){
//     let result = x + y
//     console.log('${x} + ${y} = $(result)')
//     }


// for(let i = 1; i <= 12; i++){
//     a(i, multiply)
// }
// for(let i = 1; i <= 12; i++){
//     a(i, addition)
// } 




let numArray = [1,2,3,4,5,6,7,8,9,10,11,12]


// function multiply (num){
//     for (let y = 0; y <= 12; y++){
//         console.log('${x} * ${y} = ${x * y}')
//     }
    
// }

// for (let i = 1; i <= 12; i++){
    
//     numArray.forEach(multiply) 
        
    
//}

let speak = function(){
console.log("morning")
};
speak();


function greet(){
console.log("are you there")
}
greet()


const day = function(name = 'mav', time = 'morning'){
    console.log('good ${name} ${time}');
    
};

    day()