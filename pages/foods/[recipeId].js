import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useEffect } from "react";

import { useSelector , useDispatch} from "react-redux";
import { foodDetailsAction } from "../../redux/actions/foodDetailsAction";
import styles from "../../styles/recipesDetail.module.scss"

export default function Recipedetails() {
    const dispatch = useDispatch();
    const foodDetail = useSelector(state => state.foodDetailResult);
    const { des, err } = foodDetail;
    const ingredientArr = [];
    const route = useRouter();
    const id = route.query.recipeId;
    if (des.meals) {

        let descr = Object.values(des.meals[0]);
        for (let i = 9; i < 29; i++) {
            if (descr[i]) {
                ingredientArr.push(descr[i]);
            }
        }

        console.log(descr);


    }
    console.log(id);
    useEffect(() => {
        /* eslint-disable */
       dispatch(foodDetailsAction(id));
    }, [id])

    const foodDescription = des.meals && des.meals.map(meal => {
        return (
            <div className={styles.foodDetail} key={meal.idMeal}>
                <div className={styles.foodDetailsImage}>
                    <Image className={styles.descImage} alt="foodImage" src={meal.strMealThumb} width="400" height="300" />
                </div>
                <div className={styles.foodDes}>
                    <h2> {meal.strMeal} </h2>
                    <h3>Category:<span>{meal.strCategory}</span></h3>
                    <span> Ingridients </span>
                    <div className={styles.ingre}>
                       
                        {ingredientArr.map((ingre, index) => {
                            return (
                                <div className={styles.inngreName} key={index}>
                                    {ingre}
                                </div>
                            )
                        }
                        )
                        }
                        {/*   <div className={styles.inngreName} >
                            tomato
                        </div> */}
                    </div>
                    <p>{meal.strInstructions}</p>
                </div>
            </div>
        )
    })
    return (
        <>
            {foodDescription}
        </>



    )
}
