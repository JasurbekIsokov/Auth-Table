import { forwardRef, Ref, SVGProps } from 'react';

const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none" ref={ref} {...props}>
    <rect x="3.33398" y="6.33334" width="13.3333" height="11.6667" rx="4" stroke="currentColor" strokeWidth="1.5" />
    <ellipse cx="10.0007" cy="12.1667" rx="1.66667" ry="1.66667" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M13.3327 6.33333C13.3327 4.49238 11.8403 3 9.99935 3C8.1584 3 6.66602 4.49238 6.66602 6.33333"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLock);
export default ForwardRef;
