// let days = {
//     sunday:"day1",
//     monday:"day2",
//     tuesday:"day3",
// }
// // this is the rest operator work in the object 
// let {sunday, ...weekdays} =days
// console.log(weekdays)

// // short circuiting (&& ,||)
// // falsy values in js - null , 0, undefined , " "(empty string ), false 

// let result = 5000 && "coders"// it will go till the end end to check
// // the values are true it found inbetween false it stop print that one 
// console.log(result)

// // let result2 = 5000 && " 0"
// let result2 = null && 0
// console.log(result2)

// let result3 = 5000 && false && "suraj"
// console.log(result3)



// // for - || (or operators )

// let res = null || 5000 // or opertors check the one of the is true or not 
//                        // if true it will print that one 
// console.log(res)

// let res2 = null || false || 5000 || "hii" 
// console.log(res2)

// let res3 = "hiii" || "sgdgdggd"
// console.log(res3)


// // nullish coaslescing operators 
// //(??) for nullish coalescing operators only null and undefined are falsy value 
// // others are not 

// let noOfGuest = 0
// let result5 = noOfGuest ?? 10 // because 0," ", false is not nullish value it will prrint that value 
// console.log(result5)



// //--------------------

// let array = ["maggie" , "pasta" , "frenchfries", "potatochifs"]

// for(let [i,item] of array.entries())
// console.log(` the item no ${i+1} is ${item}`)


//-----------------------------------------------------------------


// destructuring of array 
 // this is the process w/o destructuring 
// let item = [22,3,4,5,6,7,8,9]

// let x = item[0]
// let y = item[1]
// let z = item[2]
// let q = item[3]
// let p = item[4]

// console.log(x,y,z,q,p)

// // with destructuring 
//  let [a,b, ,d,e,f,g,h] = item
//  console.log(a,h,d) 

 // in between if we dont wont to assigned to any we can give (, ,)
 // then this value is skipped 
 
 // for obj 

//  let  user = {   id: 101,
//                   email: 'jack@dev.com',    
//                   personalInfo: {  name: 'Jack',
//                                    address: { line1: 'westwish st',
//                                               line2: 'washmasher',
//                                               city: 'wallas',
//                                               state: 'WX'}   
//                                 },
//                  hobbies : ["reading ", "skipping" , "watching documentary ","music", "cooking" ],
                            
//               }


//               let [main, second] = user.hobbies
            //   console.log(hob1) 
              

              // usecase of destructuring for switching 

              // eithout 

            //   temp = hob1
            //   hob1 = hob2
            //   hob2 = temp 
            //   console.log(hob1)
   //--------------------------------------------------------
            // with destructuring 
            //swap 

            // [main, second] = [second, main]

            // console.log(main)
       // it is not working 
    //------------------------------------------------------------    

            // let a = "First";
            // let b = "Second";
            // [a, b] = [b, a];

            // let arr1 = ["first" , "second"]

            // let [a,b] = arr1
    
            
            // console.log("a:", a);
            // console.log("b:", b);

         //-----------------------------------------------------------------------------
         
   // destructuring of nested array 
   
   let array = [1,2,[3,4,[5,6]],7,[8,9]]

   let [a,b,[c,d,[e,f]],g,h] = array

   console.log(array)
   console.log(a,b,c,d,e,f,g,h)


   //-------------------------------------------------------


//  // destructuring of object 
//  let  user = {   id: 101,
//     email: 'jack@dev.com',    
//     personalInfo: {  name: 'Jack',
//                      address: { line1: 'westwish st',
//                                 line2: 'washmasher',
//                                 city: 'wallas',
//                                 state: 'WX'}   
//                   },
//    hobbies : ["reading ", "skipping" , "watching documentary ","music", "cooking" ],
              
