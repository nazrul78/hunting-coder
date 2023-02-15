import React, { useState } from 'react'
import styles from '@/styles/Contact.module.css'



const Contact = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [desc, setdesc] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();

        // console.log(name, email, pass, desc);

        const data = { name, email, pass, desc };

        fetch('http://localhost:3000/api/postcontact/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log('Success:', data);
                alert('Thanks for contacting us.');
                setname('');
                setemail('');
                setpass('');
                setdesc('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    const handleChange = (e) => {
        // console.log(e.target.value);
        if (e.target.name == 'name') {
            setname(e.target.value);
        } else if (e.target.name == 'email') {
            setemail(e.target.value);
        } else if (e.target.name == 'pass') {
            setpass(e.target.value);
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
                    <label htmlFor='name' className={styles.formlable} >Enter your name: </label>
                    <input type="text" value={name} className='form-control' onChange={handleChange} id="name" name="name" aria-describedby="emailHelp" />

                </div>

                <div className={styles.mb3}>
                    <label htmlFor='email' className={styles.formlable}>Enter your email: </label>
                    <input type="email" value={email} className='form-control' onChange={handleChange} id="email" name="email" aria-describedby="emailHelp" />

                </div>


                <div className={styles.mb3}>
                    <label htmlFor='pass' className={styles.formlable}>Enter your password: </label>
                    <input type="text" value={pass} onChange={handleChange} className='form-control' id="pass" name="pass" aria-describedby="emailHelp" />

                </div>

                <div className={styles.mb3}>
                    <label htmlFor='desc' className={styles.formlable}>Comments: </label>
                    <textarea id="desc" name='desc' onChange={handleChange} value={desc} className='form-control' placeholder='Write your concern here...' />


                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>

                {/* <div className={styles.container}>
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="phone" class="form-label">Password</label>
                    <input type="phone" class="form-control" name="phone" id="phone">
                </div>
                <div class="mb-3">
                    <textarea class="form-control" placeholder="Write your concern here" id="desc" />
                    <label for="desc">Comments</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button> */}
            </form>
        </div>

    </>

}

export default Contact