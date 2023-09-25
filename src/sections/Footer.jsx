import { headerLogo } from "../assets/icons";
import { copyrightSign } from "../assets/icons";
import { instagram, facebook, twitter } from "../assets/icons";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div
        id="footer-container"
        className="flex justify-between items-start gap-20 max-lg:flex-col text-white"
      >
        <div id="container-1">
          <a
            href="/"
            className="flex justify-start items-center gap-2.5 text-[32px] hover:cursor-pointer"
          >
            <img
              src={headerLogo}
              alt="Stryde-logo"
              className="rounded-lg bg-white w-[40px] h-[40px] "
            />
            <p className="mb-[1px] font-palanquin font-bold text-white">
              STRYDE
            </p>
          </a>
          <p className="mt-4 font-montserrat text-white-400 text-base sm:max-w-sm leading-7">
            Get shoes ready for the new term at your nearest store. Find Your
            perfect Size In Store. Get Rewards
          </p>
          <div id="social-links" className="mt-10 flex gap-6">
            {socialMedia.map((social) => (
              <img
                src={social.src}
                alt={social.alt}
                className="bg-white rounded-full w-[50px] h-[50px] p-3"
              />
            ))}
          </div>
        </div>

        <div id="container-2" className="flex flex-1 flex-wrap justify-between items-start gap-20">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className=" font-montserrat text-3xl font-medium text-white">{section.title}</h4>
              <ul className="mt-4 font-palanquin text-white-400">
                {section.links.map((link) => (
                  <li className="mt-2">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        id="footer-bottom"
        className="mt-24 flex max-sm:flex-col max-sm:justify-center max-sm:items-center justify-between"
      >
        <div className="flex gap-3 max-sm:items-center max-sm:justify-center">
          <img
            src={copyrightSign}
            alt="copyright icon"
            width={20}
            height={20}
            className="text-white"
          />
          <p className="text-white-400 font-montserrat">
            Copyright. All rights reserved.
          </p>
        </div>
        <a href="/" className="text-white-400 font-montserrat">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
