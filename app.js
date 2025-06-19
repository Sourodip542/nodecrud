




const express = require('express');
const app= express();


const userModel = require('./usermode');

app.get('/', (req, res) => {    
    res.send('Hello World!');
});


app.get('/create', async (req,res) =>{
    let createfruit = await userModel.create({
        name: 'Apple',
        rating: 7,
        review: 'Great fruit!'
    })
    res.send(createfruit);
})

app.get('/update', async (req, res)=>{
    let updatefruit= await userModel.findOneAndUpdate(({name: 'Apple'}),{name: 'Banana', rating: 10, review: 'Best fruit!'}, {new: true});
    res.send(updatefruit);
})

app.get('/read', async (res,req) => {
   let readfruit = await userModel.find();
    req.send(readfruit);
});


app.get('/delete', async (req,res) =>{
    let deletefruit = await userModel.findOneAndDelete({name: 'Banana'});
    res.send(deletefruit);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


