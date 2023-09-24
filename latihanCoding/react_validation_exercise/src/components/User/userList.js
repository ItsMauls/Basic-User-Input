import Card from "../UI/card"

const UserList = props => {
    return <Card>
    <ul className="px-3 py-2">
        {props.users.map(user =>
        <li className="bg-yellow-100 mt-3 px-2 py-2 rounded-lg">
            Id : {user.id}
            <br/>
            Nama : {user.username}
            <br/>
            Umur :{user.age}
        </li> 
       )} 
    </ul>
    </Card>
}

export default UserList