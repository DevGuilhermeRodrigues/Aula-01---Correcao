export const PostCard = (props) => {
    return(
        <div className="container-people">
            <img src={props.cover} alt="icone pessoa" />

            <div className="post-content">
                <h1>{props.title}</h1>
                <p>{props.body}</p>
            </div>
        </div>
    )
}