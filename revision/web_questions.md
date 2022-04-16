1. Explain briefly what happens when you hit a url? explain DNS lookup

```
When we hit a url on internet then browser has to figure out which server is running that site by looking at domain name.

DNS Lookup

1. A user types ‘example.com’ into a web browser and the query travels into the Internet and is received by a DNS recursive resolver.
2. The resolver then queries a DNS root nameserver (.).
3. The root server then responds to the resolver with the address of a Top Level Domain (TLD) DNS server (such as .com or .net), which stores the information for its domains. When searching for example.com, our request is pointed toward the .com TLD.
4. The resolver then makes a request to the .com TLD.
5. The TLD server then responds with the IP address of the domain’s nameserver, example.com.
6. Lastly, the recursive resolver sends a query to the domain’s nameserver.
7. The IP address for example.com is then returned to the resolver from the nameserver.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

Once the 8 steps of the DNS lookup have returned the IP address for example.com, the browser is able to make the request for the web page:

The browser makes a HTTP request to the IP address.
The server at that IP returns the webpage to be rendered in the browser.
```

2. What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file
```
URL stands for Uniform Resource Locator.

Scheme
- The first part of the URL is the scheme, which indicates the protocol that the browser must use to request the resource (a protocol is a set method for exchanging or transferring data around a computer network). Usually for websites the protocol is HTTPS or HTTP (its unsecured version). Addressing web pages requires one of these two, but browsers also know how to handle other schemes such as mailto: (to open a mail client), so don't be surprised if you see other protocols.


Authority
- Next follows the authority, which is separated from the scheme by the character pattern ://. If present the authority includes both the domain (e.g. www.example.com) and the port (80), separated by a colon:

- The domain indicates which Web server is being requested. Usually this is a domain name, but an IP address may also be used (but this is rare as it is much less convenient).
The port indicates the technical "gate" used to access the resources on the web server. It is usually omitted if the web server uses the standard ports of the HTTP protocol (80 for HTTP and 443 for HTTPS) to grant access to its resources. Otherwise it is mandatory.
Note: The separator between the scheme and authority is ://. The colon separates the scheme from the next part of the URL, while // indicates that the next part of the URL is the authority.

One example of a URL that doesn't use an authority is the mail client (mailto:foobar). It contains a scheme but doesn't use an authority component. Therefore, the colon is not followed by two slashes and only acts as a delimiter between the scheme and mail address.

- Path to resource
Path to the file
/path/to/myfile.html is the path to the resource on the Web server. In the early days of the Web, a path like this represented a physical file location on the Web server. Nowadays, it is mostly an abstraction handled by Web servers without any physical reality.

- Parameters
?key1=value1&key2=value2 are extra parameters provided to the Web server. Those parameters are a list of key/value pairs separated with the & symbol. The Web server can use those parameters to do extra stuff before returning the resource. Each Web server has its own rules regarding parameters, and the only reliable way to know if a specific Web server is handling parameters is by asking the Web server owner.

- Anchor
#SomewhereInTheDocument is an anchor to another part of the resource itself. An anchor represents a sort of "bookmark" inside the resource, giving the browser the directions to show the content located at that "bookmarked" spot. On an HTML document, for example, the browser will scroll to the point where the anchor is defined; on a video or audio document, the browser will try to go to the time the anchor represents. It is worth noting that the part after the #, also known as the fragment identifier, is never sent to the server with the request.
```

3. What is HTTP protocol?
```
HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.

A Web document is the composition of different resources
Clients and servers communicate by exchanging individual messages (as opposed to a stream of data). The messages sent by the client, usually a Web browser, are called requests and the messages sent by the server as an answer are called responses.

HTTP as an application layer protocol, on top of TCP (transport layer) and IP (network layer) and below the presentation layer.Designed in the early 1990s, HTTP is an extensible protocol which has evolved over time. It is an application layer protocol that is sent over TCP, or over a TLS-encrypted TCP connection, though any reliable transport protocol could theoretically be used. Due to its extensibility, it is used to not only fetch hypertext documents, but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand.
```

4. What is TCP Protocol?