// }


             
            // when assigning to varible  same name as keys name 

            //   let {id , email, personalInfo} = user
            //   console.log(id,email,personalInfo)  


           // set a customizable name 
        //    let {id:hisId, email:hisEmail ,personalInfo:hisPersonalINfo} = user
        //    console.log(hisId, hisEmail ,hisPersonalINfo)  
 
           // destructuring of nested object 

           // here we have to destructure one by one go inside 

        //    let {id, email,personalInfo} = user;
        //    console.log(id, email, personalInfo);

        //    let {name, address} =personalInfo;
        //    console.log(name, address);

        //    let {line1:l1, line2:l2, city, state} = address
        //    console.log(l1, l2, city,state) 
         

//-----------------------------------------------------------------------------------------------------------------------------

//spread operators ( which simply unpacked the array element)

// let  user = {   id: 101,
//     email: 'jack@dev.com',    
//     personalInfo: {  name: 'Jack',
//                      address: { line1: 'westwish st',
//                                 line2: 'washmasher',
//                                 city: 'wallas',
//                                 state: 'WX'}   
//                   },

//    officeTime : {
//       monday:{ open:"10:00AM" , close:"2:00pm"},
//       sunday:{ open:"10:00AM"  ,close:"2:00pm"},
//       wedDay:{ open:"10:00AM"  ,close:"2:00pm"},
//       thursday:{ open:"10:00AM" , close:"2:00pm"},
//    },
//    hobbies : ["reading ", "skipping" , "watching documentary ","music", "cooking" ],
//    foodLike: ["foodA","foodB","foodC", "foodD"],
//    favLike:["foodP" , "foodQ", "foodR"]
              
// } 

//  let nums = [11111,2,3,4,5,66,77,88,99]

//  console.log(...nums)

 

//  //usecase 

//  //1) joining two array of  
//  let nums2 =[100,200,300,400,500,6000]

//  let newNums = [...nums,...nums2]
//  console.log(newNums)

//  //2) for finding the max value for array 

//  let numsMax = Math.max(...nums)
//  console.log( " the max value is " + numsMax)

//  //3) for using this array in another array 
//  let newArr = [10,20,30,40, ...nums]
//  console.log(newArr) 

//  // we can use it at the start as well 
//  let newArr2 = [...nums2,102030,50,...nums]
//  console.log(newArr2) 

//  //4) 

//  let updatedFoodLike = [...user.foodLike, "paani-puri" ,"shev-poori"]
//  console.log(updatedFoodLike) 

 //5) we can make a shallow copy of it.- so we use spread operator to make shallow copy 
 // if it pointed same reference it make changes in the updatedfoodlike- but shallow copy avoid reference 

//  let copyArray = [...updatedFoodLike]
 

//  copyArray[0] ="new Updated food "
//  console.log(copyArray)  
//  output- [ 'foodA', 'foodB', 'foodC', 'foodD', 'paani-puri', 'shev-poori' ]

// [
//     'new Updated food ',
//     'foodB',
//     'foodC',
//     'foodD',
//     'paani-puri',
//     'shev-poori'
//   ] 



//  // deep copy  - by reference 
//    let copyArray2 = updatedFoodLike
//    copyArray2[0] = "updated food "
//    console.log(copyArray2) 
//    console.log(updatedFoodLike)   


// // spread operators in strings 

// let str = "programming "

// console.log(...str) // it use to unpacked into single letters 
 

//---------------------------------------------------------------------------------

// //rest operators (...) it is use to packed the element in the array 
// // LHs 

// let numArr = [10,20,30,40,50,60]

// let [ab,ab2,...other] = numArr 
// console.log(other)
// // rest operators must be at the last element 

// // rest operators 
// let {a1,...rest} = user.personalInfo.address
// console.log(rest) 

// let {line1,line2,city,state} = rest
// console.log(line1,line2,city,state)   


// //----------------------------------------------------

// for(let item of user.hobbies){
//     console.log(item)
// }

// //----------------------------------------------------  
// // for of loop  
// let menu = [...user.foodLike , ...user.favLike]
// console.log(menu)  

