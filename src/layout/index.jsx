
import React, { useLayoutEffect } from 'react'
import Sidebar from '../components/SideBar'
import Header from '../components/Header'


//styles 
import "./layout.scss"
import { useTitle } from '../hooks/useTitle'

const MainLayout = ({children, title }) => {
  const { rename } = useTitle()

  useLayoutEffect (() => {
    if (title) {
      rename(title)
    }
  }, [title])

  return (
    <div className="layout">
        <div className="layout__sidebar">
        <Sidebar />
        </div>

        <div className="layout__content">
          <div className="layout__content__header">
            <Header />
          </div>
        {children}
       </div>
    </div>
  )
}

export default MainLayout