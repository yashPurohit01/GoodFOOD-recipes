import styles from './card.module.scss';
import Image from 'next/image';

export default function Card({ randomData }) {
    console.log(randomData);

    return (
        <div >
            {randomData.meals && randomData.meals.map(meal => {
                return (
                    <div className={styles.card} key={meal.idMeal}>
                        <div className={styles.card_im}>
                            <Image className={styles.card_img} src={meal.strMealThumb} width="250" height="175"  ></Image>
                        </div>
                        <div className={styles.recipe_discription}>
                            <h3>{meal.strMeal}</h3>
                            <div>
                                <p>{meal.strInstructions}</p>
                            </div>

                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
