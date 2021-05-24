const http = require("http");
const fs = require("fs");
let requests = require("requests");
let indexFile = fs.readFileSync("../html/index.html", "utf-8");

function replaceVal(tempVal, orgVal) {
    let newFile = tempVal.replace("{%tempval%}", orgVal.main.temp);
    newFile = newFile.replace("{%tempmin%}", orgVal.main.temp_min);
    newFile = newFile.replace("{%tempmax%}", orgVal.main.temp_max);
    newFile = newFile.replace("{%location%}", orgVal.name);
    newFile = newFile.replace("{%country%}", orgVal.sys.country);
    newFile = newFile.replace("{%temperatureStatus%}", orgVal.weather[0].main);

    return newFile;
}
const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("http://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric&appid=274004e3790c6e6cdcbc2e6893f7fe38")
            .on("data", function (chunk) {
                let objData = JSON.parse(chunk);
                let arrData = [objData];
                let realTimeData = arrData.map((elem) => {
                    return (replaceVal(indexFile, elem));
                }).join("");
                res.write(realTimeData);
            })
            .on("end", function (err) {
                if (err) {
                    return console.log("Connection closed due to errors", err);
                }
               res.end();
            });
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to port 8000");
});