```
TCP stands for Transmission Control Protocol a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the internet and ensure the successful delivery of data and messages over networks.

TCP is one of the basic standards that define the rules of the internet and is included within the standards defined by the Internet Engineering Task Force (IETF). It is one of the most commonly used protocols within digital network communications and ensures end-to-end data delivery.

TCP organizes data so that it can be transmitted between a server and a client. It guarantees the integrity of the data being communicated over a network. Before it transmits data, TCP establishes a connection between a source and its destination, which it ensures remains live until communication begins. It then breaks large amounts of data into smaller packets, while ensuring data integrity is in place throughout the process.

As a result, high-level protocols that need to transmit data all use TCP Protocol.  Examples include peer-to-peer sharing methods like File Transfer Protocol (FTP), Secure Shell (SSH), and Telnet. It is also used to send and receive email through Internet Message Access Protocol (IMAP), Post Office Protocol (POP), and Simple Mail Transfer Protocol (SMTP), and for web access through the Hypertext Transfer Protocol (HTTP).

An alternative to TCP is the User Datagram Protocol (UDP), which is used to establish low-latency connections between applications and decrease transmissions time. TCP can be an expensive network tool as it includes absent or corrupted packets and protects data delivery with controls like acknowledgments, connection startup, and flow control. 

UDP does not provide error connection or packet sequencing nor does it signal a destination before it delivers data, which makes it less reliable but less expensive. As such, it is a good option for time-sensitive situations, such as Domain Name System (DNS) lookup, Voice over Internet Protocol (VoIP), and streaming media.
```

5. Explain all the different HTTP methods?

```
HTTP POST request
We use POST to create a new resource. A POST request requires a body in which you define the data of the entity to be created.

A successful POST request would be a 200 response code. In our weather app, we could use a POST method to add weather data about a new city.

HTTP GET request
We use GET to read or retrieve a resource. A successful GET returns a response containing the information you requested.

HTTP PUT request
We use PUT to modify a resource. PUT updates the entire resource with data that is passed in the body payload. If there is no resource that matches the request, it will create a new resource.

HTTP PATCH request
We use PATCH to modify a part of a resource. With PATCH, you only need to pass in the data that you want to update.

HTTP DELETE request
We use DELETE to delete a resource. In our weather app, we could use DELETE to delete a city we no longer wanted to track for some reason.
```

6. What are HTTP headers?
```
HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

Custom proprietary headers have historically been used with an X- prefix, but this convention was deprecated in June 2012 because of the inconveniences it caused when nonstandard fields became standard in RFC 6648; others are listed in an IANA registry, whose original content was defined in RFC 4229. IANA also maintains a registry of proposed new HTTP headers.

Headers can be grouped according to their contexts:

- Request headers contain more information about the resource to be fetched, or about the client requesting the resource.
- Response headers hold additional information about the response, like its location or about the server providing it.
- Representation headers contain information about the body of the resource, like its MIME type, or encoding/compression applied.
- Payload headers contain representation-independent information about payload data, including content length and the encoding used for transport.
- Headers can also be grouped according to how proxies handle them:

Connection
- Keep-Alive
- Proxy-Authenticate
- Proxy-Authorization
- TE
- Trailer
- Transfer-Encoding
- Upgrade

End-to-end headers
These headers must be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.

Hop-by-hop headers
These headers are meaningful only for a single transport-level connection, and must not be retransmitted by proxies or cached. Note that only hop-by-hop headers may be set using the Connection header.
```

7. What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx
```
HTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

Informational responses (100–199)
Successful responses (200–299)
Redirection messages (300–399)
Client error responses (400–499)
Server error responses (500–599)
```

8. What does cache control on http response mean?
```
The Cache-Control HTTP header field holds directives (instructions) — in both requests and responses — that control caching in browsers and shared caches (e.g. Proxies, CDNs).
```

9. What is polling?
```
Polling is a technique for making requests in a non-blocking manner. It is particularly useful for applications that need to make requests to services which take a long time to process the request.

Let's say we have a client and a server. If the client makes a synchronous request, its thread will block until the server responds. For a long process at the server, this can be problematic. In a real-world application accessed by lots of users, this would lead to reduced ability of the application to serve new requests.

For e.g. if the capacity of the client is to hold 100 requests at a time and the server takes a few minutes to process a single request, this can lead to a situation where the client is unable to serve new requests because there are no free threads.

To solve this, we need to make the client asynchronous. Polling is one of the techniques which can be used to achieve this.

how polling works:

- The client makes a request to the server just like a simple HTTP request.
- The server responds to the client but has not finished processing the request.
- The client polls the server after some interval to see if the request has been processed.
- If the request has been processed, the client receives the response.
- If not, the client polls again after some interval.
```

10. What is long polling?
```
HTTP Long Polling is a technique used to push information to a client as soon as possible on the server. As a result, the server does not have to wait for the client to send a request.

In Long Polling, the server does not close the connection once it receives a request from the client. Instead, the server responds only if any new message is available or if a timeout threshold is reached.

Once the client receives a response, it immediately sends a new request to the server to have a new pending connection to send data to the client, and the operation is repeated. With this approach, the server emulates a Realtime Server Push feature.
```

