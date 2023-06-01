import './Topbar.scss';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

// const bar = document.querySelector('.topbar');
// const ham = document.querySelector('.hamburger');

// ham.addEventListener('click', () => {
//   bar.classList.toggle('active');
// })

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')} id='topbar'>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">giant.</a>
          </div>
          <div className="item__container">
            <CallIcon className='icon' />
            <span>+234 907 038 0969</span>
          </div>
          <div className="item__container">
            <EmailIcon className='icon' />
            <span>supremenftcoder@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
