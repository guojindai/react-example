/**
 * app 初始化
 */

import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import router from './router';
import './index.less';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/user').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
