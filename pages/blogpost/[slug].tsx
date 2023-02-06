import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'

const slug = () => {
    // const [blog, setBlog] = useState();
    const [blog, setBlog] = useState<any>();
    const router = useRouter();

    console.log(router.query);


    useEffect(() => {
        if (!router.isReady) return;
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((data) => {
            return data.json();

        }).then((parsed) => {

            setBlog(parsed)

        })

    }, [router.isReady]);



    return (
        <div className={styles.container}>
            <main className={styles.main}>

                {/* <h1>Title of the page {slug}</h1> */}
                <h1>{blog && blog.title}</h1>

                <div>{blog && blog.content}</div>

                {/* 
                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ipsum praesentium velit similique sed! Laborum reprehenderit deserunt recusandae vel laudantium consequuntur sapiente distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit impedit illo minus sapiente, eveniet amet temporibus quibusdam vitae esse beatae non necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta suscipit labore itaque tempore, inventore corrupti saepe perspiciatis expedita possimus nostrum debitis culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique labore ut voluptatibus delectus iste aliquid quis nisi dolorum consequuntur, quae sit! Repellendus, a? lorem23
                </div> */}


            </main>
        </div>
    )
}

export default slug