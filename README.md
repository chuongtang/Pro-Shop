# Cool things that I learned 🍀✌
 "client": "npm --prefix frontend"
 npm install -d  <package name> 

 "dev": "concurrently \"npm run server\" \"npm run client\""

### apply color with npm 🖌️
```
 console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
```

```
  process.exit(1) : pass 1 mean exit with failure
```

### npm packages for mono-repo 🍱
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

### "?" in route is for optional ⸮
```
<Route path='/cart/:id?' component={CartScreen} />
```

### Get the right side string of ? on the url
```
const qty = location.search ? Number(location.search.split('=')[1]) : 1
```


### If loggED in , it will be redirect to shipping ⤤
```
history.push('/login?redirect=shipping')
```

### Compare is a method in bcrypt. Set this in the model better than in the controller
```
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}
```

### To return the found User without returning the "password" 👍
```
 req.user = await User.findById(decoded.id).select('-password');
 ```

### To run a callback before save method, use model.pre
```
userSchema.pre('save', async function (next) {...}
```

### Enable components base on the passing props
```
return (
<CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
......
)
```