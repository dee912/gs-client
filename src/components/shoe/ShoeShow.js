import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { getAllShoes, getSingleShoe } from '../../lib/api'

export default function ShoeShow() {

  const [shoe, setShoe] = useState(null)
  const [shoes, setShoes] = useState(null)
  const { shoeId } = useParams()

  useEffect(() => {
    const getData = async () => {
      const { data } = await getSingleShoe(shoeId)
      setShoe(data)
      const res = await getAllShoes()
      setShoes(res.data)
    }
    getData()
  }, [shoeId])

  return (
    <div className="show-page">
      {shoe && shoes &&
      <>

        <div className="shoe-details">
          <div className="extra-images">
            <img src={shoe.image} />
            <img src={shoe.image} />
            <img src={shoe.image} />
            <img src={shoe.image} />
            
          </div>
          <img src={shoe.image} />
          <div className="shoe-name">
            <h1>{shoe.name}</h1>
            <div className="price">
              <h5>£{shoe.price}.00</h5>
              <p><a href="#">Shipping & returns information</a></p>
            </div>
            <div className="colour">
              <h5>Colour: {shoe.colour}</h5>
              <p><a href="#">Size guide</a></p>
            </div>
            <div key={shoe.id} className="form-group">
              <label htmlFor="exampleFormControlSelect1">Size</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>--</option>
                {shoe.inStock 
                  ? 
                  shoe.size.map(s => (
                    <option key={s}>{s}</option>
                  ))
                  :
                  <option>SOLD OUT</option>
                }
              </select>
            </div>
            <button type="button" className="btn btn-outline-dark">Add to bag</button>
            {shoe.inStock ? <h5 className="stock-info">Selling fast!</h5> : <h5 className="stock-info">Sold out</h5>}
          </div>
        </div>

        <div className="stock">
          <h4>Product description</h4>
          <p>{shoe.description}</p>
        </div>
        
        <h4>Some recommendations</h4>
        <div className="rec">
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
        </div>

      </>
      }
    </div>
  )
}