import './Button.css'

function Button(props) {
    return (
        <div>
            <button className='btn'>{props.children}</button>
        </div>
    )
}

export default Button;