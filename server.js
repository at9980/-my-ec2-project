const http = require('http');

const hostname = '0.0.0.0'; 
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from EC2!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  // EC2 인스턴스의 퍼블릭 IP 주소 출력
  http.get('http://169.254.169.254/latest/meta-data/public-ipv4', (res) => {
    res.on('data', (chunk) => {
      console.log(`EC2 Public IP: ${chunk}`);
    });
  });
});