// // for (let item of menu){
// //    console.log(item)
// // }

// // it will give array of array
// for(let item of menu.entries()){
//    console.log(item)
// }

// // if we want both index and value 
// for(let [i,item] of menu.entries()){
//    console.log(i+1+ "  "+":"+ item)
// }  

// //  Enhance object literals 

// let name11 = "suraj"
// let name22 = "Raja "

// let name33 = "kuamr "

// let name44 = "sk"
// // before  Es 6 

// let obj22 ={
//    name11:name11,
//    name22:name22,
//    name33:name33,
//    name44:name44,

//    order : function(){

//    }
// }// inthis first is key and tere value is at above 
// console.log(obj22)

// //after Es 6
// let obj11 = {
//    name11,
//    name22,
//    name33,
//    name44,
//    order(){

//    }
// }
// console.log(obj11)


//---------

//---------------------------------------------------

// this is can do after E-S - 6 
// we can use computed property name 
let menuType = "silver"  
// this the way we can change name of key 

const user1 = {   id: 101,
   email: 'jack@dev.com',    
   personalInfo: {  name: 'Jack',
                    address: { line1: 'westwish st',
                               line2: 'washmasher',
                               city: 'wallas',
                               state: 'WX'}   
                 },

  officeTime : {
     monday:{ open:"10:00AM" , close:"2:00pm"},
     sunday:{ open:"10:00AM"  ,close:"2:00pm"},
     wedDay:{ open:"10:00AM"  ,close:"2:00pm"},
     thursday:{ open:"10:00AM" , close:"2:00pm"},
  },
  hobbies : ["reading ", "skipping" , "watching documentary ","music", "cooking" ],
  foodLike: ["foodA","foodB","foodC", "foodD"],
  favLike:["foodP" , "foodQ", "foodR"],
  [menuType]: ["Different food items"] ,
  // write that key in array form
             
}
console.log(user1)

//---
 let wednesday ="people" 
let weeks  = {
   sunday:"cool",
   monday:"dry",
   tuesday:"humid" ,
   [wednesday]:"fry",
}
console.log(weeks)

//----------------------------------

// optional chaining (?.)
// lets we wants to check the office is open on some day or not 
// and check at what time it is open 

console.log(user1.officeTime.saturday)// undefie d saturday is not there 
// console.log(user1.officeTime.saturday.open) // it will give the error 
// // of checking the undefined property value 
//-------------
if(user1.officeTime.saturday){
   console.log(user1.officeTime.saturday.open)
}
// This is the conventional way to check its parent exist or not

if(user1.officeTime && user1.officeTime.saturday){
   console.log(user1.officeTime.saturday.open)
} //  give undefined 

if(user1.officeTime && user1.officeTime.monday){
   console.log(" office open at "  + user1.officeTime.monday.open)
} 
// by using optional chaining 

console.log(user1.officeTime?.thursday?.open)
console.log(user1.officeTime?.friday?.open)// it will not give the error- undefined 
// checking the previous value of the operator 
// return undefined 

//---------------------------------------------------------------------------

// object constructor 
// keys(properties ) , keys array 
let proper = Object.keys(user1.officeTime)
console.log(proper)

for (let day of proper){
   console.log(day)
}

// value array
let proper1 = Object.values(user1.officeTime)
console.log(proper1)

for(let t1 of proper1){
   console.log(t1)
}

//complete onject 
// entries  // give array of array
let proper2 =Object.entries(user1.officeTime)
 console.log(proper2) 
 
 for(let [day, {open,close}] of proper2){

   console.log(`on ${key} the office is open at ${open} and close at ${close}`)
     
 }
 


// ----------------------- -------------------------   ------
// ------------------------ -------------------------   ------
// ------------------------ -------------------------   ------

////    ////     ////     ////      ////    ////    ////

//....//....//.....//......//.....//......//......//.....//...//....//....//









  

























