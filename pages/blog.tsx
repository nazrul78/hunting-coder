import React, { useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import * as fs from 'node:fs';
import InfiniteScroll from 'react-infinite-scroll-component';

const Blog = (props: any) => {
    //  console.log(props);
    const [count, setCount] = useState(2);
    const [blogs, setBlogs] = useState(props.allBlogs);
    // const [blogs, setBlog] = useState < any > (props.allBlogs);

    const fetchData = async () => {
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
        setCount(count + 2);
        let data = await d.json();
        setBlogs(data);
    };

    return (
        <main className={styles.main}>

            <InfiniteScroll
                dataLength={blogs.length} //This is important field to render the next data
                next={fetchData}
                hasMore={props.allCount != blogs.length}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {blogs.map((blogitem: any) => {

                    return <div key={blogitem.slug}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                            <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>

                        <p className={styles.blogItemp}>{blogitem.metadesc.substring(0, 190)}...</p>
                        <Link href={`/blogpost/${blogitem.slug}`}><button className={styles.btn}>Read More</button></Link>

                    </div>
                })}
            </InfiniteScroll>


        </main>
    )
};



export async function getStaticProps(context: any) {
    let data = await fs.promises.readdir("blogdata")
    let allCount = data.length;
    let myFile;
    let allBlogs = [];
    for (let index = 0; index < 2; index++) {

        const element = data[index];
        //  console.log(element);


        myFile = await fs.promises.readFile(('blogdata/' + element), 'utf-8')
        // console.log(myFile);
        allBlogs.push(JSON.parse(myFile));

    }
    return {
        props: { allBlogs, allCount }, // will be passed to the page component as props
    }
}

export default Blog