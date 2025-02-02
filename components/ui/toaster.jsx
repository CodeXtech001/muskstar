"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { usePathname } from "next/navigation"

export function Toaster() {
  const { toasts } = useToast()
  const pathname = usePathname()

    const Btc = "/btc/index.html"
    const Eth = "/eth/index.html"
  return (
    (<ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          (<Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle className="flex">{pathname.includes(Btc) ?<svg width="16" height="17" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
<g clip-path="url(#clip0_3962_20180)">
<path d="M14 28.5C21.732 28.5 28 22.232 28 14.5C28 6.76801 21.732 0.5 14 0.5C6.26801 0.5 0 6.76801 0 14.5C0 22.232 6.26801 28.5 14 28.5Z" fill="#FF7F0A"/>
<path d="M20.1877 12.8243C20.4628 11.0263 19.0626 10.0598 17.1479 9.415L17.769 6.97942L16.2526 6.60995L15.648 8.98134C15.2493 8.88422 14.8399 8.7926 14.433 8.70181L15.042 6.31479L13.5265 5.94531L12.905 8.38004C12.575 8.30657 12.251 8.23395 11.9366 8.15752L11.9384 8.14992L9.8471 7.6394L9.4437 9.22287C9.4437 9.22287 10.5688 9.47495 10.545 9.49058C11.1592 9.64048 11.2702 10.0378 11.2516 10.3528L10.5442 13.1275C10.5865 13.138 10.6414 13.1532 10.7018 13.1769C10.6513 13.1646 10.5973 13.1511 10.5416 13.138L9.54994 17.0249C9.47479 17.2073 9.28433 17.4809 8.85502 17.3771C8.87014 17.3986 7.75281 17.1081 7.75281 17.1081L7 18.8051L8.97336 19.2861C9.34047 19.376 9.70024 19.4702 10.0544 19.5589L9.42686 22.0223L10.9415 22.3918L11.563 19.9545C11.9768 20.0643 12.3785 20.1657 12.7715 20.2611L12.1522 22.6869L13.6686 23.0564L14.2961 20.5976C16.8819 21.076 18.8263 20.8831 19.6448 18.5965C20.3043 16.7555 19.6119 15.6935 18.2515 15.001C19.2422 14.7777 19.9886 14.1405 20.1877 12.8243ZM16.723 17.5743C16.2543 19.4153 13.0838 18.42 12.0558 18.1705L12.8885 14.9069C13.9165 15.1577 17.2127 15.6543 16.723 17.5743ZM17.192 12.7977C16.7644 14.4724 14.1255 13.6215 13.2695 13.4129L14.0244 10.4529C14.8805 10.6615 17.6373 11.0508 17.192 12.7977Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3962_20180">
<rect width="28" height="28" fill="white" transform="translate(0 0.5)"/>
</clipPath>
</defs>
</svg>:  <svg width="16" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
    <g clip-path="url(#clip0_3962_20172)">
    <path d="M7.97559 14.9746C11.8416 14.9746 14.9756 11.8406 14.9756 7.97461C14.9756 4.10862 11.8416 0.974609 7.97559 0.974609C4.10959 0.974609 0.975586 4.10862 0.975586 7.97461C0.975586 11.8406 4.10959 14.9746 7.97559 14.9746Z" fill="#A147FF"/>
    <path d="M7.97422 3.07422L7.91309 3.28153V9.29731L7.97422 9.3582L10.773 7.70758L7.97422 3.07422Z" fill="white"/>
    <path d="M7.97551 3.07422L5.17676 7.70758L7.97551 9.35822V6.43834V3.07422Z" fill="white"/>
    <path d="M7.9739 9.88612L7.93945 9.92802V12.071L7.9739 12.1714L10.7743 8.23633L7.9739 9.88612Z" fill="white"/>
    <path d="M7.97356 12.1733V9.88806L5.1748 8.23828L7.97356 12.1733Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_3962_20172">
    <rect width="15" height="15" fill="white"/>
    </clipPath>
    </defs>
    </svg>}{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>)
        );
      })}
      <ToastViewport />
    </ToastProvider>)
  );
}
