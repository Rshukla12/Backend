# Curl Requests

## Google => (google.com)
curl -I  google.com

HTTP/1.1 301 Moved Permanently        
Location: http://www.google.com/      
Content-Type: text/html; charset=UTF-8Date: Fri, 28 Jan 2022 12:53:41 GMT   
Expires: Sun, 27 Feb 2022 12:53:41 GMTCache-Control: public, max-age=2592000Server: gws
Content-Length: 219
X-XSS-Protection: 0        
X-Frame-Options: SAMEORIGIN

## Google => (https://wwwgoogle.com)
curl -I  https://www.google.com     

HTTP/2 200
content-type: text/html; charset=ISO-8859-1
p3p: CP="This is not a P3P policy! See g.co/p3phelp for more info."
date: Fri, 28 Jan 2022 12:55:50 GMT   
server: gws
x-xss-protection: 0
x-frame-options: SAMEORIGIN
expires: Fri, 28 Jan 2022 12:55:50 GMTcache-control: private
set-cookie: 1P_JAR=2022-01-28-12; expires=Sun, 27-Feb-2022 12:55:50 GMT; path=/; domain=.google.com; Secure       
set-cookie: NID=511=lZVb_1LPdyV4TPE1_tGuFJ-v37yRtSWQVg70DBBR6c5USrAjwYQaxVok687GerPdAl1y4KRWeabDFx0_JQYJPv0kVtKZnF9_EoOcLTzLsmodjwhiOwcNW5dFHBPnubNNqIisLqjEz-owQ8uigAE7WPp9H5885z1IoYZoHwjVliM; expires=Sat, 30-Jul-2022 12:55:50 GMT; path=/; domain=.google.com; HttpOnly
alt-svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"


## MasaiSchool (www.masaischool.com) with redirect enabled
curl -I -L www.masaischool.com

HTTP/1.1 301 Moved Permanently
Server: awselb/2.0
Date: Fri, 28 Jan 2022 12:56:53 GMT
Content-Type: text/html
Content-Length: 134
Connection: keep-alive
Location: https://www.masaischool.com:443/

HTTP/2 200 
date: Fri, 28 Jan 2022 12:56:54 GMT
content-type: text/html
content-length: 108118
set-cookie: AWSALB=IUYkX2Mv3aW2B3PxR2JdBXTiUPGt2/LkdKkHTkuYk1HJGEKZT8GqSZT6ysTAlS67wXBaT05ED6lK3I50pEwbtm3PuYNB7JViPDyqiA6rCPWax9K8TE5a9fqQV4kT; Expires=Fri, 04 Feb 2022 12:56:54 GMT; Path=/
set-cookie: AWSALBCORS=IUYkX2Mv3aW2B3PxR2JdBXTiUPGt2/LkdKkHTkuYk1HJGEKZT8GqSZT6ysTAlS67wXBaT05ED6lK3I50pEwbtm3PuYNB7JViPDyqiA6rCPWax9K8TE5a9fqQV4kT; Expires=Fri, 04 Feb 2022 12:56:54 
GMT; Path=/; SameSite=None; Secure
server: Apache/2.4.41 (Ubuntu)
last-modified: Mon, 24 Jan 2022 19:00:59 GMT
etag: "1a656-5d65896d8d170"
accept-ranges: bytes
vary: Accept-Encoding