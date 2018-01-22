import React from 'react';
import Item from './Item';



class BoxInside extends React.Component {

	addItems = () => {
		this.props.addItems();
		this.props.addItemCount();
	}

	handleNewItemValue = (value, id) => {
		this.props.handleNewItemValue(value, id)
	}	

	render () {
		return (
			<div className="box-inside">
				<div className="box-inside__content">
					<header className="box-inside__header">
						<svg className="box-inside__close-window" width="40px" height="40px" viewBox="0 0 21 21" version="1.1" onClick={this.props.callPopup}>
							<g id="Page-1" stroke="none">
								<g id="Boxes-Page--mobile" transform="translate(-304.000000, -250.000000)">
									<g id="Group" transform="translate(35.000000, 146.000000)">
										<g id="Box01" transform="translate(0.000000, 89.000000)">
											<path d="M288.301017,35.581203 C287.742092,36.139599 286.827031,36.139599 286.268106,35.581203 L280.467344,29.7799125 C279.90842,29.2215165 278.993888,29.2215165 278.434963,29.7799125 L272.692103,35.5222436 C272.133442,36.0811684 271.219175,36.0811684 270.659986,35.5222436 L269.419194,34.2819804 C268.860269,33.7230556 268.860269,32.8085235 269.419194,32.2493343 L275.161525,26.5064745 C275.720185,25.9475497 275.720185,25.0330175 275.161525,24.4743571 L269.419194,18.7314973 C268.860269,18.1728369 268.860269,17.2585691 269.419194,16.6993799 L270.69938,15.4191936 C271.25804,14.8602688 272.172308,14.8602688 272.731497,15.4191936 L278.474093,21.1615247 C279.033018,21.7204495 279.947285,21.7204495 280.506739,21.1615247 L286.249599,15.4191936 C286.808523,14.8602688 287.723056,14.8602688 288.28198,15.4191936 L289.523301,16.6605143 C290.081433,17.2191747 290.081433,18.1334424 289.522508,18.6926316 L283.779912,24.4352271 C283.221516,24.9941519 283.221516,25.908684 283.779912,26.4673444 L289.581203,32.2688993 C290.139599,32.8270309 290.139599,33.7420918 289.581203,34.301281 L288.301017,35.581203 L288.301017,35.581203 Z" id="Shape"></path>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<h3 className="box-inside__title">Коробка №{this.props.number}</h3>
						<div className="box-inside__subtitle">Мои вещи</div>
					</header>
					<ul className="box-inside__list">
					{this.props.items.map((item, index) => (
            <Item item={item} key={index} removeItems={this.props.removeItems} handleNewItemValue={this.handleNewItemValue}/>
						 ))}
					</ul>
					<div className="box-inside__add-block">
						<form action="" className="form" onSubmit={this.props.clearInput}>
							<input className="box-inside__input" value={this.props.itemValue} onChange={this.props.handleInput}  placeholder="Добавить предмет..." />
							<button type="submit" className="add__item" onClick={this.addItems}>
									<svg className="box-inside__add-icon" width="35px" height="35px" viewBox="0 0 22 22" version="1.1">
									<g id="Page-1" stroke="none">
										<g id="Boxes-Page--mobile" transform="translate(-238.000000, -57.000000)" fill="#00A5CF">
											<g id="AddFamily" transform="translate(226.000000, 45.000000)">
												<g id="plus-icon-copy" transform="translate(12.000000, 12.000000)">
													<path d="M13.3509235,13.292876 L19.6781003,13.292876 C21.0131926,13.292876 22,12.2480211 22,10.9709763 C22,9.6939314 20.9551451,8.64907652 19.6781003,8.64907652 L13.3509235,8.64907652 L13.3509235,2.32189974 C13.3509235,1.04485488 12.3060686,0 11.0290237,0 C9.75197889,0 8.70712401,1.04485488 8.70712401,2.32189974 L8.70712401,8.64907652 L2.32189974,8.64907652 C1.04485488,8.64907652 3.55271368e-15,9.6939314 3.55271368e-15,10.9709763 C3.55271368e-15,12.2480211 1.04485488,13.292876 2.32189974,13.292876 L8.70712401,13.292876 L8.70712401,19.6200528 C8.70712401,20.9551451 9.75197889,21.9419525 11.0290237,22 C12.3060686,22 13.3509235,20.9551451 13.3509235,19.6781003 L13.3509235,13.292876 Z" id="Combined-Shape"></path>
												</g>
											</g>
										</g>
									</g>
								</svg>
							</button>
						</form>
						
					</div>
				</div>
			</div>
		)
	}
}

export default BoxInside;
