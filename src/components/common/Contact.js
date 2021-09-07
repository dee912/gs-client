export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-us">
        <h1>Contact Us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Reason</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>--</option>
              <option>Return issues</option>
              <option>Delivery issues</option>
              <option>Product issue</option>
              <option>General query</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Brief explination</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
      </div>
      <div className="faq">
        <h1>FAQ&apos;s</h1>
        <div className="accordion" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How long is delivery?
                </button>
              </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              <div className="card-body">
                All shipping infromation can be found <a href="#">here</a>.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  I wish to make a return.
                </button>
              </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
              <div className="card-body">
                Returns can be made by XXX, please see out T&Cs
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Do you have a size guide?
                </button>
              </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
              <div className="card-body">
                Our size information/ conversions can be found <a href="#">here</a>. All sizes displayed are UK sizes.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}