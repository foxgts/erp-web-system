const express = require('express');\nconst app = express();\napp.use(express.json());\napp.use(require('./routes/productRoutes'))\nconst port = 3001;\napp.listen(port, () => console.log());
