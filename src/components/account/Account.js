import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllShoes } from '../../lib/api'

export default function Account() {

  const [shoes, setShoes] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data } = await getAllShoes()
      setShoes(data)
    }
    getData()
  }, [])

  console.log(shoes)

  return (
    <>
      <div className="account">
        <div className="top">
          <h1>Hi, Joe Blogs!</h1>
          <div>
            <h3>Total points: 100</h3>
            <p>get to 50 for a £5.00 voucher</p>
          </div>
          <h3>Available vouchers: £10.00</h3>
        </div>
        <h3>Previous orders</h3>
        <div className="bottom">
          {shoes &&
        <>
          <Link to={'/shoes/1/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[3].image} alt={shoes[3].name}/>
              <h5 className="title">{shoes[3].name}</h5>
            </div>  
          </Link> 
          <Link to={'/shoes/3/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[2].image} alt={shoes[2].name}/>
              <h5 className="title">{shoes[2].name}</h5>
            </div>  
          </Link>
          <Link to={'/shoes/6/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[5].image} alt={shoes[5].name}/>
              <h5 className="title">{shoes[5].name}</h5>
            </div>  
          </Link>
          <Link to={'/shoes/5/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[4].image} alt={shoes[4].name}/>
              <h5 className="title">{shoes[4].name}</h5>
            </div>  
          </Link>
        </>
          }
        </div>
      </div>
      <button type="button" className="logout btn btn-outline-dark">Logout</button>
    </>
  )
}