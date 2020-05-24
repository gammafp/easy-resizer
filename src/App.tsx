import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import EasyResizer from './components/EasyResizer';
import store from './State/store';

import './Vendor/styles/bootstrap-utilities.min.css';

function App() {
  return (
		<Provider store={store}>
			<EasyResizer />
		</Provider>
  );
}

export default App;
