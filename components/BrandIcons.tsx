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

export function GooglePlayIcon({ size = 22, className = "" }: BrandIconProps) {
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

export function AppleIcon({ size = 22, className = "" }: BrandIconProps) {
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
        d="M15.3 3.3C14.6 4.15 13.45 4.82 12.35 4.74C12.2 3.67 12.73 2.56 13.38 1.83C14.08 1.02 15.25 0.42 16.25 0.4C16.35 1.55 15.9 2.48 15.3 3.3Z"
        fill="currentColor"
      />
      <path
        d="M19.25 12.78C19.23 9.95 21.55 8.58 21.65 8.52C20.35 6.66 18.35 6.4 17.64 6.37C15.95 6.2 14.32 7.37 13.46 7.37C12.58 7.37 11.26 6.39 9.83 6.42C7.98 6.45 6.26 7.49 5.31 9.12C3.34 12.43 4.81 17.31 6.7 20.01C7.65 21.33 8.76 22.8 10.22 22.75C11.64 22.69 12.17 21.87 13.88 21.87C15.58 21.87 16.08 22.75 17.57 22.71C19.1 22.69 20.06 21.39 20.98 20.05C22.08 18.53 22.52 17.04 22.54 16.96C22.5 16.95 19.28 15.75 19.25 12.78Z"
        fill="currentColor"
      />
    </svg>
  );
}