11. What are web sockets?
```
A WebSocket is a persistent bi-directional communication channel between a client (e.g. a browser) and a backend service. In contrast with HTTP request/response connections, websockets can transport any number of protocols and provide server-to-client message delivery without polling.

WebSockets allow for bidirectional realtime communication between servers and clients.

WebSockets establish TCP-style connections in a browser-compatible fashion using HTTP during initial setup. Messages over websockets can be provided in any protocol, freeing the application from the sometimes unnecessary overhead of HTTP requests and responses (including headers, cookies, and other artifacts). But most critical is the ability to deliver downstream (server-to-client) messages to connected clients. In the browser, for instance, the same thing was once only possible by polling a server resource, which is a comparatively racy, high-latency, and bandwidth-intensive affair.

WebSockets are available on many platforms, including the most common browsers and mobile devices. They're often applied to solve problems of millisecond-accurate state synchronization and publish-subscribe messaging, both of which leverage Websockets' provision for downstream pushes. A challenge of operating a WebSocket-based system is the maintenance of a stateful gateway on the backend. A WebSocket is erected by making a common HTTP request to that server with an Upgrade header, which the server (after authentating and authorizing the client) should confirm in its response. After this, the connection remains established between that physical client-server pair; if at some point the service needs to be redeployed or the load redistributed, its WebSocket connections needs to be re-established.
```

12. How is web sockets different from HTTP?
```
- WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. Where as, HTTP providing half-duplex communication.

- Information exchange mode of WebSocket is bidirectional. Means, server can push information to the client (which does not allow direct HTTP).

- The contents of each stream are HTTP requests and responses, just encoded and packed up differently. Where as, WebSocket adds a number of features to manage the streams, but leaves old semantics untouched.
```

13. What is HTTPS?
```
Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer. This is particularly important when users transmit sensitive data, such as by logging into a bank account, email service, or health insurance provider.

Any website, especially those that require login credentials, should use HTTPS. In modern web browsers such as Chrome, websites that do not use HTTPS are marked differently than those that are. Look for a green padlock in the URL bar to signify the webpage is secure. Web browsers take HTTPS seriously; Google Chrome and other browsers flag all non-HTTPS websites as not secure.

HTTPS uses an encryption protocol to encrypt communications. The protocol is called Transport Layer Security (TLS), although formerly it was known as Secure Sockets Layer (SSL). This protocol secures communications by using what’s known as an asymmetric public key infrastructure. This type of security system uses two different keys to encrypt communications between two parties:

The private key - this key is controlled by the owner of a website and it’s kept, as the reader may have speculated, private. This key lives on a web server and is used to decrypt information encrypted by the public key.
The public key - this key is available to everyone who wants to interact with the server in a way that’s secure. Information that’s encrypted by the public key can only be decrypted by the private key.
```

14. What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?
```
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.
```

15. What does Access-Control-Allow-Origin header do?
```
The Access-Control-Allow-Origin response header indicates whether the response can be shared with requesting code from the given origin.

* means all the origins are allowed
```

