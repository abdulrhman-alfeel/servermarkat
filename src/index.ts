import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;
app.get('/api/jobs', (req: Request, res: Response) => {
    res.json({ msg: 'Hello get jobs' });
});
app.post('/api/jobs', (req: Request, res: Response) => {
    res.json({ msg: 'Hello post job' });
});
app.put('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Hello put job' });
});
app.delete('/api/jobs/:id', (req: Request, res: Response) => {
    res.json({ msg: 'Hello delete job' });
});
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});