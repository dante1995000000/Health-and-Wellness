export default function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`sprig ${className}`}
      viewBox="0 0 64 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 10 H62"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M32 10 C 30 6, 27 5, 24 6 C 27 8, 29 9, 32 10 C 29 11, 27 12, 24 14 C 27 15, 30 14, 32 10 Z"
        fill="currentColor"
      />
      <circle cx="46" cy="10" r="2" fill="currentColor" />
      <circle cx="18" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
