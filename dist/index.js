"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/api/jobs', (req, res) => {
    res.json({ msg: 'Hello get jobs' });
});
app.post('/api/jobs', (req, res) => {
    res.json({ msg: 'Hello post job' });
});
app.put('/api/jobs/:id', (req, res) => {
    res.json({ msg: 'Hello put job' });
});
app.delete('/api/jobs/:id', (req, res) => {
    res.json({ msg: 'Hello delete job' });
});
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
//# sourceMappingURL=index.js.map