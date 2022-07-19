const Landing = ({ user }) => {
  return (
    <main className='text-center bg-slate-900/20'>
      <h1 className='pt-5 text-4xl font-thin text-slate-300'>{user ? 'Hello ' + user.name + '.': 'Please log in or create an account to continue...'}</h1>
      <h1 className='pb-5 text-3xl font-thin text-amber-500'>{user && 'Your secrets are safe.'}</h1>
    </main>
  )
}

export default Landing
