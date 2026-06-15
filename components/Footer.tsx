import Image from "next/image";
import { brand, contact, secondaryLinks, socialLinks } from "@/lib/content";

export default function Footer() {
  const ContactIcon = contact.icon;

  return (
    <footer className="border-t border-white/10 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-yellow-300/25 bg-slate-900">
              <span className="absolute inset-0 bg-gradient-to-br from-yellow-300/15 via-cyan-300/10 to-transparent" />
              <Image
                src={brand.logo}
                alt="TactLink logo"
                width={36}
                height={36}
                className="relative h-8 w-8 object-contain"
              />
            </span>

            <div>
              <p className="text-lg font-black text-white">TactLink</p>
              <p className="text-xs font-medium text-slate-500">
                Smart Directory
              </p>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
            Reimagine networking with Smart Directory. Transform professional
            networking, go paperless, foster collaboration, and grow your community.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-yellow-100"
          >
            <ContactIcon size={16} />
            {contact.email}
          </a>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {secondaryLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-slate-400 hover:text-yellow-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            {socialLinks.slice(0, 3).map((item) => (
              <a
                key={`${item.label}-${item.region}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-yellow-100/65 hover:text-yellow-100"
              >
                {item.region}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} TactLink. All rights reserved.</p>
        <p>Built for smarter, paperless networking.</p>
      </div>
    </footer>
  );
}