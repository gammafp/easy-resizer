import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import EasyResizer from './components/EasyResizer';
import store from './State/store';

import './Vendor/styles/bootstrap-utilities.min.css';
import ToastNotification from './components/notifications/ToastNotification';
import ContextMenu from './components/contextMenu/ContextMenu';

function App() {
	return (
		<Provider store={store}>
			<EasyResizer />
			<ToastNotification />
			<ContextMenu />
		</Provider>
	);
}

export default App;
