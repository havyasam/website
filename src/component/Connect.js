import '../css/Connect.css'
function Connect(){
    return(
        <>
        <div class="contact-section">
    <h2 class="contact-heading">Contact Me</h2>
    <div class="contact-form">
      <form action="#" method="post">
        <div class="form-group">
          <label for="name">Your Name:</label>
          <input type="text" className="inpt" id="name" name="name" required/>
        </div>

        <div class="form-group">
          <label for="email">Your Email:</label>
          <input type="email" id="email" name="email" required/>
        </div>

        <div class="form-group">
          <label for="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <div class="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </div>
        </>
    )

}
export default Connect