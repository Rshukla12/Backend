1. What is Caching? How can you save money with Caching?
-> Caching is the process of storing copies of files in a cache, or temporary storage location, so that they can be accessed more quickly. Technically, a cache is any temporary storage location for copies of files or data. Web browsers cache HTML files, JavaScript, and images in order to load websites more quickly, while DNS servers cache DNS records for faster lookups and CDN servers cache content to reduce latency.

-> Caching can help us save money by avoding repetative computation, as well as reducing databases call.

2. What is load balancing?
-> Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.

-> Modern high‑traffic websites must serve hundreds of thousands, if not millions, of concurrent requests from users or clients and return the correct text, images, video, or application data, all in a fast and reliable manner. To cost‑effectively scale to meet these high volumes, modern computing best practice generally requires adding more servers.

-> A load balancer acts as the “traffic cop” sitting in front of your servers and routing client requests across all servers capable of fulfilling those requests in a manner that maximizes speed and capacity utilization and ensures that no one server is overworked, which could degrade performance. If a single server goes down, the load balancer redirects traffic to the remaining online servers. When a new server is added to the server group, the load balancer automatically starts to send requests to it.

-> In this manner, a load balancer performs the following functions:

- Distributes client requests or network load efficiently across multiple servers
- Ensures high availability and reliability by sending requests only to servers that are online
- Provides the flexibility to add or subtract servers as demand dictates

3. What is CAP Theorem?
-> CAP theorem says that a distributed system can deliver only two of three desired characteristics: consistency, availability, and partition tolerance (the ‘C,’ ‘A’ and ‘P’ in CAP). 

-> We can also think of it as "In a distributed system, when there is a network partiton the system can either be available or consistence.".

4. What is PACELC Theorem?
-> The PACELC theorem is an extension of the CAP theorem, stating that if there is partitioning (P) in the network, you should choose between availability (A) and consistency (C), else (E), you should select between latency (L) and consistency (C).

5. What is Eventual Consistency?
-> Eventual consistency is a theoretical guarantee that, provided no new updates to an entity are made, all reads of the entity will eventually return the last updated value. 
-> The Internet Domain Name System (DNS) is a well-known example of a system with an eventual consistency model. 

6. What is Strong Consistency?
-> Traditional relational databases have been designed based on the concept of strong consistency, also called immediate consistency. This means that data viewed immediately after an update will be consistent for all observers of the entity.
-> To have strong consistency, developers must compromise on the scalability and performance of their application. Simply put, data has to be locked during the period of update or replication process to ensure that no other processes are updating the same data.

7. What are the different types of databases?
->  
-   1. Relational databases
    -> RDBMS
    -> SQL
    -> ACID compliant -> (Atomicity, Consistency, Isolation, Durability), which is a standard set of properties for reliable database transactions.
Examples: Microsoft SQL Server, Oracle Database, MySQL, PostgreSQL and IBM Db2

-   2. NoSQL databases
    -> that doesn’t use SQL as its primary data access language. 
    -> non-relational databases. 
    -> data in a NoSQL database doesn’t have to conform to a pre-defined schema
    -> One advantage of NoSQL databases is that developers can make changes to the database on the fly, without affecting applications that are using the database.
Examples: Apache Cassandra, MongoDB, CouchDB, and CouchBase 

-   3. Columnar databases
    -> Also referred to as column data stores, columnar databases store data in columns rather than rows. 
    -> These types of databases are often used in data warehouses because they’re great at handling analytical queries. 
    -> When you’re querying a columnar database, it essentially ignores all of the data that doesn’t apply to the query, because you can retrieve the information from only the columns you want.
Examples: Google BigQuery, Cassandra, HBase, MariaDB, Azure SQL Data Warehouse

-   4. Wide column databases
    -> Wide column databases, also known as wide column stores, are schema-agnostic. 
    -> Data is stored in column families, rather than in rows and columns. 
    -> Highly scalable, wide column databases can handle petabytes of data, making them ideal for supporting real-time big data applications.
Examples: BigTable, Apache Cassandra and Scylla

-   5. Key-value databases
    -> One of the simplest types of NoSQL databases, key-value databases save data as a group of key-value pairs made up of two data items each. 
    -> They’re also sometimes referred to as a key-value store. 
    -> Key-value databases are highly scalable and can handle high volumes of traffic, making them ideal for processes such as session management for web applications, user sessions for massive multi-player online games, and online shopping carts.
Examples: Amazon DynamoDB, Redis


-   6. Document databases
    -> also known as document stores, use JSON-like documents to model data instead of rows and columns.
    -> Sometimes referred to as document-oriented databases, document databases are designed to store and manage document-oriented information, also referred to as semi-structured data. 
    -> Document databases are simple and scalable, making them useful for mobile apps that need fast iterations.
Examples: MongoDB, Amazon DocumentDB, Apache CouchDB

