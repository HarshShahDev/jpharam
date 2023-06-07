import {
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const socialLinks = [
  {
    url: "#",
    icon: GlobeAltIcon,
  },
  {
    url: "#",
    icon: FaFacebook,
  },
  {
    url: "#",
    icon: FaInstagram,
  },
  {
    url: "#",
    icon: AiOutlineTwitter,
  },
];
export default function Stats() {
  return (
    <div className="p-2 border-b border-gray-200">
      <div className="mx-auto max-w-6xl flex flex-row justify-between items-center ">
        <ul className="flex space-x-4 text-sm">
          <li className="text-light font-bold">
            <a
              href="mailto:info@mail.com?Subject=Flower%20greetings%20to%20you"
              className="flex items-center gap-1 hover:text-secondary"
            >
              <EnvelopeIcon className="h-4 w-4 inline text-secondary" />{" "}
              info@mail.com
            </a>
          </li>
          <li className="text-light font-bold">
            <a href="locations.html" className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4 inline text-secondary" /> 15/A,
              Nest Tower, NYC
            </a>
          </li>
        </ul>
        <div className="flex gap-3 text-light">
          {socialLinks.map((socialLink, idx: number) => (
            <a href={socialLink.url} key={idx}>
              <socialLink.icon className="h-4 w-4 inline text-secondary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
