import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-[#545032] pt-[60px] pb-[100px]">
      <div className="container">
        <div className="text-center">
          <Link to="/" className="logo block mx-auto mb-[45px]">
            <svg
              className="mx-auto"
              width="248"
              height="73"
              viewBox="0 0 248 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.355 53.0676C18.2198 51.5464 18.1353 50.0253 18.1015 48.5042C18.1015 46.9492 18.0846 45.3943 18.0508 43.8394H17.3409C16.293 43.8394 15.1268 44.0084 13.8423 44.3464C12.5916 44.6506 11.3916 45.1239 10.2423 45.7661C9.093 46.4084 8.14652 47.2197 7.40285 48.2C6.69299 49.1464 6.33806 50.245 6.33806 51.4957C6.33806 53.1183 6.7944 54.3521 7.70708 55.1972C8.61976 56.0084 9.85356 56.4141 11.4085 56.4141C12.1522 56.4141 12.9634 56.2451 13.8423 55.907C14.7212 55.5352 15.5663 55.0958 16.3775 54.5887C17.1888 54.0817 17.848 53.5746 18.355 53.0676ZM27.2283 56.3127C27.2283 56.4479 27.2114 56.5493 27.1776 56.6169C26.8396 57.3606 26.2649 57.9352 25.4536 58.3408C24.6762 58.7127 23.8987 58.8986 23.1212 58.8986C21.7015 58.8986 20.6705 58.493 20.0283 57.6817C19.4198 56.8366 18.9297 55.8056 18.5578 54.5887C17.2733 55.7718 15.8536 56.769 14.2987 57.5803C12.7437 58.3577 11.0705 58.7465 9.27891 58.7465C8.02821 58.7465 6.8451 58.5099 5.7296 58.0366C4.64791 57.5296 3.76903 56.8028 3.09297 55.8563C2.41691 54.9098 2.07888 53.7605 2.07888 52.4084C2.07888 50.9887 2.43381 49.7718 3.14368 48.7577C3.88734 47.7098 4.81692 46.8309 5.93242 46.1211C7.08172 45.3774 8.29863 44.7859 9.58314 44.3464C10.9015 43.8732 12.1353 43.5182 13.2846 43.2816C14.062 43.1126 14.8564 42.9605 15.6677 42.8253C16.4789 42.6901 17.2733 42.5549 18.0508 42.4196C18.0508 41.4732 18.0001 40.3746 17.8987 39.1239C17.8311 37.8731 17.5775 36.8422 17.1381 36.0309C16.6987 35.2534 16.1071 34.5605 15.3634 33.952C14.6198 33.3435 13.7916 33.0393 12.8789 33.0393C11.324 33.0393 10.1071 33.445 9.22821 34.2562C8.34933 35.0675 7.72398 36.2168 7.35215 37.7041C7.31834 37.8731 7.28454 38.0591 7.25074 38.2619C7.25074 38.4309 7.23383 38.5999 7.20003 38.7689C7.16623 38.9717 7.03102 39.1577 6.7944 39.3267C6.59158 39.4619 6.37186 39.5295 6.13524 39.5295C5.49298 39.5295 4.90143 39.3774 4.36058 39.0732C3.85354 38.7689 3.60002 38.2619 3.60002 37.552C3.60002 37.1464 3.66762 36.7914 3.80283 36.4872C4.24227 35.4393 4.95213 34.5774 5.93242 33.9013C6.91271 33.1914 7.9944 32.6506 9.17751 32.2788C10.3944 31.9069 11.5268 31.721 12.5747 31.721C14.4001 31.721 16.0564 32.059 17.5437 32.7351C19.0311 33.4112 20.2142 34.4083 21.0931 35.7267C22.0057 37.0112 22.4621 38.6337 22.4621 40.5943C22.4621 42.7915 22.4452 45.0056 22.4114 47.2366C22.4114 49.4676 22.479 51.6986 22.6142 53.9296C22.648 54.6732 22.8001 55.3324 23.0705 55.907C23.3409 56.4479 23.8987 56.7183 24.7438 56.7183C25.1832 56.7183 25.6396 56.6169 26.1128 56.4141C26.6198 56.1775 26.941 56.0591 27.0762 56.0591C27.1776 56.0591 27.2283 56.1436 27.2283 56.3127ZM54.2003 52.7126C54.2003 52.9493 54.0144 53.2873 53.6425 53.7267C53.2707 54.1324 53.0003 54.4197 52.8313 54.5887C52.527 54.8929 52.2228 55.1972 51.9186 55.5014C51.6144 55.8056 51.2763 56.0929 50.9045 56.3634C49.8566 57.107 48.6059 57.7493 47.1524 58.2901C45.6988 58.7972 44.3298 59.0507 43.0453 59.0507C40.4763 59.0507 38.2115 58.493 36.2509 57.3775C34.3241 56.2282 32.803 54.6732 31.6875 52.7126C30.6058 50.7183 30.065 48.4535 30.065 45.9183C30.065 43.4168 30.572 41.0675 31.5861 38.8703C32.6002 36.6731 34.2058 34.8985 36.403 33.5464C37.3495 32.9717 38.3974 32.5154 39.5467 32.1773C40.7298 31.8393 41.8622 31.6703 42.9439 31.6703C43.789 31.6703 44.6002 31.7717 45.3777 31.9745C46.189 32.1773 46.9664 32.4478 47.7101 32.7858C48.1496 32.9886 48.5721 33.1914 48.9777 33.3943C49.3834 33.5971 49.8228 33.6985 50.296 33.6985C50.7017 33.6985 51.0228 33.5802 51.2594 33.3435C51.5298 33.0731 51.7327 32.9379 51.8679 32.9379C51.9693 32.9379 52.02 33.0055 52.02 33.1407C52.0876 33.5464 52.1045 33.952 52.0707 34.3576C52.0707 34.7633 52.0876 35.152 52.1214 35.5238C52.1552 36.2675 52.189 37.0112 52.2228 37.7548C52.2566 38.4985 52.2904 39.2422 52.3242 39.9858V40.1379C52.358 40.5098 52.3242 40.7971 52.2228 40.9999C52.1214 41.2027 51.851 41.3041 51.4115 41.3041C51.1749 41.3041 51.0059 41.1689 50.9045 40.8985C50.8369 40.6281 50.7693 40.3915 50.7017 40.1886C50.4651 39.2084 50.1101 38.1605 49.6369 37.045C49.1636 35.9295 48.5214 35.0337 47.7101 34.3576C47.2031 33.8844 46.5608 33.4957 45.7833 33.1914C45.0397 32.8872 44.3298 32.7351 43.6538 32.7351C42.0312 32.7351 40.6453 33.1576 39.496 34.0027C38.3805 34.814 37.4847 35.8788 36.8087 37.1971C36.1326 38.4816 35.6256 39.8675 35.2875 41.3549C34.9833 42.8422 34.8312 44.245 34.8312 45.5633C34.8312 46.8816 34.9833 48.2338 35.2875 49.6197C35.5917 50.9718 36.065 52.2394 36.7072 53.4225C37.3833 54.6056 38.2622 55.5521 39.3439 56.262C40.4594 56.9718 41.7946 57.3268 43.3495 57.3268C45.5129 57.3268 47.3214 56.938 48.7749 56.1606C50.2284 55.3493 51.6313 54.1155 52.9834 52.4591C53.1186 52.2225 53.3045 52.1042 53.5411 52.1042C53.9806 52.1042 54.2003 52.307 54.2003 52.7126ZM77.0193 36.4365C77.0193 36.7745 76.8841 37.0957 76.6136 37.3999C76.377 37.6703 76.0728 37.8055 75.7009 37.8055C75.1939 37.8055 74.8221 37.6365 74.5855 37.2985C74.3826 36.9605 74.1967 36.5717 74.0277 36.1323C73.8925 35.6929 73.6728 35.3041 73.3685 34.9661C73.0643 34.6281 72.5573 34.459 71.8474 34.459C71.7122 34.459 71.577 34.459 71.4418 34.459C71.3404 34.459 71.2221 34.4759 71.0868 34.5098C70.5122 34.6112 69.8868 34.9661 69.2108 35.5745C68.5347 36.183 67.8756 36.9098 67.2333 37.7548C66.6249 38.5661 66.1178 39.3774 65.7122 40.1886C65.3065 40.9999 65.0868 41.676 65.053 42.2168C65.0192 42.7577 65.0023 43.2985 65.0023 43.8394C65.0023 44.3464 65.0023 44.8535 65.0023 45.3605C65.0023 47.1859 65.0023 49.0112 65.0023 50.8366C65.0361 52.6619 65.053 54.4704 65.053 56.262C65.053 56.769 65.2558 57.1408 65.6615 57.3775C66.1009 57.5803 66.5403 57.6817 66.9798 57.6817C67.3178 57.6817 67.6558 57.6648 67.9939 57.631C68.3319 57.5972 68.6699 57.5803 69.008 57.5803C69.177 57.5803 69.2953 57.6648 69.3629 57.8338C69.4305 57.969 69.4643 58.1042 69.4643 58.2394C69.4643 58.7803 69.1939 59.0507 68.653 59.0507C67.6389 59.0507 66.6249 59.0338 65.6108 59C64.5967 58.9324 63.5826 58.8986 62.5685 58.8986C61.5206 58.8986 60.4558 58.9324 59.3741 59C58.3262 59.0676 57.2614 59.1014 56.1797 59.1014C56.0445 59.1014 55.9431 59 55.8755 58.7972C55.8417 58.5944 55.8248 58.4253 55.8248 58.2901C55.8248 57.9521 55.96 57.7662 56.2304 57.7324C56.6023 57.6648 56.991 57.6479 57.3966 57.6817C57.8023 57.7155 58.1741 57.7324 58.5121 57.7324C59.0192 57.7324 59.4248 57.631 59.729 57.4282C60.0671 57.1915 60.253 56.8028 60.2868 56.262C60.3544 55.1803 60.3882 54.0817 60.3882 52.9662C60.422 51.8507 60.4389 50.7352 60.4389 49.6197V44.7013C60.4051 43.2478 60.3882 41.8112 60.3882 40.3915C60.422 38.9379 60.3713 37.5013 60.2361 36.0816C60.2023 35.4055 60.0164 34.9323 59.6783 34.6619C59.3403 34.3576 58.8333 34.2055 58.1572 34.2055C57.8868 34.2055 57.5995 34.2393 57.2952 34.3069C57.0248 34.3407 56.7375 34.3576 56.4333 34.3576C56.1628 34.3576 56.0276 34.1548 56.0276 33.7492C56.0276 33.5126 56.1459 33.3435 56.3826 33.2421C56.7206 33.1407 57.0755 33.0731 57.4473 33.0393C57.8192 32.9717 58.1741 32.921 58.5121 32.8872C59.4248 32.7182 60.3375 32.5492 61.2502 32.3802C62.1629 32.2111 63.0755 32.0083 63.9882 31.7717C64.2924 31.8731 64.5122 32.059 64.6474 32.3295C64.715 32.4647 64.7657 32.8365 64.7995 33.445C64.8333 34.0534 64.8502 34.7633 64.8502 35.5745C64.8502 36.352 64.8502 37.0957 64.8502 37.8055C64.8502 38.4816 64.8502 38.9548 64.8502 39.2253C65.5939 38.0422 66.4389 36.8591 67.3854 35.676C68.3319 34.4928 69.4136 33.5126 70.6305 32.7351C71.8474 31.9576 73.2164 31.5689 74.7376 31.5689C75.5488 31.5689 76.0728 31.8224 76.3094 32.3295C76.546 32.8365 76.6981 33.4281 76.7657 34.1041C76.8333 34.4759 76.8841 34.8647 76.9179 35.2703C76.9855 35.676 77.0193 36.0647 77.0193 36.4365ZM98.1801 41.2027C98.1463 39.8168 98.0279 38.4985 97.8251 37.2478C97.6223 35.9633 97.1322 34.9154 96.3547 34.1041C95.5772 33.259 94.3096 32.8365 92.5519 32.8365C90.9631 32.8365 89.6617 33.2759 88.6476 34.1548C87.6673 34.9999 86.9068 36.0816 86.3659 37.3999C85.8251 38.6844 85.4194 40.0027 85.149 41.3549C85.9941 41.3887 86.8223 41.4225 87.6335 41.4563C88.4448 41.4563 89.2561 41.4563 90.0673 41.4563C91.4195 41.4563 92.7716 41.4394 94.1237 41.4056C95.4758 41.338 96.8279 41.2703 98.1801 41.2027ZM104.011 52.8141C104.011 52.9831 103.977 53.0845 103.91 53.1183C103.808 53.4563 103.555 53.8619 103.149 54.3352C102.777 54.8084 102.355 55.2648 101.881 55.7042C101.408 56.1098 101.02 56.4141 100.715 56.6169C99.5998 57.3944 98.3322 58.0197 96.9124 58.493C95.5265 58.9662 94.1406 59.2028 92.7547 59.2028C91.6054 59.2028 90.3209 59.0169 88.9011 58.6451C87.5152 58.2732 86.3321 57.7662 85.3518 57.1239C83.4589 55.8732 82.0729 54.2338 81.1941 52.2056C80.3152 50.1774 79.8757 48.0647 79.8757 45.8675C79.8757 43.3661 80.3659 41.0506 81.3462 38.921C82.3265 36.7915 83.8983 35.0675 86.0617 33.7492C87.042 33.1745 88.1406 32.7013 89.3575 32.3295C90.5744 31.9238 91.7406 31.721 92.8561 31.721C94.8505 31.721 96.6082 32.1266 98.1293 32.9379C99.6505 33.7492 100.834 34.8985 101.679 36.3858C102.558 37.8393 102.997 39.5802 102.997 41.6084C102.997 42.183 102.862 42.5549 102.591 42.7239C102.355 42.8929 101.983 42.9774 101.476 42.9774C100.8 42.9774 100.124 42.9605 99.4477 42.9267C98.7716 42.8929 98.0955 42.8591 97.4195 42.8253C96.473 42.7577 95.5265 42.7239 94.58 42.7239C93.6674 42.7239 92.7378 42.7239 91.7913 42.7239C90.642 42.7239 89.4927 42.7239 88.3434 42.7239C87.1941 42.7239 86.0448 42.7577 84.8955 42.8253C84.8617 43.3661 84.8279 43.8901 84.7941 44.3971C84.7603 44.9042 84.7434 45.4281 84.7434 45.969C84.7434 47.2197 84.8955 48.5211 85.1997 49.8732C85.5039 51.1915 85.9941 52.4253 86.6701 53.5746C87.3462 54.6901 88.2082 55.6028 89.2561 56.3127C90.304 56.9887 91.5716 57.3268 93.0589 57.3268C94.58 57.3268 96.0336 57.0901 97.4195 56.6169C98.8054 56.1436 100.073 55.3831 101.222 54.3352C101.527 54.031 101.797 53.7098 102.034 53.3718C102.304 53 102.591 52.6788 102.896 52.4084C103.065 52.2394 103.25 52.1549 103.453 52.1549C103.622 52.1549 103.758 52.2225 103.859 52.3577C103.96 52.4929 104.011 52.645 104.011 52.8141ZM123.478 53.0676C123.342 51.5464 123.258 50.0253 123.224 48.5042C123.224 46.9492 123.207 45.3943 123.173 43.8394H122.464C121.416 43.8394 120.249 44.0084 118.965 44.3464C117.714 44.6506 116.514 45.1239 115.365 45.7661C114.216 46.4084 113.269 47.2197 112.525 48.2C111.816 49.1464 111.461 50.245 111.461 51.4957C111.461 53.1183 111.917 54.3521 112.83 55.1972C113.742 56.0084 114.976 56.4141 116.531 56.4141C117.275 56.4141 118.086 56.2451 118.965 55.907C119.844 55.5352 120.689 55.0958 121.5 54.5887C122.311 54.0817 122.971 53.5746 123.478 53.0676ZM132.351 56.3127C132.351 56.4479 132.334 56.5493 132.3 56.6169C131.962 57.3606 131.388 57.9352 130.576 58.3408C129.799 58.7127 129.021 58.8986 128.244 58.8986C126.824 58.8986 125.793 58.493 125.151 57.6817C124.542 56.8366 124.052 55.8056 123.68 54.5887C122.396 55.7718 120.976 56.769 119.421 57.5803C117.866 58.3577 116.193 58.7465 114.402 58.7465C113.151 58.7465 111.968 58.5099 110.852 58.0366C109.771 57.5296 108.892 56.8028 108.216 55.8563C107.54 54.9098 107.201 53.7605 107.201 52.4084C107.201 50.9887 107.556 49.7718 108.266 48.7577C109.01 47.7098 109.94 46.8309 111.055 46.1211C112.204 45.3774 113.421 44.7859 114.706 44.3464C116.024 43.8732 117.258 43.5182 118.407 43.2816C119.185 43.1126 119.979 42.9605 120.79 42.8253C121.602 42.6901 122.396 42.5549 123.173 42.4196C123.173 41.4732 123.123 40.3746 123.021 39.1239C122.954 37.8731 122.7 36.8422 122.261 36.0309C121.821 35.2534 121.23 34.5605 120.486 33.952C119.742 33.3435 118.914 33.0393 118.002 33.0393C116.447 33.0393 115.23 33.445 114.351 34.2562C113.472 35.0675 112.847 36.2168 112.475 37.7041C112.441 37.8731 112.407 38.0591 112.373 38.2619C112.373 38.4309 112.356 38.5999 112.323 38.7689C112.289 38.9717 112.154 39.1577 111.917 39.3267C111.714 39.4619 111.494 39.5295 111.258 39.5295C110.616 39.5295 110.024 39.3774 109.483 39.0732C108.976 38.7689 108.723 38.2619 108.723 37.552C108.723 37.1464 108.79 36.7914 108.925 36.4872C109.365 35.4393 110.075 34.5774 111.055 33.9013C112.035 33.1914 113.117 32.6506 114.3 32.2788C115.517 31.9069 116.649 31.721 117.697 31.721C119.523 31.721 121.179 32.059 122.666 32.7351C124.154 33.4112 125.337 34.4083 126.216 35.7267C127.128 37.0112 127.585 38.6337 127.585 40.5943C127.585 42.7915 127.568 45.0056 127.534 47.2366C127.534 49.4676 127.602 51.6986 127.737 53.9296C127.771 54.6732 127.923 55.3324 128.193 55.907C128.464 56.4479 129.021 56.7183 129.866 56.7183C130.306 56.7183 130.762 56.6169 131.235 56.4141C131.742 56.1775 132.064 56.0591 132.199 56.0591C132.3 56.0591 132.351 56.1436 132.351 56.3127ZM153.644 60.6225C153.644 59.2704 153.255 58.307 152.478 57.7324C151.734 57.1239 150.821 56.7352 149.74 56.5662C148.658 56.3634 147.61 56.2113 146.596 56.1098L140.917 55.5521C140.174 56.3634 139.616 57.1746 139.244 57.9859C138.906 58.7634 138.737 59.7099 138.737 60.8254C138.737 62.4479 139.126 63.6141 139.903 64.324C140.714 65.0676 141.728 65.5409 142.945 65.7437C144.162 65.9465 145.396 66.0479 146.647 66.0479C147.864 66.0479 148.996 65.8789 150.044 65.5409C151.126 65.2028 151.988 64.6282 152.63 63.8169C153.306 63.0395 153.644 61.9747 153.644 60.6225ZM151.159 40.3408C151.159 39.2929 151.041 38.1774 150.805 36.9943C150.568 35.8112 150.095 34.7971 149.385 33.952C148.709 33.1069 147.712 32.6844 146.393 32.6844C144.906 32.6844 143.757 33.0731 142.945 33.8506C142.134 34.5943 141.576 35.5576 141.272 36.7407C141.002 37.89 140.866 39.0901 140.866 40.3408C140.866 41.6591 140.985 42.9098 141.221 44.0929C141.492 45.2422 142.016 46.1887 142.793 46.9323C143.605 47.676 144.805 48.0478 146.393 48.0478C147.374 48.0478 148.168 47.7943 148.776 47.2873C149.419 46.7802 149.909 46.138 150.247 45.3605C150.585 44.5492 150.821 43.7042 150.957 42.8253C151.092 41.9464 151.159 41.1182 151.159 40.3408ZM160.185 32.0252C160.185 32.7351 160.033 33.2252 159.729 33.4957C159.458 33.7323 159.086 33.8675 158.613 33.9013C158.174 33.9013 157.7 33.9013 157.193 33.9013C156.45 33.9013 155.689 33.9013 154.912 33.9013C154.168 33.8675 153.407 33.8337 152.63 33.7999C153.712 34.645 154.506 35.6591 155.013 36.8422C155.554 38.0253 155.824 39.2929 155.824 40.645C155.824 42.3013 155.351 43.7718 154.405 45.0563C153.492 46.307 152.309 47.2873 150.855 47.9971C149.402 48.707 147.897 49.0619 146.343 49.0619C145.802 49.0619 145.278 49.045 144.771 49.0112C144.264 48.9436 143.74 48.8929 143.199 48.8591C142.759 49.2647 142.252 49.7042 141.678 50.1774C141.137 50.6507 140.866 51.2253 140.866 51.9014C140.866 52.4422 141.12 52.8479 141.627 53.1183C142.168 53.3549 142.759 53.5239 143.402 53.6253C144.044 53.7267 144.551 53.7943 144.923 53.8281L151.362 54.2845C152.512 54.3859 153.627 54.6394 154.709 55.0451C155.824 55.4169 156.754 56.0084 157.498 56.8197C158.241 57.5972 158.613 58.662 158.613 60.0141C158.613 61.4338 158.19 62.6169 157.345 63.5634C156.534 64.5099 155.469 65.2705 154.151 65.8451C152.867 66.4198 151.531 66.8254 150.145 67.062C148.759 67.2986 147.509 67.4169 146.393 67.4169C145.514 67.4169 144.416 67.3662 143.097 67.2648C141.779 67.1972 140.478 66.9944 139.193 66.6564C137.909 66.3183 136.827 65.7775 135.948 65.0338C135.103 64.324 134.681 63.3437 134.681 62.093C134.681 61.1803 134.9 60.3183 135.34 59.507C135.779 58.7296 136.32 58.0028 136.962 57.3268C137.638 56.6507 138.297 56.0591 138.94 55.5521C138.568 55.3831 138.061 55.1296 137.419 54.7915C136.81 54.4197 136.506 53.9972 136.506 53.5239C136.506 52.9493 136.81 52.307 137.419 51.5971C138.061 50.8873 138.754 50.2112 139.497 49.569C140.241 48.8929 140.816 48.369 141.221 47.9971C139.497 47.1859 138.213 46.1549 137.368 44.9042C136.557 43.6196 136.151 42.0309 136.151 40.1379C136.151 38.3802 136.641 36.876 137.621 35.6252C138.635 34.3407 139.903 33.3604 141.424 32.6844C142.979 31.9745 144.551 31.6196 146.14 31.6196C146.714 31.6196 147.289 31.6703 147.864 31.7717C148.438 31.8393 148.996 31.9576 149.537 32.1266C149.807 32.1942 150.095 32.2957 150.399 32.4309C150.737 32.5323 151.041 32.5999 151.312 32.6337C151.548 32.6675 151.768 32.6844 151.971 32.6844C152.207 32.6844 152.444 32.6844 152.681 32.6844C153.898 32.6844 155.064 32.5999 156.179 32.4309C157.295 32.228 158.292 31.6534 159.171 30.7069C159.374 30.5041 159.543 30.4027 159.678 30.4027C159.948 30.4027 160.1 30.6393 160.134 31.1126C160.168 31.552 160.185 31.8562 160.185 32.0252ZM181.367 41.2027C181.333 39.8168 181.215 38.4985 181.012 37.2478C180.809 35.9633 180.319 34.9154 179.542 34.1041C178.764 33.259 177.497 32.8365 175.739 32.8365C174.15 32.8365 172.849 33.2759 171.835 34.1548C170.854 34.9999 170.094 36.0816 169.553 37.3999C169.012 38.6844 168.606 40.0027 168.336 41.3549C169.181 41.3887 170.009 41.4225 170.821 41.4563C171.632 41.4563 172.443 41.4563 173.254 41.4563C174.606 41.4563 175.959 41.4394 177.311 41.4056C178.663 41.338 180.015 41.2703 181.367 41.2027ZM187.198 52.8141C187.198 52.9831 187.164 53.0845 187.097 53.1183C186.995 53.4563 186.742 53.8619 186.336 54.3352C185.964 54.8084 185.542 55.2648 185.068 55.7042C184.595 56.1098 184.206 56.4141 183.902 56.6169C182.787 57.3944 181.519 58.0197 180.099 58.493C178.714 58.9662 177.328 59.2028 175.942 59.2028C174.792 59.2028 173.508 59.0169 172.088 58.6451C170.702 58.2732 169.519 57.7662 168.539 57.1239C166.646 55.8732 165.26 54.2338 164.381 52.2056C163.502 50.1774 163.063 48.0647 163.063 45.8675C163.063 43.3661 163.553 41.0506 164.533 38.921C165.513 36.7915 167.085 35.0675 169.249 33.7492C170.229 33.1745 171.328 32.7013 172.544 32.3295C173.761 31.9238 174.928 31.721 176.043 31.721C178.037 31.721 179.795 32.1266 181.316 32.9379C182.837 33.7492 184.021 34.8985 184.866 36.3858C185.745 37.8393 186.184 39.5802 186.184 41.6084C186.184 42.183 186.049 42.5549 185.778 42.7239C185.542 42.8929 185.17 42.9774 184.663 42.9774C183.987 42.9774 183.311 42.9605 182.635 42.9267C181.959 42.8929 181.283 42.8591 180.606 42.8253C179.66 42.7577 178.714 42.7239 177.767 42.7239C176.854 42.7239 175.925 42.7239 174.978 42.7239C173.829 42.7239 172.68 42.7239 171.53 42.7239C170.381 42.7239 169.232 42.7577 168.082 42.8253C168.049 43.3661 168.015 43.8901 167.981 44.3971C167.947 44.9042 167.93 45.4281 167.93 45.969C167.93 47.2197 168.082 48.5211 168.387 49.8732C168.691 51.1915 169.181 52.4253 169.857 53.5746C170.533 54.6901 171.395 55.6028 172.443 56.3127C173.491 56.9887 174.759 57.3268 176.246 57.3268C177.767 57.3268 179.221 57.0901 180.606 56.6169C181.992 56.1436 183.26 55.3831 184.409 54.3352C184.714 54.031 184.984 53.7098 185.221 53.3718C185.491 53 185.778 52.6788 186.083 52.4084C186.252 52.2394 186.437 52.1549 186.64 52.1549C186.809 52.1549 186.945 52.2225 187.046 52.3577C187.147 52.4929 187.198 52.645 187.198 52.8141Z"
                fill="white"
              />
              <path
                d="M233.176 49.241C233.098 48.3584 233.049 47.4758 233.029 46.5933C233.029 45.6911 233.019 44.7889 232.999 43.8867H232.588C231.98 43.8867 231.303 43.9847 230.558 44.1809C229.832 44.3574 229.136 44.632 228.469 45.0046C227.802 45.3773 227.253 45.848 226.821 46.4167C226.41 46.9659 226.204 47.6033 226.204 48.329C226.204 49.2704 226.468 49.9863 226.998 50.4766C227.527 50.9474 228.243 51.1827 229.146 51.1827C229.577 51.1827 230.048 51.0846 230.558 50.8885C231.068 50.6728 231.558 50.4178 232.029 50.1236C232.499 49.8294 232.882 49.5352 233.176 49.241ZM238.324 51.1239C238.324 51.2023 238.315 51.2612 238.295 51.3004C238.099 51.7319 237.765 52.0653 237.295 52.3007C236.844 52.5164 236.393 52.6243 235.941 52.6243C235.118 52.6243 234.519 52.3889 234.147 51.9182C233.794 51.4279 233.509 50.8297 233.294 50.1236C232.548 50.8101 231.725 51.3886 230.822 51.8594C229.92 52.3105 228.949 52.536 227.91 52.536C227.184 52.536 226.498 52.3987 225.851 52.1241C225.223 51.8299 224.713 51.4083 224.321 50.8591C223.928 50.3099 223.732 49.6431 223.732 48.8586C223.732 48.0348 223.938 47.3287 224.35 46.7404C224.782 46.1324 225.321 45.6224 225.968 45.2105C226.635 44.7791 227.341 44.4358 228.086 44.1809C228.851 43.9063 229.567 43.7003 230.234 43.563C230.685 43.465 231.146 43.3767 231.617 43.2983C232.087 43.2198 232.548 43.1414 232.999 43.0629C232.999 42.5137 232.97 41.8763 232.911 41.1506C232.872 40.425 232.725 39.8268 232.47 39.3561C232.215 38.905 231.872 38.5029 231.44 38.1499C231.009 37.7968 230.528 37.6203 229.999 37.6203C229.096 37.6203 228.39 37.8557 227.88 38.3264C227.371 38.7971 227.008 39.4639 226.792 40.3269C226.772 40.425 226.753 40.5328 226.733 40.6505C226.733 40.7486 226.723 40.8466 226.704 40.9447C226.684 41.0624 226.606 41.1703 226.468 41.2683C226.351 41.3468 226.223 41.386 226.086 41.386C225.713 41.386 225.37 41.2977 225.056 41.1212C224.762 40.9447 224.615 40.6505 224.615 40.2386C224.615 40.0033 224.654 39.7973 224.733 39.6208C224.988 39.0128 225.399 38.5127 225.968 38.1204C226.537 37.7086 227.165 37.3947 227.851 37.179C228.557 36.9633 229.214 36.8554 229.822 36.8554C230.881 36.8554 231.842 37.0515 232.705 37.4438C233.568 37.836 234.255 38.4146 234.765 39.1795C235.294 39.9248 235.559 40.8663 235.559 42.0038C235.559 43.2787 235.549 44.5633 235.53 45.8578C235.53 47.1522 235.569 48.4467 235.647 49.7412C235.667 50.1726 235.755 50.5551 235.912 50.8885C236.069 51.2023 236.393 51.3592 236.883 51.3592C237.138 51.3592 237.403 51.3004 237.677 51.1827C237.971 51.0454 238.158 50.9768 238.236 50.9768C238.295 50.9768 238.324 51.0258 238.324 51.1239Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M214.841 33.7628C215.033 30.7358 217.549 28.3401 220.624 28.3401H222.144V26.6846H220.624C216.634 26.6846 213.377 29.821 213.183 33.7628H214.841ZM245.731 33.7628C245.539 30.7358 243.024 28.3401 239.948 28.3401H238.428V26.6846H239.948C243.938 26.6846 247.195 29.821 247.389 33.7628H245.731ZM247.389 55.4751H245.731C245.539 58.502 243.024 60.8978 239.948 60.8978H239.322V62.5533H239.948C243.938 62.5533 247.195 59.4169 247.389 55.4751ZM214.841 55.4751H213.183C213.377 59.4169 216.634 62.5533 220.624 62.5533H222.425V60.8978H220.624C217.549 60.8978 215.033 58.502 214.841 55.4751Z"
                fill="#FFFBFB"
              />
            </svg>
          </Link>
          <p className="text-white mb-[50px]">
            Land Analysis PacketLand Analysis Packet
            <br /> Land Analysis Packet <br /> Land Analysis PacketLand Analysi
          </p>
          <div className="flex justify-center items-center gap-10 mb-[25px]">
            <Link to="/" className="text-white">
              Welcome to Acreage
            </Link>
            <Link to="/how-it-works" className="text-white">
              How’s Acreage Work
            </Link>
            <Link to="/features" className="text-white">
              Key Features & Benefits
            </Link>
            <Link to="/join" className="text-white">
              Join Our Email List.
            </Link>
          </div>
          <div className="flex justify-center items-center gap-10">
            <Link to="/" className="text-white">
              Acreage Work
            </Link>
            <Link to="/features" className="text-white">
              Key Features & Benefits
            </Link>
            <Link to="/join" className="text-white">
              Join Our Email List.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
