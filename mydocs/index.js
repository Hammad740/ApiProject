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

app.get('/api/v1', (req, res) => {
  const data = {
    name: 'Mohammad Hammad Ansari',
    age: 22,
    education: 'BTECH',
    gender: 'M',
  };
  res.json({ data });
});

app.listen(4000, () => {
  console.log(`Server is running on port 4000....`);
});
