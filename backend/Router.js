const { Router } = require('express');
const router =  Router();
const MessageModel = require ('./MessageModel')


router.get ('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
});

router.post('/', (req,res)=>{
    let newMessage = new MessageModel({
        name:req.body.name,
        email:req.body.email,
        adress:req.body.address,
        adressTwo:req.body.addressTwo,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        check:req.body.check,
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
})



module.exports = router;