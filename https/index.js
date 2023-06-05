import instance from './config';
import {url} from './constants_url';

const httpPostRequest = async (url, data, header, cb) => {
  console.log('URL:', url);
  try {
    const response = await instace.post(url, JSON.stringify(data), header);
    cb(response);
  } catch (error) {
    console.log(error);
    console.log(error?.message || 'Something went wrong');
  }
};
const httpGetResquest = async (url, header, cb) => {
  console.log('URL:', url);
  try {
    const response = await instance.get(url, header);
    cb(response);
  } catch (error) {
    console.log(error);
    console.log(error?.message || ' Something went wrong');
  }
};
export const LoginAuth = (data = {}, header = {}, cb) =>
  httpPostRequest(url.login, data, header, cb);
export const Logout = (data = {}, header = {}, cb) =>
  httpPostRequest(url.logout, data, header, cb);
export const getMyOrders = (data = {}, header = {}, cb) => {
  const url = ``;
  url, header, cb;
  httpGetResquest(url, header, cb);
};
export const getAllProducts = (data = {}, header = {}, cb) => {
  const url = ``;
  httpGetResquest(url, header, cb);
};
