import '../layout/button/Button.css'

function SubmitButton(props) {
    return (
        <div>
            <button className='btn'>{props.children}</button>
        </div>
    )
}

export default SubmitButton;