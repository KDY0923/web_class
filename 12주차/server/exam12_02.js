const http = require("http");
//fs 모듈 불러오기
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req, res) => {
    console.log("요청 발생");
    console.log(req.method);

    res.setHeader("Content-Type", "text/html");
    const readStream = fs.createReadStream(__dirname+"/index.html", "utf-8");
    readStream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`${PORT}면 포트로 서버 실행`);
});