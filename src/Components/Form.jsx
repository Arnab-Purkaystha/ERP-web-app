import React from 'react'
//This is Contact Us Form with Pune map as Iframe
function Form() {
  return (
    <div className=" m-1" style={{ background: '#FAF9F6', border: '5px solid #ddd', animation: 'glow 2s infinite' }}>
    <style>
      {`
        @keyframes glow {
          0% {
            border-color: #000;
          }
          50% {
            border-color: #a1caf1;
          }
          100% {
            border-color: #000;
          }
        }
      `}
    </style>
        
      <div className="row justify-content-center m-3">
        <div className="col-lg-6">
          <h1 className="mb-3">Contact Us</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="your-name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="your-name" name="your-name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-surname" className="form-label">Your Surname</label>
                <input type="text" className="form-control" id="your-surname" name="your-surname" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="your-email" name="your-email" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="your-subject" className="form-label">Your Subject</label>
                <input type="text" className="form-control" id="your-subject" name="your-subject" />
              </div>
              <div className="col-12">
                <label htmlFor="your-message" className="form-label">Your Message</label>
                <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-6">
                    <button type="submit" className="btn btn-dark w-100 fw-bold">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <h3 className='text-center'>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396975!2d73.86296739999999!3d18.52461645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710072431282!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Form;