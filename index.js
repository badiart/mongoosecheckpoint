const mongoose = require("mongoose")
const dotenv = require("dotenv")
const { Schema } = mongoose;
dotenv.config()

mongoose.connect(process.env.mongoString, {useNewUrlParser: true,useUnifiedTopology:true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

//defining schema


const personSchema = new Schema({
  name: {type: String ,required:true},  
  favoriteFood:[String],
  age:{type:Number ,required:true},
  phonenumber: Number,
   Addresses:[
     {
       street:{type:String, required:true},
     city:{type:String,required:true},

     }
   ] ,
});
 // compile our model
 let Person = mongoose.model('person', personSchema);
 
 // create a document
//  let badia = new Person({
//   name:"badia rtimi",
//   favoriteFood:'rice salad',
//   age:26,
//   phonenumber:92691924,
//   Addresses:[{
//   street:'9 avril',
//     city:'el hamma',
//   }]
// });

 
// badia.save((error,data)=>{
//   if (error){
//     console.log(error)
//   }
//   else{
//   console.log(data)
//   }
// }) 
//create many records with models.create
// let arrayofpeople=[
//   {name:"beya nasr",age:27,favoriteFood:['suchi'],phonenumber:52698745,Addresses:[{street:'el amal',city:'gabes'}]},
//   {name:"wafa hrizi",age:30,favoriteFood:['pasta'],phonenumber:22356987,Addresses:[{street:'elsombat',city:'el hamma'}]}
// ,  {name:"amira rhouma",age:25,favoriteFood:['chips'],phonenumber:58447896,Addresses:[{street:'ouedhref',city:'gabes'}]}
// ]
// Person.create(arrayofpeople,(error,data)=>
// {if(error){console.log(error)}
// else{console.log(data)}})
// //use model.find methode
// Person.find({name:'beya nasr'},(error,data)=>{
//   if(error){console.log(error)}
//   else{console.log(data)}
// })
//   use model.findone
  

  // 
  //     use model.findbyId
  //   Person.findById('60d47ebb38fe4119288d92da',(error,result)=>{
  //   if(error){console.log(error)}
  //   else{console.log(result)}
  // })



    // var foodToAdd='hamburger';
    // Person.findById('60d4921517928012f8af7cfe',(error,result)=>{
    //     if (error){console.log(error)}
    //     else{result.favoriteFood.push(foodToAdd)
    //       result.save((error,result)=>{
    //       if(error){console.log(error)}
    //       else{console.log(result) }})}})
    //perform findone and update
      // Person.findOneAndUpdate({name:'amira rhouma'},{age:20},(error,result)=>{
      //   if(error){console.log(error)}
      //   else{
      //   result.save((error,result)=>{
      //           if(error){console.log(error)}
      //           else{console.log(result) }})}})
    
      //     use model.findbyId and remove
   
  // Person.findByIdAndRemove('60d4959407a8fb1ea059117f',(error,data)=>{
  //   if (error){console.log(error)}
  //   else{console.log(data)}
  // })
  //delete many doc with model.remove
//   Person.remove({name:'Mary'},done=(error,data)=>{
// if(error){console.log(error)}
// else{ console.log(data)}
//   })
 //Chain Search Query Helpers to Narrow Search Results
 Person.find({favoriteFoods:['suchi']}).sort({name : "desc"}).limit(2).select("-age").exec((err, data) => {
  if(err)
    {console.log(err)}
else{console.log(data)}})
