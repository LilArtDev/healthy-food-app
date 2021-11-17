import { About, Blog, Join, Presentation, Recipes } from './sections/index'

function Home() {
    return (
        <div className="home">
            <Presentation />
            <Recipes />
            <About />
            <Blog />
            <Join />
        </div>
    )
}

export default Home;