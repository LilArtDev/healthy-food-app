import styles from './BlogCard.module.css'



function BlogCard({ title, imgsrc, avatar, name }) {


    return (
        <div className={styles.card}>
            <blockquote>
                <img className={styles.img} src={imgsrc} alt={title} />
                <div className={styles.text}>
                    <h3 className={styles.title}>{title}</h3>
                    <cite className={styles.cite}>
                        <img className={styles.avatar} src={avatar} alt={`Avatar ${name}`} />
                        <p className={styles.name}>{name}</p>
                    </cite>
                </div>
            </blockquote>
        </div>
    )
}

export default BlogCard;