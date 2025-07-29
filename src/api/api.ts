import axios from "axios";

const GET_LOGIN_API = "${baseURL}/login";

export const loginApi = async (username: string, password: string) => {
    try {
        const response = await axios.post(GET_LOGIN_API, {
            email: username,
            password,
        });
        return response.data;
    } catch (error) {
        throw new Error("Login failed");
    }
};

export default loginApi;