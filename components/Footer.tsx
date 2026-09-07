"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const { brand, contact, secondaryLinks, socialLinks, ui } = dict;
  const ContactIcon = contact.icon;

  return (
    <footer className="border-t border-slate-100 px-4 py-16 bg-slate-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-[14px] bg-white shadow-sm">
              <Image
                src={brand.logo}
                alt="TactLink logo"
                width={36}
                height={36}
                className="relative h-8 w-8 object-contain opacity-90"
              />
            </span>

            <div>
              <p className="text-xl font-bold text-black tracking-tight">TactLink</p>
              <p className="text-xs font-semibold text-slate-500">
                Smart Directory
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 font-medium">
            {ui.footerDesc}
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-950 transition"
          >
            <ContactIcon size={18} />
            {contact.email}
          </a>

          <div className="flex flex-wrap gap-5 md:justify-end">
            {secondaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-500 hover:text-blue-950 transition"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 md:justify-end">
            {socialLinks.slice(0, 3).map((item) => (
              <a
                key={`${item.label}-${item.region}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-slate-400 hover:text-blue-950 transition"
              >
                {item.region}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[1440px] flex-col gap-3 border-t border-slate-200/50 pt-8 text-xs text-slate-400 font-medium sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} TactLink. {ui.allRightsReserved}</p>
        <p>{ui.footerSlogan}</p>
      </div>
    </footer>
  );
}
