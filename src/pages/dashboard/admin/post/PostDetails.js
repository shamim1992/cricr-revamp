// components/posts/PostDetails.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostBySlug } from '@/redux/actions/postActions';
import Image from 'next/image';
import Link from 'next/link';
import { MdEdit, MdArrowBack, MdCalendarToday, MdPerson } from 'react-icons/md';
import { useRouter } from 'next/router';

const PostDetails = ({ slug }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentPost, loading, error } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (slug) {
      dispatch(getPostBySlug(slug));
    }
  }, [dispatch, slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!currentPost) {
    return (
      <div className="max-w-3xl mx-auto p-4">
        <div className="alert alert-info">Post not found</div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto p-4">
      {/* Header Navigation */}
      <div className="flex items-center mb-6">
        <Link 
          href="/blog" 
          className="btn btn-ghost btn-sm"
        >
          <MdArrowBack className="w-5 h-5 mr-1" /> Back to Blog
        </Link>
        {user && (user._id === currentPost.author._id || user.role === 'admin') && (
          <Link 
            href={`/dashboard/admin/posts/edit/${currentPost._id}`}
            className="btn btn-primary btn-sm ml-auto"
          >
            <MdEdit className="w-5 h-5 mr-1" /> Edit Post
          </Link>
        )}
      </div>

      {/* Post Content */}
      <div className="card bg-base-100 shadow-xl">
        {/* Featured Image */}
        <figure className="relative h-[400px] w-full">
          <Image
            src={`/uploads/${currentPost.thumbnail}`}
            alt={currentPost.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
        </figure>

        <div className="card-body">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">{currentPost.title}</h1>

          {/* Meta Information */}
          <div className="flex items-center space-x-6 mb-6 text-base-content/70">
            {/* Author Info */}
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-10 h-10 rounded-full">
                  <Image
                    src={`/uploads/${currentPost.author.profilePhoto}`}
                    alt={currentPost.author.name}
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="ml-2">
                <p className="font-medium">{currentPost.author.name}</p>
                <p className="text-sm">Author</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center">
              <MdCalendarToday className="w-5 h-5 mr-1" />
              <time dateTime={currentPost.createdAt}>
                {new Date(currentPost.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: currentPost.content }} />
          </div>

          {/* Comments Section */}
          {currentPost.comments && currentPost.comments.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Comments</h2>
              <div className="space-y-4">
                {currentPost.comments.map((comment) => (
                  <div key={comment._id} className="card bg-base-200 p-4">
                    <div className="flex items-start">
                      <div className="avatar">
                        <div className="w-8 h-8 rounded-full">
                          <Image
                            src={`/uploads/${comment.author.profilePhoto}`}
                            alt={comment.author.name}
                            width={32}
                            height={32}
                          />
                        </div>
                      </div>
                      <div className="ml-3">
                        <p className="font-medium">{comment.author.name}</p>
                        <p className="text-sm text-base-content/70">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </p>
                        <p className="mt-2">{comment.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Comment Form */}
          {user && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Add a Comment</h3>
              <form className="space-y-4">
                <div className="form-control">
                  <textarea 
                    className="textarea textarea-bordered h-24" 
                    placeholder="Write your comment here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Post Comment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostDetails;