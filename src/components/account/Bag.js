export default function Bag() {
  return (
    <div className="bag">
      <h1>Checkout</h1>
      <div className="personal">
        <div className="left">
          <form>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer01">First name</label>
                <input type="text" className="form-control is-valid" id="validationServer01" value="Joe" required/>
                <div className="valid-feedback">
                Looks good!
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer02">Last name</label>
                <input type="text" className="form-control is-valid" id="validationServer02" value="Blogs" required/>
                <div className="valid-feedback">
                Looks good!
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer03">City</label>
                <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
                <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">County</label>
                <select className="custom-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div id="validationServer04Feedback" className="invalid-feedback">
                Please select a valid county.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Postcode</label>
                <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                <div id="validationServer05Feedback" className="invalid-feedback">
                Please provide a valid postcode.
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationServer03">Card number</label>
                <input type="text" className="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/>
                <div id="validationServer03Feedback" className="invalid-feedback">
                Please provide a valid card number.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer04">Expiry date</label>
                <select className="custom-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                  <option selected disabled value="">Choose...</option>
                  <option>...</option>
                </select>
                <div id="validationServer04Feedback" className="invalid-feedback">
                Please select a valid expiry date.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">Name on card</label>
                <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                <div id="validationServer05Feedback" className="invalid-feedback">
                Please provide a valid name.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationServer05">CCV</label>
                <input type="text" className="form-control is-invalid" id="validationServer05" aria-describedby="validationServer05Feedback" required/>
                <div id="validationServer05Feedback" className="invalid-feedback">
                Please provide a valid CCV.
                </div>
              </div>
            </div>
            <label>
              <input type="checkbox" name="sameadr"/> 
            Shipping address same as billing
            </label>
            <div>
              <button className="btn btn-primary" type="submit">Checkout</button>
              <button className="apple btn btn-dark" type="submit">Apple pay</button>
            </div>
          </form>
        </div>
        <div className="right">
          <p>Cart</p>
          <p><a href="/shoes/1">Product 1</a> <span className="price">£60</span></p>
          <p><a href="/shoes/2">Product 2</a> <span className="price">£60</span></p>
          <p><a href="/shoes/3">Product 3</a> <span className="price">£60</span></p>
          <hr/>
          <p>Total: £180</p>
        </div>
      </div>
      
    </div>
    
  )
}