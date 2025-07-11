import { useContext } from 'react'
import { AppContent } from '../context/AppContext'
import Navbar from '../components/Navbar'

const DashboardLayout = ({ activeMenu, children }) => {
  const { userData, isLoggedin } = useContext(AppContent);

  return (
    <div className="dashboardLayout">
      <Navbar activeMenu={activeMenu} />
      {isLoggedin && userData ? (
        <div className="dashboardContent">
          {children}
        </div>
      ) : (
        <div className="loadingOrError">
          Loading user data...
        </div>
      )}
    </div>
  )
}

export default DashboardLayout;