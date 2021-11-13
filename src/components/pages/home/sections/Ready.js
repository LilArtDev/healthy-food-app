import { Input, SubmitButton } from '../../../form/index'
import { MdOutlineSearch } from 'react-icons/md'
import Img from '../../../../assets/Illustration.svg'

function Ready() {
    return (<>
        <section className='presentation'>
            <div className='text'>
                <h1>Ready for Trying a new recipe?</h1>
                <form className="form">
                    <Input type="text" name="search" placeholder="Search healthy recipes" />
                    <SubmitButton><MdOutlineSearch /></SubmitButton>
                </form>
            </div>
            <img className="img" src={Img} alt="Presentation" />
        </section>
        <div className='divider'></div>
    </>
    )
}

export default Ready;