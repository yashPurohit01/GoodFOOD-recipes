import styles from '../styles/recipes.module.scss'
import Image from 'next/image'
import { useSelector } from 'react-redux';

const  NoData = () =>{
    return(
        <div style={{display:"flex", flexDirection:"column" ,justifyContent:"center" ,alignItems:"center"}}>
          <Image src="/images/cross.png" width="128" height ="128" />
          <h3 style={{margin:"5px" }}>Oops! No Data found</h3>
        </div>
    )
}
export default function Recipes() {
    const searchResult = useSelector(state => state.searchResult);
    const { data } = searchResult;
    console.log(data);
    
    const recipes_collection = data.meals && data.meals.map(meal => {
    
        return (

            <div key={meal.idMeal} className={ `${styles.recipe_card} ${ meal.strCategory == "Chicken" || meal.strCategory =="Seafood" ? styles.non_veg_recipe_card: styles.veg_recipe_card}`} >
                <Image className={styles.recipe_card_image} src={meal.strMealThumb} width="200" height="150" priority ></Image>

                <div className={styles.recipe_card_header}>
                    <h3>{meal.strMeal}</h3>
                    <Image className={styles.recipe_card_image} src="/images/favorite.png" width="32" height="32" priority ></Image>
                </div>

            </div>

        )
    }) 
    return (
        <div className={styles.recipeCard}>

             {!recipes_collection ?
                  <NoData/> :
                     recipes_collection
            } 
        </div>
    )
}