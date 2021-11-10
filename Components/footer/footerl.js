import styles from './footer.module.scss'
import Link from 'next/link'
import Image from 'next/image';

export default function Footer (){
    const info = ["github" , "linkedin" , "facebook"];
    const socialMedia = info.map(media =>{
        return(
            <div className={styles.socialMedia_handle} key={media}> 
                
                    <Image src= {`/images/${media}.png`} width="24" height="24" priority/>
                    
            </div>
        )
    })
    return(
        
        <div className={styles.footer_section}>
            
                <div className={styles.copyright}>
                    <h3> goOdFoOd </h3> 
                    <span>copyright @2022 All right reserved by authority of goOdFoOd </span>
                   <div className={styles.media}>
                        {socialMedia}
                    </div> 
                </div>
           
        </div>
        
    )
}