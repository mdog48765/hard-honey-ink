import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hardhoneyink?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575888311591",
    icon: <FaFacebookF />,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@hardhoneyink",
    icon: <FaTiktok />,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[--hh-border] bg-[--hh-paper] text-lg text-[--hh-ink] transition-all hover:bg-[--hh-honey] hover:scale-105"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}