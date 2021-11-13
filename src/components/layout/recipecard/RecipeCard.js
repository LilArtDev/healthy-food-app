import { useState } from 'react'
import styles from './RecipeCard.module.css'
import { useMediaQuery } from 'react-responsive'
import Button from '../../layout/button/Button'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'


function RecipeCard({ title, imgsrc }) {
    const isMobile = useMediaQuery({
        query: '(max-width: 610px)'
    })

    const [clicked, setClicked] = useState(false)

    function toggleClicked() {
        setClicked(!clicked)
    }

    return (<>
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
    </>)
}

export default RecipeCard;