import Link from 'next/link'
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import styles from "./appHeader.module.scss";
import { useState } from 'react';
import { searchDataAction } from '../../redux/actions/searchDataAction';
import { useRouter } from 'next/dist/client/router';
import Login from '../loginForm/LoginModal';

export default function appHeader() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const [modal , setmodal] = useState(false);
    const closeHandler = () =>{
      setmodal(false);
   }

    const [search, setSearch] = useState("");

    const inputHandler = (e) => {
        setSearch(e.target.value)
        console.log(e.target)
    }
    const handlekeyPress = (e) => {
        if (e.key === "Enter") {
            searchHandler();
            Router.push('/foods');

        }
    }
    const searchHandler = () => {

        dispatch(searchDataAction(search));

        if (search) {
            setSearch(search);
        }
        console.log(search);
    }
    return (
        <>
         {modal ? <Login closeHandler={closeHandler} setmodal={setmodal} /> : ""}
        <div className={styles.app_header}>

            <div className={styles.logo}>
                <a>goOdFOod</a>
            </div>
            <div className={styles.sec}>
                <div className={styles.options}>
                    <div className={styles.links}>
                        <Link className={styles.navs} href="/" ><a>home</a></Link>
                    </div>
                    <div className={styles.links}>
                        <Link className={styles.navs} href="/favorite" ><a>favorite</a></Link>
                    </div>
                   
                    <div className={styles.button}>
                        <button onClick={()=>setmodal(true)}>Login</button>
                    </div>
                </div>
                <div className={styles.search}>
                    <div className={styles.searchimg}>
                        <Image src="/images/search.png" alt="search" width="24px" height="24px" />
                    </div>

                    <input type="text" placeholder="food" onKeyPress={handlekeyPress} value={search} onChange={inputHandler} />

                </div>
            </div>
        </div>
        </>
    )
}