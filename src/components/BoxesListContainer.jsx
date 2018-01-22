import React from 'react';
import BoxesList from './BoxesList';
import DestinationTitle from './DestinationTitle';

class BoxesListContainer extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
		}
	}

	itemsInList = (value) => {
		this.props.itemsInList(value)
	}
	
	render () {
		return (
			<section>
				<DestinationTitle />
				<BoxesList amount={this.props.boxAmount} minus={this.props.boxesMinus} itemSum={this.props.itemsSum} minItem={this.props.minItems} itemsInList={this.itemsInList}/>
			</section>
		)
	}
}

export default BoxesListContainer