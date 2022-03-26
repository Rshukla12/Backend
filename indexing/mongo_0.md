- explain what is indexing in simple analogy?
``` 
We can think of indexing in the following manner even though dictionaries are already alphabetically sorted, we still have an index page telling from where each alphabets starts thus making our search faster.
```

- why do we use it?
```
indexing in databases helps us to do query faster, In mongodb we can also use indexing to get sorted data when data set is very large
```

- explain in simple terms how indexing pros and cons.
```
- pros
-> much faster reads
-> Minimizes number of documets to be searched for a query 
-> sorting of large data can we done
-> time for finding data is decreased

- cons
-> As we need to update the index after every write
-> time for write, update and delete is increased
-> Lot of indexes can lead to space wastage
```

- if you can explain a bit about the data structure used
```
-> Indexes are formed by using a data structure known as B-Tree
```

- what is compound indexing?
```
-> If we are using two or more fields of collection in a single query then we can optimize it using compound indexing

-> The relative order on which compound index is formed is also important
```