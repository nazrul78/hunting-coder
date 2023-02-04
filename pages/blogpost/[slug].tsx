import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'

const slug = () => {
    const router = useRouter();
    console.log(router.query);

    const { slug } = router.query;
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>Title of the page {slug}</h1>


                <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat ipsum praesentium velit similique sed! Laborum reprehenderit deserunt recusandae vel laudantium consequuntur sapiente distinctio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit impedit illo minus sapiente, eveniet amet temporibus quibusdam vitae esse beatae non necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dicta suscipit labore itaque tempore, inventore corrupti saepe perspiciatis expedita possimus nostrum debitis culpa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique labore ut voluptatibus delectus iste aliquid quis nisi dolorum consequuntur, quae sit! Repellendus, a? lorem23
                </div>
            </div>

        </main>
    )
}

export default slug