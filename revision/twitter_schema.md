## User
```
user_id: integer, unqiue, primary key
username: string, index
email: string, index
password: string
```

## Tweets
```
tweet_id: integer, unique, primary key
author: userid, foreign key
content: string
topics: [string] (hashtags if any), array of topic id foreign key
```

## Likes
```
like_id: integer, unique, primary key
tweet_id: foreign key, tweet table tweet_id
user_id: foreign key, user table user_id
```

## Topics
```
topic_id: integer, unqiue, primary_key
topic_name: string, unique
```

# Image of Tweet Schema ERD
![ERD]("./Screenshots/Tweet_ERD.jpg")