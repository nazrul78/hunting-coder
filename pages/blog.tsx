import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
    console.log('>>>>>>>>>>>')
    // const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        console.log('use effect is running');

        fetch('http://localhost:3000/api/blogs').then((a) => {
            return a.json();

        }).then((parsed) => {
            console.log(parsed);
            // setBlogs(parsed)
        })

    }, []);
    return (
        <main className={styles.main}>
            {/* {blogs.map((item) => <h3>{item}</h3>)} */}

            {/* {blogs.map((blogitem) => {

                return <div>${blogitem.}</div>
                // return <div>
                //     <Link href={'/blogpost/learn-javascript'}>
                //         <h3 className={styles.blogItem}>{blogitem}</h3>
                //     </Link>

                //     <p>Javascript is the language used to design logic for the web

                //         lorem23
                //     </p>
                // </div>
            })} */}

            <div>
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
            </div>
        </main>
    )
}

export default Blog