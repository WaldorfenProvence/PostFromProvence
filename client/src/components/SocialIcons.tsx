// Placeholder hrefs ("#") until the accounts exist — swap these for the
// real profile URLs once they're live.
const LINKS = {
  instagram: "#",
  tiktok: "#",
  youtube: "#",
};

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function InstagramIcon() {
  return (
    <IconWrap>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </IconWrap>
  );
}

function TikTokIcon() {
  return (
    <IconWrap>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c0 2.5 2 4.5 4.5 4.5V10c-1.7 0-3.2-.6-4.5-1.5" />
    </IconWrap>
  );
}

function YoutubeIcon() {
  return (
    <IconWrap>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </IconWrap>
  );
}

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-4 text-[#6B7A4F]">
      <a
        href={LINKS.instagram}
        aria-label="Instagram (coming soon)"
        className="hover:opacity-70 transition-opacity"
      >
        <InstagramIcon />
      </a>
      <a
        href={LINKS.tiktok}
        aria-label="TikTok (coming soon)"
        className="hover:opacity-70 transition-opacity"
      >
        <TikTokIcon />
      </a>
      <a
        href={LINKS.youtube}
        aria-label="YouTube (coming soon)"
        className="hover:opacity-70 transition-opacity"
      >
        <YoutubeIcon />
      </a>
    </div>
  );
}
