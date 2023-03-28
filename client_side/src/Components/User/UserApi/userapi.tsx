import axios from "axios";
// import { UserData } from "./AllInterfaces";
import { UserData } from "../../Alllnterface";

export const localUrl = "http://localhost:1400";

export const createUser = async ({
	name,
	email,
	password,
}: any) => {
	return await axios
		.post(`${localUrl}/api/postuser`, {
			name,
			email,
			password,
		})
		.then((res) => {
			return res.data;
		});
};
export const loginUser = async ({
	name,
	email,
	password,
}: any) => {
	return await axios
		.post(`${localUrl}/api/login`, {
			email,
			password,
		})
		.then((res) => {
			return res.data;
		});
};

export const GetOneUser = async (id: any) => {
	return await axios
		.get(`${localUrl}/api/user/${id}`)
		.then((res) => res.data);
};
export const createBackToSchool = async (id:any,amount:any) => {
	return await axios
		.patch(`${localUrl}/api/update/${id}`,{amount})
		.then((res) => res.data);
};

export const Deposit = async (data: any, id: any) => {
	return await axios
		.patch(`${localUrl}/api/pay/${id}`, data)
		.then((res) => res.data);
};
