import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        )}
        />
    </>
  )
}
// "Adicionar linhs de código no Footer na 2 versão do portfolio."
/*
 <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mikaias-da-silva-santos-b3a5ab226/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/mikaiassantos_/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/mikaiassantos"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2022.</p>
          </Col>
        </Row>
      </Container>
*/