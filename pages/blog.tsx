import React, { useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

const Blog = (props: any) => {
    console.log(props);
    const [blogs, setBlogs] = useState(props.allBlogs);
    // const [blogs, setBlog] = useState < any > (props.allBlogs);

    return (
        <main className={styles.main}>

            {blogs.map((blogitem: any) => {

                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                    </Link>

                    <p className={styles.blogItemp}>{blogitem.content.substring(0, 190)}...</p>
                </div>
            })}

        </main>
    )
};



export async function getServerSideProps(context: any) {
    let data = await fetch('http://localhost:3000/api/blogs');
    let allBlogs = await data.json();
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog