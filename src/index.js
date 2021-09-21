import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'popper.js/dist/umd/popper'
import 'jquery/dist/jquery'
import './index.css';
import '../node_modules/slick-carousel/slick/slick.css'
import "../node_modules/slick-carousel/slick/slick-theme.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom'


// Cấu hình realtime ( Websocket với signalR)
import * as signalR from '@aspnet/signalr'
import { DOMAIN } from 'utils/constants/SettingSystems';



// kết nối đến server và luôn luôn lắng nghe sự kiện từ server
// withUrl : backend cung cấp , giống API , nó sẽ luôn luôn kết nối với cái API nay

// Đoạn code để kết nối đến server lắng nghe sự kiện từ server
export const connection = new signalR.HubConnectionBuilder().withUrl(`${DOMAIN}/DatVeHub`).configureLogging(signalR.LogLevel.Information).build();
// connection : trao đổi dữ liệu với server,lấy dữ liệu ỏ đưa dữ liệu lên server


// Đây làm hàm bất đồng bộ ( Đảm bảo mọi giao thức kêt nối được thiết lập rồi thì mới render giao diện)
connection.start().then(
  () => {
    ReactDOM.render(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
      document.getElementById('root')
    );
  }
).catch( err => {
  console.log(err)
})




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
