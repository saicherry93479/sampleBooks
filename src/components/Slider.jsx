import React, { useState } from 'react';

const Slider = () => {
	const slides = [
		{
			id: 0,
			option: 'Chemical Fertilizers',
			content:
				'Conventional farming relies on the use of synthetic pesticides, which are chemical substances specifically designed to kill or control pests that can damage crops. These pesticides are typically derived from artificial compounds and can have negative impacts on the environment, including soil degradation, water pollution, and harm to beneficial insects and wildlife'
		},
		{
			id: 1,
			option: 'Chemical Fertilizers',
			content:
				'Conventional farming relies on the use of synthetic pesticides, which are chemical substances specifically designed to kill or control pests that can damage crops. These pesticides are typically derived from artificial compounds and can have negative impacts on the environment, including soil degradation, water pollution, and harm to beneficial insects and wildlife'
		},
		{
			id: 2,
			option: 'Chemical Fertilizers',
			content:
				'Conventional farming relies on the use of synthetic pesticides, which are chemical substances specifically designed to kill or control pests that can damage crops. These pesticides are typically derived from artificial compounds and can have negative impacts on the environment, including soil degradation, water pollution, and harm to beneficial insects and wildlife'
		},
		{
			id: 3,
			option: 'Chemical Fertilizers',
			content:
				'Conventional farming relies on the use of synthetic pesticides, which are chemical substances specifically designed to kill or control pests that can damage crops. These pesticides are typically derived from artificial compounds and can have negative impacts on the environment, including soil degradation, water pollution, and harm to beneficial insects and wildlife'
		}
		// Add more slides as needed
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	return (
		<div className='bg-[#F8C027] my-[20px] xl:py-[80px] xl:px-px-[48px] lg:px-[32px] lg:py-[64px]'>
			<p className='text-[#d41515] font-bold text-[32px] lg:text-[40px]'>Problems With Modern Farming</p>
			<div>
				{slides.map((slide, index) => {
					return (
						<div>
							<p>{slide.option}</p>
						</div>
					);
				})}
			</div>
            <p className='text-center'>{slides[currentIndex].content}</p>
		</div>
	);
};
export default Slider;
