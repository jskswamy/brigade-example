const { events } = require('brigadier');

console.log('Hello before');

events.on('exec', (brigadeEvent, project) => {
  console.log('Hello world!');
});
