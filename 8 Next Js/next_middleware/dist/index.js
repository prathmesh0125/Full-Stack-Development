"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let reqcount = 0;
app.use(function (req, res, next) {
    reqcount++;
    next();
});
app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/reqcount", (req, res) => {
    res.json({
        count: reqcount
    });
});
app.listen(3000, function () {
    console.log("server is runnning on 300 port");
});
