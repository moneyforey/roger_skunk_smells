const { connect } = require("mongoose")

const dbConnect =async()=>{
     return await connect('mongodb://127.0.0.1:27017/myconass');
}

module.exports = dbConnect;