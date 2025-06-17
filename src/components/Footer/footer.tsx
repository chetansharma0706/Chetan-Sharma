import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">
            Copyright
          &copy; {new Date().getFullYear()} Chetan. All rights reserved.
        </p>
        <div className="footer__social">
           <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-github-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-dribbble-fill"></i>
            </a>
            <a href="#" className="home__social-icon" target="_blank">
              <i className="ri-behance-fill"></i>
            </a>
            </div>

       </div>
       </footer>
  )
}

export default Footer