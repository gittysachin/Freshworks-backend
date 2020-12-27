const express = require('express');
const app = express();
const port = 5000;

app.use(express.json({ extend : false}));
app.use('/create' , require('./API/create'));
app.use('/read' , require('./API/read'));
app.use('/delete' , require('./API/delete'));

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`)
});