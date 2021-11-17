import styles from './Blog.module.css'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import 'swiper/swiper-bundle.css';
import BlogCard from '../../../../layout/blogcard/BlogCard';
import Img1 from '../../../../../assets/blog_image_1.svg'
import Img2 from '../../../../../assets/blog_image_2.svg'
import Img3 from '../../../../../assets/blog_image_3.svg'
import Img4 from '../../../../../assets/blog_image_4.svg'


function Blog() {
    return (
        <section className={styles.blog}>
            <div className={styles.text}>
                <h2>Read Our Blog</h2>
                <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className={styles.cards_container}>
                <Swiper
                    className={styles.swiper}
                    pagination={true}
                    slidesPerView={1}
                    breakpoints={{
                        620: {
                            slidesPerView: 2,
                        },
                        1000: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    <SwiperSlide className={styles.swiper_slide}>
                        <BlogCard
                            title="Quick-start guide to nuts and seeds"
                            imgsrc={Img1}
                            name="Kevin Ibrahim"
                            avatar="https://randomuser.me/api/portraits/men/0.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <BlogCard
                            title="Nutrition: Tips for
                            Improving Your Health"
                            imgsrc={Img2}
                            name="Mike Jackson"
                            avatar="https://randomuser.me/api/portraits/men/81.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <BlogCard
                            title="The top 10 benefits
                            of eating healthy"
                            imgsrc={Img3}
                            name="Ashley Craig"
                            avatar="https://randomuser.me/api/portraits/women/4.jpg"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiper_slide}>
                        <BlogCard
                            title="What Makes a
                            Healthy Diet?"
                            imgsrc={Img4}
                            name="Jeanette Ryan"
                            avatar="https://randomuser.me/api/portraits/women/65.jpg"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    )
}

export default Blog;