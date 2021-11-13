import { Input, SubmitButton } from '../../../form/index'
import Img from '../../../../assets/bloco_final_image.svg'

function join() {
    return (<>
        <section className='join'>
            <div className='text'>
                <h1>Join our membership to get special offer</h1>
                <form className="form">
                    <Input type="text" name="email" placeholder="Enter your email address" />
                    <SubmitButton>Join</SubmitButton>
                </form>
            </div>
            <img className="img" src={Img} alt="Presentation" />
        </section>
    </>
    )
}

export default join;