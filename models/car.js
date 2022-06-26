import mongoose from 'mongoose'

const Schema = mongoose.Schema

const carSchema = new mongoose.Schema({
  boughtFor: String,
  year: String,
  make: String,
  model: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Car = mongoose.model('Car', carSchema)

export {
  Car
}