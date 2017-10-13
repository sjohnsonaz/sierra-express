import { Application as BaseApplication } from 'sierra';
import * as Express from 'express';

export default class Application extends BaseApplication<Express.Router, Express.RequestHandler> {

}