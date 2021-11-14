import styles from './Recipes.module.css'
import RecipeCard from '../../../../layout/recipecard/RecipeCard';
import Img1 from '../../../../../assets/comida_1.svg'
import Img2 from '../../../../../assets/comida_2.svg'
import Img3 from '../../../../../assets/comida_3.svg'
import Img4 from '../../../../../assets/comida_4.svg'


function Recipes() {
    return (
        <section className={styles.recipes}>
            <div className={styles.text}>
                <h2>Our Best Recipes</h2>
                <p>Far far away, behind the word mountains,  far from the countries Vokalia and Conson16antia, there live the blind texts.</p>
            </div>
            <div className={styles.cards_container}>
                <RecipeCard title="Broccoli Salad with Bacon" imgsrc={Img1} />
                <RecipeCard title="Classic Beef Burguers" imgsrc={Img2} />
                <RecipeCard title="Classic Potato Salad" imgsrc={Img3} />
                <RecipeCard title="Cherry Cobbler on the Grill" imgsrc={Img4} />
            </div>
        </section>
    )
}

export default Recipes;