import React, { useState } from 'react'

import styles from '@/styles/Blogpost.module.css'

const slug = (props: any) => {
    const [blog, setBlog] = useState(props.myBlog);
    //  const [blog, setBlog] = useState<any>(props.myBlog);

    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <h1>{blog && blog.title}</h1>

                <div>{blog && blog.content}</div>




            </main>
        </div>
    )
}


export async function getServerSideProps(context: any) {
    console.log(context.query);

    const { slug } = context.query;

    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json();


    return {
        props: { myBlog }, // will be passed to the page component as props
    }
}
export default slug