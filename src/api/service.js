import instance from "./poster";
import Cookies from 'js-cookie'

// Post chiqarish uchun, ishlatmoqchi bo'lsalaring await getData("v1 yoki v2/...", ...)
export async function postData(url, data) {
  try {
    const token = Cookies.get("token"); 
    const response = await instance.get(url, data, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error creating item: ${error.message}`);
  }
}

// Get qilish uchun ishlatmoqchi bo'lsalaring await getData("v1 yoki v2/....",)
export async function getData(url) {
  try {
    const token = Cookies.get("token");
    const response = await instance.get(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error creating item: ${error.message}`);
  }
}
