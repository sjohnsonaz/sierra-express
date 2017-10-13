import { Application as BaseApplication, Controller as BaseController, IMiddleware, IServerIntegration } from 'sierra';
import * as Express from 'express';

export class Application extends BaseApplication<Express.Request, Express.RequestHandler> {

}

export class Controller extends BaseController<Express.Request, Express.RequestHandler> {

}