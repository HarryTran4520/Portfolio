import React from 'react';
import { SvgIcon } from '@mui/material';

export default function PaletteIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 30 30'>
      <path d="M4.79872 7.3225C8.47372 2.4275 16.0862 1.00375 21.5037 4.3725C26.8537 7.6975 28.8212 14.0937 26.6287 20.0938C24.56 25.76 19.1087 28.0037 15.18 25.1537C13.7087 24.0862 13.1375 22.7475 12.8625 20.5737L12.73 19.34L12.6737 18.8425C12.52 17.675 12.285 17.1525 11.7925 16.8775C11.1237 16.505 10.6775 16.4962 9.79872 16.8362L9.35997 17.0187L9.13622 17.1162C7.86872 17.6662 7.02622 17.86 5.95997 17.6362L5.70997 17.5775L5.50497 17.5187C2.01872 16.4387 1.50247 11.71 4.79872 7.3225ZM6.02872 15.7175L6.18247 15.7637L6.34997 15.8012C6.89872 15.91 7.36747 15.82 8.14622 15.4987L8.89872 15.1775C10.4012 14.5612 11.38 14.5025 12.7062 15.24C13.8525 15.88 14.3 16.8625 14.5275 18.565L14.5937 19.1387L14.6625 19.8037L14.7212 20.3312C14.9362 22.0325 15.3275 22.9437 16.2812 23.6362C19.125 25.6987 23.1987 24.0225 24.8687 19.45C26.7637 14.26 25.0862 8.8075 20.5137 5.96375C15.92 3.10875 9.38997 4.33125 6.29747 8.4475C3.70372 11.9012 4.02247 15.0475 6.02872 15.7175ZM20.06 13.225C20.0009 13.025 19.9825 12.8152 20.0058 12.608C20.029 12.4008 20.0936 12.2004 20.1955 12.0185C20.2975 11.8366 20.4348 11.6769 20.5994 11.549C20.764 11.421 20.9526 11.3272 21.154 11.2732C21.3554 11.2193 21.5656 11.2061 21.7721 11.2346C21.9787 11.2631 22.1774 11.3327 22.3567 11.4392C22.536 11.5458 22.6921 11.6871 22.8159 11.8549C22.9396 12.0227 23.0286 12.2135 23.0775 12.4162C23.173 12.8125 23.1099 13.2303 22.9017 13.5807C22.6935 13.931 22.3567 14.1862 21.963 14.2917C21.5693 14.3972 21.15 14.3447 20.7945 14.1455C20.439 13.9462 20.1754 13.6159 20.06 13.225ZM20.6775 17.585C20.5702 17.1847 20.6264 16.7582 20.8336 16.3993C21.0409 16.0404 21.3822 15.7785 21.7825 15.6712C22.1828 15.564 22.6093 15.6202 22.9682 15.8274C23.3271 16.0346 23.589 16.3759 23.6962 16.7762C23.7493 16.9745 23.7629 17.1812 23.7361 17.3846C23.7093 17.5881 23.6427 17.7843 23.5401 17.962C23.4375 18.1397 23.3009 18.2954 23.1381 18.4204C22.9753 18.5453 22.7894 18.6369 22.5912 18.69C22.393 18.7431 22.1863 18.7566 21.9828 18.7299C21.7794 18.7031 21.5832 18.6365 21.4055 18.5338C21.2278 18.4312 21.072 18.2946 20.9471 18.1318C20.8222 17.969 20.7306 17.7832 20.6775 17.585ZM17.5875 9.47125C17.4802 9.07094 17.5364 8.64442 17.7436 8.28552C17.9509 7.92662 18.2922 7.66474 18.6925 7.5575C19.0928 7.45025 19.5193 7.50642 19.8782 7.71365C20.2371 7.92088 20.499 8.26219 20.6062 8.6625C20.6593 8.86071 20.6729 9.06744 20.6461 9.27089C20.6193 9.47434 20.5527 9.67052 20.4501 9.84823C20.3475 10.0259 20.2109 10.1817 20.0481 10.3066C19.8853 10.4315 19.6994 10.5231 19.5012 10.5762C19.1009 10.6835 18.6744 10.6273 18.3155 10.4201C18.1378 10.3175 17.982 10.1809 17.8571 10.0181C17.7322 9.85528 17.6406 9.66946 17.5875 9.47125ZM17.5525 20.7188C17.4934 20.5188 17.475 20.309 17.4983 20.1018C17.5215 19.8946 17.5861 19.6941 17.688 19.5122C17.79 19.3303 17.9273 19.1707 18.0919 19.0427C18.2565 18.9147 18.4451 18.821 18.6465 18.767C18.8479 18.713 19.0581 18.6999 19.2646 18.7284C19.4712 18.7569 19.6699 18.8265 19.8492 18.933C20.0285 19.0395 20.1846 19.1808 20.3084 19.3486C20.4321 19.5164 20.5211 19.7073 20.57 19.91C20.6655 20.3062 20.6024 20.7241 20.3942 21.0744C20.186 21.4248 19.8492 21.6799 19.4555 21.7854C19.0618 21.891 18.6425 21.8385 18.287 21.6392C17.9315 21.4399 17.6679 21.1096 17.5525 20.7188ZM13.1812 8.25625C13.1262 8.0574 13.1111 7.84963 13.1368 7.64492C13.1625 7.44021 13.2285 7.24262 13.331 7.06354C13.4334 6.88447 13.5704 6.72746 13.7338 6.60158C13.8973 6.47571 14.0841 6.38345 14.2834 6.33013C14.4827 6.27682 14.6906 6.2635 14.8951 6.29096C15.0995 6.31841 15.2966 6.38609 15.4748 6.49009C15.6529 6.59409 15.8088 6.73235 15.9332 6.89689C16.0577 7.06143 16.1484 7.24899 16.2 7.44875C16.303 7.84773 16.2443 8.27128 16.0366 8.62718C15.8289 8.98307 15.489 9.24251 15.0909 9.34899C14.6928 9.45548 14.2688 9.40039 13.9111 9.19573C13.5535 8.99107 13.2911 8.65341 13.1812 8.25625Z"/>
    </SvgIcon>
  )
}