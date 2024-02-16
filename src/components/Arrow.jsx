import React from 'react';

const Arrow = ({color='white',rotate=false}) => {
	return (
		<svg className={` ${rotate?'rotate-180 rotateArrow':''} `}   width="8" height="8" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 0.830078L4 3.83008L7 0.830078" stroke={color} stroke-width="1.5"></path>
		</svg>
	);
};

export default Arrow;
