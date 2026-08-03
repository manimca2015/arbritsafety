import { Mail, Phone } from "lucide-react";
import { contactInfo, socialLinks } from "@/lib/data";

export function TopBar() {
  return (
    <div className="hidden bg-navy py-2 text-xs text-white/80 lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <div className="flex items-center gap-4">
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            {contactInfo.email}
          </a>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          {contactInfo.phones.map((phone, i) => (
            <span key={phone.label} className="flex items-center gap-1.5">
              <span className="text-white/60">{phone.label}</span>
              <a
                href={`tel:${phone.number.replace(/\s+/g, "")}`}
                className="flex items-center gap-1 hover:text-white"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {phone.number}
              </a>
              {i < contactInfo.phones.length - 1 && <span className="text-white/30">|</span>}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-white/70 hover:text-white"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
