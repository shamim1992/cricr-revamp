// components/posts/PostList.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, deletePost } from '@/redux/actions/postActions';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { MdEdit, MdDelete, MdAdd } from 'react-icons/md';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error, currentPage, totalPages } = useSelector(
    (state) => state.post
  );
  
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllPosts({ page }));
  }, [dispatch, page]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await dispatch(deletePost(id)).unwrap();
        toast.success('Post deleted successfully');
      } catch (err) {
        toast.error(err || 'Error deleting post');
      }
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8"><span className="loading loading-spinner loading-lg"></span></div>;
  }

  if (error) {
    return <div className="alert alert-error">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Posts</h1>
        <Link href="/dashboard/admin/posts/create" className="btn btn-primary">
          <MdAdd className="w-5 h-5 mr-1" /> New Post
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} className="card bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <Image
                src={`/uploads/${post.thumbnail}`}
                alt={post.title}
                layout="fill"
                objectFit="cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="text-base-content/70">
                {post.content.substring(0, 100)}...
              </p>
              <div className="flex items-center mt-2 text-sm text-base-content/60">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full">
                    <Image
                      src={`/uploads/${post.author.profilePhoto}`}
                      alt={post.author.name}
                      width={32}
                      height={32}
                    />
                  </div>
                </div>
                <span className="ml-2">{post.author.name}</span>
                <span className="ml-auto">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="card-actions justify-end mt-4">
                <Link 
                  href={`/dashboard/admin/posts/edit/${post._id}`}
                  className="btn btn-square btn-sm btn-ghost"
                >
                  <MdEdit className="w-5 h-5" />
                </Link>
                <button 
                  onClick={() => handleDelete(post._id)}
                  className="btn btn-square btn-sm btn-ghost text-error"
                >
                  <MdDelete className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="join">
            <button
              className="join-item btn"
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              «
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`join-item btn ${page === index + 1 ? 'btn-active' : ''}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="join-item btn"
              onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            >
              »
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostList;