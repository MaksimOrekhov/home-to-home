import React from 'react';


class CloseBox extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
    };
	}

	render () {
		return (
			<div className="box-inside">
				<div className="box-inside__content">
					<header className="box-inside__header">
						<h3 className="box-inside__title">Удалить коробку?</h3>
					</header>
					<div className="popup-inside__close-block">
						<div onClick={this.props.closeBox} className="close__button">Да</div>
            <div onClick={this.props.closePopup} className="close__button">Нет</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CloseBox;
