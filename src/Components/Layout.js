import React from 'react'
import Footer from './Footer'
import Header from './Header'
function Layout({Children})
{
    return(
        <div> <Header/>
        <div>
            {Children}
        </div>
        <Footer/></div>
      
    )
}
export default Layout;