import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate();
    const handleShowDetails =() =>{
        navigate(`/post/${id}`)

    }
    const postStyle = {
        border : '4px solid cyan',
        padding : '5px',
        borderRadius : '20px'
    }
    const postyStyle = {
        border : '2px solid pink',
        padding : '5px',
        borderRadius : '20px'
    }
    const {id,title}=post;
    return (
        <div style={postStyle}>
            <h2>Post of Id : {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}> 
            <button style={postyStyle}>Post Detials</button>
            </Link>

            <button onClick={handleShowDetails}>Show Details</button>
        </div>
    );
};

export default Post;