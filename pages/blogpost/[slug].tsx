import React, { useState } from 'react'

import styles from '@/styles/Blogpost.module.css'
import * as fs from 'node:fs';

const Slug = (props: any) => {

    function createMarkup(c: any) {
        return { __html: c };
    }

    const [blog, setBlog] = useState(props.myBlog);
    //  const [blog, setBlog] = useState<any>(props.myBlog);

    return (
        <div className={styles.container}>
            <main className={styles.main}>

                <h1>{blog && blog.title}</h1>



                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}




            </main>
        </div>
    )
}


export async function getStaticPaths() {
    let allb = await fs.promises.readdir(`blogdata`)
    let allb2 = allb.map((item) => {
        return { params: { slug: item.split('.')[0] } }
    })
    return {
        paths: allb2,
        fallback: true, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context: any) {
    // console.log(context);

    const { slug } = context.params;

    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')


    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug;