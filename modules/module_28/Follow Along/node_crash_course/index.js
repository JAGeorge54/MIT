const Person = require('./person');
const Logger = require('./logger');

const person1 = new Person('John Doe', 30);
const logger = new Logger();

person1.greeting();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');