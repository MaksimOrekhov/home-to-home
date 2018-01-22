import React from 'react';

class DestinationTitle extends React.Component {
	
	constructor () {
		super();
		this.state = {
			startPointEditable: false,
			endPointEditable: false,
			startPoint: 'Введите текущий адрес',
			endPoint: 'Введите пункт назначения'
		}
	}
	
	editStartPoint = () =>  {
			this.setState({
			startPointEditable: !this.state.startPointEditable
			});
	};
	
	editEndPoint = () => {
		this.setState({
			endPointEditable: !this.state.endPointEditable
		})
	};

	changeStartPoint = (e) => {
		if (e.keyCode === 13) {
		this.setState({
			startPoint: e.target.value,
			startPointEditable: !this.state.startPointEditable
		})
	}
	}

	changeEndPoint = (e) => {
		this.setState({
			endPoint: e.target.value
		})
	}
	
	render () {
		
		return (
			<header className="boxes__header">
				<h1 className="boxes__destination-title"><span onClick={this.editStartPoint}>
					{this.state.startPointEditable ?  '' : <span>{this.state.startPoint}</span>}
					{this.state.startPointEditable ? <span><input className="" onKeyDown={this.changeStartPoint} autoFocus/></span> : ''}
				</span> - <span onClick={this.editEndPoint}>
					{this.state.endPointEditable ?  '' : <span>{this.state.endPoint}</span>}
					{this.state.endPointEditable ? <span><input className="" onChange={this.changeEndPoint} autoFocus/></span> : ''}
				</span></h1>
				<h2 className="boxes__subtitle">Мои коробки</h2>
			</header>
		)
	}
}

export default DestinationTitle;