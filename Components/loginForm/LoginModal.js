import { useState } from 'react';
import styles from './loginmodal.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { CgClose } from 'react-icons/cg';



export default function Login({setmodal }) {
    const [load, setLoad] = useState(true);
    const [credentials, setCredentials] = useState(
        {
            email: "",
            password: ""
        })

    const onChangeHandler = (e) => {
        const { id, value } = e.target
        setCredentials(preState => ({
            ...preState,
            [id]: value,
        }))

    }
    const payload = {
        "email": credentials.email,
        "password": credentials.password,
    }

    console.log(credentials)

    return (
             <div className={styles._form} >
                <div className={styles.chef} >
                    <Image src="/images/chief.png"  alt="chef" width="200" height="100" />
                    <button onClick={()=>  setmodal(false)}><CgClose /></button>
                </div>

                <form>
                    <div className={styles.form_header}>
                        <div style={{display:'flex'}}>
                            <Image src="/images/logo.png"  alt="chef" width="80" height="60" />
                            <h5>goOdFoOd</h5>
                        </div>
                       
                        
                       
                    </div>
                    <h4>Login</h4>
                    <input className={styles.input_box} id="email" type="text" placeholder="email" value={credentials.email} onChange={onChangeHandler} />
                    <input className={styles.input_box} id="password" type="password" placeholder="password" value={credentials.password} onChange={onChangeHandler} />
                    <div className={styles.remember}>
                        <input type="checkbox" />
                        <span> remember me </span>
                    </div>
                    <button type="submit" >login</button>
                    <div className={styles.signup_link}>
                        <Link href="/signup"><a>Not have account?</a></Link>
                    </div>
                </form>
                
            </div>
    
    
    )
}