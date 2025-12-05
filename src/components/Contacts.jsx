import React from 'react'
import SocialLinkButton from './socialLinkButton'
import CV from "../assets/John_Lester_Castillo_LatestCV.pdf"

function Contacts () {

    const fill = "white";
    const iconSize = 24;
    const socialLink = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/johnlester.castillo.1",
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={iconSize} height={iconSize} viewBox="0 0 24 24">
              <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z">
              </path>
            </svg>,
    },
    {
      title: "Telegram",
      href: "https://t.me/Kast1ly0",
      icon:  <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={iconSize} height={iconSize} viewBox="0 0 24 24">
              <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z">
              </path>
            </svg>
    },
    {
      title: "Email",
      href: "mailto:castillojlb0922@gmail.com",
      icon:   <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={iconSize} height={iconSize} viewBox="0 0 24 24">
                <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z">
                </path>
              </svg>
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/john-lester-castillo-828890327/",
      icon:   <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width={iconSize} height={iconSize} viewBox="0 0 24 24">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
                </path>
              </svg>
    }
  ]

  return (
     <div className="flex justify-center items-center mt-4 gap-2">
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className="cursor-pointer 
            hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]
            hover:border-purple-500 hover:text-purple-500 
            text-white p-1 flex items-center gap-2 border border-white rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path><path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z">
                </path>
              </svg>
              Resume
            </button>
          </a>
          <div className="social-link flex m-0">
            {socialLink.map((link) => (
              <SocialLinkButton key={link.title} href={link.href} className="mx-1 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                {link.icon}
              </SocialLinkButton>
            ))}
          </div>
    </div>
  )
}

export default Contacts;