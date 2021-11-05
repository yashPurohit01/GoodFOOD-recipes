import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';

export default function Footer (){
    const info = ["github" , "linkedin" , "facebook"];
    const socialMedia = info.map(media =>{
        return(
            <div className={styles.socialMedia_handle} key={media}> 
                
                    <Image src= {`/images/${media}.png`} width="32" height="32" priority/>
                    
            </div>
        )
    })
    return(
        <div className={styles.footer_section}>
            <footer>
                <div className={styles.copyright}>
                    <h3> goOdFoOd </h3> copyright @2022 ALl right reserved by authority of goOdFoOd
                    <div className={styles.media}>
                        {socialMedia}
                    </div>   
                </div>
            </footer>
        </div>
    )
}