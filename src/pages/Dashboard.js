import React from 'react'
import { Info, Repos, User, Search, Navbar } from '../components'
import loadingImage from '../images/preloader.gif'
import { GithubContext, useGlobalContext } from '../context/context'
const Dashboard = () => {
  const data = useGlobalContext()
  console.log(data)
  return (
    <main>
      {/* <Navbar />
      <Search /> */}
      <Info />
      <User />
      <Repos />
    </main>
  )
}

export default Dashboard
