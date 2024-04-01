import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h3>Our users : {users.length}</h3>
           <div className="users">
           {
                users.map(user=> <User key={user.id} user={user}> </User>)
            }
           </div>
            <p>fantastic</p>
        </div>
    );
};

export default Users;