import React from 'react'

class Footer extends React.Component {
    
      render () {
        return (
            <div className="footer-container">
                <div className="footer-graphic-block flex-container">
                    <a href="mailto:ejectionengineering@gmail.com" target="_blank" rel="noopener noreferrer">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-envelope-o fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Email Us</p>
                        </div>
                    </a>
                    <a href="http://twitter.com/ejectioneng" target="_blank" rel="noopener noreferrer">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Twitter</p>
                        </div>
                    </a>
                    <a href="https://instagram.com/ejectioneng/" target="_blank" rel="noopener noreferrer">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-instagram fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>Instagram</p>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/channel/UCryksHEgAN_BOVbfpUydVxA" target="_blank" rel="noopener noreferrer">
                        <div className="contact-type" >
                            <span class="fa-stack fa-4x">
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-youtube-play fa-inverse fa-stack-1x"></i>
                            </span>
                            <p>YouTube</p>
                        </div>
                    </a>
                </div>
                <div className="copyright-content">
                  <p>© 2019 ejectionengineering.com. All Rights Reserved.</p>
                </div>
            </div>
        );
      }
}

export default Footer;