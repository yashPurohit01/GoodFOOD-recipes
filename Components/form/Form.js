

export const Form = () =>{
    return(
        <div className={styles._form}>
            <div className={styles.chef}>
                <Image src="/images/chief.png" alt="chef" width="300" height="200" />
            </div>

            <form >
                <div className={styles.form_header}>
                    <div>
                        <Image src="/images/logo.png" alt="chef" width="80" height="60" />
                    </div>
                    <h5>goOdFoOd</h5>
                </div>
                <h4>Login</h4>
                <input className={styles.input_box} type="text" placeholder="email" />
                <input className={styles.input_box} type="password" placeholder="passward" />
                <div className={styles.remember}>
                    <input type="checkbox" />
                    <spam> remember me </spam>
                </div>
                <button type="submit">login</button>
                <div className={styles.signup_link}>
                    <Link href="/signup"><a>Already have account?</a></Link>
                </div>
            </form>
        </div>
    )
}