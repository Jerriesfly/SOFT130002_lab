[github地址](https://github.com/Jerriesfly/SOFT130002_lab/tree/master/lab11)

### Cookie和Session的功能

##### 同为会话技术

包含多次请求和响应。浏览器第一次给服务器资源发送请求，会话建立，直到有一方断开为止。在一次会话的范围内的多次请求间，共享数据。

##### Cookie

用户在登录时向服务器发送post请求，服务器接受请求并检验通过后生成对应的cookie字符串，响应到前端浏览器，再由前端浏览器保存至本地。此后用户再次向服务器发送请求时会在HTTP响应头中包含cookie内的信息，服务器经比对cookie相同后后确认为同一用户。

##### Session

与cookie相似，不过保存在服务器端上，同时其实现依赖于cookie机制。用户发送的请求包含的cookie中含有一个sessionID，服务器根据此sessionID查找相应的session

### Cookie和Session的优劣

##### Cookie

优：存储于客户端，不占用服务器资源

劣：只能存储少量数据，且本地cookie数量有上限

##### Session

优：相比cookie更加安全，实现多个客户端信息同步（例如购物车）

劣：占用服务器资源

