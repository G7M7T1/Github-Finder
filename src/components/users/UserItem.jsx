import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function UserItem ({user}) {
    return(
        <div className="card shadow-md compact card-side bg-neutral">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow-2xl w-14 h-14">
                            <img src={user.avatar_url} alt="UserIMG"/>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">
                        {user.login}
                    </h2>
                    <Link className="text-base-content text-opacity-40" to={`/user/${user.login}`}>
                        Check Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem
