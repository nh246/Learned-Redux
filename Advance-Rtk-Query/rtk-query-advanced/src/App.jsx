
import './App.css'
import { Outlet } from 'react-router'
import { Link } from 'react-router';

function App() {
  


  return (
    <>
    <nav>
      <ul className='flex space-x-6 font-semibold items-center justify-center bg-black text-white p-2'>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='/users' >Users</Link></li>
        <li><Link to='/add_user' >Add User</Link></li>
        <li><Link to='/edit_user' >Edit User</Link></li>
      </ul>
    </nav>
      <main className='p-8 max-w-screen-lg mx-auto'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
