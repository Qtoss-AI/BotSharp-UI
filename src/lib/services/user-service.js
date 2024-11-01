import { endpoints } from './api-endpoints.js';
import axios from 'axios';

/**
 * Get user list
 * @param {import('$userTypes').UserFilter} filter
 * @returns {Promise<import('$commonTypes').PagedItems<import('$userTypes').UserModel>>}
 */
export async function getUsers(filter) {
    const response = await axios.post(endpoints.usersUrl, { ...filter });
    return response.data;
}


/**
 * Get user list
 * @param {import('$userTypes').UserModel} model
 * @returns {Promise<boolean>}
 */
export async function updateUser(model) {
    const response = await axios.put(endpoints.userUpdateUrl, { ...model });
    return response.data;
}