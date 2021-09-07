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
    <div className="account">
      <div className="top">
        <h1>Hi, Joe Blogs!</h1>
        <h2>Total points: 100</h2>
        <p>get to 1000 for a £10 voucher</p>
        <h2>Available vouchers: £5.00</h2>
      </div>
      <h2>Previous orders</h2>
      <div className="bottom">
        {shoes &&
        <>
          <Link to={'/shoes/1/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[3].image} alt={shoes[3].name}/>
              <h3 className="title">{shoes[3].name}</h3>
            </div>  
          </Link> 
          <Link to={'/shoes/3/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[2].image} alt={shoes[2].name}/>
              <h3 className="title">{shoes[2].name}</h3>
            </div>  
          </Link>
          <Link to={'/shoes/6/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[5].image} alt={shoes[5].name}/>
              <h3 className="title">{shoes[5].name}</h3>
            </div>  
          </Link>
          <Link to={'/shoes/5/'}>
            <div className="cardScroll">
              <img className="shoeImage" src={shoes[4].image} alt={shoes[4].name}/>
              <h3 className="title">{shoes[4].name}</h3>
            </div>  
          </Link>
        </>
        }
      </div>
      <button type="button" className="btn btn-outline-dark">Logout</button>
    </div>
  )
}