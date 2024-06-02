import { postApi } from "../utils/apiUtils";

export const sendContactForm = async (data) => {
    return await postApi("/contact/portfolio", data);
}