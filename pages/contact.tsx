import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'



const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [desc, setdesc] = useState('');

    const handleSubmit = (e: any) => {

        e.preventDefault();

        // console.log(name, email, phone, desc);

        const data = { name, email, phone, desc };

        fetch('http://localhost:3000/api/postcontact/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                // console.log('Success:', data);
                alert('Thanks for contacting us.');
                setname('');
                setemail('');
                setphone('');
                setdesc('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleChange = (e: any) => {
        // console.log(e.target.value);
        if (e.target.name == 'name') {
            setname(e.target.value);
        } else if (e.target.name == 'email') {
            setemail(e.target.value);
        } else if (e.target.name == 'phone') {
            setphone(e.target.value);
        }
        else if (e.target.name == 'desc') {
            setdesc(e.target.value);
        }

    }
    return <>
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>

                <div className={styles.mb3}>
                    <label htmlFor='name' className={styles.formlable} >Enter your name</label>
                    <input className={styles.input} type="text" value={name} onChange={handleChange} id="name" name="name" aria-describedby="emailHelp" />
                </div>

                <div className={styles.mb3}>
                    <label htmlFor='email' className={styles.formlable}>Enter your email</label>
                    <input className={styles.input} type="email" value={email} onChange={handleChange} id="email" name="email" aria-describedby="emailHelp" />
                    <div id='emailHelp' className={styles.fromtext}>We will never share your email with anyone else.</div>
                </div>


                <div className={styles.mb3}>
                    <label htmlFor='phone' className={styles.formlable}>Enter your phone</label>
                    <input className={styles.input} type="phone" value={phone} onChange={handleChange} id="phone" name="phone" aria-describedby="emailHelp" required />
                </div>

                <div className={styles.mb3}>
                    <label htmlFor='desc' className={styles.formlable}>Comments</label>
                    <textarea className={styles.input} id="desc" name='desc' onChange={handleChange} value={desc} placeholder='Write your concern here...' />
                </div>

                <button type='submit' className={styles.btn}>Submit</button>


            </form>
        </div>

    </>

}

export default Contact