const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter { }

//init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log('Event Fired!'));

//INit event
myEmitter.emit('event');