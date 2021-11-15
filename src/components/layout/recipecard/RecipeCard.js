import styles from './RecipeCard.module.css'
import Button from '../../layout/button/Button'
import Fade from 'react-reveal/Fade'


function RecipeCard({ title, imgsrc }) {


    return (
        <Fade>
            <div className={styles.card}>
                <img className={styles.img} src={imgsrc} alt={title} />
                <Fade left >
                    <div className={styles.text}>
                        <h3 className={styles.title}>{title}</h3>
                        <Button className={styles.btn}>See Recipe</Button>
                    </div>
                </Fade>
            </div>
        </Fade>
    )
}

export default RecipeCard;