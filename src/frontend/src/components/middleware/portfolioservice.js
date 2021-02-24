import axios from 'axios';
const API_URL = 'http://localhost:8000';

export default class PortfolioService{
    async getWorksList() {
        const url = `${API_URL}/api_v0/works/`;
        const response = await axios.get(url);
        return response.data;
    }
    async getWorkByURL(link){
        const url = `${API_URL}${link}`;
        const response = await axios.get(url);
        return response.data;
    }
    async getWorkDetails(pk) {
        const url = `${API_URL}/api_v0/works/${pk}`;
        const response = await axios.get(url);
        return response;
    }
    async getAllSkills(){
        const url = `${API_URL}/api_v0/skills/`;
        const response = await axios.get(url);
        return response;
    }
    async getSizedImages(s, isOnlyFirs){
        const url = `${API_URL}/api_v0/images?s=${s}&onlyfirst=${isOnlyFirs}`;
        const response = await axios.get(url);
        return response;
    }
    async getRecentWorksList() {
        const url = `${API_URL}/api_v0/works/recent`;
        const response = await axios.get(url);
        return response.data;
    }
}