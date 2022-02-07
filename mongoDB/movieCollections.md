find all movies which are equal to movie_name
```
db.movies.find({movie_name:"Starman"}, {movie_name:1, _id: 0, production_year:1 })
or 
db.movies.find({ movie_name: { $eq: "Starman"} }, { movie_name: 1, _id: 0, production_year: 1 }) 
```

find all movies which are not equal to movie_name
```
db.movies.find({ movie_name: { $ne: "Starman" } }, { movie_name: 1, _id: 0,  production_year: 1 })
```

find all movies greater than and greater than equal to a budget
```
db.movies.find({ Budget: { $gt: 12000 } }, { movie_name: 1, _id: 0, production_year: 1 })
db.movies.find({ Budget: { $gte: 12000 } }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies less than and less than equal to a budget
```
db.movies.find({ Budget: { $lt: 12000 } }, { movie_name: 1, _id: 0, production_year: 1 })
db.movies.find({ Budget: { $lte: 12000 } }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies that are produced after 2000 with budget greater than 10000
```
db.movies.find({ Budget: { $gt: 10000 }, production_year: { $gt: 2000 } }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies that are produced after 2000 or budget greater than 10000
```
db.movies.find({ $or: [{ Budget: { $gt: 10000 } }, { production_year: { $gt: 2000 } }] }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies that are neither produced after 2000 nor with budget greater than 10000.
```
db.movies.find({ $nor: [{ Budget: { $gt: 10000 } }, { production_year: { $gt: 2000 } }] }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies that are not produced in 2000 or they do not have budget of 10000
```
db.movies.find({ $or: [{ Budget: { $ne: 10000 } }, { production_year: { $ne: 2000 } }] }, { movie_name: 1, _id: 0, production_year: 1 })
```

find all movies that were produced from 2000 to 2010.
```
db.movies.find( { production_year: { $gte: 2000, $lte: 2010 } }, { movie_name: 1, _id: 0, production_year: 1 })
```

Sort all movies descending based on the production year and if the year is same then alphabetically for their movie_names
```
db.movies.find( { }, { movie_name: 1, _id: 0, production_year: 1 }).sort({ production_year: -1,movie_name: 1})
```

in query 10 skip the first 10 entries and fetch the next 5
```
db.movies.find({}, { movie_name: 1, _id: 0, production_year: 1 }).sort({ production_year: -1, movie_name: 1 }).limit(5).skip(10)
```

remove movie genre from the first 10 movies in query 10.
```

```