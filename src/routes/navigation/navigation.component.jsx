import {Link, Outlet} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as TempestLogo} from "../../assets/logo.svg";
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <TempestLogo className='logo'/>
                </Link>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        shop
                    </Link>
                </div>

                <div className="nav-links-container">
                    <Link className='nav-link' to='/sign-in'>
                        sign in
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;