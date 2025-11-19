// src/api/pegawaiApi.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Sesuaikan dengan URL API Laravel Anda
});

export const getPegawai = () => api.get('/pegawai');
export const createPegawai = (data) => api.post('/pegawai', data);
export const updatePegawai = (id, data) => api.put(`/pegawai/${id}`, data);
export const deletePegawai = (id) => api.delete(`/pegawai/${id}`);