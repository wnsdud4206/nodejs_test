var http = require('http');   // require 요구하다
var fs = require('fs');
var url = require("url");

var app = http.createServer(function(request,response){
    var _url = request.url;  // query string?
    console.log(_url);
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id);  // == queryDate.neme
    var title = queryData.id;
    if(_url == '/'){    // 최상위 경로로 이동했을 때 동작, 홈으로 갔을 내 안에 있는 내용처럼 index.html로 이동?
      // _url = '/index.html';   // template 변수 안에 h1>a href="index.html"
      title = "welcome";
    }
    if(_url == '/favicon.ico'){
      response.writeHead(404);
      response.end();
      return;
    }
    response.writeHead(200);
    var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ol>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>

    `;
    // response.end(fs.readFileSync(__dirname + _url));
    // response.end(queryData.id); // 이제 주소창에 localhost:3000/?id=이곳 에 따라서 뭔가 바뀌는 것을 볼 수 있다.
    response.end(template);

    // ?? localhost:3000/?id=HTML 이랑 localhost:3000?id=HTML 은 같은거?(/ 유무)

});
app.listen(3000);


// 모르는 것
// require(), http.createServer(), request.url, url.parse(var, boolean).query
// .writeHead(), .end(), .listen()
