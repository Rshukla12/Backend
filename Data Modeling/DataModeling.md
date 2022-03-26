# Data Modeling

### What are valid ways to represent this one-to-many relationship in MongoDB?
```
There are three valid ways to represent one to many relationship in MongoDB
- Embedding 
-> blog contains array of comment object
- Linking
-> more sql like approach i.e. each comment has a blog id pointing to the blog
-Bucketing
-> mix of embeding and linking apporach, here we embed a fix numbers of comment to a new document which contains link to the blog and create a new document if we have more documents then our limit
```

### What are valid ways on modelling many-to-many relationship with MongoDB?

```
There are two valid ways to represent many to many relationship in MongoDB
- one way Embedding 
- two way embedding
```

### What are valid ways to represent a one-to-one relationship with the document model in MongoDB?
```
There are two valid ways to represent one to one relationship in MongoDB
- Embedding
- Linking
```

### create an ERD / CRD diagram for a blog application
![ERD Diagram for blog](./Blog_ERD.jpg?raw=true "ERD")

### create and design schema for each collection

- User Collection
```
    id: Object Primary Key,
    name: "",
    password: "" 
```

- Post Collection:
```
    id: Object Primary key,
    title:"",
    body:"",
    author:Object Foreign Key, 
```

- Comment Collection
```
  id: Object,
  post_id: Object Foreign Key,
  comment:"",
  author:Object Foreign Key,
```

### Write a requirement document for designing a system like LinkedIn.
- Schemas to create
> users
> jobs_with_description
> posts
> comments
> learnings

### Estimate daily read and writes, users, data transfer, list down all assumptions you have made
- If we estimate our users to reach in the range of 90-110M, following would be estimates for read and writes
- Writes
> Each user on average will post around 1 post a day and 3-4 comments a day
> In a day if 2 comment and a post is made by each user then we have (3*100M) 
> That means our write would be in range of 2.0-3.3k per second

- Reads
> Assuming each user is seeing 20-25 posts in a day
> Total Read 25*100M = 2.5Billion
> That means our read would be in range of 28-32K per second

- File Transfer
> Assuming each post is 100KB
> Our File transfer would be in range of 3-3.1 GBs per second
> In a day we would need 216 GB of new space to store new posts + comments made we would also need to store profile and job sections data 

### Write down some queries ( no need to write actual queries, but the kind of information that users, and admins would like to see ). for example: - list 10 post by user_id with pagination descending order of date

- Users profile by ID
- Top 10 Posts made by user
- Top 10 Connections of user
- Top 5 comments on post
- Top 10 popular posts
