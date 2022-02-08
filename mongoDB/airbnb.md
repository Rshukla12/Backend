1. write a query of using two OR operators, and check for listings from any two countries
```
db.listings.find( { $or: [ { 'address.country': "United States" }, { 'address.country': "Canada"  } ] })
```

2. write a query of using two AND operators and check for one country and review ratings to be greater than a particular value
```
db.listings.find( { $and: [ { 'address.country': "United States" },{ 'review_scores.review_scores_rating': { $gt: 99 }} ]})
```

3. write a query of using AND and OR operator in conjuction
    a. it should belong to any two cities and
    b. it should have rating = 99
```
db.listings.find({$and: [{$or: [{'address.market':"New York" }, {'address.market':"Washington"}]}, {'review_scores.review_scores_rating': 99}]})
```

4. write a query of using AND and OR operator together
    a. it should belong to US and rating of 95 or
    b. it should belong to CA and rating of 99
```
db.listings.find({$or: [{$and: [{'address.country_code':"US" }, {'review_scores.review_scores_rating':95} ]}, { $and: [{'review_scores.review_scores_rating': 99}, {'address.country_code': "CA"} 
]}]})
```

5. write a query of using querying arrays
    a. check all listings which have amenities of size 5, 6, 7, 8, 9, 10
    ```
    db.listings.find({$or: [{amenities: {$size: 5}},{amenities:{$size: 6}},{amenities: {$size: 7}}, {amenities:{$size: 8}}, {amenities: {$size: 9}}, {amenities: {$size: 10}} ]})
    ```
    
    b. check all listings of where aminities contain 4 or 5 different listings 
    ```
    db.listings.find({amenities: { $all: ['TV', 'Dryer', 'Kitchen', 'Air conditioning' ]}}, {amenities: 1})
    ```

    c. check all listings of reviews where it matches a particular user id and name 
    ```
    db.listings.find({'reviews':{$elemMatch: {'reviewer_name': "Wendi"}}}, {reviews: 1}).limit(1)
    ```

    d. check all listings of reviews where it matches a particular user id and name, list only reviews that match the particular user id and name
    ```
    db.listings.find({'reviews':{$elemMatch: {'reviewer_name': "Wendi", 'reviewer_id': '65980899'}}}, {reviews: { $elemMatch: {'reviewer_name': "Wendi", 'reviewer_id': '65980899'  }  }})
    ```

6. find top 10 listings, sort them according to rating in descending order, and if the rating is similar rate them according to alphabetic order
    a. also ensure results belong only to New York, and check if there are atleast Wifi, Breakfast and 2 other amenities
```
db.listings.find({ 'address.market': 'New York', amenities: { $all: ['Wifi', 'Breakfast',  'Dryer', 'TV'] } }).sort({ 'review_scores.review_scores_rating': -1, name: 1 }).limit(10)
```