-   7. Graph databases
    -> Graph databases are a type of NoSQL database that are based on graph theory. Graph-Oriented Database Management Systems (DBMS) software is designed to identify and work with the connections between data points. Therefore graph databases are often used to analyze the relationships between heterogeneous data points, such as in fraud prevention or for mining data about customers from social media.
Examples: Datastax Enterprise Graph, Neo4J

-   8. Time series databases
    -> A time series database is a database optimized for time-stamped, or time series, data. Examples of this type of data include network data, sensor data, and application performance monitoring data. All of those Internet of Things sensors that are getting attached to everything put out a constant stream of time series data.
Examples: Druid, eXtremeDB, InfluxDB

8. What are message queues?
-> In modern cloud architecture, applications are decoupled into smaller, independent building blocks that are easier to develop, deploy and maintain. Message queues provide communication and coordination for these distributed applications. Message queues can significantly simplify coding of decoupled applications, while improving performance, reliability and scalability.

-> Message queues allow different parts of a system to communicate and process operations asynchronously. A message queue provides a lightweight buffer which temporarily stores messages, and endpoints that allow software components to connect to the queue in order to send and receive messages. The messages are usually small, and can be things like requests, replies, error messages, or just plain information. To send a message, a component called a producer adds a message to the queue. The message is stored on the queue until another component called a consumer retrieves the message and does something with it.

9. Which service by Amazon Web Services (AWS) can you use for Queues?
-> We can use Amazon's SQS or Simple Queue Service for message queues.

10. What is Pub Sub ?
-> In modern cloud architecture, applications are decoupled into smaller, independent building blocks that are easier to develop, deploy and maintain. Publish/Subscribe (Pub/Sub) messaging provides instant event notifications for these distributed applications.  

-> The Publish Subscribe model allows messages to be broadcast to different parts of a system asynchronously. A sibling to a message queue, a message topic provides a lightweight mechanism to broadcast asynchronous event notifications, and endpoints that allow software components to connect to the topic in order to send and receive those messages. To broadcast a message, a component called a publisher simply pushes a message to the topic. Unlike message queues, which batch messages until they are retrieved, message topics transfer messages with no or very little queuing, and push them out immediately to all subscribers. All components that subscribe to the topic will receive every message that is broadcast, unless a message filtering policy is set by the subscriber.
pub/sub model

-> The subscribers to the message topic often perform different functions, and can each do something different with the message in parallel. The publisher doesn’t need to know who is using the information that it is broadcasting, and the subscribers don’t need to know who the message comes from. This style of messaging is a bit different than message queues, where the component that sends the message often knows the destination it is sending to. For more information on message queuing, see “What is a Message Queue?”

-> AWS provides Amazon Simple Notification Service (SNS).

11. How do you go about sending a million emails? What are the steps you will take to ensure system is stable, and will end up with lesser failures?
-> We can Have a queue and maintain their status in a database and also making this sepearte from our main server would be ideal as it wouldn't cause any load or delay issues. 

12. What are webhooks?
-> Webhooks are one way that apps can send automated messages or information to other apps. It's how PayPal tells your accounting app when your clients pay you, how Twilio routes phone calls to your number, and how WooCommerce can notify you about new orders in Slack.

-> They're a simple way your online accounts can "speak" to each other and get notified automatically when something new happens. In many cases, you'll need to know how to use webhooks if you want to automatically push data from one app to another.

13. What is Docker? Why do we use it?
- What is a container
-> A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

-> Container images become containers at runtime and in the case of Docker containers – images become containers when they run on Docker Engine. Available for both Linux and Windows-based applications, containerized software will always run the same, regardless of the infrastructure. Containers isolate software from its environment and ensure that it works uniformly despite differences for instance between development and staging. 

- What is Docker
-> Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allows you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

- Why use Docker/Container

- Fast, consistent delivery of your applications
-> Docker streamlines the development lifecycle by allowing developers to work in standardized environments using local containers which provide your applications and services. Containers are great for continuous integration and continuous delivery (CI/CD) workflows.

- Consider the following example scenario:
-> Your developers write code locally and share their work with their colleagues using Docker containers.
They use Docker to push their applications into a test environment and execute automated and manual tests.
When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation.
When testing is complete, getting the fix to the customer is as simple as pushing the updated image to the production environment.
Responsive deployment and scaling
-> Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.
-> Docker’s portability and lightweight nature also make it easy to dynamically manage workloads, scaling up or tearing down applications and services as business needs dictate, in near real time.

- Running more workloads on the same hardware
-> Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources.

14. What is S3 Service in AWS?
-> Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.

15. What is EC2 Instance in AWS?
-> Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster. You can use Amazon EC2 to launch as many or as few virtual servers as you need, configure security and networking, and manage storage. Amazon EC2 enables you to scale up or down to handle changes in requirements or spikes in popularity, reducing your need to forecast traffic.

