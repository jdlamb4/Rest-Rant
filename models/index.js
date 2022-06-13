require('dotenv').config() // .require is not working, using .config until later in activity can show .require will work
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
