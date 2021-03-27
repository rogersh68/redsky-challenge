import Button from './Button'
import UpdateUser from './UpdateUser'
import { useState } from 'react'

const User = ({ user, onDelete, onUpdate }) => {
    const [showUpdateUser, setShowUpdateUser] = useState(false)
    return (
        <div className='user'>
            <img src={user.avatar} width="100" alt={user.first_name} />
            <h3>{user.first_name} {user.last_name}</h3>
            <p>{user.email}</p>

            <Button 
                color='red' 
                text='Delete' 
                onClick={onDelete}
            />

            <Button 
                color={showUpdateUser ? 'blue' : 'gold'} 
                text={showUpdateUser ? 'Close' : 'Update'} 
                onClick={() => setShowUpdateUser(!showUpdateUser)} 
            />

            {showUpdateUser && <UpdateUser 
                onUpdate={() => onUpdate(user)} 
                user={user}
            />}
    
        </div>
    )
}

export default User