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
        d="M4.8 4.2L13.8 12L4.8 19.8C4.45 19.45 4.25 18.95 4.25 18.35V5.65C4.25 5.05 4.45 4.55 4.8 4.2Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M15.2 13.2L18.3 15C19.55 15.7 19.55 16.9 18.3 17.6L8.4 23.2C7.7 23.6 7.05 23.5 6.55 23.1L15.2 13.2Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M15.2 10.8L18.3 9C19.55 8.3 19.55 7.1 18.3 6.4L8.4 0.8C7.7 0.4 7.05 0.5 6.55 0.9L15.2 10.8Z"
        fill="currentColor"
        opacity="0.75"
      />
      <path
        d="M6.55 0.9C6.65 0.98 6.76 1.08 6.88 1.18L14.45 8.05L11.95 10.55L4.8 4.2C5.22 3.78 5.83 3.72 6.55 0.9Z"
        fill="currentColor"
      />
      <path
        d="M14.45 15.95L6.88 22.82C6.76 22.92 6.65 23.02 6.55 23.1C5.83 23.28 5.22 23.22 4.8 22.8L11.95 13.45L14.45 15.95Z"
        fill="currentColor"
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