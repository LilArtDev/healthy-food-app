import styles from './Blog.module.css'
import BlogCard from '../../../../layout/blogcard/BlogCard';
import Img1 from '../../../../../assets/blog_image_1.svg'
import Img2 from '../../../../../assets/comida_2.svg'
import Img3 from '../../../../../assets/comida_3.svg'
import Img4 from '../../../../../assets/comida_4.svg'


function Blog() {
    return (
        <section className={styles.blog}>
            <div className={styles.text}>
                <h2>Read Our Blog</h2>
                <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={styles.cards_container}>
                <BlogCard
                    title="Quick-start guide to nuts and seeds"
                    imgsrc={Img1}
                    name="Kevin Ibrahim"
                    avatar="https://randomuser.me/api/portraits/men/0.jpg"
                />
            </div>

        </section>
    )
}

export default Blog;