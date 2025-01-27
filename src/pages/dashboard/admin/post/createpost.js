import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '@/redux/actions/postActions';
import { resetSuccess, clearError } from '@/redux/slices/postSlice';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import AdminLayout from '@/components/layouts/AdminLayout';
import 'react-quill/dist/quill.snow.css';

// Dynamically import ReactQuill
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const CreatePost = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const quillRef = useRef(null);
  
  const { loading, error, success } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    thumbnail: null
  });
  const [previewUrl, setPreviewUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  useEffect(() => {
    if (success) {
      router.push('/blog');
      dispatch(resetSuccess());
    }
    return () => {
      dispatch(clearError());
    };
  }, [success, dispatch, router]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content: content
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should not exceed 5MB');
        return;
      }
      setFormData(prev => ({
        ...prev,
        thumbnail: file
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.title.trim() || !formData.content.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    const submitData = new FormData();
    submitData.append('title', formData.title.trim());
    submitData.append('content', formData.content.trim());
    if (formData.thumbnail) {
      submitData.append('thumbnail', formData.thumbnail);
    }

    try {
      await dispatch(createPost({ formData: submitData })).unwrap();
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
      console.error('Failed to create post:', err);
    }
  };

  if (!mounted) {
    return (
      <AdminLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl">Authentication Required</h2>
              <p>Please login to create a post.</p>
              <div className="card-actions justify-end">
                <button 
                  className="btn btn-primary"
                  onClick={() => router.push('/auth/login')}
                >
                  Go to Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}],
        ['link', 'image'],
        ['clean']
      ]
    }
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold mb-6">Create New Post</h2>
            
            {error && (
              <div className="alert alert-error mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                  <span className="label-text-alt text-error">*Required</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter post title"
                  className="input input-bordered w-full"
                  required
                  maxLength={100}
                />
              </div>

              <div className="form-control editor-container">
                <label className="label">
                  <span className="label-text">Content</span>
                  <span className="label-text-alt text-error">*Required</span>
                </label>
                <div className="min-h-[300px] border rounded-lg">
                  <ReactQuill
                    forwardedRef={quillRef}
                    theme="snow"
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={modules}
                    className="h-64"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                  <span className="label-text-alt">Optional (Max 5MB)</span>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                />
                {previewUrl && (
                  <div className="mt-4">
                    <img 
                      src={previewUrl} 
                      alt="Preview" 
                      className="max-w-xs rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between mt-6">
                <button 
                  type="button"
                  onClick={() => router.push('/blog')}
                  className="btn btn-ghost"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className={`btn btn-primary ${loading || isSubmitting ? 'loading' : ''}`}
                  disabled={loading || isSubmitting}
                >
                  {loading || isSubmitting ? 'Creating...' : 'Create Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreatePost;