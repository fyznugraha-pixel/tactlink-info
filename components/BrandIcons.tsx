type BrandIconProps = {
  size?: number;
  className?: string;
};

export function InstagramIcon({ size = 22, className = "" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.9" />
      <circle cx="17.3" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ size = 22, className = "" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" stroke="currentColor" strokeWidth="1.9" />
      <path d="M8 10.5V17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M12 17V13.6C12 11.85 13.05 10.75 14.55 10.75C16.05 10.75 17 11.8 17 13.65V17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="8" cy="7.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 22, className = "" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3.5" stroke="currentColor" strokeWidth="1.9" />
      <path
        d="M13.4 21V13.8H15.7L16.1 10.95H13.4V9.25C13.4 8.45 13.65 7.9 14.8 7.9H16.2V5.35C15.95 5.3 15.1 5.2 14.15 5.2C12.05 5.2 10.65 6.45 10.65 8.9V10.95H8.3V13.8H10.65V21"
        fill="currentColor"
      />
    </svg>
  );
}

export function GooglePlayIcon({ size = 23, className = "" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5.2 3.8C4.85 4.1 4.65 4.55 4.65 5.1V18.9C4.65 19.45 4.85 19.9 5.2 20.2L13.25 12L5.2 3.8Z"
        fill="currentColor"
      />
      <path
        d="M14.45 13.25L16.55 15.35L7.35 20.75C6.85 21.05 6.35 21.08 5.95 20.9L14.45 13.25Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M14.45 10.75L5.95 3.1C6.35 2.92 6.85 2.95 7.35 3.25L16.55 8.65L14.45 10.75Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M17.45 9.18L19.15 10.18C20.25 10.82 20.25 13.18 19.15 13.82L17.45 14.82L14.75 12L17.45 9.18Z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

export function AppleIcon({ size = 23, className = "" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 384 512"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        display: "block",
        transform: "translateY(-1px)",
      }}
    >
      <path
        fill="currentColor"
        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.2-39.3.6-75.5 22.8-95.7 58.1-40.8 70.8-10.4 175.5 29.3 233 19.5 28.2 42.7 59.8 73.1 58.7 29.3-1.2 40.4-19 75.8-19 35.3 0 45.3 19 76.4 18.4 31.5-.6 51.5-28.7 70.8-57 22.4-32.7 31.6-64.4 32-66.1-.7-.3-61.5-23.6-62.1-98.2zM260.8 101.6c16.2-19.6 27.1-46.9 24.1-74-23.3.9-51.5 15.5-68.3 35.1-15.1 17.4-28.3 45.2-24.7 71.9 26 2 52.6-13.2 68.9-33z"
      />
    </svg>
  );
}