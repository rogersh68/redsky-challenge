import { useState } from 'react'

const AddUser = ({onAdd}) => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        onAdd({first_name, last_name, email, avatar})

        // clear form
        setFirstName('')
        setLastName('')
        setEmail('')
        setAvatar('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' placeholder="User's first name" required value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' placeholder="User's last name" required value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Email</label>
                <input type='text' placeholder="User's email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Avatar</label>
                <input type='text' placeholder="User's avatar url" required value={avatar} onChange={(e) => setAvatar(e.target.value)}/>
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
        </form>
    )
}

export default AddUser
