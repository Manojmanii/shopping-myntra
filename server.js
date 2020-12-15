//import express module 
const exp=require("express")

//creating server obj
const app=exp();

//assisigning port number
// app.listen(7200,()=>{console.log('server is running on 7200')})
app.listen(process.env.PORT || 8080 ,()=>{
    console.log('server started')
})

//import path module
const path=require('path');

//connecting with angular app of dist floder

app.use(exp.static(path.join(__dirname,'./dist/RRegulus')));