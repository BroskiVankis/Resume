import React from "react";

function Footer() {
    return (
        <>
        <div className="footer bg-[#171717]">
            <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
                <h1 className="text-3x1">Ivan®</h1>
                <div className="flex gap-4 cursor-pointer ">
                <a href="https://twitter.com/The3rdDegreeAI">
                    <i className="fa-brands fa-twitter border-2 border-white p-2 rounded-[100%]"></i>
                </a>
                <a href="https://www.instagram.com/i.ivanov12/">
                    <i className="fa-brands fa-instagram border-2 border-white p-2 rounded-[100%]"></i>
                </a>
                <a href="https://github.com/BroskiVankis">
                    <i className="fa-brands fa-github border-2 border-white p-2 rounded-[100%]"></i>
                </a>
                <a href="https://www.linkedin.com/in/ivan-ivanov-a50731185/">
                    <i className="fa-brands fa-linkedin border-2 border-white p-2 rounded-[100%]"></i>
                </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;