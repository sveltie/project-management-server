import { Request, Response, Router } from 'express';

export class IndexRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public getIndex(req: Request, res: Response) {
        res.json('Hello world');
    }

    public routes(): void {
        this.router.get('/', this.getIndex);
    }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();