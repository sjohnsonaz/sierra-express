import * as Express from 'express';
import * as http from 'http';

import Application from './Application';
import Controller from './Controller';

export default class SimpleApplication extends Application {
    app: Express.Express;
    server: http.Server;
    port: number;

    constructor(config: {
        port: number
    }) {
        super();
        this.app = Express();
        this.port = config.port;
        this.app.set('port', this.port);
    }

    connectDatabase() {
        return Promise.resolve(true);
    }

    addMiddleware() {

    }

    buildRoute(controller: Controller) {
        let expressRouter = Express.Router();
        controller.build(expressRouter, (app, verb, name, middleware, method) => {
            switch (verb) {
                case 'all':
                    app.all(name, ...middleware, method);
                    break;
                case 'get':
                    app.get(name, ...middleware, method);
                    break;
                case 'post':
                    app.post(name, ...middleware, method);
                    break;
                case 'put':
                    app.put(name, ...middleware, method);
                    break;
                case 'delete':
                    app.delete(name, ...middleware, method);
                    break;
                case 'patch':
                    app.patch(name, ...middleware, method);
                    break;
                case 'options':
                    app.options(name, ...middleware, method);
                    break;
                case 'head':
                    app.head(name, ...middleware, method);
                    break;
            }
        });
        this.app.use([controller.service ? '/api' : '', controller.base].join('/'), expressRouter);
    }

    listen() {
        return new Promise<boolean>((resolve, reject) => {
            this.server = http.createServer(this.app);
            this.server.listen(this.port);
            this.server.on('listening', () => {
                resolve(true);
            });
        });
    }

    close() {
        return new Promise<boolean>((resolve, reject) => {
            this.server.close();
            resolve(true);
        });
    }
}