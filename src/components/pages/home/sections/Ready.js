import { Input, SubmitButton } from '../../../form/index'
import { MdOutlineSearch } from 'react-icons/md'
import Img from '../../../../assets/Illustration.svg'

function Ready() {
    return (
        <>
            <h1>Ready for Trying a new recipe?</h1>
            <form className="form">
                <Input type="text" name="search" placeholder="Search healthy recipes" />
                <SubmitButton><MdOutlineSearch /></SubmitButton>
            </form>
            <img className="img" src={Img} alt="Presentation image" />
        </>
    )
}

export default Ready;