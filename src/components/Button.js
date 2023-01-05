const Button = (props) => {
    return (
        <>
        <button className="continue" onClick={props.onPageHandler}>{props.btntext}</button>
        </>
    )
}

export default Button;