import User from "../user/User";
import {usersList} from "../../data_files";

export default function Users() {
    return(
        <div>
            {
                usersList.map(value => <User key={value.id} items={value}/>)
            }
        </div>
    );
}