import Image from "next/image"
import styles from "./favoriteIcon.module.scss"
import { useDispatch  ,useSelector} from "react-redux";
import { useRouter } from "next/dist/client/router";
import { AddFavoriteAction } from "../../redux/actions/AddFavoriteAction";


export default function FavoriteIcon() {
    const dispatch = useDispatch();
    const Router = useRouter();
    const MealId = Router.query.recipeId;
    const addFavorite = useSelector(state => state.addFavorite);
    const{ favproduct } = addFavorite
    console.log(favproduct);
    return (
        <div className={styles.fav} onClick={() => dispatch(AddFavoriteAction(MealId))}>
            <Image className={styles.favIcon}alt="fav" src="/images/s2.png"  width="24" height="24"/>
        </div>
    )
}
