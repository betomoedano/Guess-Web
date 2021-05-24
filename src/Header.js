import React from "react";

function Header() {
    return (
        <div>
            <ul className="flex space-x-10">
                <li className="flex-1"><a href="default.asp">Home</a></li>
                <li className="flex-1"><a href="news.asp">News</a></li>
                <li className="flex-1"><a href="contact.asp">Contact</a></li>
                <li className="flex-1"><a href="about.asp">About</a></li>
            </ul>
        </div>
    )
}

export default Header