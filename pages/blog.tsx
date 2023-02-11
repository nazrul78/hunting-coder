import React, { useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'node:fs';

const Blog = (props: { allBlogs: any; }) => {
    //  console.log(props);
    const [blogs, setBlogs] = useState(props.allBlogs);
    // const [blogs, setBlog] = useState < any > (props.allBlogs);

    return (
        <main className={styles.main}>

            {blogs.map((blogitem: { slug: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; content: string; }) => {

                return <div key={blogitem.slug}>
                    <Link href={`/blogpost/${blogitem.slug}`}>
                        <h3 className={styles.blogItemh3}>{blogitem.title}</h3>
                    </Link>

                    <p className={styles.blogItemp}>{blogitem.metadesc.substring(0, 190)}...</p>
                </div>
            })}

        </main>
    )
};



export async function getStaticProps(context: any) {
    let data = await fs.promises.readdir("blogdata")
    let myFile;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {

        const element = data[index];
        //  console.log(element);


        myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
        // console.log(myFile);
        allBlogs.push(JSON.parse(myFile));

    }
    return {
        props: { allBlogs }, // will be passed to the page component as props
    }
}

export default Blog