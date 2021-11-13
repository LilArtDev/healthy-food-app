import './Home.css'
import { About, Blog, Join, Ready, Recipes } from './sections/index'

function Home() {
    return (
        <div className="home">
            <Ready />
            <Recipes />
            <About />
            <Blog />
            <Join />
        </div>
    )
}

export default Home;