16. What is Cloudfront in AWS?
-> Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content, such as .html, .css, .js, and image files, to your users. CloudFront delivers your content through a worldwide network of data centers called edge locations. When a user requests content that you're serving with CloudFront, the request is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.

- If the content is already in the edge location with the lowest latency, CloudFront delivers it immediately.
- If the content is not in that edge location, CloudFront retrieves it from an origin that you've defined—such as an Amazon S3 bucket, a MediaPackage channel, or an HTTP server (for example, a web server) that you have identified as the source for the definitive version of your content.

17. What is Route 53 In AWS?
-> Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like www.example.com into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well.

-> Amazon Route 53 effectively connects user requests to infrastructure running in AWS – such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets – and can also be used to route users to infrastructure outside of AWS. You can use Amazon Route 53 to configure DNS health checks, then continuously monitor your applications’ ability to recover from failures and control application recovery with Route 53 Application Recovery Controller.

18. What are ELBs in AWS?
-> Elastic Load Balancing automatically distributes your incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in one or more Availability Zones. It monitors the health of its registered targets, and routes traffic only to the healthy targets. Elastic Load Balancing scales your load balancer as your incoming traffic changes over time. It can automatically scale to the vast majority of workloads.

- Load balancer benefits
-> A load balancer distributes workloads across multiple compute resources, such as virtual servers. Using a load balancer increases the availability and fault tolerance of your applications.

-> You can add and remove compute resources from your load balancer as your needs change, without disrupting the overall flow of requests to your applications.

-> You can configure health checks, which monitor the health of the compute resources, so that the load balancer sends requests only to the healthy ones. You can also offload the work of encryption and decryption to your load balancer so that your compute resources can focus on their main work.

19. What is TLS?
-> Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit which is particularly useful for private and sensitive information such as passwords, credit card numbers, and personal correspondence. 

-> TLS is a cryptographic protocol that provides end-to-end security of data sent between applications over the Internet. It is mostly familiar to users through its use in secure web browsing, and in particular the padlock icon that appears in web browsers when a secure session is established. However, it can and indeed should also be used for other applications such as e-mail, file transfers, video/audioconferencing, instant messaging and voice-over-IP, as well as Internet services such as DNS and NTP.
-> TLS evolved from Secure Socket Layers (SSL) which was originally developed by Netscape Communications Corporation in 1994 to secure web sessions. SSL 1.0 was never publicly released, whilst SSL 2.0 was quickly replaced by SSL 3.0 on which TLS is based.
-> TLS was first specified in RFC 2246 in 1999 as an applications independent protocol, and whilst was not directly interoperable with SSL 3.0, offered a fallback mode if necessary. However, SSL 3.0 is now considered insecure and was deprecated by RFC 7568 in June 2015, with the recommendation that TLS 1.2 should be used. TLS 1.3 is also currently (as of December 2015) under development and will drop support for less secure algorithms.
-> It should be noted that TLS does not secure data on end systems. It simply ensures the secure delivery of data over the Internet, avoiding possible eavesdropping and/or alteration of the content.
-> TLS is normally implemented on top of TCP in order to encrypt Application Layer protocols such as HTTP, FTP, SMTP and IMAP, although it can also be implemented on UDP, DCCP and SCTP as well (e.g. for VPN and SIP-based application uses). This is known as Datagram Transport Layer Security (DTLS) and is specified in RFCs 6347, 5238 and 6083.

20. What is the difference HTTPS vs HTTP?
-> HTTPS is HTTP with encryption. The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses. As a result, HTTPS is far more secure than HTTP. A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://.

21. What is a reverse proxy?
- What’s a proxy server?
-> A forward proxy, often called a proxy, proxy server, or web proxy, is a server that sits in front of a group of client machines. When those computers make requests to sites and services on the Internet, the proxy server intercepts those requests and then communicates with web servers on behalf of those clients, like a middleman.

- Uses
-> To avoid state or institutional browsing restrictions
-> To block access to certain content
-> To protect their identity online 

- What is reverse Proxy
-> A reverse proxy is a server that sits in front of one or more web servers, intercepting requests from clients. This is different from a forward proxy, where the proxy sits in front of the clients. With a reverse proxy, when clients send requests to the origin server of a website, those requests are intercepted at the network edge by the reverse proxy server. The reverse proxy server will then send requests to and receive responses from the origin server.

- Uses
-> Load balancing
-> Protection from attacks
-> Caching

- Difference between forward and reverse Proxy
-> The difference between a forward and reverse proxy is subtle but important. A simplified way to sum it up would be to say that a forward proxy sits in front of a client and ensures that no origin server ever communicates directly with that specific client. On the other hand, a reverse proxy sits in front of an origin server and ensures that no client ever communicates directly with that origin server.