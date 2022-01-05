
module.exports =app=>{

    const users = require('../controller/user.controller')
    const router = require('express').Router()


    router.post('/registration',users.create)

    router.get('/registrationData',users.findAll)

     router.get('/getSingleUser/:id',users.findOne)

    //  router.post('/login',users.findByUsernameAndPassword)
    router.post('/login',users.findByEmailAndNumber)
   
    router.put('/updateUser/:id', users.updateUser)
    router.delete('/deleteuser/:id',users.deleteUser)



    app.use('/api',router)

}