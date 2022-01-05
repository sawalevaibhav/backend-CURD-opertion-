const res = require("express/lib/response")
const db = require("../model")
const User = db.users

//saving data to database 
exports.create=(req,res)=>{

    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        Email: req.body.Email,
        number: req.body.number,
        Textarea: req.body.TextareaTextarea,
        checkbox:req.body.checkbox,
         Gender:req.body.Gender

    })

    user.save(user)
    .then(data=>{
        res.send(data)
    })
}

// get all data to data base 
exports.findAll =(req,res)=>{
    User.find()
    .then(data=>{
        res.send(data)
    })
}

// get data by using  only id 

exports.findOne=(req,res)=>{

    const userId=req.params.id
    console.log(userId);
   
    User.findOne({'_id':userId})
          .then(data=>{
              res.send(data)
          })
}


// for login  login Email And Number are compare to registraion form 
exports.findByEmailAndNumber=(req,res)=>{

    const userObj=req.body
    console.log(userObj);

    const resObj={
        status:200,
        message:'Success'
    }

    User.findOne({Email:userObj.Email,Number:userObj.number})
        .then((data)=>{
            if(!data){
                res.send({'status':'Failed!!!'})
            }else{
                res.send(resObj)
            }
            
        })

}

// update the document

exports.updateUser=(req,res)=>{

    const userId=req.params.id 

    const user=req.body 

    User.findByIdAndUpdate(userId,user,{useFindAndModify:false})
        .then(()=>{
            res.send({message:"Sucessfully update"})
        })
}


exports.deleteUser=(req,res)=>{

    const userId =req.params.id
    const user = req.body

    User.findByIdAndRemove(userId,{useFindAndModify:false})

    .then(()=>{
        res.send(` User deleted Sucessully`)
    })
}

