"use client";
import { useState } from "react";
import { Table } from "../atoms";
import { Modal } from "../moleculers";

const AccountManagers = ({ columns, datasets, handleClose, isOpen }) => {
	return (
		<div className="flex flex-col w-full h-full gap-2 pb-12">
			<Modal
				handleClose={handleClose}
				isOpen={isOpen}
				title="Sửa tài khoản"
				size="md"
			>
				<form className="space-y-2" action="#">
					<div className="flex gap-2">
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								Tên user
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								Tên đầy đủ
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								Khu vực
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								Tỉnh thành
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
					</div>
					<div className="flex gap-2">
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								SĐT
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="text"
								className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
							>
								Mật khẩu
							</label>
							<input
								type="text"
								name="text"
								placeholder=""
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required
							/>
						</div>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Cập nhật
					</button>
				</form>
			</Modal>
			<Table columns={columns} data={datasets} />
		</div>
	);
};

export default AccountManagers;
