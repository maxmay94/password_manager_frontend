const Landing = ({ user, passwords }) => {

  return (
    <div className='text-center bg-slate-900'>
      <h1 className='pt-5 text-4xl font-thin text-slate-300'>{user ? 'hello ' + user.name + '.': 'please log in or create an account to continue...'}</h1>
      <h1 className='pb-5 text-3xl font-thin text-amber-500'>{user && 'your secrets are safe.'}</h1>

      <div className="">
        {
          passwords?
          <div className="bg-blue-900 text-white font-2xl font-thin">
            {
              passwords?.map((password, i) => (
                <div id={i} className='text-center'>
                  <div className={ i % 2 === 0 ? 'bg-blue-500 text-black py-3 hover:bg-slate-200': 'py-3 hover:bg-slate-200'}>
                    {password.site} {password.password}
                  </div>
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
