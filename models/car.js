import mongoose from 'mongoose'

const Schema = mongoose.Schema

const modSchema = new Schema({
  name: String,
  description: String,
  price: String,
  worthIt: Boolean,
  moPower: Boolean,
}, {
  timestamps: true
})

const carSchema = new mongoose.Schema({
  boughtFor: String,
  year: String,
  make: String,
  model: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  mods: [modSchema],
}, {
  timestamps: true
})

const Car = mongoose.model('Car', carSchema)

export {
  Car
}