import { SimpleApplication } from '../scripts/SierraExpress';
import TestRoute from './TestRoute';

export default class TestApplication extends SimpleApplication {
    addMiddleware() {
        this.addController(new TestRoute());
    }
}