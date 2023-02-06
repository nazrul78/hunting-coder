import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    //  const [blogs, setBlogs] = useState < any[] > ([])
    useEffect(() => {
        fetch('http://localhost:3000/api/blogs').then((data) => {
            return data.json();

        }).then((parsed) => {

            setBlogs(parsed)

        })

    }, []);
    return (
        <main className={styles.main}>

            {blogs.map((blogitem) => {

                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                    </Link>

                    <p className={styles.blogItemp}>{blogitem.content.substring(0, 190)}...</p>
                </div>
            })}

            {/* <div>
                <div>
                    <Link href={'/blogpost/learn-javascript'}>
                        <h3 className={styles.blogItem}>How to learn Javascript in 2023?</h3>
                    </Link>

                    <p>Javascript is the language used to design logic for the web

                        lorem23
                    </p>
                </div>

                <div className="blogItem">
                    <h3>How to learn Javascript in 2023?</h3>
                    <p>Javascript is the language used to design logic for the web</p>
                </div>

                <div className="blogItem">
                    <h3>How to learn Javascript in 2023?</h3>
                    <p>Javascript is the language used to design logic for the web</p>
                </div>

                <div className="blogItem">
                    <h3>How to learn Javascript in 2023?</h3>
                    <p>Javascript is the language used to design logic for the web</p>
                </div>

                <div className="blogItem">
                    <h3>How to learn Javascript in 2023?</h3>
                    <p>Javascript is the language used to design logic for the web</p>
                </div>
            </div> */}
        </main>
    )
}

export default Blog