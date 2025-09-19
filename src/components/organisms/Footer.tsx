"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    // Function to update time
    const updateTime = () => {
      setTimeString(new Date().toLocaleTimeString());
    };

    // Update time immediately
    updateTime();

    // Set up interval to update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-3xl px-4 py-10 text-sm border-t border-zinc-800 text-zinc-400 grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* left */}
        <div className="flex flex-col gap-4">
          <p className="font-medium text-zinc-200">Hilmi Razib Yusuf</p>
          <p className="text-zinc-500">
            Passionate and creative software engineer from Indonesia, striving
            to build user-friendly, great-looking software.
          </p>
          <div className="flex gap-4">
            <Link href="https://github.com/yourusername" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://twitter.com/yourusername" target="_blank">
              <FaXTwitter />
            </Link>
            <Link href="https://instagram.com/yourusername" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="mailto:you@example.com">
              <FaEnvelope />
            </Link>
          </div>
        </div>

        {/* center */}
        <div>
          <h3 className="mb-3 font-medium text-zinc-200">Navigate</h3>
          <ul className="space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/uses">Uses</Link></li>
          </ul>
        </div>

        {/* right */}
        <div>
          <h3 className="mb-3 font-medium text-zinc-200">More</h3>
          <ul className="space-y-2">
            <li><Link href="/rss.xml">RSS Feed</Link></li>
            <li>
              <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                Scroll to Top
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-3xl flex flex-col md:flex-row justify-between items-center border-t border-zinc-800 px-4 py-6 text-xs text-zinc-500">
        <p>© {year}</p>
        <p>{timeString}</p>
      </div>
    </footer>
  );
}