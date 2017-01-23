import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';
import routes from './routes';

ReactDOM.render(
	<UIRouter states={routes} plugins={[pushStateLocationPlugin]}>
		<UIView/>
	</UIRouter>,
	document.getElementById('root')
	);
