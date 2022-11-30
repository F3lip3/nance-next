import { SVGAttributes } from 'react';

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export const Logo = (props: LogoProps) => {
  return (
    <svg
      width={274}
      height={205}
      viewBox="0 0 274 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M78.905 95.993c.164-2.683 1.333-5.649 2.314-8.107 1.69-4.237 4.369-8.929 8.88-10.607 2.547-.947 5.3-.656 7.798.296 5.56 2.115 9.66 6.632 12.409 11.785 2.264 4.244 4.947 8.252 7.47 12.347l10.176 16.511 1.665 2.703c.167.269.543.674.611.99 0 0 20.208 41.654 50.988 19.045l-42.19-69.135s-17.678-27.922-41.298-14.837c0 0-16.905 7.62-18.823 39.01"
        fill="url(#paint0_radial_3_64)"
      />
      <path
        d="M134.658 129.109c1.456 2.26 3.925 4.275 5.983 5.94 3.547 2.869 8.177 5.651 12.934 4.908 2.684-.419 4.942-2.019 6.657-4.07 1.197-1.434 2.149-3.061 2.952-4.742a40.988 40.988 0 001.33-3.182c1.325-3.517 1.352-7.376 1.193-11.081-.17-3.95-.102-7.81.061-11.768.267-6.46.533-12.919.801-19.378l.131-3.172c.013-.317.143-.854.047-1.163 0 0-2.744-46.215 35.16-41.549l-2.987 80.938s-1.763 33-28.765 33.138c0 0-18.472 1.622-35.497-24.819"
        fill="url(#paint1_linear_3_64)"
      />
      <path
        d="M140.507 74.112c-15.76-24.877-33.305-23.963-33.305-23.963-26.99-.82-29.922 32.099-29.922 32.099l-5.854 80.78c37.716 6.006 36.61-40.278 36.61-40.278-.084-.311.065-.843.09-1.159l.243-3.165 1.486-19.338c.315-4.096.752-8.183.945-12.288.163-3.486-.259-7.204 1.12-10.503a40.122 40.122 0 011.441-3.132c.862-1.652 1.871-3.244 3.118-4.634 1.787-1.99 4.1-3.509 6.797-3.832 4.78-.574 9.309 2.37 12.752 5.364 1.556 1.352 3.353 2.927 4.722 4.65-.083-.2-.164-.4-.243-.6"
        fill="url(#paint2_linear_3_64)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_3_64"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(55.337 -27.483 187.814) scale(82.956)"
        >
          <stop stopColor="#51ACE4" />
          <stop offset={1} stopColor="#4A1519" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_3_64"
          x1={162.241}
          y1={139.119}
          x2={236.643}
          y2={-41.2598}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51ACE4" />
          <stop offset={2e-8} stopColor="#51ACE4" />
          <stop offset={1} stopColor="#4A1519" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3_64"
          x1={110.999}
          y1={70.1963}
          x2={63.4545}
          y2={242.954}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#51ACE4" />
          <stop offset={5.1e-7} stopColor="#51ACE4" />
          <stop offset={1} stopColor="#4A1519" />
        </linearGradient>
      </defs>
    </svg>
  );
};
