const Landing = ({ user }) => {
  return (
    <main className='text-center'>
      <h1 className='p-5 text-4xl font-thin text-slate-300'>{user ? 'Hello ' + user.name + '.' : 'Please log in or create an account to continue...'}</h1>
    </main>
  )
}

export default Landing
