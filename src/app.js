import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRooter';
import 'normalize.css/normalize.css';
import './styles/style.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));