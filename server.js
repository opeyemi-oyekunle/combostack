const express = require('express');
const app = express();
const path = require('path')

app.get('/api/customers', (req, res)=>{
  const customers = [
    {id:1, firstName: 'John', lastName: 'Doe'},
    {id:2, firstName: 'Steve', lastName: 'Smith'},
    {id:3, firstName: 'Mary', lastName: 'Samson'}
  ];
  res.json(customers);
})


const port = process.env.PORT || 5000;
app.listen(port, ()=> {
  console.log(`Server started on port ${port}`));
  if(process.env.NODE_ENV === 'production'){
  	app.use(express.static('build/client'))
    app.get('*', (req,res)=>{
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
  }

}
