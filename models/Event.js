const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  startTime: {
    type: String,

  },
  finishTime: {
    type: String
  },
  description: {
    type: String
  },
  attending: [ { type: Schema.Types.ObjectId, ref: 'User' } ],
  comment: [ { type: Schema.Types.ObjectId, ref: 'Comment' } ],
  quickTips: {
    type: String,
  },
  directions: {
    type: String,
  },
  itemsNeeded: [{
    type: String
  }],
  pin: {
    type: Number,
  },
  imageUrl: {
    type: String
  },
  task: [{
    type: String
  }],
  completed: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  host: { type: Schema.Types.ObjectId, ref: 'Comment' },
  
  
});

const Event = model('Event', EventSchema);

module.exports = Event;