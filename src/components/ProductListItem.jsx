import React from 'react';

const ProductListItem = () => {
	const onclicfunction = () => {
		console.log('print cliked ');
		const downmenu = document.getElementById('downmenu');
		console.log('downmenu ', downmenu);
		downmenu.classList.remove('hidden');
		console.log('print cliked ');
	};
	return (
		<>
			<div class="grid z-1 grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{[0,1,2,3].map((data, index) => (
					<div className="group relative cursor-pointer bg-[#1c1c22] rounded-md p-4 ">
						<div className="relative overflow-hidden rounded-t-md">
							<a href="/product">
								<img
									src={'https://vaaradhifarms.com/cdn/shop/files/Adityark_a_medium_tall_glass_jar_with_a_normal_black_lid_the_ja_ba41b589-5389-4c39-b8e0-c3480a91a5ce.png?v=1685025223&width=700'}
									alt="Product 1"
									className="w-full transform object-cover transition-transform duration-300 hover:scale-105"
								/>
							</a>

							<button
								id="addbutton"
								onClick={onclicfunction}
								className="addButton absolute bottom-2 hover:bg-[#3A1E8C] right-2 hidden  rounded-full bg-[#392A48] p-[10px] px-[20px]  text-white transition transition-all duration-300  group-hover:opacity-100 md:block md:opacity-0"
							>
								Quick Add
							</button>
							<button
								onClick={onclicfunction}
								className="absolute bottom-2 right-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white md:hidden "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="#392A48"
									class="h-5 w-5"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
									></path>
								</svg>
							</button>
						</div>
						<h3 className="mt-4 text-center text-lg font-semibold">Product Name 1</h3>
						<p className="text-center text-gray-600">Froom Rs.534</p>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductListItem;
