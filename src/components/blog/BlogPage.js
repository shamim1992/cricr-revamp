// pages/index.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FooterSection from '../footer/FooterSection';
import Link from 'next/link';

export default function BlogPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [blogposts, setBlogPosts] = useState([]);
console.log(blogposts)
  const fetchData =async () =>{
    setIsLoading(true);
   await fetch('https://chanrericr.com/blog/api/posts.php')
     .then(response => response.json())
     .then(data => {
        setBlogPosts(data);
        setIsLoading(false);
      })
     .catch(error => console.error('Error:', error));
  }

  useEffect(()=>{
fetchData();
  },[])


  const Loader = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-activeColor"></div>
    </div>
  )

 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogposts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogposts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Head>
        <title>News & Events</title>
        <meta name="description" content="A beautiful blog created with Next.js and DaisyUI" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-2xl font-bold  mb-2">News & Events</h1>
          <p className="text-md opacity-70">Explore the latest Blog, NEWS and Events</p>
        </header>
        {isLoading ? (
        <Loader />
      ) : (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts?.map((post) => (
            <article key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <Image
                  src={`https://chanrericr.com/blog/admin/postimages/${post.PostImage}`}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg  mb-2">{post.PostTitle}</h2>
                <div className="card-actions justify-between items-center">
                  <span className="text-sm text-base-content opacity-50">{post.PostingDate}</span>
                  <Link href={`/newsandevents/${post.id}`}>
            <button className="btn bg-activeColor text-white btn-sm">Read More</button>
          </Link>
                </div>
              </div>
            </article>
          ))}
        </main>
      )}

        <div className="flex justify-center mt-8">
          <div className="btn-group">
            <button 
              className="btn"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <span
                key={i + 1}
                className={` ${currentPage === i + 1 ? 'btn-active' : ''} ml-1`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </span>
            ))}
            <button 
              className="btn"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>

     
      </div>
      <FooterSection/>
    </>
  );
}