export default function OrganicDivider() {
  return (
    <div
      className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden leading-[0] my-6 sm:my-10"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-6 sm:h-9 lg:h-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 C360,90 1080,10 1440,80 L1440,94 C1080,24 360,104 0,34 Z"
          fill="#cdb42d"
          fillOpacity="0.35"
        />
      </svg>
    </div>
  );
}
