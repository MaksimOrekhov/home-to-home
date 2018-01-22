import React from 'react';


class StatusBar extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
		}
	}

	render () {
		return (
			
			<ul className="main-nav__status">
				<li className="main-nav__status-item">Коробки: {this.props.amount}</li>
				<li className="main-nav__status-item">Вещи: {this.props.itemsInBoxes}</li>
			</ul>
		)
	}
	
}
export default StatusBar;
