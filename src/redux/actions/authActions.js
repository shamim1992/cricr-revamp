import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.withCredentials = true; // Important for cookies

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({ name, email, password, role }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post(
                `${process.env.Api_Url}/api/auth/register`,
                { name, email, password, role },
                config
            );

            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            };
         
            const response = await axios.post(
                'http://localhost:5001/api/auth/login',
                { email, password },
                config
            );
           
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post(`${process.env.Api_Url}/api/auth/logout`);
            return null;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
);

export const checkAuthStatus = createAsyncThunk(
    'auth/checkStatus',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`${process.env.Api_Url}/api/auth/status`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data.error);
        }
    }
);