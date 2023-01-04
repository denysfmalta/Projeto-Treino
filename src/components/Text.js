const Text = (props) => {
    console.log("Teste");
    return (
        <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
    )
};

export default Text;