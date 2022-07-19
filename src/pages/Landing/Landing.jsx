const Landing = ({ user, passwords }) => {

  return (
    <div className='text-center bg-slate-900/20'>
      <h1 className='pt-5 text-4xl font-thin text-slate-300'>{user ? 'hello ' + user.name + '.': 'please log in or create an account to continue...'}</h1>
      <h1 className='pb-5 text-3xl font-thin text-amber-500'>{user && 'your secrets are safe.'}</h1>

      <div className="bg-red-400">
        {
          passwords?
          <div>
            {
              passwords?.map((password, i) => (
                <div id={i}>
                  {password.site} {password.password}
                </div>
              ))
            }
          </div>
          :
          <div>
            you dont have passwords
          </div>
        }
      </div>
    </div>
  )
}

export default Landing
