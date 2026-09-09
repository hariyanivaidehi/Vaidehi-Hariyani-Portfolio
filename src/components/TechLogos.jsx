import React from 'react';

// React.js Official Logo
export function ReactLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="#61DAFB" {...props}>
      <title>React</title>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  );
}

// Tailwind CSS Official Logo
export function TailwindLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#38BDF8" {...props}>
      <title>Tailwind CSS</title>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
    </svg>
  );
}

// JavaScript Official Logo
export function JavaScriptLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...props}>
      <title>JavaScript</title>
      <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
      <path fill="#000000" d="M7.344 18.025c.57.96 1.405 1.56 2.635 1.56 1.48 0 2.41-.75 2.41-2.48v-7.145H9.98v7.085c0 .765-.33 1.05-.885 1.05-.435 0-.75-.24-.96-.69l-.79.62zm7.625.075c.78 1.215 2.07 1.875 3.69 1.875 2.145 0 3.51-1.125 3.51-2.925 0-1.68-.99-2.475-2.82-3.255l-.75-.315c-1.155-.495-1.635-.945-1.635-1.695 0-.795.66-1.425 1.725-1.425 1.02 0 1.65.45 2.07 1.29l1.83-1.17c-.81-1.47-2.07-2.145-3.9-2.145-2.19 0-3.69 1.245-3.69 3.015 0 1.65 1.02 2.52 2.76 3.255l.75.315c1.29.555 1.8 1.05 1.8 1.86 0 .915-.81 1.56-1.95 1.56-1.395 0-2.205-.72-2.7-1.725l-2.07 1.08z"/>
    </svg>
  );
}

// HTML5 Official Logo
export function Html5Logo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#E34F26" {...props}>
      <title>HTML5</title>
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.9 4.3H4.6l.4 4.3h13.9l-.4 4.8-3.9 1.1-4-1.1-.3-2.9H6.4l.5 5.5 5.1 1.4 5.1-1.4.9-10.2.1-3z"/>
    </svg>
  );
}

// CSS3 Official Logo
export function Css3Logo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1572B6" {...props}>
      <title>CSS3</title>
      <path d="M1.5 0h21l-1.9 21.3L12 24l-8.6-2.7L1.5 0zm17.9 4.3H4.6l.3 4h14l-.3 3.9h-10l.3 3.9h9.4l-.5 5.2-3.7 1-3.7-1-.3-2.5H6.2l.4 4.9 5.4 1.5 5.4-1.5 1.2-13.6.1-5.3z"/>
    </svg>
  );
}

// Node.js Official Logo
export function NodejsLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#5FA04E" {...props}>
      <title>Node.js</title>
      <path d="M12 1.6l9.6 5.5v11.1L12 23.7l-9.6-5.5V7.1L12 1.6zm0 2.3L4.4 8.3v8.7l7.6 4.4 7.6-4.4V8.3L12 3.9zm-1.8 11.2V11c0-.8.6-1.5 1.5-1.5h1.2v1.5h-1.2v3h1.8v1.5h-3.3v-.9z"/>
    </svg>
  );
}

// Express.js Logo
export function ExpressLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" {...props}>
      <title>Express.js</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-9h2v9zm4 0h-2v-5h2v5zm-8 0H7v-3h2v3z"/>
    </svg>
  );
}

// MongoDB Official Logo
export function MongodbLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#47A248" {...props}>
      <title>MongoDB</title>
      <path d="M12 0c-.3 0-.6.1-.8.3C10.5 1 4.5 7.6 4.5 14.2c0 4.3 3.3 7.8 7.5 7.8 4.2 0 7.5-3.5 7.5-7.8C19.5 7.6 13.5 1 12.8.3c-.2-.2-.5-.3-.8-.3zm0 2.2c.4.6 5.5 7 5.5 12 0 3.1-2.5 5.6-5.5 5.6s-5.5-2.5-5.5-5.6c0-5 5.1-11.4 5.5-12zM11 7v13.5c-.2-.1-.5-.2-.7-.4C7.8 18.5 6 15.6 6 14.2c0-3.8 3.9-8.7 5-10v2.8zm2 0v2.8c1.1 1.3 5 6.2 5 10 0 1.4-1.8 4.3-4.3 5.9-.2.2-.5.3-.7.4V7z"/>
    </svg>
  );
}

// Redux Official Logo
export function ReduxLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#764ABC" {...props}>
      <title>Redux</title>
      <path d="M14.6 3.1c-.8-.5-1.9-.3-2.4.5l-6.1 9.9c-.5.8-.3 1.9.5 2.4.8.5 1.9.3 2.4-.5l6.1-9.9c.5-.8.3-1.9-.5-2.4zm-5.2 6.5c-.8-.5-1.9-.3-2.4.5l-3.3 5.3c-.5.8-.3 1.9.5 2.4.8.5 1.9.3 2.4-.5l3.3-5.3c.5-.8.3-1.9-.5-2.4zm10.7 2.1c-.8-.5-1.9-.3-2.4.5l-4.5 7.3c-.5.8-.3 1.9.5 2.4.8.5 1.9.3 2.4-.5l4.5-7.3c.5-.8.3-1.9-.5-2.4z"/>
    </svg>
  );
}

