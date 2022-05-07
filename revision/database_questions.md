1. What is SQL Databases? What are some companies who uses SQL, what type of applications are these?
- SQL stands for Structured Query Language. It's used for relational databases. A SQL database is a collection of tables that stores a specific set of structured data.

2. What is NoSQL Databases? What are some companies who uses Mongo, what type of applications are these?
- When people use the term “NoSQL database,” they typically use it to refer to any non-relational database. Some say the term “NoSQL” stands for “non SQL” while others say it stands for “not only SQL.” Either way, most agree that NoSQL databases are databases that store data in a format other than relational tables.

3. What is the difference between SQL and NoSQL databases?
- Flexibility of the schema
- Scaling technique
- Support for transactions
- Reliance on data to object mapping

4. What are some features of MongoDB?
- 1. Ad-hoc queries for optimized, real-time analytics
- 2. Indexing appropriately for better query executions
- 3. Replication for better data availability and stability
- 4. Sharding
- 5. Load balancing

5. What are aggregate queries?
- In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.

- MongoDB provides three ways to perform aggregation
- 1. Aggregation pipeline
- 2. Map-reduce function
- 3. Single-purpose aggregation

6. What are pipelines in aggregation?
-  the aggregation pipeline consists of stages and each stage transforms the document. Or in other words, the aggregation pipeline is a multi-stage pipeline, so in each state, the documents taken as input and produce the resultant set of documents now in the next stage(id available) the resultant documents taken as input and produce output, this process is going on till the last stage. The basic pipeline stages provide filters that will perform like queries and the document transformation modifies the resultant document and the other pipeline provides tools for grouping and sorting documents. You can also use the aggregation pipeline in sharded collection.

Stages: Each stage starts from stage operators which are:

$match: It is used for filtering the documents can reduce the amount of documents that are given as input to the next stage.
$project: It is used to select some specific fields from a collection.
$group: It is used to group documents based on some value.
$sort: It is used to sort the document that is rearranging them
$skip: It is used to skip n number of documents and passes the remaining documents
$limit: It is used to pass first n number of documents thus limiting them.
$unwind: It is used to unwind documents that are using arrays i.e. it deconstructs an array field in the documents to return documents for each element.
$out: It is used to write resulting documents to a new collection
Expressions: It refers to the name of the field in input documents for e.g. { $group : { _id : “$id“, total:{$sum:”$fare“}}} here $id and $fare are expressions.

Accumulators: These are basically used in the group stage

sum: It sums numeric values for the documents in each group
count: It counts total numbers of documents
avg: It calculates the average of all given values from all documents
min: It gets the minimum value from all the documents
max: It gets the maximum value from all the documents
first: It gets the first document from the grouping
last: It gets the last document from the grouping
Note:

in $group _id is Mandatory field
$out must be the last stage in the pipeline
$sum:1 will count the number of documents and $sum:”$fare” will give the sum of total fare generated per id.

7. How do you do aggregate queries?
- we can write aggregate queries using db.collection.aggregate([])

8. How can you group by a particular value in MongoDB?
- We can group using $group stage and _id is Mandatory field on which grouping will happen

9. How can you paginate on MongoDB?
- we can implement pagination using $skip or .skip and $limit or .limit stages

10. How can you sort in MongoDB?
- we can sort using $sort or .sort

11. What is indexing in MongoDB? Why do we need to use indexing? What are pros and cons for indexing?
- Indexes support the efficient resolution of queries. Without indexes, MongoDB must scan every document of a collection to select those documents that match the query statement. This scan is highly inefficient and require MongoDB to process a large volume of data.

- Indexes are special data structures, that store a small portion of the data set in an easy-to-traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.

12. Write the query for indexing a field in MongoDB?
- db.COLLECTION_NAME.createIndex({KEY:1})

13. What is the improvement in performance in MongoDB?
- Other ways to improve MongoDB performance after identifying your major query patterns include: Storing the results of frequent sub-queries on documents to reduce read load. Making sure that you have indices on any fields you regularly query against. Looking at your logs to identify slow queries, then check your indices.

14. What is the data structure used for indexing?
- MongoDB indexes use a B-tree data structure.

15. Are values sorted in indexes?
- Indexing is a way of sorting a number of records on multiple fields. Creating an index on a field in a table creates another data structure which holds the field value, and a pointer to the record it relates to. This index structure is then sorted, allowing Binary Searches to be performed on it.

16. What are Replica Sets in MongoDB?
- A replica set in MongoDB is a group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production deployments. This section introduces replication in MongoDB as well as the components and architecture of replica sets.

