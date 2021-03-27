import Button from './Button'

const Header = ({onAdd, showAddUser}) => {
    return (
        <header>
          <h1>Users</h1>  
          <Button 
            color={showAddUser ? 'blue' : 'green'} 
            text={showAddUser ? 'Close' : 'Add'} 
            onClick={onAdd}
          />
        </header>
    )
}

export default Header