function Newsitem(props) {
    return (
        <>
            <div className="card m-3" style={{width: "18rem" }}>
                <img src={props.imageurl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </>
    );
}

export default Newsitem;