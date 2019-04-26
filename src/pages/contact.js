import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/contact.css"
import Helmet from "react-helmet"

const ContactPage = () => (
  <Layout>
    <Helmet />
    <SEO title="Contact Me" />
    <div className="container bootstrap snippets">
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="contact-detail-box">
            <i className="fa fa-th fa-3x text-colored" />
            <h4>Get In Touch</h4>
            <abbr title="Phone">P:</abbr> (123) 456-7890
            <br />
            E:{" "}
            <a href="mailto:email@email.com" className="text-muted">
              email@email.com
            </a>
          </div>
        </div>
        {/*  end col */}

        <div className="col-sm-4">
          <div className="contact-detail-box">
            <i className="fa fa-map-marker fa-3x text-colored" />
            <h4>Our Location</h4>

            <address>
              795 Folsom Ave, Suite 600
              <br />
              San Francisco, CA 94107
              <br />
            </address>
          </div>
        </div>
        {/*  end col */}

        <div className="col-sm-4">
          <div className="contact-detail-box">
            <i className="fa fa-book fa-3x text-colored" />
            <h4>24x7 Support</h4>

            <p>Industry's standard dummy text.</p>
            <h4 className="text-muted">1234 567 890</h4>
          </div>
        </div>
        {/*  end col */}
      </div>
      {/*  end row */}
      <div className="row">
        <div className="col-sm-6">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=New+York+University&amp;key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              style={{ width: "100%", height: "360px" }}
            />
          </div>
        </div>
        {/*  end col */}
        {/*  Contact form */}
        <div className="col-sm-6">
          <form
            role="form"
            name="netlify-form"
            id="netlify-form"
            netlify
            className="form-main"
          >
            <div className="form-group">
              <label for="name2">Name</label>
              <input
                className="form-control"
                id="name2"
                name="name"
                onBlur="if(this.value == '') this.value='Name'"
                onFocus="if(this.value == 'Name') this.value=''"
                type="text"
                value="Name"
              />
              <div className="error" id="err-name" style={{ display: "none" }}>
                Please enter name
              </div>
            </div>{" "}
            {/*  /Form-name */}
            <div className="form-group">
              <label for="email2">Email</label>
              <input
                className="form-control"
                id="email2"
                name="email"
                type="text"
                onFocus="if(this.value == 'E-mail') this.value='';"
                onBlur="if(this.value == '') this.value='E-mail';"
                value="E-mail"
              />
              <div
                className="error"
                id="err-emailvld"
                style={{ display: "none" }}
              >
                E-mail is not a valid format
              </div>
            </div>{" "}
            {/*  /Form-email */}
            <div className="form-group">
              <label for="message2">Message</label>
              <textarea
                className="form-control"
                id="message2"
                name="message"
                rows="5"
                onBlur="if(this.value == '') this.value='Message'"
                onFocus="if(this.value == 'Message') this.value=''"
              >
                Message
              </textarea>

              <div
                className="error"
                id="err-message"
                style={{ display: "none" }}
              >
                Please enter message
              </div>
            </div>{" "}
            {/*  /col */}
            <div className="row">
              <div className="col-xs-12">
                <div id="ajaxsuccess" className="text-success">
                  E-mail was successfully sent.
                </div>
                <div
                  className="error"
                  id="err-form"
                  style={{ display: "none" }}
                >
                  There was a problem validating the form please check!
                </div>
                <div className="error" id="err-timedout">
                  The connection to the server timed out!
                </div>
                <div className="error" id="err-state" />
                <button
                  type="submit"
                  className="btn btn-primary btn-shadow btn-rounded w-md"
                  id="send"
                >
                  Submit
                </button>
              </div>{" "}
              {/*  /col */}
            </div>{" "}
            {/*  /row */}
          </form>{" "}
          {/*  /form */}
        </div>{" "}
        {/*  end col */}
      </div>{" "}
      {/*  end row */}
    </div>
  </Layout>
)

export default ContactPage
