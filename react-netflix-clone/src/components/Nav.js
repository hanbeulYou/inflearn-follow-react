import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Nav.css"

export default function Nav() {
  
  const [show, setShow] = useState(false)
  const [searchValue, setSearchvalue] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  const handleChange = (e) => {
    setSearchvalue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt='Netflix Logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png'
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder='영화를 검색해주세요.'/>
      <img
        alt="User logged"
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117'
        className='nav__avatar'
      />
    </nav>
  )
}
