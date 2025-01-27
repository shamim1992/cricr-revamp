// postSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { 
  getAllPosts, 
  getPostBySlug, 
  createPost, 
  updatePost, 
  deletePost 
} from '../actions/postActions';

const initialState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
  success: false,
  currentPage: 1,
  totalPages: 1,
  totalPosts: 0
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    resetSuccess: (state) => {
      state.success = false;
    },
    clearCurrentPost: (state) => {
      state.currentPost = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get all posts
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.data.posts;
        state.currentPage = action.payload.data.currentPage;
        state.totalPages = action.payload.data.totalPages;
        state.totalPosts = action.payload.data.totalPosts;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Get post by slug
      .addCase(getPostBySlug.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPostBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPost = action.payload.data;
      })
      .addCase(getPostBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create post
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.posts.unshift(action.payload.data);
        state.totalPosts += 1;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Update post
      .addCase(updatePost.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.currentPost = action.payload.data;
        state.posts = state.posts.map(post =>
          post._id === action.payload.data._id ? action.payload.data : post
        );
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })

      // Delete post
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.posts = state.posts.filter(post => post._id !== action.payload.data.id);
        state.totalPosts -= 1;
        if (state.currentPost?._id === action.payload.data.id) {
          state.currentPost = null;
        }
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, resetSuccess, clearCurrentPost } = postSlice.actions;

export const selectAllPosts = (state) => state.post.posts;
export const selectCurrentPost = (state) => state.post.currentPost;
export const selectPostsLoading = (state) => state.post.loading;
export const selectPostsError = (state) => state.post.error;
export const selectPostSuccess = (state) => state.post.success;
export const selectPaginationData = (state) => ({
  currentPage: state.post.currentPage,
  totalPages: state.post.totalPages,
  totalPosts: state.post.totalPosts
});

export default postSlice.reducer;