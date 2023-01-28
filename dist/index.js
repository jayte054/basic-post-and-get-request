"use strict";
// import  http from "http";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const port = 4000
// const server = http.createServer((req: any, res: any) => {
//                 res.writeHead(200, {
//                     "Content-Type": "application/json"
//                 })
//                 res.end(JSON.stringify({
//                     "school name":"decagon",
//                     "program lead": "Godstime Azeke"
//                 }))
// })
// server.listen(port, () => {
//     console.log("server is listening on port: ", port)
// })
// import http from "http"
// const port = 4000
// const server = http.createServer((req:any, res:any) => {
//                 res.writeHead(200, {
//                     "Content-Type":"application/json"
//                 })
//                 res.end(JSON.stringify({
//                     "stack":"Node.js",
//                     "Stack Associate": "Armani"
//                 }))
// })
// server.listen(port, () => {
//     console.log(`server is listening on port ${port}`)
// })
// import http from "http"
// const server = http.createServer((req:any, res:any) => {
//     if(req.url === "/site") {
//         res.statusCode = 200
//         res.setHeader("Content-type", "application/json")
//         res.write(JSON.stringify({
//             "my site" : "naijacorphub",
//             "purpose": "greatness"
//         }))
//         res.end()
//     } else if (req.url === "/content") {
//         res.statusCode = 200
//         res.setHeader("Content-type", "text/html")
//         res.write("<html>")
//         res.write("<ul>")
//         res.write("<li>About NAIJACORPHUB</li>")
//         res.write("<li>Creating a resourceful space for self improvement</li>")
//         res.write("<li>Ensuring that settling down as a corp member is made as easy as possible</li>")
//         res.write("<ul>")
//         res.write("</html>")
//         res.end()
//     } else {
//         res.statusCode = 400
//         res.setHeader("Content-Type", "application/json")
//         res.write(JSON.stringify({
//             "Error Message":"Page not found"
//         }))
//         res.end()
//     }
// })
// const port = 4000
// server.listen(port, () => {
//     console.log(`server is listening on port: ${port}`)
// })
// import http from "http"
// const website = [
//     {
//         "name": "moonbeamcakes.com",
//         "owner": "moonbeamcakes",
//         "purpose": "selling cakes and pastries"
//     },
//     {
//         "name": "naijacorphub.com",
//         "owner": "Justin Ewelike",
//         "purpose": "Uniting the entire Country using the existing parameter"
//     },
//     {
//         "name": "escrow",
//         "owner": "Justin Ewelike",
//         "purpose": "a medium for exchanging money for limited period"
//     }
// ]
// const webContent = [
//     {
//         "name": "moonbeamcakes",
//         "content": "pastries",
//         "purpose": "sales"
//     },
//     {
//         "name": "naijacorphub",
//         "content": {"sales": "e-commerce", "education": "self Improvement"},
//         "purpose" : "Driving the economy"
//     },
//     {
//         "name": "escrow",
//         "content": {"account": "personal", "guest account": "second party", "third party": "escrow account"},
//         "purpose": "trustee medium for exchange of cash over an item"
//     }
// ]
// const server = http.createServer()
// server.on("request", (req, res) => {
//     const item:any = req.url?.split("/")
//     console.log(item)
//     if(item[1] === "site") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json")
//         if(item.length === 3) {
//             const webIndex = Number(item[2])
//             res.end(JSON.stringify(website[webIndex]))
//         } else {
//             res.end(JSON.stringify(website))
//         }
//     } else if (item[1] === "content") {
//         res.statusCode = 200
//         res.setHeader("Content-Type", "application/json")
//             if (item.length === 3) {
//                 const contentIndex = Number(item[2])
//                 res.end(JSON.stringify(webContent[contentIndex]))
//             } else {
//                 res.end(JSON.stringify(webContent))
//             }
//     } 
// })
// const port = 4000
// server.listen(port, () => {
//     console.log("server is listening on port; ", port)
// })
// import http from "http" 
// import { Url } from "url"
// const website = [
//         {
//             "id" : 1,
//             "name": "moonbeamcakes.com",
//             "owner": "moonbeamcakes",
//             "purpose": "selling cakes and pastries"
//         },
//         {
//             "id" : 2,
//             "name": "naijacorphub.com",
//             "owner": "Justin Ewelike",
//             "purpose": "Uniting the entire Country using the existing parameter"
//         },
//         {
//             "id" : 3,
//             "name": "escrow",
//             "owner": "Justin Ewelike",
//             "purpose": "a medium for exchanging money for limited period"
//         }
//     ]
//     const webContent = [
//             {
//                 "name": "moonbeamcakes",
//                 "content": "pastries",
//                 "purpose": "sales"
//             },
//             {
//                 "name": "naijacorphub",
//                 "content": {"sales": "e-commerce", "education": "self Improvement"},
//                 "purpose" : "Driving the economy"
//             },
//             {
//                 "name": "escrow",
//                 "content": {"account": "personal", "guest account": "second party", "third party": "escrow account"},
//                 "purpose": "trustee medium for exchange of cash over an item"
//             }
//         ]
//     const server = http.createServer()
//     server.on("request", (req, res) => {
//         const item:any = req.url?.split("/")
//         console.log(item)
//         if(item[1] === "site") {
//             res.statusCode = 200
//             res.setHeader("Content-Type", "application/json")
//             if(item.length === 3) {
//                 const webIndex = Number(item[2])
//                 res.write(JSON.stringify(website[webIndex]))
//                 res.end()
//             } else {
//                 res.write(JSON.stringify(website))
//                 res.end()
//             }
//         } else if (item[1] === "content") {
//             res.statusCode = 200
//             res.setHeader("Content-type", "application/json")
//             if(item.length === 3) {
//                 const contentIndex = Number(item[2])
//                 res.end(JSON.stringify(webContent[contentIndex]))
//             } else {
//                 res.end(JSON.stringify(webContent))
//             }
//         }
//     })
//     const port = 4000
//     server.listen(port, () => {
//         console.log(`server is listening on port ${port}`)
//     })
// import http from "http"
// const website = [
//             {
//                 "id" : 1,
//                 "name": "moonbeamcakes.com",
//                 "owner": "moonbeamcakes",
//                 "purpose": "selling cakes and pastries"
//             },
//             {
//                 "id" : 2,
//                 "name": "naijacorphub.com",
//                 "owner": "Justin Ewelike",
//                 "purpose": "Uniting the entire Country using the existing parameter"
//             },
//             {
//                 "id" : 3,
//                 "name": "escrow",
//                 "owner": "Justin Ewelike",
//                 "purpose": "a medium for exchanging money for limited period"
//             }
//         ]
//         const webContent = [
//                 {
//                     "name": "moonbeamcakes",
//                     "content": "pastries",
//                     "purpose": "sales"
//                 },
//                 {
//                     "name": "naijacorphub",
//                     "content": {"sales": "e-commerce", "education": "self Improvement"},
//                     "purpose" : "Driving the economy"
//                 },
//                 {
//                     "name": "escrow",
//                     "content": {"account": "personal", "guest account": "second party", "third party": "escrow account"},
//                     "purpose": "trustee medium for exchange of cash over an item"
//                 }
//             ]
//     const dev:any = []
//     const server = http.createServer()
//     server.on("request", (req, res) => {
//         const item:any = req.url?.split("/")
//         if (req.method === "POST" && item[1] === "site") {
//             req.on("data", (data) => {
//                 const newSite = data.toString()
//                 website.push(JSON.parse(newSite))
//                 console.log("request:", newSite)
//             })
//         } else if (req.method === "GET" && item[1] === "site") {
//                 res.statusCode = 200
//                 res.setHeader("Content-Type", "application/json")
//                 if(item.length === 3) {
//                     const webIndex = Number(item[2])
//                     res.end(JSON.stringify(website[webIndex]))
//                 } else {
//                     res.end(JSON.stringify(website))
//                 }
//         } else if (req.method === "POST" && item[1] === "content") {
//             req.on("data", (data) =>{
//                 const newContent = data.toString()
//                 webContent.push(JSON.parse(newContent))
//                 console.log("request:", newContent)
//             })
//         } else if (req.method  === "GET" && item[1] === "content") {
//             res.statusCode = 200
//             res.setHeader("Content-Type", "application/json")
//             if (item.length === 3) {
//                 const contentIndex = Number(item[2])
//                 res.end(JSON.stringify(webContent[contentIndex]))
//             } else {
//                 res.end(JSON.stringify(webContent))
//             }
//         } else if (req.method === "POST" && item[1] === "dev") {
//             req.on("data", (data) => {
//                 const developer = data.toString()
//                 dev.push(JSON.parse(developer))
//                 console.log(developer)
//             })
//         } else if (req.method === "GET" && item[1] === "dev") {
//             res.statusCode = 200
//             res.setHeader("Content-type", "application/json")
//             res.end(JSON.stringify(dev))
//         }
//     })
//     const port = 4000
//     server.listen(port, () => {
//         console.log(`server is listening on port ${port}`)
//     })
const http_1 = __importDefault(require("http"));
const webSite = [];
const webContent = [];
const server = http_1.default.createServer();
server.on("request", (req, res) => {
    var _a;
    const item = (_a = req.url) === null || _a === void 0 ? void 0 : _a.split("/");
    if (req.method === "POST" && item[1] === "site") {
        req.on("data", (data) => {
            const newSite = data.toString();
            webSite.push(JSON.parse(newSite));
            console.log("REQUEST:", newSite);
        });
    }
    else if (req.method === "GET" && item[1] === "site") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (item.length === 3) {
            const webIndex = Number(item[2]);
            res.end(JSON.stringify(webSite[webIndex]));
        }
        else {
            res.end(JSON.stringify(webSite));
        }
    }
    else if (req.method === "POST" && item[1] === "content") {
        req.on("data", (data) => {
            const newContent = data.toString();
            webContent.push(JSON.parse(newContent));
            console.log("REQUEST:", newContent);
        });
    }
    else if (req.method === "GET" && item[1] === "content") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if (item.length === 3) {
            const contentIndex = Number(item[2]);
            res.end(JSON.stringify(webContent[contentIndex]));
        }
        else {
            res.end(JSON.stringify(webContent));
        }
    }
});
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
