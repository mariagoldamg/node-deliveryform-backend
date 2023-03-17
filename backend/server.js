
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Routes = require ('./Router')

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://mariamelnikova88:Yogalover123@clustermealplanner.rgpji2c.mongodb.net/?retryWrites=true&w=majority');

app.use(express.urlencoded({extended:true}));
app.use (express.json());

app.use (Routes);

//const messageSchema ={
   // name: String,
   // email: String,
   // message:String
  //  }
 
//const Message = mongoose.model('My Messages', messageSchema);

/*app.get ('/', (req,res)=> {
    res.sendFile(__dirname +'/index.html')
})

app.post('/', (req,res)=>{
    let newMessage = new Message({
        name:req.body.name,
        email:req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
})*/



app.use(express.static('public'));
app.listen(8000,()=>{
    console.log ('I AM LISTENING AT PORT 8000')
})
