import Image from "next/image";
import { useSelector } from "react-redux";
import styles from "../Components/card/card.module.scss"
import { Loading } from "../Components/loading/Loading";



export default function Favorite() {
    const addFavorite = useSelector(state => state.addFavorite)
    const { favproduct } = addFavorite;




    return (
        <div className={styles.oops} style={{width: "100%"}} >
             <div className={styles.favHeading}>
                <h3> favorite Food </h3>
                 </div>
                 <Loading/>
            
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
                    <div className={styles.nodata}>
                       <Image styles={styles.noData} alt="nodata" width="64" height="64" src='/images/cross.png' />
                       <span>No data found</span>
                    </div>
            }     
        </div>
    )
}