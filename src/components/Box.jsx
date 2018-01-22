import React from 'react';
import BoxInside from './BoxInside';
import CloseBox from './CloseBox';


let id = 0;

class Box extends React.Component {
	constructor () {
		super();
		this.state = {
			items: [],
			isOpen: false,
			itemValue: '',
			closeBox: false
		}
	}

	callPopup = () =>  {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	closeBoxPopup = () => {
		this.setState({
			closeBox: !this.state.closeBox
		});
	}

	handleInput = (e) => {
		this.setState({
			itemValue: e.target.value
		})
	}


	addItem = () => {
    let newItem = {
      id: id++,
			name: this.state.itemValue
		};
    this.setState({
			items: [...this.state.items, newItem]
		});
	}

	deleteItem = (id) => {
    this.setState({
			items: this.state.items.filter( item => item.id !== id )
		})
  }
	
	clearInput = (e) => {
		e.preventDefault();
		this.setState({
			itemValue: ''
		})
	}

	deleteBox = () => {
		this.props.closeBox();
		this.closeBoxPopup();
		this.props.amountMinus();
		this.props.itemsInList(this.state.items.length);
	}

	removeItems = (id) => {
		this.deleteItem(id);
		this.props.minusItem();
	}
	
	handleNewItemValue = (value, id) => {
		
		let items = [...this.state.items]
		items.map( item => item.id === id ? item.name = value : item.name )
		this.setState({
			items
		})
	}
	
	render (props) {
		return (
			<div className="boxes__item">
				<span className="box__number">{this.props.number}</span>
				{this.state.isOpen && <BoxInside 
															callPopup={this.callPopup} 
															number={this.props.number} 
															addItems={this.addItem} 
															handleInput={this.handleInput} 
															itemValue={this.state.itemValue} 
															clearInput={this.clearInput} 
															addItemCount={this.props.itemCount}
															minusItemCount={this.props.minusItem}
															removeItems={this.removeItems}
															handleNewItemValue={this.handleNewItemValue}
															items={this.state.items}/>}
				{this.state.closeBox && <CloseBox closeBox={this.deleteBox} closePopup={this.closeBoxPopup}/>}
				<button className="call__popup" onClick={this.callPopup}></button>
				<svg className="box-inside__close-item close__box" width="21px" height="21px" viewBox="0 0 21 21" version="1.1" onClick={this.closeBoxPopup}>
					<g id="Page-1" stroke="none">
						<g id="Boxes-Page--mobile" transform="translate(-304.000000, -250.000000)" fill="#F64740">
							<g id="Group" transform="translate(35.000000, 146.000000)">
								<g id="Box01" transform="translate(0.000000, 89.000000)">
									<path d="M288.301017,35.581203 C287.742092,36.139599 286.827031,36.139599 286.268106,35.581203 L280.467344,29.7799125 C279.90842,29.2215165 278.993888,29.2215165 278.434963,29.7799125 L272.692103,35.5222436 C272.133442,36.0811684 271.219175,36.0811684 270.659986,35.5222436 L269.419194,34.2819804 C268.860269,33.7230556 268.860269,32.8085235 269.419194,32.2493343 L275.161525,26.5064745 C275.720185,25.9475497 275.720185,25.0330175 275.161525,24.4743571 L269.419194,18.7314973 C268.860269,18.1728369 268.860269,17.2585691 269.419194,16.6993799 L270.69938,15.4191936 C271.25804,14.8602688 272.172308,14.8602688 272.731497,15.4191936 L278.474093,21.1615247 C279.033018,21.7204495 279.947285,21.7204495 280.506739,21.1615247 L286.249599,15.4191936 C286.808523,14.8602688 287.723056,14.8602688 288.28198,15.4191936 L289.523301,16.6605143 C290.081433,17.2191747 290.081433,18.1334424 289.522508,18.6926316 L283.779912,24.4352271 C283.221516,24.9941519 283.221516,25.908684 283.779912,26.4673444 L289.581203,32.2688993 C290.139599,32.8270309 290.139599,33.7420918 289.581203,34.301281 L288.301017,35.581203 L288.301017,35.581203 Z" id="Shape"></path>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</div>
			
		)
	}
}

export default Box;