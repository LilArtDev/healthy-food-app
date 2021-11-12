import './Home.css'
import { About, Blog, Join, Ready, Recipes } from './sections/index'

function Home() {
    return (
        <div className="Home">
            <section className='presentation'>
                <Ready />
            </section>
            <div className='divider'></div>
        </div>
    )
}

export default Home;