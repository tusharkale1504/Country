import { NavLink } from "react-router-dom";

const Footers = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <h1 className="brand-title">WorldAtlas</h1>
                        <p className="brand-description">
                            Your guide to exploring the world. Discover countries, cultures, and more!
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a ><NavLink to="/">Home</NavLink></a></li>
                            <li><a ><NavLink to="/about">About</NavLink></a></li>
                            <li><a ><NavLink to="/country">Countries</NavLink></a></li>
                            <li><a ><NavLink to="/contact">Contact</NavLink></a></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; 2025 WorldAtlas. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
