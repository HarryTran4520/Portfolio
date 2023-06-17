import React from 'react';
import { SvgIcon } from '@mui/material';

export default function GraphIcon(props) {
  return (
    <SvgIcon {...props} viewBox='0 0 30 30'>
      <path d="M23.4375 18.0469C22.5989 18.0464 21.788 18.3471 21.1523 18.8941L18.15 16.5586C18.3908 16.0743 18.5159 15.5408 18.5156 15C18.5153 14.859 18.5067 14.7181 18.4898 14.5781L20.3906 13.9453C20.8161 14.6845 21.4959 15.2438 22.3032 15.519C23.1106 15.7942 23.9904 15.7665 24.7788 15.4411C25.5672 15.1157 26.2105 14.5147 26.5886 13.7502C26.9668 12.9856 27.0542 12.1097 26.8344 11.2856C26.6146 10.4614 26.1027 9.74528 25.3941 9.27057C24.6854 8.79587 23.8284 8.59498 22.9826 8.70533C22.1368 8.81569 21.36 9.22976 20.7969 9.8704C20.2338 10.511 19.9228 11.3346 19.9219 12.1875C19.9221 12.3285 19.9307 12.4694 19.9476 12.6094L18.0469 13.2422C17.675 12.5943 17.1058 12.0821 16.4223 11.7805C15.7389 11.4788 14.977 11.4034 14.2476 11.5652L13.2937 9.4207C14.0029 8.91496 14.4991 8.16395 14.6861 7.31321C14.8732 6.46247 14.7377 5.5726 14.306 4.81604C13.8743 4.05949 13.1772 3.49012 12.3496 3.2183C11.5221 2.94648 10.6231 2.99155 9.82684 3.34478C9.03063 3.69801 8.39389 4.33424 8.04004 5.13018C7.68619 5.92612 7.64041 6.82508 7.91159 7.65284C8.18276 8.48061 8.75158 9.17823 9.5078 9.61051C10.264 10.0428 11.1538 10.1789 12.0047 9.99258L12.9586 12.1371C12.2458 12.644 11.7483 13.399 11.5635 14.2539C11.3788 15.1088 11.5203 16.0019 11.9601 16.7578L8.67185 19.6875C7.9726 19.164 7.10388 18.9188 6.23411 18.9994C5.36433 19.08 4.55546 19.4806 3.96428 20.1236C3.37311 20.7667 3.04174 21.6063 3.03443 22.4798C3.02711 23.3533 3.34436 24.1984 3.92468 24.8512C4.50501 25.5041 5.30706 25.9182 6.17536 26.0134C7.04366 26.1085 7.91636 25.8779 8.62429 25.3662C9.33222 24.8545 9.82494 24.0981 10.0069 23.2438C10.1889 22.3895 10.0473 21.498 9.60935 20.7422L12.8906 17.8125C13.5293 18.2926 14.3129 18.54 15.1115 18.5138C15.9101 18.4876 16.6757 18.1893 17.2816 17.6684L20.284 20.0039C19.9452 20.6889 19.8388 21.4655 19.9809 22.2163C20.123 22.9671 20.5059 23.6512 21.0716 24.165C21.6372 24.6787 22.3549 24.9942 23.1159 25.0636C23.8769 25.133 24.6397 24.9526 25.289 24.5497C25.9383 24.1467 26.4386 23.5432 26.7142 22.8305C26.9898 22.1178 27.0257 21.3347 26.8165 20.5998C26.6072 19.8648 26.1642 19.2181 25.5545 18.7575C24.9448 18.2968 24.2016 18.0474 23.4375 18.0469ZM23.4375 10.0781C23.8547 10.0781 24.2625 10.2018 24.6094 10.4336C24.9563 10.6654 25.2266 10.9948 25.3863 11.3803C25.5459 11.7657 25.5877 12.1898 25.5063 12.599C25.4249 13.0082 25.224 13.3841 24.929 13.6791C24.634 13.9741 24.2582 14.175 23.849 14.2563C23.4398 14.3377 23.0157 14.296 22.6303 14.1363C22.2448 13.9767 21.9154 13.7063 21.6836 13.3594C21.4518 13.0125 21.3281 12.6047 21.3281 12.1875C21.3281 11.6281 21.5503 11.0915 21.9459 10.6959C22.3415 10.3004 22.878 10.0781 23.4375 10.0781ZM9.1406 6.5625C9.1406 6.14531 9.26432 5.73748 9.4961 5.3906C9.72788 5.04371 10.0573 4.77335 10.4428 4.61369C10.8282 4.45404 11.2523 4.41227 11.6615 4.49366C12.0707 4.57505 12.4465 4.77595 12.7415 5.07095C13.0365 5.36595 13.2374 5.7418 13.3188 6.15098C13.4002 6.56016 13.3584 6.98429 13.1988 7.36972C13.0391 7.75516 12.7688 8.0846 12.4219 8.31638C12.075 8.54816 11.6672 8.67188 11.25 8.67188C10.6905 8.67188 10.154 8.44964 9.75843 8.05405C9.36284 7.65847 9.1406 7.12194 9.1406 6.5625ZM6.56248 24.6094C6.14528 24.6094 5.73746 24.4857 5.39057 24.2539C5.04369 24.0221 4.77332 23.6927 4.61367 23.3072C4.45402 22.9218 4.41224 22.4977 4.49363 22.0885C4.57503 21.6793 4.77592 21.3034 5.07093 21.0084C5.36593 20.7134 5.74178 20.5125 6.15096 20.4312C6.56014 20.3498 6.98426 20.3915 7.3697 20.5512C7.75514 20.7108 8.08458 20.9812 8.31636 21.3281C8.54814 21.675 8.67185 22.0828 8.67185 22.5C8.67185 23.0594 8.44962 23.596 8.05403 23.9916C7.65845 24.3871 7.12192 24.6094 6.56248 24.6094ZM15 17.1094C14.5828 17.1094 14.175 16.9857 13.8281 16.7539C13.4812 16.5221 13.2108 16.1927 13.0512 15.8072C12.8915 15.4218 12.8497 14.9977 12.9311 14.5885C13.0125 14.1793 13.2134 13.8034 13.5084 13.5084C13.8034 13.2134 14.1793 13.0125 14.5885 12.9312C14.9976 12.8498 15.4218 12.8915 15.8072 13.0512C16.1926 13.2108 16.5221 13.4812 16.7539 13.8281C16.9856 14.175 17.1094 14.5828 17.1094 15C17.1094 15.5594 16.8871 16.096 16.4915 16.4916C16.0959 16.8871 15.5594 17.1094 15 17.1094ZM23.4375 23.6719C23.0203 23.6719 22.6125 23.5482 22.2656 23.3164C21.9187 23.0846 21.6483 22.7552 21.4887 22.3697C21.329 21.9843 21.2872 21.5602 21.3686 21.151C21.45 20.7418 21.6509 20.3659 21.9459 20.0709C22.2409 19.7759 22.6168 19.575 23.026 19.4937C23.4351 19.4123 23.8593 19.454 24.2447 19.6137C24.6301 19.7733 24.9596 20.0437 25.1914 20.3906C25.4231 20.7375 25.5469 21.1453 25.5469 21.5625C25.5469 22.1219 25.3246 22.6585 24.929 23.0541C24.5334 23.4496 23.9969 23.6719 23.4375 23.6719Z"/>
    </SvgIcon>
  )
}