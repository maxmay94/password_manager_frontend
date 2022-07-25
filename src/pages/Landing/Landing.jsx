const Landing = ({ user, passwords }) => {

  return (
    <div className='text-center bg-slate-900 h-screen'>
      <h1 className='pt-5 text-4xl font-thin text-slate-300'>{user ? 'hello ' + user.name + '.': 'please log in or create an account to continue...'}</h1>
      <h1 className='pb-5 text-3xl font-thin text-amber-500'>{user && 'your secrets are safe.'}</h1>

      <div className="px-40">
        {
          user&&
          <div className="text-white font-2xl font-extralight">
            {
              passwords?.map((password, i) => (
                <div key={password._id} className='text-center m-1'>
                  <div className={ i % 2 === 0 ? 'bg-blue-500 text-black py-3 hover:bg-slate-200 rounded-sm': 'bg-blue-900 py-3 hover:bg-slate-200 hover:text-slate-900 rounded-sm'}>
                    {password.site} {password.password}
                  </div>
                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Landing