16. What is clickjacking? How do you fix it?
```
Clickjacking is an online attack that tricks a victim into clicking something other than what they intended without realizing it. Clickjacking is also referred to as a user interface redress attack (UI redress attack). The classic clickjacking attack “redresses” the user interface that’s visible to the victim by embedding a malicious website into an invisible iframe on top of the original webpage.

The victim has no visual cues that there is an invisible iframe on top of the page they actually see. The invisible page contains clickable elements that align with the actual buttons on the visible page underneath. Hence, when a victim clicks the ‘Download pdf’ button, for example, they’re actually clicking an invisible element that downloads a malicious script that their browser then executes

The way to protect against clickjacking attacks depends on which end of the attack you’re on. Client-side defenses are different from server-side defenses, and both are equally important.

Client-side
1. Use a browser that supports the Intersection Observer API

The Intersection Observer API can track the “visibility” of target elements on a web page. This API enables the browser to detect when a framed window is being hidden.

The following desktop browsers support the API at this time:

Google Chrome 58 and above
Mozilla Firefox 55 and above
Microsoft Edge 16 and above
Opera 45 and above
On mobile, there are so many browsers available on both Apple’s App Store and on Google’s Play Store that listing them all is close to impossible. However, the default browsers on both iOS and Android do support the Intersection Observer API, so that’s good news.

iOS Safari from iOS version 12.2 and above
Chrome for Android 51 and above
2. Use a browser add-on

Several browser add-ons can provide some protection against clickjacking attacks.

Some popular choices are:

NoScript: The NoScript browser add-on prevents users from clicking on invisible or “redressed” web page elements. NoScript is free but is only supported by Mozilla Firefox.
NoClickjack: The NoClickjack browser add-on is supported by Google Chrome, Mozilla Firefox, Microsoft Edge, and Opera. The add-on forces all frames on a webpage to be visible.
Server-side
On the server-side, the way to protect against clickjacking is to add the relevant directives to your website’s HTTP headers.

1. X-Frame-Options directive

Introduced by Microsoft in the 2009 edition of Internet Explorer, the HTTP header X-Frame-Options provided partial protection against clickjacking. Most major browsers today support the X-Frame-Options directive (Safari, Firefox, Chrome, and Opera). Once set by the website administrator, the header states its framing policy. The options are:

DENY: Disallows all framing
ALLOW-FROM origin: Disallows framing from external sites
SAMEORIGIN: Only allows framing form the specified site(s)
The X-Frame Options header was never an official internet standard and has been supplanted by the frame-ancestors policy. Despite that fact, many websites still use X-Frame-Options today.

2. Frame-ancestors directive

The frame-ancestors directive of Content Security Policy (CSP) can control (by allowing or disallowing) embedding of content by potentially malicious pages using iframe, object, etc. CSP is an HTTP response header that enables you to determine which dynamic resources are allowed to load based on the source of the request.

As mentioned above, the frame-ancestors directive replaces and supplants the X-Frame-Options directive. If a page is served with both headers, the web browser should privilege the frame-ancestors policy. However, some browsers may disregard this requirement.
```

17. What are some performance metrics for your website?
```
Important metrics to measure
- Time to First Byte (TTFB)
=> TTFB is a metric that measures the time between the request for a resource and when the first byte of a response begins to arrive.

- Page Load Time ( PLT )
=> Page Load Time is a metric that measures the time between the request for a resource (clicking on hyperlink or entering the url) and the entire requested page becomes available on the browser.

- First Contentful Paint (FCP)
=> The First Contentful Paint (FCP) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. For this metric, "content" refers to text, images (including background images), <svg> elements, or non-white <canvas> elements.

- Largest Contentful Paint (LCP)
=> The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.

- First Input Delay (FID)
=> FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.

- Time to Interactive (TTI)
=> The TTI metric measures the time from when the page starts loading to when its main sub-resources have loaded and it is capable of reliably responding to user input quickly.

- Total Blocking Time (TBT)
=> The Total Blocking Time (TBT) metric measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.
```

18. What does the following term mean?
- Time to first byte,
```
TTFB is a metric that measures the time between the request for a resource and when the first byte of a response begins to arrive.
```

- Page load time
```
Page Load Time is a metric that measures the time between the request for a resource (clicking on hyperlink or entering the url) and the entire requested page becomes available on the browser.
```

19. What do CDN or Content Delivery Networks do? When do you need a CDN?
```
A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

Why we need CDN
-Improving website load times - By distributing content closer to website visitors by using a nearby CDN server (among other optimizations), visitors experience faster page loading times. As visitors are more inclined to click away from a slow-loading site, a CDN can reduce bounce rates and increase the amount of time that people spend on the site. In other words, a faster a website means more visitors will stay and stick around longer.

- Reducing bandwidth costs - Bandwidth consumption costs for website hosting is a primary expense for websites. Through caching and other optimizations, CDNs are able to reduce the amount of data an origin server must provide, thus reducing hosting costs for website owners.

- Increasing content availability and redundancy - Large amounts of traffic or hardware failures can interrupt normal website function. Thanks to their distributed nature, a CDN can handle more traffic and withstand hardware failure better than many origin servers.

- Improving website security - A CDN may improve security by providing DDoS mitigation, improvements to security certificates, and other optimizations.
```

