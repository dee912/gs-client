import { useEffect, useState } from 'react'

import { getAllShoes } from '../../lib/api'
import ShoeCard from './ShoeCard'

export default function ShoeIndex() {

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
      <div className="filters">
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>--</option>
            <option>Trainers</option>
            <option>Loafers</option>
            <option>Heels</option>
            <option>Boots</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Colour</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>--</option>
            <option>Brown</option>
            <option>Black</option>
            <option>Grey</option>
            <option>White</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Size</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Price</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>--</option>
            <option>£0 - 30</option>
            <option>£30 - 60</option>
            <option>£60 - 90</option>
            <option>£90 - 120</option>
          </select>
        </div>
      </div>
      
      <div className="index">
        {
          shoes && shoes.map(shoe => (
            <ShoeCard 
              key={shoe.id}
              {...shoe}
            />
          ))
        }
      </div>
    </>
  )
}
