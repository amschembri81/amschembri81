import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-20 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Amanda Morrison</p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="mailto:amschembri81@gmail.com"
            className="hover:text-white transition"
          >
            amschembri81@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/amschembri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/amschembri81"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
