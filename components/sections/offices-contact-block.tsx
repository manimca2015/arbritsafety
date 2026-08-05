import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { offices, contactInfo, socialLinks } from "@/lib/data";

export function OfficesContactBlock() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {offices.map((office) => (
          <div
            key={office.label}
            className="group rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange/30 hover:shadow-lg"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange/10 text-orange transition duration-300 group-hover:bg-orange group-hover:text-white">
              <Building2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-navy">{office.label}</h3>
            <div className="mt-3 space-y-1.5">
              {office.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 text-sm text-navy/80 hover:text-orange"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {phone}
                </a>
              ))}
            </div>
            <p className="mt-3 flex items-start gap-2 text-sm text-navy/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {office.address}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm sm:flex-row sm:justify-between">
        <a
          href={`mailto:${contactInfo.email}`}
          className="flex items-center gap-2 text-sm font-semibold text-navy hover:text-orange"
        >
          <Mail className="h-5 w-5 shrink-0 text-orange" aria-hidden="true" />
          {contactInfo.email}
        </a>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-navy/5 text-navy transition hover:bg-navy hover:text-white"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
