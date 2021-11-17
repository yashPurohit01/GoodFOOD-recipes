import styles from "../styles/signup.module.scss"
import Image from "next/dist/client/image"
import Link from "next/dist/client/link"



export default function Signup() {
    return (
        <div className={styles._form}>
            <div className={styles.Signup_form}>
              
                <form>
                    <h4> Sign Up </h4>
                    <input className={styles.input_box} type="text" placeholder="email" />
                    <input className={styles.input_box} type="password" placeholder="password (minimum 6 digit)" />
                    <input className={styles.input_box} type="password" placeholder="confirm password" />
                    <button type="submit">Sign Up</button>
                    <div className={styles.signup_link}>
                        <Link href="/login"><a>Already have account?</a></Link>
                    </div>
                </form>
            </div>
        </div>

    )
}
/*
   <div className={styles._form} >
            <div className={styles.chef}>
                <Image src="/images/chief.png" alt="chef" width="300" height="200" />
            </div>

            <form style={{backgroundImage: "url(/images/bgImage.png)" , backgroundRepeat:"no-repeat"}} >
                <div className={styles.form_header}>
                    <div>
                        <Image src="/images/logo.png" alt="chef" width="80" height="60" />
                    </div>
                    <h5>goOdFoOd</h5>
                </div>
                <h4>Signup</h4>
                <input className={styles.input_box} type="text" placeholder="email" />
                <input className={styles.input_box} type="password" placeholder="passward" />
                 <input className={styles.input_box} type="password" placeholder="passward" />
                <button type="submit">SignUp</button>
                <div className={styles.signup_link}>
                    <Link href="/signup"><a>Already have account?</a></Link>
                </div>
            </form>
        </div>
*/