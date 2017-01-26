import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';
import routes from './routes';

ReactDOM.render(
	<div>
		<nav className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<div className="navbar-brand">Genius Quest</div>
				</div>
			</div>
		</nav>

		<div className="app">
			<UIRouter states={routes} plugins={[pushStateLocationPlugin]}>
				<UIView/>
			</UIRouter>
		</div>
	</div>,

	document.getElementById('root')
	);
