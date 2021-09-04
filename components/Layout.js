import Navbar from "./Navbar"

export const Layout = ({ children }) => {
    return (
        <div className='page-container'>
            <Navbar />
            {children}
        </div>
    )
}
export default Layout