17. Explain the structure of ObjectID in MongoDB.
- An ObjectId in MongoDB is a 12-byte BSON type. In the 12-byte structure, the first 4 bytes of the ObjectId represent the time in seconds since the UNIX epoch. The next 3 bytes of the ObjectId represent the machine identifier. The next 2 bytes of the ObjectId represent the process ID.

18. By default, which index is created by MongoDB for every collection?
- By default _id is indexed for every collection

19. In which format MongoDB represents document structure?
- In MongoDB, data is stored as documents. These documents are stored in MongoDB in JSON (JavaScript Object Notation) format. JSON documents support embedded fields, so related data and lists of data can be stored with the document instead of an external table.

20. What is the limitation of a document in MongoDB?
- The maximum BSON document size is 16 megabytes. The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive amounts of bandwidth. To store documents larger than the maximum size, MongoDB provides the GridFS API.

21. What is the difference between MongoDB and Redis database?
- MongoDB vs. Redis: Database Structure
MongoDB and Redis have different database structure set-ups, with MongoDB performing similar to a relational database. (It uses expressive query language.) The key difference, though, is MongoDB is schema-free, so users don't have to create document structures. This means the platform is the easier of the two to use. 

Redis, on the other hand, uses key-value stores, which, in the simplest of terms, assign data to a key and associated value. This means the set-up is completely different to MongoDB, which uses the rows and columns traditionally associated with relational databases. Key-value stores benefit some users, but Redis might look alien to some people at first. As we mentioned earlier, Redis uses other data structures — bitmaps, sets, strings, you name it — though it prioritizes key-value stores. 

MongoDB vs. Redis: Scalability
Both MongoDB and Redis score points for scalability, making them worthwhile additions for any growing business. There are differences though:

MongoDB, written in C++, is available for Windows, OS X, Linux, and Solaris. 
Redis, written in C, is available for Windows, OS X, Linux, and BSD. 
Both MongoDB and Redis support a wide range of programming languages, including C, C~, C++, Java, Python, and Scala. 

Users should take all of this into account when thinking about scaling data management. 

MongoDB vs. Redis: Performance
Redis is faster than MongoDB because it's an in-memory database. This makes it a great choice for building complicated data structures quickly. MongoDB, however, suits most medium-sized businesses that need a reliable database. It's relatively simple and easy to use and, as we mentioned earlier, very scalable. 

With speed comes some drawbacks. Redis, perhaps unsurprisingly, uses more RAM than MongoDB and this is noticeable for non-trivial data sets.

22. How can you add references between multiple collections?
- https://www.mongodb.com/docs/manual/reference/database-references/

23. What are lookup in aggregation for MongoDB?
- https://medium.com/cameoeng/mongodb-lookups-and-populates-an-unexpected-journey-940e08e36a94

24. What are graph lookups?
- $graphLookup - Performs a recursive search on a collection, with options for restricting the search by recursion depth and query filter.

The $graphLookup search process is summarized below:

Input documents flow into the $graphLookup stage of an aggregation operation.
$graphLookup targets the search to the collection designated by the from parameter (see below for full list of search parameters).
For each input document, the search begins with the value designated by startWith.
$graphLookup matches the startWith value against the field designated by connectToField in other documents in the from collection.
For each matching document, $graphLookup takes the value of the connectFromField and checks every document in the from collection for a matching connectToField value. For each match, $graphLookup adds the matching document in the from collection to an array field named by the as parameter.

This step continues recursively until no more matching documents are found, or until the operation reaches a recursion depth specified by the maxDepth parameter. $graphLookup then appends the array field to the input document. $graphLookup returns results after completing its search on all input documents.

25. What is the alternative for lookups in MongoDB?
- https://www.mongodb.com/community/forums/t/how-to-properly-utilize-lookup-with-alternate-join-conditions/14701

26. How can you do one to many relation in MongoDB?
- There are three valid ways to represent one to many relationship in MongoDB
- Embedding 
- -> blog contains array of comment object
- Linking
- -> more sql like approach i.e. each comment has a blog id pointing to the blog
-Bucketing
- -> mix of embeding and linking apporach, here we embed a fix numbers of comment to a new document which contains link to the blog and create a new document if we have more documents then our limit

27. How can you do many to many relation in MongoDB?
- There are two valid ways to represent many to many relationship in MongoDB
- -> one way Embedding 
- -> two way embedding

28. How can you do one to zillion relation in MongoDB?
- we can use similar to one to many method.