"use client";

import { useState } from "react";
import { Check, Link as LinkIcon, Mail, MessageCircle } from "lucide-react";
import { FacebookIcon } from "@/components/icons/SocialIcons";

const buttonClass =
  "inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background";

export default function SharePost({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Споделете във Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon size={18} className="w-[18px] h-[18px]" />,
      external: true,
    },
    {
      label: "Споделете във Viber",
      href: `viber://forward?text=${encodeURIComponent(`${title} ${url}`)}`,
      icon: <MessageCircle className="w-[18px] h-[18px]" aria-hidden="true" />,
      external: false,
    },
    {
      label: "Споделете по имейл",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <Mail className="w-[18px] h-[18px]" aria-hidden="true" />,
      external: false,
    },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API is unavailable on insecure origins; nothing to fall back to.
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4 mt-12 pt-8 border-t border-border">
      <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Споделете</span>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={buttonClass}
            aria-label={link.label}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {link.icon}
          </a>
        ))}
        <button type="button" className={buttonClass} onClick={copy} aria-label={copied ? "Линкът е копиран" : "Копирайте линка"}>
          {copied ? <Check className="w-[18px] h-[18px]" aria-hidden="true" /> : <LinkIcon className="w-[18px] h-[18px]" aria-hidden="true" />}
        </button>
      </div>
      <span aria-live="polite" className="sr-only">
        {copied ? "Линкът е копиран" : ""}
      </span>
    </div>
  );
}
