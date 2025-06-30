import React from "react";

const BellaIcon = ({ size = 48, className = "text-emerald-500" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Bella Otér Logo"
    >
      <defs>
        <linearGradient id="bellaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8">
            <animate
              attributeName="stop-color"
              values="#f43f5e;#ec4899;#8b5cf6;#06b6d4;#f43f5e"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="30%" stopColor="#ec4899" stopOpacity="0.7">
            <animate
              attributeName="stop-color"
              values="#ec4899;#8b5cf6;#06b6d4;#f43f5e;#ec4899"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.6">
            <animate
              attributeName="stop-color"
              values="#8b5cf6;#06b6d4;#f43f5e;#ec4899;#8b5cf6"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5">
            <animate
              attributeName="stop-color"
              values="#06b6d4;#f43f5e;#ec4899;#8b5cf6;#06b6d4"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M12 24 Q24 12 36 24 Q24 36 12 24"
        fill="none"
        stroke="url(#bellaGradient)"
        strokeWidth="2.5"
        filter="url(#glow)"
        strokeDasharray="60"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;120;0"
          dur="4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24;5 24 24;0 24 24;-5 24 24;0 24 24"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M24 12 Q36 24 24 36 Q12 24 24 12"
        fill="none"
        stroke="url(#bellaGradient)"
        strokeWidth="2.5"
        opacity="0.7"
        filter="url(#glow)"
        strokeDasharray="60"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="120;0;120"
          dur="4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24;-5 24 24;0 24 24;5 24 24;0 24 24"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      <circle
        cx="24"
        cy="24"
        r="5"
        fill="url(#bellaGradient)"
        opacity="0.8"
        filter="url(#glow)"
      >
        <animate
          attributeName="r"
          values="5;6.5;5;4;5"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;1;0.8;0.6;0.8"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="24" cy="16" r="1.5" fill="url(#bellaGradient)" opacity="0.6">
        <animate
          attributeName="cy"
          values="16;14;16;18;16"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.5;2;1.5;1;1.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="32" cy="24" r="1.5" fill="url(#bellaGradient)" opacity="0.6">
        <animate
          attributeName="cx"
          values="32;34;32;30;32"
          dur="2.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.5;1;1.5;2;1.5"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="24" cy="32" r="1.5" fill="url(#bellaGradient)" opacity="0.6">
        <animate
          attributeName="cy"
          values="32;34;32;30;32"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.5;1;1.5;2;1.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="16" cy="24" r="1.5" fill="url(#bellaGradient)" opacity="0.6">
        <animate
          attributeName="cx"
          values="16;14;16;18;16"
          dur="2.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="r"
          values="1.5;2;1.5;1;1.5"
          dur="2.2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="24"
        cy="24"
        r="20"
        fill="none"
        stroke="url(#bellaGradient)"
        strokeWidth="1"
        opacity="0.3"
        strokeDasharray="2,3"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 24 24;360 24 24"
          dur="20s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;0.6;0.3;0.1;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Additional floating particles for magical effect */}
      <circle cx="18" cy="18" r="0.5" fill="url(#bellaGradient)" opacity="0.4">
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4;0;0.4"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;2,-2;0,0;-1,1;0,0"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="30" cy="18" r="0.5" fill="url(#bellaGradient)" opacity="0.4">
        <animate
          attributeName="opacity"
          values="0;0.4;0.8;0.4;0"
          dur="4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;-2,-1;0,0;1,2;0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="30" cy="30" r="0.5" fill="url(#bellaGradient)" opacity="0.4">
        <animate
          attributeName="opacity"
          values="0.4;0;0.4;0.8;0.4"
          dur="3.2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;-1,2;0,0;2,-1;0,0"
          dur="3.2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle cx="18" cy="30" r="0.5" fill="url(#bellaGradient)" opacity="0.4">
        <animate
          attributeName="opacity"
          values="0.8;0.4;0;0.4;0.8"
          dur="3.8s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;1,1;0,0;-2,-1;0,0"
          dur="3.8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default BellaIcon;
