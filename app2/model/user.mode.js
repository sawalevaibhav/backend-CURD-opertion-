module.exports = mongoose=>{
    var schema = mongoose.Schema({
        firstname: String,
        lastname: String,
        Email: String,
        number: String,
        Textarea: String,
        checkbox: String, Gender: String

    })

    const User = new mongoose.model("user",schema)
    return User
}