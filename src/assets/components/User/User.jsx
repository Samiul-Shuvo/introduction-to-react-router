import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id,name,phone,email}=user;
    const userStyle = {
        border : '4px solid cyan',
        padding : '5px',
        borderRadius : '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone : {phone}</p>
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

export default User;