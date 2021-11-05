import express from 'express';

import { IndexRoutes } from './routes/index';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public routes(): void {
        this.app.use('/', new IndexRoutes().router);
    }

    public config(): void {
        this.app.set('port', process.env.PORT || 5000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    public run(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on http://localhost:${this.app.get('port')}`);
        });
    }
}

const server: Server = new Server();
server.run();