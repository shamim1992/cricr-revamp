// pages/index.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import FooterSection from '../footer/FooterSection';

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [blogposts, setBlogPosts] = useState([]);
console.log(blogposts)
  const fetchData = () =>{
    fetch('https://chanrericr.com/blog/api/posts.php')
     .then(response => response.json())
     .then(data => {
        setBlogPosts(data);
      })
     .catch(error => console.error('Error:', error));
  }

  useEffect(()=>{
fetchData();
  },[])

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Getting Started with Next.js",
  //     excerpt: "Learn how to build modern web applications with Next.js and React.",
  //     coverImage: "https://picsum.photos/seed/post1/600/400",
  //     date: "May 1, 2024"
  //   },
  //   {
  //     id: 2,
  //     title: "Styling with DaisyUI",
  //     excerpt: "Discover how to create beautiful UIs quickly using DaisyUI and Tailwind CSS.",
  //     coverImage: "https://picsum.photos/seed/post2/600/400",
  //     date: "May 5, 2024"
  //   },
  //   {
  //     id: 3,
  //     title: "Advanced React Patterns",
  //     excerpt: "Explore advanced React patterns to write cleaner, more efficient code.",
  //     coverImage: "https://picsum.photos/seed/post3/600/400",
  //     date: "May 10, 2024"
  //   },
  //   {
  //     id: 4,
  //     title: "Mastering CSS Grid",
  //     excerpt: "Deep dive into CSS Grid and create complex layouts with ease.",
  //     coverImage: "https://picsum.photos/seed/post4/600/400",
  //     date: "May 15, 2024"
  //   },
  //   {
  //     id: 5,
  //     title: "JavaScript ES6+ Features",
  //     excerpt: "Explore the powerful features introduced in recent JavaScript versions.",
  //     coverImage: "https://picsum.photos/seed/post5/600/400",
  //     date: "May 20, 2024"
  //   },
  //   {
  //     id: 6,
  //     title: "Responsive Design Principles",
  //     excerpt: "Learn key principles for creating websites that look great on any device.",
  //     coverImage: "https://picsum.photos/seed/post6/600/400",
  //     date: "May 25, 2024"
  //   },
  //   {
  //     id: 7,
  //     title: "Intro to GraphQL",
  //     excerpt: "Understand the basics of GraphQL and how it differs from REST APIs.",
  //     coverImage: "https://picsum.photos/seed/post7/600/400",
  //     date: "June 1, 2024"
  //   },
  //   {
  //     id: 8,
  //     title: "Web Accessibility Guidelines",
  //     excerpt: "Ensure your websites are accessible to all users with these key guidelines.",
  //     coverImage: "https://picsum.photos/seed/post8/600/400",
  //     date: "June 5, 2024"
  //   },
  //   {
  //     id: 9,
  //     title: "State Management in React",
  //     excerpt: "Compare different state management solutions for React applications.",
  //     coverImage: "https://picsum.photos/seed/post9/600/400",
  //     date: "June 10, 2024"
  //   },
  //   {
  //     id: 10,
  //     title: "Progressive Web Apps",
  //     excerpt: "Learn how to transform your website into a Progressive Web App.",
  //     coverImage: "https://picsum.photos/seed/post10/600/400",
  //     date: "June 15, 2024"
  //   }
  // ];

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

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => (
            <article key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <figure>
                <img
                  src={`https://chanrericr.com/blog/admin/postimages/${post.PostImage}`}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-48"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg  mb-2">{post.PostTitle}</h2>
                <p className="text-base-content opacity-70 mb-4">{post.excerpt}</p>
                <div className="card-actions justify-between items-center">
                  <span className="text-sm text-base-content opacity-50">{post.date}</span>
                  <button className="btn bg-activeColor text-white btn-sm">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </main>

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