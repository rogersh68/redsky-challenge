import User from './User'

const Users = ({users, onDelete, onUpdate}) => {
    return (
        <div>
            {users.map((user) => (
                <User 
                    key={user.id} 
                    user={user} 
                    onDelete={() => onDelete(user.id)} 
                    onUpdate={() => onUpdate(user)}
                />
            ))}
        </div>
    )
}

export default Users
