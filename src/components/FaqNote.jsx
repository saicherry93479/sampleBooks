import React from 'react';
import Arrow from './Arrow';
import { useState } from 'react';
const FaqNote = ({ question, answer, border = true }) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={` border-[#ffffff25] pb-[5px] pt-[5px]   ${border ? 'border-b-2' : 'border-b-0'} `}
		>
			<div className="flex items-center justify-between py-[10px] ">
				<p className="font-lora text-[14px] font-bold text-white  md:text-[18px]  ">{question}</p>
				<div
					className={` flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#ffffff15] ${open ? 'bg-white' : ''} `}
					onClick={() => setOpen(!open)}
				>
					<Arrow color={open ? '#25693f' : 'white'} rotate={open ? true : false} />
				</div>
			</div>
			
			<div
				
				className={`transition-all  duration-300 ease-in-out overflow-hidden  ${open?'h-[30px]':'h-0'}`}
			>
				<p className={` mb-[15px] font-lora text-[14px]  font-[400]  text-white md:text-[18px] `}>
					{answer}
				</p>
			</div>
		</div>
	);
};

export default FaqNote;