// Git Official Logo
export function GitLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#F05032" {...props}>
      <title>Git</title>
      <path d="M23.546 10.93L13.067.452a1.503 1.503 0 00-2.126 0L8.814 2.58l3.415 3.415a1.782 1.782 0 012.012.392 1.782 1.782 0 01.392 2.012l3.284 3.284a1.783 1.783 0 011.62.296 1.782 1.782 0 11-2.52 2.52 1.782 1.782 0 01-.392-2.012l-3.284-3.284a1.782 1.782 0 01-1.62-.296l-3.415 3.415a1.782 1.782 0 11-2.52-2.52 1.782 1.782 0 012.012-.392l2.127-2.127-6.22-6.22a1.503 1.503 0 00-2.126 0L.454 10.93a1.503 1.503 0 000 2.126l10.479 10.478a1.503 1.503 0 002.126 0l10.487-10.478a1.503 1.503 0 000-2.126z"/>
    </svg>
  );
}

// Vite Official Logo
export function ViteLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Vite</title>
      <path d="M22.5 4.5l-10 18-10-18 8 2.5 2-6 2 6 8-2.5z" fill="url(#viteGradient)"/>
      <path d="M12.5 1.5l-2.5 7.5h3l-3.5 8 7-9h-3.5l2-6.5h-2.5z" fill="#FFD62E"/>
      <defs>
        <linearGradient id="viteGradient" x1="2.5" y1="4.5" x2="22.5" y2="22.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF"/>
          <stop offset="1" stopColor="#BD34FE"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

// Postman Logo
export function PostmanLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#FF6C37" {...props}>
      <title>Postman</title>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
      <circle cx="12" cy="12" r="9" stroke="#FF6C37" strokeWidth="2" fill="none"/>
    </svg>
  );
}

// Figma Logo
export function FigmaLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Figma</title>
      <path d="M6 3a3 3 0 013-3h3v6H9a3 3 0 01-3-3z" fill="#0ACF83"/>
      <path d="M6 9a3 3 0 013-3h3v6H9a3 3 0 01-3-3z" fill="#A259FF"/>
      <path d="M6 15a3 3 0 013-3h3v6H9a3 3 0 01-3-3z" fill="#F24E1E"/>
      <path d="M6 21a3 3 0 013-3h3v3a3 3 0 01-3 3 3 3 0 01-3-3z" fill="#FF7262"/>
      <circle cx="15" cy="9" r="3" fill="#1ABCFE"/>
    </svg>
  );
}

// Python Logo
export function PythonLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" {...props}>
      <title>Python</title>
      <path d="M11.914 0C5.82 0 6.193 2.65 6.193 2.65l.006 2.744h5.811v.824H3.845S0 5.753 0 11.92c0 6.168 3.37 5.95 3.37 5.95h2.012v-2.827s-.109-3.37 3.308-3.37h5.688s3.197.054 3.197-3.125V3.125S18.04 0 11.914 0zm-1.685 1.74a1.037 1.037 0 110 2.074 1.037 1.037 0 010-2.074z" fill="#3776AB"/>
      <path d="M12.086 24c6.094 0 5.72-2.65 5.72-2.65l-.006-2.744H11.99v-.824h8.164S24 18.247 24 12.08c0-6.168-3.37-5.95-3.37-5.95h-2.012v2.827s.109 3.37-3.308 3.37H9.622s-3.197-.054-3.197 3.125v5.422S5.96 24 12.086 24zm1.685-1.74a1.037 1.037 0 110-2.074 1.037 1.037 0 010 2.074z" fill="#FFD43B"/>
    </svg>
  );
}

// PHP Logo
export function PhpLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#777BB4" {...props}>
      <title>PHP</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-5.4 15.5H4.8l1.4-7h2.3c1.6 0 2.5.7 2.2 2.1-.3 1.6-1.5 2.5-3 2.5H6.4l-.8 2.4zm1.4-4.2h.9c.7 0 1.2-.4 1.3-1.1.1-.6-.2-.9-.8-.9h-.9l-.5 2zm5.7 4.2h-1.8l1.4-7h1.8l-.4 2.2h1.5c1.6 0 2.5.7 2.2 2.1-.3 1.6-1.5 2.5-3 2.5h-1.3l-.4 2.2zm1.4-4.2h.9c.7 0 1.2-.4 1.3-1.1.1-.6-.2-.9-.8-.9h-.9l-.5 2z"/>
    </svg>
  );
}

// Bootstrap Logo
export function BootstrapLogo({ className = "w-6 h-6", ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#7952B3" {...props}>
      <title>Bootstrap</title>
      <path d="M2.5 4.5A2.5 2.5 0 015 2h14a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5H5a2.5 2.5 0 01-2.5-2.5v-15zm5 2.5v10h4.2c2.1 0 3.3-1 3.3-2.6 0-1.1-.7-1.9-1.8-2.2 1-.4 1.5-1.1 1.5-2.1 0-1.5-1.1-2.4-3-2.4H7.5zm2 1.8h2.1c.8 0 1.3.4 1.3 1.1 0 .7-.5 1.1-1.3 1.1H9.5V8.8zm0 3.8h2.3c.9 0 1.4.4 1.4 1.2 0 .8-.5 1.2-1.4 1.2H9.5v-2.4z"/>
    </svg>
  );
}
