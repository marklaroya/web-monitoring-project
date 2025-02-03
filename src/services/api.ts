import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchMonitoringData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/monitoring-data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching monitoring data:', error);
        throw error;
    }
};

export const postMonitoringEvent = async (eventData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/monitoring-events`, eventData);
        return response.data;
    } catch (error) {
        console.error('Error posting monitoring event:', error);
        throw error;
    }
};