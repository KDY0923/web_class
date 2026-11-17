// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log("요청 발생");
//     // console.log(req);

//     console.log(req.method);
//     // 응답 헤더
//     res.setHeader("Content-Type", "text/plain");
//     //응답 문장
//     res.write("Hello, Node!!");
//     res.end(); //응답 종료
// });

// server.listen(3000, () => {
//     console.log("3000번 포트로 서버 실행");
// });


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