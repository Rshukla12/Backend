Insert Single Document
```
db.users.insertOne({
...   "first_name": "Mathe",
...   "last_name": "LaBastida",       
...   "email": "mlabastida0@meetup.com",
...   "gender": "Male",
...   "ip_address": "215.34.57.139",
...   "age": 61
... })
```


Insert Many Documents
```
db.users.insertMany([{
...   "first_name": "Meredeth",
...   "last_name": "Cadore",    
...   "email": "mcadore1@sciencedirect.com",
...   "gender": "Male",
...   "ip_address": "16.245.69.108",
...   "age": 89
... },
.......
... {
...   "first_name": "Dusty",
...   "last_name": "Teaz",
...   "email": "dteaz9@geocities.com",
...   "gender": "Female",
...   "ip_address": "18.122.0.247",
...   "age": 62
... }])
```

Find All
```
db.users.find()
```


Find Many
```
db.users.find({"gender": "Male"})
```

Find One
```
db.users.findOne({"first_name": "Rodd"})
```

updateOne
```
db.users.updateOne({"first_name": "Rodd"}, { $set: {"gender":"Female" } })
```

updateMany
```
db.users.updateMany({"age": {$lte: 30}}, {$inc: {"age":5}})
```

Remove
```
db.users.remove({"age": 35})
```

Delete One
```
db.users.deleteOne({"age": 40})
```

Delete Many
```
db.users.deleteMany({"gender":"Male"})
```

Delete All
```
db.users.deleteMany({})
```

Delete Database
```
db.dropDatabase()
```