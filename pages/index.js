import { useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import Image from 'next/image'
import Card from '../Components/card/card'
import { dataLoaderAction } from '../redux/actions/dataLoadAction'
import styles from '../styles/Home.module.scss'


export default function Home() {
     const dispatch = useDispatch()
     const randomResult = useSelector(state => state.randomResult);
     const {randomData , loading , err} = randomResult 

    useEffect(() => {
        /* eslint-disable */
        dispatch(dataLoaderAction());
           
    }, [])
    
   
    return (
        <div>
            <div className={styles.home_section_header}>
                <div className={styles.section}>
                    <h1>BEST FOOD FOR YOUR TASTE</h1>
                    <p>“I watch cooking change the cook, just as it transforms the food.”
                        – Laura Esquivel</p>
                    <div>
                        <button>Get's Started</button>
                    </div>
                </div>
                <div className={styles.food_Container}>
                    <div className={styles.food_1}>
                      
                        <Image src="/images/chicken.png" alt = "hImge" width="350" height="350"  />

                    </div>
                    <div className={styles.food_2}>
                        <Image src="/images/friedChicken.png" alt="hImage" width="300" height="300"  />
                        <Image src="/images/rice.png"alt="hImage" width="375" height="300"  />
                    </div>


                </div>
            </div>
            <div className={styles.home_section_2}>

                <div className={styles.random_heading}>
                    <p>No one is born a great cook ,one learn by doing</p>
                </div>

                <div className={styles.random_items}>
                    <Card randomData={randomData}/>   
                </div>
            </div>
            
        </div>
    )
}