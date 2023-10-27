const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDocument = YAML.parse(file);

//** swagger route */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ** base route
app.get('/', (req, res) => {
  res.send('<h1>Hello from Api Project</h1>');
});

const coursesLearnt=
[{
  id:"1",
  name:"HTML&CSS",
  price:"$3.5"

},
{
  id:"2",
  name:"JAVASCRIPT",
  price:"$4"

},
{
  id:"3",
  name:"REACTJS",
  price:"$4.5"

}
]
app.get('/api/v1', (req, res) => {
  const data = {
    name: 'Mohammad Hammad Ansari',
    age: 22,
    education: 'B-TECH',
    gender: 'M',
  };
  res.json({ data });
});

app.get('/api/v1/courses',(req,res)=>{
  res.json({coursesLearnt})
})

app.get("/api/v1/greeting",(req,res)=>{
  res.send("<h1>Greeting from the api docs 🙌🤝</h1>")
})

app.get("/api/v1/mycourse/:courseId",(req,res)=>{
  const myCourse=coursesLearnt.find((c)=>c.id===req.params.courseId)
  res.send(myCourse)
})

app.listen(4000, () => {
  console.log(`Server is running on port 4000....`);
});
