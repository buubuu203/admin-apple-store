"use client";
import {
	ipad_10_9inch_2022_64gb_5G_didongviet,
    ipad_10_9inch_2022_64gb_wifi_didongviet,
    iphone_15_didongviet,
    iphone_15_pro_didongviet,
    promo_airpods_pro,
    promo_macbook_air_15,
} from '../../public/index'
const DashBoard = () => {
	
	return (
		<div className="flex flex-col h-full">
			<div class="container mx-auto h-full">
				<div class="flex gap-2 flex-wrap h-full w-full">
					<div class="flex gap-2 w-full md:w-[48.5%] flex-wrap h-full">
						<div class=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
							<img src={ipad_10_9inch_2022_64gb_5G_didongviet}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 md:p-2 bg-white rounded-lg">
							<img
							src = {ipad_10_9inch_2022_64gb_wifi_didongviet}
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
							/>
						</div>
						<div class="w-full p-1 md:p-2 bg-white rounded-lg relative ">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src = { iphone_15_didongviet}
							/>
						</div>
					</div>
					<div class="flex gap-2 w-full md:w-1/2 flex-wrap">
						<div class="w-full p-1 md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src = { iphone_15_pro_didongviet}
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src = { promo_airpods_pro}
							/>
						</div>
						<div class=" w-full md:w-[48.5%] p-1 flex flex-col md:p-2 bg-white rounded-lg">
							<img
								alt="gallery"
								className="block h-full w-full rounded-lg object-cover object-center"
								src = {promo_macbook_air_15}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashBoard;
