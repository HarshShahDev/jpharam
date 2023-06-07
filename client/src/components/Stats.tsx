import {
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Stats() {
  return (
    <div className="p-2 border-b border-gray-200">
      <div className="mx-auto max-w-6xl flex flex-row justify-between items-center ">
        <ul className="flex space-x-4 text-sm">
          <li className="text-light font-bold">
            <a
              href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"
              className="flex items-center gap-1 hover:text-secondary"
            >
              <EnvelopeIcon className="h-4 w-4 inline text-secondary" />{" "}
              info@webmail.com
            </a>
          </li>
          <li className="text-light font-bold">
            <a href="locations.html" className="flex items-center gap-1">
              <MapPinIcon className="h-4 w-4 inline text-secondary" /> 15/A, Nest
              Tower, NYC
            </a>
          </li>
        </ul>
        <div className="flex gap-3 text-light">
          <a href="#">
            <GlobeAltIcon className="h-4 w-4 inline hover:text-secondary" />
          </a>
          <a href="#">
            <FaFacebook className="h-4 w-4 inline hover:text-secondary" />
          </a>
          <a href="#">
            <FaInstagram className="h-4 w-4 inline hover:text-secondary" />
          </a>
          <a href="#">
            <AiOutlineTwitter className="h-4 w-4 inline hover:text-secondary" />
          </a>
        </div>
      </div>
    </div>
  );
}
