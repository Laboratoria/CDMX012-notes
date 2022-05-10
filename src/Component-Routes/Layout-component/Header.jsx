import exitImg from '../../resource/exitImg.png'

function Header ({handleExit, UserInfo}) {
return <>
  <header>
    <img src={UserInfo.photoURL} className='User-photo' alt='logo' /> 
    <h3>{UserInfo.displayName}</h3>
    <button className='LogOut'  onClick={()=>{
          handleExit().then(()=>{console.log('good bye')})
        }}>
  <img src={exitImg} className='exit-Logo' alt='Exit' />
  </button>
</header>
</>
}
export default Header;