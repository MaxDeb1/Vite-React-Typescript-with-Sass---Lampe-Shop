import ease from '../../assets/images/ease.svg'
import Navbar from '../Navbar';

import './style.scss';

const Header = () => {
    return (
        <header>
            <img className="logo" src={ease} alt="ease logo" />
            <Navbar />
        </header>
    );
};

export default Header;