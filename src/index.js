import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UIRouter, UIView,UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';
import routes from './routes';

ReactDOM.render(
	<UIRouter states={routes} plugins={[pushStateLocationPlugin]}>
		<div>
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<div className="navbar-brand">Genius Quest</div>
						<ul className="nav navbar-nav navbar-right">
			        <li>
								<UISrefActive class="hidden">
									<UISref to="challenges">
										 <a><i className="glyphicon glyphicon-menu-left backArrow"></i></a>
									</UISref>
								</UISrefActive>
							</li>
		      	</ul>

					</div>
				</div>
			</nav>

			<div className="app">
					<UIView/>
			</div>
		</div>
	</UIRouter>,

	document.getElementById('root')
	);
