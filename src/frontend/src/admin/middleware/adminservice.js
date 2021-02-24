import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class AdminService{
    getWorksList() {
        const url = `${API_URL}/api_v0/admin/works/`;
        return axios.get(url).then(response => response.data);
    }
    getWorkDetails(pk) {
        const url = `${API_URL}/api_v0/works/${pk}`;
        return axios.get(url).then(response => response);
    }
    getCsrfToken(){
        const url = `${API_URL}/api_v0/csrf`;
        return axios.get(url).then(response => response);
    }
    getFormFields(){
        const url = `${API_URL}/api_v0/admin/get_work_fields/`;
        return axios.get(url).then(response => response);
    }
    createWork(details, csrf){
        const request = new Request(
            `${API_URL}/api_v0/admin/create_work`,
            {}
        );
        return fetch(request, {
            data: details,
            method: 'POST',
            headers: {'X-CSRFToken': csrf}
        }).then(response => response);
    }
}