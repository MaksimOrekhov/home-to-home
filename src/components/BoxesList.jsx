import React from 'react';
import AddNewBox from './AddNewBox';
import Box from './Box';

let id = 0;
let number = 1;

class BoxesList extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			boxes: []
		}
	}

	closeBox = (id) => {
		this.setState({
			boxes: this.state.boxes.filter( box => box.id !== id )
		})
 }

	addNewBox = () => {
		let newBox = {
			id: id++,
			number: number++
		};
    this.setState({
			boxes: [...this.state.boxes, newBox]
		});		
	}

	amountPlus = () => {
		this.addNewBox();
		this.props.amount();
	}

	itemsInList = (value) => {
		this.props.itemsInList(value)
	}

	render (props) {
		return (
			<div className="boxes__container">
				{this.state.boxes.map((box, index) => 
				<Box key={index} closeBox={() => this.closeBox(box.id)} number={box.number} amountMinus={this.props.minus} itemCount={this.props.itemSum} minusItem={this.props.minItem} itemsInList={this.itemsInList}/>
				)}
				<AddNewBox onClick={this.amountPlus}/>
			</div>
		)
	}
}	

export default BoxesList;