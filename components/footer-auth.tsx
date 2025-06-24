"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="bg-nephos-bluebg text-white text-center py-10 px-4 [clip-path:ellipse(50%_100%_at_25%_100)]">
        <span className="block text-[48px] leading-none text-cyan-400">“</span>
        <p className="mt-4 text-[20px] leading-[24px] font-[Albert\ Sans] font-normal">
          Si votre mal être est trop important et que vous avez besoin d’une
          aide médicale <span className="underline">urgente</span>.
        </p>
        <p className="mt-4 text-[24px] leading-[28px] font-[Albert\ Sans] font-bold">
          0800 800 854
        </p>
      </div>

      <div className="bg-[#FFFBF5] py-6">
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="text-[#0D347A] hover:text-blue-600"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-[#0D347A] hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-[#0D347A] hover:text-red-600"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-[#0D347A] hover:text-blue-700"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
        {/* Texte copyright */}
        <p className="mt-4 text-center text-sm text-[#0D347A] font-sans">
          © {new Date().getFullYear()}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
