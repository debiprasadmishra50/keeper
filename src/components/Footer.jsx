import { React } from "react";

function Footer() {
    return (
        <footer>
            <p>
                &copy; by{" "}
                <a
                    href="https://www.debiprasadmishra.net"
                    target="_blank"
                    rel="noreferrer"
                >
                    Debi Prasad Mishra
                </a>{" "}
                {new Date().getFullYear()}
            </p>
        </footer>
    );
}

export default Footer;
