export default function Home() {
  return (
    <div className="home">
      <div className="input-group mb-3">
        <p>Subscribe to our news letter to be infromed about new releases and sales!</p>
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
        </div>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <button type="button" className="btn btn-outline-dark">Subscribe</button>
      </div>
      <div className="both">
        <a href="/shoes">
          <div className="gender">
            <h1>Women</h1>
          </div>
        </a>
        <a href="/shoes">
          <div className="gender">
            <h1>Men</h1>
          </div>
        </a>
      </div>
    </div>
  )
}