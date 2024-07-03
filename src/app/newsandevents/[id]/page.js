'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import FooterSection from '@/components/footer/FooterSection';
import Navbar from '@/components/navbar/Navbar';
import Image from 'next/image';

export default function PostPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`https://chanrericr.com/blog/api/get_single_post.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    setPost(data);
                })
                .catch(error => console.error('Error:', error));
        }
    }, [id]);

    if (!post) return <div>
        <Navbar/>
        
        <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-activeColor"></div>
    </div>

        <FooterSection />
        
        </div>;

    // Parse the PostingDate string into a Date object and format it
    const formattedDate = new Date(post.PostingDate).toLocaleDateString();

    return (
        <>
        <Navbar/>
            <Head>
                <title>{post.PostTitle}</title>
                <meta name="description" content={post.PostTitle} />
            </Head>
            <div className="container mx-auto px-4 lg:px-24 py-8">
                <h1 className="text-3xl text-center font-bold mb-4">{post.PostTitle}</h1>
                {/* <Image
                    src={`https://chanrericr.com/blog/admin/postimages/${post.PostImage}`}
                    alt={post.PostTitle}
                    className="object-cover w-full h-48" 
                /> */}
                <div dangerouslySetInnerHTML={{ __html: post.PostDetails }} />
                <p className="mt-4 text-sm text-base-content opacity-50">Posted on: {formattedDate}</p>
            </div>
            <FooterSection />
        </>
    );
}
