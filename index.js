const express = require('express');
const templateRouter = require('./src/controllers/template');
const mainMenu = require('./src/enums/mainOptions')

const app = express();

console.log('Welcome to templex!!');
console.log('Please select one of the following');
Object.values(mainMenu).forEach(option => console.log(option));

process.stdin.on('data', (data) => {
  switch (data.toString().toLocaleLowerCase().trim()) {
    case mainMenu.BUSINESS.toLocaleLowerCase():
      console.log(`business selected`);
      break;
    case mainMenu.EDUCATION.toLocaleLowerCase():
      console.log(`education selected`);
      break;
    case mainMenu.NONPROFIT.toLocaleLowerCase():
      console.log(`non-profit selected`);
      break;
    case mainMenu.PERSONAl.toLocaleLowerCase():
      console.log(`personal selected`);
      break;
    default:
      console.log(`Sorry, we are out of ${expr}.`);
  }
});

app.use(express.json())
app.use('/template', templateRouter);

app.get('/', (req, res) => {
  res.send('Hello from root route.')
});

app.listen(3000);

