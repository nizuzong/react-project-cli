import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './styles/main.less';
import AppRouter from './routes/AppRouter';
import StoreReducer from './redux/root_reducer'
moment.locale('zh-cn');

const App = () => (
  <StoreReducer locale={zhCN}>
    <AppRouter />
  </StoreReducer>
);

ReactDom.render(<App />, document.getElementById('app'));

// 热更新
if (module.hot) {
  module.hot.accept(err => {
    if (err) {
      console.error('module.hot，', err);
    }
  });
}
