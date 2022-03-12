const Footer = () => {
    const footerYear = new Date().getFullYear()
    return(
        <footer className="footer p-6 bg-gray-700 text-primary-content footer-center">
            <p>Copyright &copy; {footerYear} All rights reserved</p>
        </footer>
    )
}

export default Footer
