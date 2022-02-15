## Problem
Data
create a mock movies table in sequel and mongodb which has 500 documents which has following columns/fields

id
movie_name
movie_genre
production_year ( between 1990 to 2020)
budget ( 9000 to 20000)
rating ( 0 - 10 )
rated ( PG or G )
language
genres

### Problem
create an aggregation query for the following
1. rating is atleast 8
genres do not contain "Thriller" or "Romance"
rated "PG"
languages contain English or French
production_year after 2012
```
db.movies.aggregate({$match:{ rating: { $gte: 8}, $nor: [ { movie_genre: "Thriller" },{ movie_genre: "Romance"}  ], $or: [ { languages: "English" },{ languages: "French"}  ], rated: "PG", production_year: {$gte: 2012 }}})
```

2. you have been given a task by your manager
you have a huge collection of data
you need to find the total number of duplicates that are found on against a key
here the duplicates are formed from the name
{ name: "aman", id: 1 } , { name: "albert", id : 2 } { name: "aman", id: 3 } , { name: "albert", id : 4 }  { name :"nrupul", id: 5 }
in this case required output is
{ name: "aman", duplicates: 1 }, { name: "albert", duplicates: 1 } ,{ name: "nrupul", duplicates: 0 }
use aggregations and try to solve this
```
db.collection.aggregate( {$group:{_id: "$name", duplicates: {$sum: 1}  }})
```

3. 
you have a set of data in a collection in the following manner 
```
city
email
order_id 
```
there can be duplicate emails
you need to filter out the total no of unique emails on each city
you can use aggregation for this
```
db.collection.aggregate( {$group:{_id:{ city: "$city", email: "$email" }, count: {$sum: 1 }}})
```

4. 
create a database with multiple collectins
lets assume you are building an ecommerce application and you need to create a system for that
users collection with all relevant users information: name, email, country, address ( nested object etc )
all categories
products: sku, id, item, qty, price with category information
orders collection with: containing information of user, and purchases made, and all required values, transaction details