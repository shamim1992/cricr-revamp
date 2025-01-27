// postActions.js
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Create an Axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5001',
});

// Add a request interceptor to include the token in the headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Fetch all posts with pagination.
 */
export const getAllPosts = createAsyncThunk(
  'post/getAllPosts',
  async ({ page = 1, limit = 10 }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/post?page=${page}&limit=${limit}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue('Please login to continue');
      }
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch posts');
    }
  }
);

/**
 * Fetch a single post by its slug.
 */
export const getPostBySlug = createAsyncThunk(
  'post/getPostBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.get(`/api/post/slug/${slug}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue('Please login to continue');
      }
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch post');
    }
  }
);

/**
 * Create a new post.
 */
export const createPost = createAsyncThunk(
  'post/createPost',
  async ({ formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      };
      const response = await api.post('/api/post', formData, config);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue('Please login to continue');
      }
      return rejectWithValue(error.response?.data?.error || 'Failed to create post');
    }
  }
);

/**
 * Update an existing post by ID.
 */
export const updatePost = createAsyncThunk(
  'post/updatePost',
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      const response = await api.put(`/api/post/${id}`, formData, config);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue('Please login to continue');
      }
      return rejectWithValue(error.response?.data?.error || 'Failed to update post');
    }
  }
);

/**
 * Delete a post by ID.
 */
export const deletePost = createAsyncThunk(
  'post/deletePost',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.delete(`/api/post/${id}`);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue('Please login to continue');
      }
      return rejectWithValue(error.response?.data?.error || 'Failed to delete post');
    }
  }
);
