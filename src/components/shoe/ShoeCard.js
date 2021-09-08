import { Link } from 'react-router-dom'

export default function ShoeCard({ name, image, price, id, inStock }) {
  return (
    <Link to={`/shoes/${id}`}>
      <div className="card">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {inStock ? null : <h6 className="stock-info">Sold out</h6>}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">£{price}.00</li>
        </ul>
      </div>
    </Link>
  )
}