20. What is the difference between Client Side Renderring and Server Side Renderring?
```
SSR
- In SSR, when the user makes a request to the webpage, the server prepares the HTML page by fetching the required data from the database and sends to the user's machine over the internet. Then the browser presents all the requested actions on the user UI. All these processes of fetching data from the database to creating an HTML page and sending it to the client are done in mere milliseconds.

- This method is viable if all your website need is to display images/ texts, links to click, and is more on the static side.

CSR
-Client-side rendering means that a website’s JavaScript is rendered in your browser, rather than on the website’s server. So now, instead of getting all the content from the HTML doc, only the required HTML with the JS files will be rendered. The rendering time for the first upload is a bit slow. However, the next page loads will be very fast as we don't have to wait for every page render. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.


Benefits of SSR -
- The initial page of the website load is faster as there are fewer codes to render.
- Good for minimal and static sites.
- Search engines can crawl the site for better SEO.

Downsides of SSR -
- the site interactions are less.
- Slow page rendering.
- Full UI reloads.
- Frequent server requests.

Benefits of CSR -
- The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
- Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
- Clear separation of the concerns between the client and the server; you can easily build new clients for different platforms (e.g. mobile, chatbots, smartwatches) without having to modify the server code. You can also modify the technology stack on the client and server independently, as long as the API contract is not broken.

Downsides of CSR -
- Heavier initial page load due to loading of the framework, app code, and assets required for multiple pages.
- There's an additional step to be done on your server which is to configure it to route all requests to a single entry point and allow client-side routing to take over from there.
- In most cases, requires an external library.
- All search engines execute JavaScript during crawling, and they may see empty content on your page. This inadvertently hurts the Search Engine Optimization (SEO) of your app.
- However, most of the time, when you are building apps, SEO is not the most important factor, as not all the content needs to be indexable by search engines. To overcome this, you can either server-side render your app or use services such as Prerender to "render your javascript in a browser, save the static HTML, and return that to the crawlers".

When to use server-side rendering
- An application has a very simple UI with fewer pages/features
- An application has less dynamic data
- Read preference of the site is more than write
- The focus is not on rich sites and has few users

When to use client-side rendering
- An application has a very complex UI with many pages/features
- An application has large and dynamic data
- Write preference of the site is more than reading
- The focus is on rich sites and a huge number of users
```

21. What is Progressive Renderring
```
Progressive Rendering (aka Progressive Server Side Rendering) is a technique in which once you render the critical content on the server, you start streaming it to the client without waiting for non-critical content. You then stream the non-critical content later once it’s rendered on the server. The browser starts to progressively render (paint) the HTML on the page as soon as a chunk for critical content is received. Non-critical content is then later rendered (paint) on the page when the browser receives it from the server.

Typical page load behaviour in PSSR —
- Browser requests the server for HTML.
- Server makes API requests (usually co-located) and renders the critical content first in the server and streams it to the browser.
- The browser receives the chunk of HTML and renders (paints) it on the screen.
- The server renders non-critical content after rendering critical content and streams it to the client.
- The browser receives and renders (paints) the non-critical content later.
- Once the entire page is loaded, the browser hydrates interactivity to DOM elements, which is usually attaching event handlers and other interactive behaviours.

Progressive rendering bridges the benefits of both CSR and SSR. Content is rendered quickly since the APIs are co-located in the server and at the same time, critical content can be rendered quickly without having to wait for non-critical content.
```

22. What is the difference between Preloading and Prefetching resources?
```
preload

- <link rel="preload"> tells the browser to download and cache a resource (like a script or a stylesheet) as soon as possible. It’s helpful when you need that resource a few seconds after loading the page, and you want to speed it up.

- The browser doesn’t do anything with the resource after downloading it. Scripts aren’t executed, stylesheets aren’t applied. It’s just cached – so that when something else needs it, it’s available immediately.

prefetch

- <link rel="prefetch"> asks the browser to download and cache a resource (like, a script or a stylesheet) in the background. The download happens with a low priority, so it doesn’t interfere with more important resources. It’s helpful when you know you’ll need that resource on a subsequent page, and you want to cache it ahead of time.

- The browser doesn’t do anything with the resource after downloading it. Scripts aren’t executed, stylesheets aren’t applied. It’s just cached – so that when something else needs it, it’s available immediately.

```

23. What are service workers?
```
Service Worker is a script that works on browser background without user interaction independently. Also, It resembles a proxy that works on the user side. With this script, you can track network traffic of the page, manage push notifications and develop “offline first” web applications with Cache API.

Service workers can be used for -
- managing all network traffic of the page and do any manipulations.
- caching any request/response pair with Service Worker and Cache API and you can access these offline content anytime.
- pushing notifications with Service Worker and show any information message to the user.
- When Internet connection is broken, you can start any process with Background Sync of Service Worker.

Service Workers cannot be used for -

- to access the window, therefore, You can’t any manipulation DOM elements. But, you can communicate to the window through postMessage and manage processes that you want.
- You can’t work it on 80 Port!
- Service Worker just can work on HTTPS protocol. But you can work on localhost during development.
```