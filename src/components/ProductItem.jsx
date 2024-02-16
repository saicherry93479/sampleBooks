import React from 'react';
import itemOne from '../assets/saffron.webp';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const images = [itemOne.src, itemOne.src, itemOne.src];
const ProductItem = () => {
	const [current, setCurrent] = useState(0);

	const scrollToItem = (index) => {
		const productList = document.getElementById('productList');
		const itemWidth = productList.children[0].offsetWidth; // Assuming all items have the same width
		const scrollAmount = index * itemWidth;

		productList.scrollTo({
			left: scrollAmount,
			behavior: 'smooth'
		});
		setCurrent(index);
	};

	return (
		<div className="flex w-full flex-col lg:flex-row lg:px-[48px] lg:py-[40px] bg-[#101114] text-white !text-[#392a48]">
			<div className="flex flex-col lg:h-[50%] lg:w-[50%] lg:space-y-[20px] xl:flex-row-reverse xl:justify-between xl:gap-2 xl:gap-[30px] xl:space-y-0">
				<div
					className="overflow-x-scroll"
					id="productList"
					style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
				>
					<div className="flex">
						{images.map((d) => (
							<div className="mr-1 w-full  flex-none" style={{ scrollSnapAlign: 'start' }}>
								<img
									src={images[0]}
									alt="Product 1"
									className="h-full w-full object-cover lg:rounded-[10px]"
								/>
							</div>
						))}

						{/* Add more product images as needed */}
					</div>
				</div>

				<div className="flex hidden w-[300px] gap-2 lg:flex xl:flex-col">
					<img
						onClick={() => scrollToItem(0)}
						src={itemOne.src}
						className="w-[70px] cursor-pointer rounded-[8px]"
					/>
					<img
						onClick={() => scrollToItem(1)}
						src={itemOne.src}
						className="w-[70px] cursor-pointer rounded-[8px]"
					/>
					<img
						onClick={() => scrollToItem(2)}
						src={itemOne.src}
						className="w-[70px] cursor-pointer rounded-[8px]"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-[25px] px-[20px] py-[12px]  md:px-[32px] md:py-[24px] lg:w-[50%] lg:px-[48px] lg:py-0 lg:py-[24px]">
				<p className="font-lora text-[16px] text-gray-500 md:text-[18px]">Vaaradhi Farms</p>
				<p className="text-[32px] font-bold md:text-[40px]">Kashmiri Saffron 1gm</p>
				<div className="">
					<div className="bg-green" />
					<p className="font-lora text-[16px] text-green-700 md:text-[18px]">In stock</p>
				</div>
				<div className="flex items-center gap-4">
					<p className="text-[20px] text-red-500 md:text-[25px]">Rs. 600.00</p>
					<p className="text-gray-500 line-through">Rs. 700.00</p>
					<div className="rounded-[50px] bg-[#F83A3A] px-[5px]">
						<p className="md:text[14px] text-[12px] text-white">save rs. 100.00</p>
					</div>
				</div>
				<button className="w-full cursor-pointer rounded rounded-[50px]    px-5 py-2 py-[20px] text-center font-lora text-[16px] font-bold text-white md:text-[18px] bg-[#392A48] hover:bg-[#3A1E8C]">
					Add to cart
				</button>
				<div className="mt-[10px] space-y-[20px]">
					<h2 className="text-[16px] font-bold md:text-[18px]">
						Introducing our 1g pack of Kashmiri Saffron
					</h2>
					<p className="font-lora text-[16px] text-gray-500 md:text-[18px]">
						Handpicked from the fields of Kashmir, our saffron is known for its vibrant color and
						distinct taste. <br /> With just a pinch of this golden spice, you can elevate your
						dishes to new heights. Whether you're cooking rice, biryanis, desserts, or beverages,
						our Kashmiri Saffron adds a touch of luxury to your recipes. <br /> Not just a culinary
						delight, our saffron also offers health benefits. Packed with antioxidants, it's
						believed to have anti-inflammatory properties. Simply add a pinch to your warm milk or
						tea for a soothing experience. <br />
						Each strand is carefully sealed for freshness in our 1g pack, making it a perfect gift
						for food lovers and budding chefs. Bring the essence of Kashmir to your kitchen and
						enjoy the rich, rare flavors of our premium saffron.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
