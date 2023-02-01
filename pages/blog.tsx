import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
    return (
        <main className={styles.main}>


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