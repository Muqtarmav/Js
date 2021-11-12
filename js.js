// let name = "Muqtar"
// console.log(name)

// let theNumber = Number(prompt("enter a number"));
// if (!Number.isNaN(theNumber)){
//     console.log("your number is the square root of " + theNumber + theNumber);
    
// }


// let total = 0;

// for ( i = 0; i < 10; i++){ 

//     total = total + i;
// }  

// console.log(total);



// question 1

function removeDuplicateValues(numbers){
    return numbers.filter((value, index) => (
        numbers.indexOf(value) === index
        ));

}

    let a = [2, 3, 1];
    let b = [2, 9, 5, 3];

    
    let array = a.concat(b);


    console.log(removeDuplicateValues(array));
  

    let arrayb = [2, 3, 1, 9, 5];

    // sort in ascending order
    

    arrayb.sort((a, b) => a - b);

    console.log(arrayb);

  

    // sort in decending order
    
    arrayb.sort((a, b) => b - a);
    console.log(arrayb);
    

    


    // question 4

  //  function sortOutString(name){
        
    
//     let arrayObject = 
    
//     [
//         {
//         id : 3,
//         firstname: "saheed",
//         lastname: "adesuwa"

//     },

//     {
//         id:2,
//         firstname: "yetunde",
//         lastname: "hamad",

//     },

//     {
//         id:1,
//         firstname :  "goodnews",
//         lastname : "confidence",

//     },

//     {
//         id: 4,
//         firstname :  "gideon",
//         lastname : "mojoyin",

//     },


// ]

//     for (let count = 0; count < arrayObject; count++){
//         if ( id === 3){
//         arrayObject.sort((a, b) => a - b);
        
//     }
    

//         console.log(sortOutString(arrayObject));

    
//     }


//     }



let objArray = [
{
    firstname:'john',
    lastname: 'smith',

},

{
    firstname : 'demola',
    lastname: 'femi',
},


{
    firstname : 'tife',
    lastname : 'harry',
}

]
let question1 = "Using Array method forEach, print out the firstname"

function  getObjArray (){
 for (object of objArray){
    //for (let i = 0; i <= objArray.length; i++){
        console.log(object["firstname"])
        
    }
}
        objArray.forEach(getObjArray)


let question2 = "usuing Array method map, print out a new key fullname"
"per object and the value would be the comparison of "
"the firstname  and the lastname"

"checkout Array.prototype.map.on"



let objArray2 = [
    {
        firstname:'john',
        lastname: 'smith',
    
    },
    
    {
        firstname : 'demola',
        lastname: 'femi',
    },
    
    
    {
        firstname : 'tife',
        lastname : 'harry',
    }
    
    ]

objArray2.map(getFullname)
function getFullname(objj){

    console.log([objj.firstname, objj.lastname].join(" "));

}




let question3 =  "Using array method filter, return an array containing object with gender male"


let objArray1 = [
    {
        gender : "male",
        firstname:'john',
        lastname: 'smith',
    
    },
    
    {
        gender : "male",
        firstname : 'demola',
        lastname: 'femi',
    },
    
    
    {
        gender : "female",
        firstname : 'kim',
        lastname : 'yetunde',
    }
    
    ]

    getTheObjarray = objArray1.filter(gender => gender.gender == "male")
    console.log(getTheObjarray)


    
let question4 =  "Using array method filter, return an array containing object with gender female"


let objArray3 = [

    {
    
        gender : "male",
        firstname:'john',
        lastname: 'smith',
    
    },
    
    {
        gender : "male",
        firstname : 'demola',
        lastname: 'femi',
    },
    
    
    {
        gender : "female",
        firstname : 'kim',
        lastname : 'yetunde',
    }
    
    ]

    getTheObjarray = objArray3.filter(gender => gender.gender == "female")
    console.log(getTheObjarray)




    let question5 = "create a new key age per object, the value of age per object is "
    " equivalent to the total sum of both the firstname and lastname"

 
    let objArray5 = [

        {
        
        
            gender : "male",
            firstname:'john',
            lastname: 'smith',
        
        },
        
        {
            gender : "male",
            firstname : 'demola',
            lastname: 'femi',
        },
        
        
        {
            gender : "female",
            firstname : 'kim',
            lastname : 'yetunde',
        }
        
        ]

        let getAge = objArray5.map(item  => {


            let container = {}

            container[item.firstname] = item.firstname 
            container.age = item.firstname.length + item.lastname.length
        

            return container
    
        })

        
            console.log(getAge)

    //Event Listeners


    let documentPseudo =  {
         addEventListenerPseudo: function (event, aFunction){
        switch(event){

            case "click":
                aFunction(event, "1")
                break
            case "change":
                aFunction(event, "2")
        
            case "hover":
                aFunction(event, "3")
                break
            default:
                break ;   
    
     
       }
    
    }
}


    let myFunction = function (event, number )
     {console.log(event, number)}

    documentPseudo.addEventListenerPseudo("hover", myFunction)


    documentPseudo.addEventListenerPseudo("hover", (event, number) => {
        console.log(event, number)
    })


    // let getName = {
    
    //     checkName : function(age, afunction){

    //         switch(age){
    //         case "babyAge" :
    //             afunction(age, "15")
    //             break
    //         case "fatherAge":
    //             afunction(age, "23")
    //             break
    //         case "motherAge":
    //             afunction(age, "34")
    //             break
    //         default:
    //             break;
    //         }
    //     }
    // }
    
    //     getName.checkName("motherAge", (age, number) => {
    //         console.log(age, number)
    //     }) 



    let persons = {
        person1: "jerry",
        person2: "saheed",
        person3 : "mav",
        person4: "muqtar"
    
    }


    persons = {...persons, person4 : ""}

    // console.log("1", persons)

    // persons = {... persons}
        
    // console.log("2", persons)

    // let user = {name : "segun", crush : "mojoyin",hobby : "praying",  crush : "ozi"}

    // console.log(user)

    let speak = function(){
        console.log("good morning")
    };

    speak()


    function greet(){
        console.log("hello good morning");
    }

    greet();
    greet();

    const day = function(anotherfunction){
        console.log('good day')
    }
    day();


    const age = function(name = "muqtar"){
      //  const name = "muqtar"
        console.log('${name}')

    } 
    age()

    let Calcarea = function(radius){
        let area = 3.12 * radius * radius;
       // return area;
       console.log(area)
    }
    Calcarea(5)

    // const greet = () => "hype up" 
    // const result = greet();
    // console.log(result);


    let people = ["jane", "malik", "kudus", "tosin"]

    people.forEach(function(person){
    console.log(people)
    });