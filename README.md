# Cool things that I learned
 "client": "npm --prefix frontend"
 npm install -d  <package name> 

 "dev": "concurrently \"npm run server\" \"npm run client\""

 console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)

  process.exit(1) : pass 1 mean exit with failure

```
"start": "node backend/server",
"server": "nodemon backend/server",
"client": "npm start --prefix frontend",
"dev": "concurrently \"npm run server\" \"npm run client\"",
"data:import": "node backend/seeder",
"data:destroy": "node backend/seeder -d"
```

express-async-handler

Postman env : {{URL}}/api/products

? in route is for optional
```
<Route path='/cart/:id?' component={CartScreen} />
```