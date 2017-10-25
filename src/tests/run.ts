import TestApplication from './TestApplication';

let port = 3003;
let testApplication = new TestApplication({ port: port });
testApplication.init();
testApplication.listen();
