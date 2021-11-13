import Button from '../../../layout/button/Button'
import Img from '../../../../assets/bloco_services.svg'
function About() {
    return (<>
        <section className='about'>
            <img src={Img} alt="About" />
            <div className='text'>
                <h2>The best services ready To serve you</h2>
                <p>Far far away, behind the word mountains, far from
                    the countries Vokalia and Consonantia,
                    there live the blind texts.</p>
                <p>Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean.</p>
                <p>A small river named Duden flows by their place and
                    supplies it with the necessary regelialia.</p>
            </div>
            <Button>Know More</Button>

        </section>
        <div className='divider'></div>
    </>
    )
}

export default About;