import React from "react";

function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="344.564 330.278 111.737 91.218"
      width="53.87"
      height="43.61"
      className={className}
    >
      <defs>
        <linearGradient
          id="logo_svg__b"
          gradientUnits="userSpaceOnUse"
          x1="420.97"
          y1="331.28"
          x2="420.97"
          y2="418.5"
        >
          <stop style={{ stopColor: "#06b6d4", stopOpacity: 1 }} offset="0%"></stop>
          <stop style={{ stopColor: "#67e8f9", stopOpacity: 1 }} offset="100%"></stop>
        </linearGradient>
        <linearGradient
          id="logo_svg__d"
          gradientUnits="userSpaceOnUse"
          x1="377.89"
          y1="331.28"
          x2="377.89"
          y2="418.5"
        >
          <stop style={{ stopColor: "#06b6d4", stopOpacity: 1 }} offset="0%"></stop>
          <stop style={{ stopColor: "#67e8f9", stopOpacity: 1 }} offset="100%"></stop>
        </linearGradient>
        <path d="M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z" id="logo_svg__a"></path>
        <path d="M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z" id="logo_svg__c"></path>
      </defs>
      <use xlinkHref="#logo_svg__a" fill="url(#logo_svg__b)"></use>
      <use xlinkHref="#logo_svg__c" fill="url(#logo_svg__d)"></use>
    </svg>
  );
}

export default Logo;