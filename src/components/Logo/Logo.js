
export default function Logo () {

  const handleClick = () => {
    
  }

  return (
    <>
      <button className="logo"><img src={process.env.PUBLIC_URL+"/iconsImg/logo.png"} alt="logo" className="logo-button" onClick={handleClick} /></button>
      
    </>
  )
}