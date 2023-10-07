
import logo from '../../../../assets/logo1.png';
const Header = () => {
    return (
        <div className=' text-center'>
           <img src={logo} alt="logo" className=" mx-auto" /> 
           <p className=' text-sm  font-poppins text-slate-600'>"Where words fail, music speaks." - Hans Christian Andersen</p>
        </div>
    );
};

export default Header;