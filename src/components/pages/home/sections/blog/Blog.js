import styles from './Blog.module.css'

function Blog() {
    return (
        <section className={styles.blog}>
            <div className={styles.text}>
                <h2>Read Our Blog</h2>
                <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
        </section>
    )
}

export default Blog;