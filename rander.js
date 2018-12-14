const fs = require('fs');
const path = require('path');
const http = require('http');
const template = require('art-template');

const server = http.createServer();
let obj={
  list:[
    {name:'李佳乐',
    age:54,
    a:'我想要一个贝壳'},
    {
      name:'贝壳',
      age:451,
      a:'你要我干嘛'
    }
  ]
}
server.on('request', (req, res) => {
  if (req.url.startsWith('/index') || req.url === '/') {
    fs.readFile(path.join(__dirname, 'index.json'), 'utf-8', (err, data) => {
    //   if (err) { return console.log('滚出克') }
    let str=JSON.parse(data)
      // console.log(JSON.parse(data), path.join(__dirname, 'index.html'));
      let tmp=template(path.join(__dirname,'index.html'),str)
      res.end(tmp);

    })
  }



});
server.listen(9999, () => { console.log('欢迎来到9999直播间，请注意言行') });

