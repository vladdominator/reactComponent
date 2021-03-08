import { appModule } from "./app/app.module";
import { bootstrap } from "./framework/index";
import {wfm} from './framework/index'
wfm.delay().then(() => {
   bootstrap(appModule);
})