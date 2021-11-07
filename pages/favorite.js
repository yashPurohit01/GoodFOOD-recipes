import Image from "next/image";
import { useState } from "react"
import styles from '../styles/Favorite.module.scss'


export default function Favorite(){
    const[pres , setPre] =useState("false");
    return(
        <div className={styles.oops}>
        
                    <Image styles={styles.noData}  width="900" height="200" src='/images/noData.jpg' />
                
            
        </div>
    )
}