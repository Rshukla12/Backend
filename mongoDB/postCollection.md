create a collection of posts
it should have title, comments, author details, tags
comments should be an array of objects with, body, author of the comment etc., comment id
tags should be array of strings
```
db.posts.insertMany([
    {
        "title": "Hello World",
        "detail": "World is beautiful!",
        "author_name": "James",
        "author_id": 1, 
        "tags": ["first post", "trending"],
        "comments": [
            {
                "comment_id": 1,
                "body": "Nice",
                "author_name": "Jack",
                "author_id": 2
            },
            {
                "comment_id": 2,
                "body": "Nice work",
                "author_name": "Jason",
                "author_id": 3
            },
            {
                "comment_id": 3,
                "body": "Thanks Everyone!",
                "author_name": "James",
                "author_id": 1
            }
        ]
    },
    {
        "title": "JavaScript",
        "detail": "JavaScript is very weird language but it is also most popular language!",
        "author_name": "John",
        "author_id": 4, 
        "tags": ["controversial", "hot", "trending"],
        "comments": [
            {
                "comment_id": 4,
                "body": "Agree!",
                "author_name": "Jack",
                "author_id": 2
            },
            {
                "comment_id": 5,
                "body": "Disagree!",
                "author_name": "Jason",
                "author_id": 3
            }
        ]
    }
])
```

push a new tag into a post
```
db.posts.updateOne({title: "Hello World" }, {$push: {tags: "hot" }  })
```

push multiple tags into a post
```
db.posts.updateOne({title: "Hello World" }, {$push: {tags:{$each: ["contro", "active"]}} })
```

pull and remove a particular tag
```
db.posts.updateOne({title: "Hello World" }, {$pull: {tags: "contro" }  })
```

pull and remove an array of values use $in
```
db.posts.updateOne({title: "Hello World" }, {$pull: {tags:{$in: ["hot", "active"]} }  })
```

use $pop to remove first and last tag
```
// remove first tag
db.posts.updateOne({title: "JavaScript" }, {$pop: {tags:-1 }  })

// remove last tag
db.posts.updateOne({title: "JavaScript" }, {$pop: {tags:1 }  })
```

use addToSet to add.5 tags
```
db.posts.updateOne({title: "Hello World" }, {$addToSet: {tags:{$each: ["contro", "active","hot","first post", "trending"]} }  })
```

Part II
create a collection of users with high scores
each user can have 3 high scores
it should be always in descending order
```
db.scores.insertMany([
    {
        name:"James",
        scores: [57, 48, 39]
    },
    {
        name:"Jack",
        scores: [77, 68]
    }
])
```

add 5 new high scores, and maintain the order, and keep the limit of 3 scores
```
db.scores.updateOne({name: "Jack"},{$push: { scores: {$each: [28, 77, 95, 13, 89], $sort: -1, $slice: 3}}} )
```

remove multiple scores which are greater than x value
```
db.scores.updateOne({name: "Jack"},{$pull: { scores: {$gt: 88} } } )
```