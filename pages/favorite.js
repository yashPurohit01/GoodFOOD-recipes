import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../Components/card/card.module.scss"



export default function Favorite() {
    const addFavorite = useSelector(state => state.addFavorite)
    const { favproduct } = addFavorite;




    return (
        <div className={styles.oops} >
            <div className={styles.favHeading}>
               <h3> favorite Food </h3>
            </div>
            
            {
                favproduct.length >0 ? 
                      favproduct.map(meal => {
                        return (
                            <div className={styles.card} key={meal.MealID}>

                                <div className={styles.card_im}>
                                    <Image className={styles.card_img} src={meal.imagePath} width="250" height="175"  ></Image>
                                </div>
                                <div className={styles.recipe_discription}>
                                    <h3>{meal.Meal}</h3>
                                    <div>
                                        <p>{meal.description}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                
                    :
                    <Image styles={styles.noData} alt="nodata" width="900" height="200" src='/images/noData.jpg' />

            }
        </div>
    )
}