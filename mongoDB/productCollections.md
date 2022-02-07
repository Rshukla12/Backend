top 10 purchased items
```
db.products.find({}).sort({no_of_purchases: -1}).limit(10)
```

top 10 cheapest items
```
db.products.find({}).sort({price: 1}).limit(10)
```

top items where qty remains in stock
```
db.products.find({}).sort({qty: -1}).limit(10)
```

top 10 rated products
```
db.products.find({}).sort({product_rating: -1}).limit(10)
```

bottom 10 rated products
```
db.products.find({}).sort({product_rating: 1}).limit(10)
```

from 11-20 top rated products
```
db.products.find({}).sort({product_rating: -1}).skip(10).limit(10)
```

find products with rating between 3 and 4, and sorted from descending order of rating, if the ratings are same, then show the alphabetic order of name of the product
```
db.products.find({product_rating: { $in: [3, 4] }}).sort({product_rating: -1, product_name: 1})
```