import React from 'react';

class AddNewBox extends React.Component {
	render (props) {
		return (
			<div className="boxes__item box__new" onClick={this.props.onClick}>
				<svg className="boxes__add-icon" width="85px" height="85px" viewBox="0 0 22 22" version="1.1" >
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
			</div>
		);
	}
	
}

export default AddNewBox;