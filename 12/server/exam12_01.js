const http = require("http");

const server = http.createServer((req, res) => {
    console.log("요청 발생");
    // console.log(req);

    console.log(req.method);
    // 응답 헤더
    res.setHeader("Content-Type", "text/plain");
    //응답 문장
    res.write("Hello, Node!!");
    res.end(); //응답 종료
});

server.listen(3000, () => {
    console.log("3000번 포트로 서버 실행");
});