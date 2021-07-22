export default function Contact(){
    return`
    <div class="container">
      <h1>Contact Us</h1>
      <p>Please contact us for any feedback or inquiries you have!</p>
      <div class="contact-box">
        <div class="contact-left">
          <h3>Send your request</h3>
          <form>
            <div class="input-row">
              <div class="input-group">
                <label>Full name</label>
                <input type="text" placeholder="John Smith" />
              </div>
              <div class="input-group">
                <label>Email</label>
                <input type="text" placeholder="xxx@emailaddress.com" />
              </div>
              <div class="input-group">
                <label>Message</label>
                <textarea
                  rows="10"
                  placeholder="Type your message ..."
                ></textarea>
              </div>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    `;
    }