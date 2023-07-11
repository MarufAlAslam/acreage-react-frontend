import React from "react";
import heroVideo from "../../assets/videos/hero.mp4";

const Hero = () => {
  return (
    <div className="hero py-[100px] relative">
      <div className="absolute inset-0 bg-black">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="container relative z-20">
        <svg
          width="282"
          height="84"
          viewBox="0 0 282 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.89 60.2483C20.7361 58.517 20.6399 56.7858 20.6015 55.0546C20.6015 53.2849 20.5822 51.5152 20.5438 49.7455H19.7359C18.5432 49.7455 17.216 49.9379 15.7541 50.3226C14.3306 50.6689 12.9649 51.2075 11.6569 51.9384C10.3488 52.6694 9.27162 53.5927 8.42525 54.7084C7.61735 55.7856 7.2134 57.0359 7.2134 58.4593C7.2134 60.306 7.73276 61.7102 8.77149 62.672C9.81022 63.5953 11.2144 64.0569 12.9841 64.0569C13.8305 64.0569 14.7538 63.8646 15.7541 63.4799C16.7543 63.0567 17.7161 62.5565 18.6394 61.9795C19.5627 61.4024 20.3129 60.8253 20.89 60.2483ZM30.9888 63.9415C30.9888 64.0954 30.9695 64.2108 30.9311 64.2878C30.5463 65.1341 29.8923 65.7881 28.969 66.2498C28.0842 66.673 27.1993 66.8846 26.3145 66.8846C24.6987 66.8846 23.5253 66.4229 22.7943 65.4996C22.1019 64.5378 21.544 63.3644 21.1208 61.9795C19.6589 63.326 18.0431 64.4609 16.2734 65.3842C14.5037 66.269 12.5994 66.7115 10.5604 66.7115C9.13697 66.7115 7.79047 66.4422 6.52091 65.9036C5.28983 65.3265 4.28957 64.4994 3.52014 63.4222C2.75071 62.345 2.366 61.0369 2.366 59.4981C2.366 57.8823 2.76995 56.4973 3.57785 55.3431C4.42422 54.1505 5.48218 53.1503 6.75174 52.3424C8.05977 51.496 9.44475 50.8227 10.9067 50.3226C12.407 49.784 13.8113 49.3801 15.1193 49.1108C16.0041 48.9184 16.9082 48.7453 17.8315 48.5914C18.7548 48.4375 19.6589 48.2836 20.5438 48.1297C20.5438 47.0525 20.4861 45.8022 20.3706 44.3788C20.2937 42.9553 20.0052 41.782 19.505 40.8586C19.0049 39.9738 18.3317 39.1851 17.4853 38.4926C16.6389 37.8002 15.6964 37.4539 14.6576 37.4539C12.8879 37.4539 11.503 37.9156 10.5027 38.8389C9.50245 39.7622 8.79073 41.0702 8.36754 42.763C8.32907 42.9553 8.2906 43.1669 8.25213 43.3978C8.25213 43.5901 8.23289 43.7825 8.19442 43.9748C8.15595 44.2057 8.00207 44.4172 7.73276 44.6096C7.50194 44.7635 7.25187 44.8404 6.98257 44.8404C6.25161 44.8404 5.57836 44.6673 4.96282 44.3211C4.38575 43.9748 4.09721 43.3978 4.09721 42.5899C4.09721 42.1282 4.17415 41.7242 4.32804 41.378C4.82817 40.1854 5.63607 39.2044 6.75174 38.4349C7.86742 37.627 9.0985 37.0115 10.445 36.5883C11.83 36.1651 13.1188 35.9535 14.3114 35.9535C16.3888 35.9535 18.2739 36.3382 19.9667 37.1077C21.6594 37.8771 23.0059 39.012 24.0062 40.5124C25.0449 41.9743 25.5643 43.8209 25.5643 46.0523C25.5643 48.5529 25.5451 51.0728 25.5066 53.6119C25.5066 56.151 25.5835 58.6902 25.7374 61.2293C25.7759 62.0757 25.949 62.8258 26.2568 63.4799C26.5645 64.0954 27.1993 64.4032 28.1611 64.4032C28.6612 64.4032 29.1806 64.2878 29.7192 64.0569C30.2963 63.7876 30.6618 63.653 30.8156 63.653C30.9311 63.653 30.9888 63.7492 30.9888 63.9415ZM61.6858 59.8443C61.6858 60.1136 61.4742 60.4983 61.0511 60.9985C60.6279 61.4601 60.3201 61.7871 60.1277 61.9795C59.7815 62.3257 59.4353 62.672 59.089 63.0182C58.7428 63.3644 58.3581 63.6915 57.9349 63.9992C56.7423 64.8456 55.3188 65.5766 53.6645 66.1921C52.0103 66.7692 50.4522 67.0577 48.9903 67.0577C46.0664 67.0577 43.4888 66.4229 41.2575 65.1534C39.0646 63.8453 37.3334 62.0757 36.0638 59.8443C34.8328 57.5745 34.2172 54.9969 34.2172 52.1115C34.2172 49.2647 34.7943 46.5909 35.9484 44.0902C37.1026 41.5896 38.93 39.5698 41.4306 38.031C42.5078 37.377 43.7004 36.8576 45.0085 36.4729C46.355 36.0882 47.6438 35.8958 48.8748 35.8958C49.8366 35.8958 50.7599 36.0112 51.6448 36.2421C52.5681 36.4729 53.4529 36.7807 54.2993 37.1654C54.7994 37.3962 55.2803 37.627 55.742 37.8579C56.2037 38.0887 56.7038 38.2041 57.2424 38.2041C57.704 38.2041 58.0695 38.0695 58.3388 37.8002C58.6466 37.4924 58.8774 37.3385 59.0313 37.3385C59.1467 37.3385 59.2044 37.4154 59.2044 37.5693C59.2814 38.031 59.3006 38.4926 59.2621 38.9543C59.2621 39.416 59.2814 39.8584 59.3198 40.2816C59.3583 41.1279 59.3968 41.9743 59.4353 42.8207C59.4737 43.6671 59.5122 44.5134 59.5507 45.3598V45.5329C59.5891 45.9561 59.5507 46.2831 59.4353 46.5139C59.3198 46.7448 59.0121 46.8602 58.5119 46.8602C58.2426 46.8602 58.0503 46.7063 57.9349 46.3985C57.8579 46.0908 57.781 45.8215 57.704 45.5906C57.4347 44.475 57.0308 43.2823 56.4922 42.0128C55.9536 40.7432 55.2226 39.7237 54.2993 38.9543C53.7222 38.4157 52.9913 37.9733 52.1064 37.627C51.2601 37.2808 50.4522 37.1077 49.6827 37.1077C47.8361 37.1077 46.2588 37.5886 44.9508 38.5503C43.6812 39.4737 42.6617 40.6855 41.8923 42.1859C41.1228 43.6478 40.5458 45.2251 40.1611 46.9179C39.8148 48.6106 39.6417 50.2072 39.6417 51.7076C39.6417 53.208 39.8148 54.7468 40.1611 56.3242C40.5073 57.863 41.0459 59.3057 41.7769 60.6522C42.5463 61.9987 43.5465 63.0759 44.7776 63.8838C46.0472 64.6917 47.5668 65.0957 49.3365 65.0957C51.7987 65.0957 53.8569 64.6532 55.5112 63.7684C57.1654 62.8451 58.762 61.4409 60.3009 59.5558C60.4548 59.2865 60.6663 59.1518 60.9356 59.1518C61.4358 59.1518 61.6858 59.3826 61.6858 59.8443ZM87.6563 41.3203C87.6563 41.705 87.5025 42.0705 87.1947 42.4167C86.9254 42.7245 86.5791 42.8784 86.1559 42.8784C85.5789 42.8784 85.1557 42.686 84.8864 42.3013C84.6556 41.9166 84.444 41.4742 84.2516 40.9741C84.0977 40.4739 83.8477 40.0315 83.5014 39.6468C83.1552 39.2621 82.5781 39.0697 81.7702 39.0697C81.6163 39.0697 81.4624 39.0697 81.3085 39.0697C81.1931 39.0697 81.0585 39.089 80.9046 39.1274C80.2506 39.2428 79.5389 39.6468 78.7694 40.3393C78 41.0318 77.2498 41.8589 76.5188 42.8207C75.8264 43.744 75.2493 44.6673 74.7876 45.5906C74.326 46.5139 74.0759 47.2834 74.0374 47.8989C73.999 48.5145 73.9797 49.13 73.9797 49.7455C73.9797 50.3226 73.9797 50.8997 73.9797 51.4768C73.9797 53.5542 73.9797 55.6317 73.9797 57.7091C74.0182 59.7866 74.0374 61.8448 74.0374 63.8838C74.0374 64.4609 74.2683 64.8841 74.7299 65.1534C75.2301 65.3842 75.7302 65.4996 76.2303 65.4996C76.615 65.4996 76.9997 65.4804 77.3845 65.4419C77.7692 65.4034 78.1539 65.3842 78.5386 65.3842C78.731 65.3842 78.8656 65.4804 78.9425 65.6727C79.0195 65.8266 79.058 65.9805 79.058 66.1344C79.058 66.7499 78.7502 67.0577 78.1346 67.0577C76.9805 67.0577 75.8264 67.0385 74.6722 67C73.5181 66.9231 72.3639 66.8846 71.2098 66.8846C70.0172 66.8846 68.8053 66.9231 67.5742 67C66.3816 67.0769 65.1698 67.1154 63.9387 67.1154C63.7848 67.1154 63.6694 67 63.5924 66.7692C63.554 66.5383 63.5347 66.346 63.5347 66.1921C63.5347 65.8074 63.6886 65.5958 63.9964 65.5573C64.4196 65.4804 64.862 65.4611 65.3236 65.4996C65.7853 65.5381 66.2085 65.5573 66.5932 65.5573C67.1703 65.5573 67.6319 65.4419 67.9782 65.2111C68.3629 64.9418 68.5745 64.4994 68.613 63.8838C68.6899 62.6527 68.7284 61.4024 68.7284 60.1328C68.7668 58.8633 68.7861 57.5937 68.7861 56.3242V50.7266C68.7476 49.0723 68.7284 47.4373 68.7284 45.8215C68.7668 44.1672 68.7091 42.5321 68.5553 40.9163C68.5168 40.1469 68.3052 39.6083 67.9205 39.3005C67.5358 38.9543 66.9587 38.7812 66.1893 38.7812C65.8815 38.7812 65.5545 38.8196 65.2082 38.8966C64.9005 38.9351 64.5735 38.9543 64.2272 38.9543C63.9194 38.9543 63.7656 38.7235 63.7656 38.2618C63.7656 37.9925 63.9002 37.8002 64.1695 37.6847C64.5542 37.5693 64.9582 37.4924 65.3814 37.4539C65.8045 37.377 66.2085 37.3193 66.5932 37.2808C67.6319 37.0884 68.6707 36.8961 69.7094 36.7037C70.7481 36.5114 71.7869 36.2805 72.8256 36.0112C73.1718 36.1266 73.4219 36.3382 73.5758 36.646C73.6527 36.7999 73.7104 37.2231 73.7489 37.9156C73.7874 38.6081 73.8066 39.416 73.8066 40.3393C73.8066 41.2241 73.8066 42.0705 73.8066 42.8784C73.8066 43.6478 73.8066 44.1864 73.8066 44.4942C74.653 43.1477 75.6148 41.8012 76.692 40.4547C77.7692 39.1082 79.0003 37.9925 80.3852 37.1077C81.7702 36.2228 83.3283 35.7804 85.0595 35.7804C85.9828 35.7804 86.5791 36.0689 86.8484 36.646C87.1177 37.2231 87.2909 37.8963 87.3678 38.6658C87.4447 39.089 87.5025 39.5314 87.5409 39.993C87.6179 40.4547 87.6563 40.8971 87.6563 41.3203ZM111.74 46.7448C111.701 45.1674 111.566 43.6671 111.336 42.2436C111.105 40.7817 110.547 39.5891 109.662 38.6658C108.777 37.704 107.335 37.2231 105.334 37.2231C103.526 37.2231 102.045 37.7232 100.891 38.7235C99.775 39.6853 98.9094 40.9163 98.2938 42.4167C97.6783 43.8786 97.2166 45.379 96.9089 46.9179C97.8707 46.9564 98.8132 46.9948 99.7365 47.0333C100.66 47.0333 101.583 47.0333 102.506 47.0333C104.045 47.0333 105.584 47.0141 107.123 46.9756C108.662 46.8987 110.201 46.8217 111.74 46.7448ZM118.376 59.9597C118.376 60.1521 118.337 60.2675 118.261 60.306C118.145 60.6907 117.857 61.1523 117.395 61.6909C116.972 62.2295 116.491 62.7489 115.952 63.249C115.414 63.7107 114.971 64.0569 114.625 64.2878C113.355 65.1726 111.913 65.8843 110.297 66.4229C108.72 66.9615 107.142 67.2308 105.565 67.2308C104.257 67.2308 102.795 67.0192 101.179 66.596C99.6019 66.1729 98.2554 65.5958 97.1397 64.8648C94.9853 63.4414 93.408 61.5755 92.4077 59.2672C91.4075 56.9589 90.9073 54.5545 90.9073 52.0538C90.9073 49.2069 91.4652 46.5717 92.5808 44.1479C93.6965 41.7242 95.4854 39.7622 97.9476 38.2618C99.0633 37.6078 100.314 37.0692 101.699 36.646C103.084 36.1844 104.411 35.9535 105.68 35.9535C107.95 35.9535 109.951 36.4152 111.682 37.3385C113.413 38.2618 114.76 39.5698 115.721 41.2626C116.722 42.9169 117.222 44.8981 117.222 47.2064C117.222 47.8604 117.068 48.2836 116.76 48.476C116.491 48.6683 116.068 48.7645 115.491 48.7645C114.721 48.7645 113.952 48.7453 113.182 48.7068C112.413 48.6683 111.643 48.6299 110.874 48.5914C109.797 48.5145 108.72 48.476 107.642 48.476C106.604 48.476 105.546 48.476 104.469 48.476C103.16 48.476 101.852 48.476 100.544 48.476C99.2364 48.476 97.9284 48.5145 96.6203 48.5914C96.5819 49.2069 96.5434 49.8033 96.5049 50.3803C96.4664 50.9574 96.4472 51.5537 96.4472 52.1692C96.4472 53.5927 96.6203 55.0738 96.9666 56.6127C97.3128 58.1131 97.8707 59.5173 98.6401 60.8253C99.4095 62.0949 100.391 63.1336 101.583 63.9415C102.776 64.7109 104.218 65.0957 105.911 65.0957C107.642 65.0957 109.297 64.8264 110.874 64.2878C112.451 63.7492 113.894 62.8836 115.202 61.6909C115.548 61.3447 115.856 60.9792 116.125 60.5945C116.433 60.1713 116.76 59.8058 117.106 59.4981C117.299 59.3057 117.51 59.2095 117.741 59.2095C117.934 59.2095 118.087 59.2865 118.203 59.4404C118.318 59.5942 118.376 59.7674 118.376 59.9597ZM140.531 60.2483C140.377 58.517 140.281 56.7858 140.242 55.0546C140.242 53.2849 140.223 51.5152 140.185 49.7455H139.377C138.184 49.7455 136.857 49.9379 135.395 50.3226C133.972 50.6689 132.606 51.2075 131.298 51.9384C129.99 52.6694 128.913 53.5927 128.066 54.7084C127.258 55.7856 126.854 57.0359 126.854 58.4593C126.854 60.306 127.374 61.7102 128.412 62.672C129.451 63.5953 130.855 64.0569 132.625 64.0569C133.471 64.0569 134.395 63.8646 135.395 63.4799C136.395 63.0567 137.357 62.5565 138.28 61.9795C139.204 61.4024 139.954 60.8253 140.531 60.2483ZM150.63 63.9415C150.63 64.0954 150.611 64.2108 150.572 64.2878C150.187 65.1341 149.533 65.7881 148.61 66.2498C147.725 66.673 146.84 66.8846 145.955 66.8846C144.34 66.8846 143.166 66.4229 142.435 65.4996C141.743 64.5378 141.185 63.3644 140.762 61.9795C139.3 63.326 137.684 64.4609 135.914 65.3842C134.145 66.269 132.24 66.7115 130.201 66.7115C128.778 66.7115 127.431 66.4422 126.162 65.9036C124.931 65.3265 123.931 64.4994 123.161 63.4222C122.392 62.345 122.007 61.0369 122.007 59.4981C122.007 57.8823 122.411 56.4973 123.219 55.3431C124.065 54.1505 125.123 53.1503 126.393 52.3424C127.701 51.496 129.086 50.8227 130.548 50.3226C132.048 49.784 133.452 49.3801 134.76 49.1108C135.645 48.9184 136.549 48.7453 137.473 48.5914C138.396 48.4375 139.3 48.2836 140.185 48.1297C140.185 47.0525 140.127 45.8022 140.012 44.3788C139.935 42.9553 139.646 41.782 139.146 40.8586C138.646 39.9738 137.973 39.1851 137.126 38.4926C136.28 37.8002 135.337 37.4539 134.299 37.4539C132.529 37.4539 131.144 37.9156 130.144 38.8389C129.143 39.7622 128.432 41.0702 128.009 42.763C127.97 42.9553 127.932 43.1669 127.893 43.3978C127.893 43.5901 127.874 43.7825 127.835 43.9748C127.797 44.2057 127.643 44.4172 127.374 44.6096C127.143 44.7635 126.893 44.8404 126.624 44.8404C125.893 44.8404 125.219 44.6673 124.604 44.3211C124.027 43.9748 123.738 43.3978 123.738 42.5899C123.738 42.1282 123.815 41.7242 123.969 41.378C124.469 40.1854 125.277 39.2044 126.393 38.4349C127.508 37.627 128.74 37.0115 130.086 36.5883C131.471 36.1651 132.76 35.9535 133.952 35.9535C136.03 35.9535 137.915 36.3382 139.608 37.1077C141.3 37.8771 142.647 39.012 143.647 40.5124C144.686 41.9743 145.205 43.8209 145.205 46.0523C145.205 48.5529 145.186 51.0728 145.148 53.6119C145.148 56.151 145.225 58.6902 145.378 61.2293C145.417 62.0757 145.59 62.8258 145.898 63.4799C146.206 64.0954 146.84 64.4032 147.802 64.4032C148.302 64.4032 148.822 64.2878 149.36 64.0569C149.937 63.7876 150.303 63.653 150.457 63.653C150.572 63.653 150.63 63.7492 150.63 63.9415ZM174.864 68.8466C174.864 67.3078 174.421 66.2113 173.536 65.5573C172.69 64.8648 171.651 64.4224 170.42 64.2301C169.189 63.9992 167.996 63.8261 166.842 63.7107L160.379 63.0759C159.533 63.9992 158.898 64.9225 158.475 65.8459C158.09 66.7307 157.898 67.8079 157.898 69.0775C157.898 70.9241 158.34 72.2514 159.225 73.0593C160.148 73.9056 161.302 74.4442 162.687 74.6751C164.072 74.9059 165.477 75.0213 166.9 75.0213C168.285 75.0213 169.574 74.8289 170.766 74.4442C171.998 74.0595 172.979 73.4055 173.709 72.4822C174.479 71.5973 174.864 70.3855 174.864 68.8466ZM172.036 45.7637C172.036 44.5711 171.901 43.3016 171.632 41.9551C171.363 40.6086 170.824 39.4544 170.016 38.4926C169.247 37.5309 168.112 37.05 166.612 37.05C164.919 37.05 163.611 37.4924 162.687 38.3772C161.764 39.2236 161.129 40.32 160.783 41.6665C160.475 42.9746 160.321 44.3403 160.321 45.7637C160.321 47.2641 160.456 48.6876 160.725 50.0341C161.033 51.3421 161.629 52.4193 162.514 53.2657C163.438 54.1121 164.803 54.5352 166.612 54.5352C167.727 54.5352 168.631 54.2467 169.324 53.6696C170.055 53.0926 170.613 52.3616 170.997 51.4768C171.382 50.5534 171.651 49.5917 171.805 48.5914C171.959 47.5911 172.036 46.6486 172.036 45.7637ZM182.308 36.2998C182.308 37.1077 182.135 37.6655 181.789 37.9733C181.481 38.2426 181.058 38.3965 180.519 38.4349C180.019 38.4349 179.48 38.4349 178.903 38.4349C178.057 38.4349 177.191 38.4349 176.306 38.4349C175.46 38.3965 174.594 38.358 173.709 38.3195C174.941 39.2813 175.845 40.4355 176.422 41.782C177.037 43.1285 177.345 44.5711 177.345 46.11C177.345 47.9951 176.806 49.6686 175.729 51.1305C174.691 52.554 173.344 53.6696 171.69 54.4775C170.035 55.2854 168.323 55.6894 166.554 55.6894C165.938 55.6894 165.342 55.6702 164.765 55.6317C164.188 55.5547 163.591 55.497 162.976 55.4586C162.476 55.9202 161.899 56.4203 161.245 56.9589C160.629 57.4975 160.321 58.1516 160.321 58.921C160.321 59.5365 160.61 59.9982 161.187 60.306C161.803 60.5753 162.476 60.7676 163.207 60.883C163.938 60.9985 164.515 61.0754 164.938 61.1139L172.267 61.6332C173.575 61.7486 174.844 62.0372 176.075 62.4988C177.345 62.922 178.403 63.5953 179.249 64.5186C180.096 65.4034 180.519 66.6153 180.519 68.1541C180.519 69.7699 180.038 71.1164 179.076 72.1936C178.153 73.2708 176.941 74.1365 175.441 74.7905C173.979 75.4445 172.459 75.9061 170.882 76.1754C169.305 76.4447 167.881 76.5794 166.612 76.5794C165.611 76.5794 164.361 76.5217 162.861 76.4063C161.36 76.3293 159.879 76.0985 158.417 75.7138C156.955 75.3291 155.724 74.7135 154.724 73.8672C153.762 73.0593 153.281 71.9436 153.281 70.5201C153.281 69.4814 153.531 68.5004 154.031 67.5771C154.531 66.6922 155.147 65.8651 155.878 65.0957C156.647 64.3262 157.398 63.653 158.129 63.0759C157.705 62.8836 157.128 62.595 156.397 62.2103C155.705 61.7871 155.359 61.3062 155.359 60.7676C155.359 60.1136 155.705 59.3826 156.397 58.5747C157.128 57.7668 157.917 56.9974 158.763 56.2665C159.61 55.497 160.264 54.9007 160.725 54.4775C158.763 53.5542 157.301 52.3808 156.34 50.9574C155.416 49.4955 154.955 47.6873 154.955 45.5329C154.955 43.5324 155.512 41.8204 156.628 40.397C157.782 38.9351 159.225 37.8194 160.956 37.05C162.726 36.2421 164.515 35.8381 166.323 35.8381C166.977 35.8381 167.631 35.8958 168.285 36.0112C168.939 36.0882 169.574 36.2228 170.189 36.4152C170.497 36.4921 170.824 36.6075 171.17 36.7614C171.555 36.8768 171.901 36.9538 172.209 36.9923C172.478 37.0307 172.728 37.05 172.959 37.05C173.229 37.05 173.498 37.05 173.767 37.05C175.152 37.05 176.479 36.9538 177.749 36.7614C179.019 36.5306 180.153 35.8766 181.154 34.7994C181.385 34.5686 181.577 34.4531 181.731 34.4531C182.039 34.4531 182.212 34.7224 182.25 35.261C182.289 35.7612 182.308 36.1074 182.308 36.2998ZM206.415 46.7448C206.377 45.1674 206.242 43.6671 206.012 42.2436C205.781 40.7817 205.223 39.5891 204.338 38.6658C203.453 37.704 202.011 37.2231 200.01 37.2231C198.202 37.2231 196.721 37.7232 195.567 38.7235C194.451 39.6853 193.585 40.9163 192.97 42.4167C192.354 43.8786 191.893 45.379 191.585 46.9179C192.547 46.9564 193.489 46.9948 194.412 47.0333C195.336 47.0333 196.259 47.0333 197.182 47.0333C198.721 47.0333 200.26 47.0141 201.799 46.9756C203.338 46.8987 204.877 46.8217 206.415 46.7448ZM213.052 59.9597C213.052 60.1521 213.013 60.2675 212.936 60.306C212.821 60.6907 212.532 61.1523 212.071 61.6909C211.648 62.2295 211.167 62.7489 210.628 63.249C210.09 63.7107 209.647 64.0569 209.301 64.2878C208.031 65.1726 206.589 65.8843 204.973 66.4229C203.395 66.9615 201.818 67.2308 200.241 67.2308C198.933 67.2308 197.471 67.0192 195.855 66.596C194.278 66.1729 192.931 65.5958 191.816 64.8648C189.661 63.4414 188.084 61.5755 187.084 59.2672C186.083 56.9589 185.583 54.5545 185.583 52.0538C185.583 49.2069 186.141 46.5717 187.257 44.1479C188.372 41.7242 190.161 39.7622 192.623 38.2618C193.739 37.6078 194.989 37.0692 196.374 36.646C197.759 36.1844 199.087 35.9535 200.356 35.9535C202.626 35.9535 204.627 36.4152 206.358 37.3385C208.089 38.2618 209.436 39.5698 210.397 41.2626C211.398 42.9169 211.898 44.8981 211.898 47.2064C211.898 47.8604 211.744 48.2836 211.436 48.476C211.167 48.6683 210.744 48.7645 210.166 48.7645C209.397 48.7645 208.628 48.7453 207.858 48.7068C207.089 48.6683 206.319 48.6299 205.55 48.5914C204.473 48.5145 203.395 48.476 202.318 48.476C201.28 48.476 200.222 48.476 199.144 48.476C197.836 48.476 196.528 48.476 195.22 48.476C193.912 48.476 192.604 48.5145 191.296 48.5914C191.258 49.2069 191.219 49.8033 191.181 50.3803C191.142 50.9574 191.123 51.5537 191.123 52.1692C191.123 53.5927 191.296 55.0738 191.642 56.6127C191.989 58.1131 192.547 59.5173 193.316 60.8253C194.085 62.0949 195.066 63.1336 196.259 63.9415C197.452 64.7109 198.894 65.0957 200.587 65.0957C202.318 65.0957 203.973 64.8264 205.55 64.2878C207.127 63.7492 208.57 62.8836 209.878 61.6909C210.224 61.3447 210.532 60.9792 210.801 60.5945C211.109 60.1713 211.436 59.8058 211.782 59.4981C211.975 59.3057 212.186 59.2095 212.417 59.2095C212.609 59.2095 212.763 59.2865 212.879 59.4404C212.994 59.5942 213.052 59.7674 213.052 59.9597Z"
            fill="#EFD6AA"
          />
          <path
            d="M265.38 56.3462C265.291 55.3417 265.235 54.3372 265.213 53.3328C265.213 52.306 265.201 51.2792 265.179 50.2524H264.71C264.018 50.2524 263.248 50.364 262.4 50.5872C261.574 50.7881 260.782 51.1006 260.023 51.5247C259.264 51.9488 258.639 52.4845 258.148 53.1319C257.679 53.7569 257.445 54.4823 257.445 55.3082C257.445 56.3797 257.746 57.1944 258.349 57.7525C258.951 58.2882 259.766 58.5561 260.793 58.5561C261.284 58.5561 261.82 58.4444 262.4 58.2212C262.98 57.9757 263.538 57.6855 264.074 57.3507C264.61 57.0159 265.045 56.681 265.38 56.3462ZM271.239 58.4891C271.239 58.5784 271.228 58.6453 271.206 58.69C270.983 59.1811 270.603 59.5605 270.068 59.8284C269.554 60.0739 269.041 60.1967 268.527 60.1967C267.59 60.1967 266.909 59.9288 266.485 59.3931C266.083 58.8351 265.759 58.1543 265.514 57.3507C264.666 58.1319 263.728 58.7904 262.701 59.3262C261.675 59.8396 260.57 60.0963 259.387 60.0963C258.561 60.0963 257.779 59.94 257.043 59.6275C256.329 59.2927 255.748 58.8128 255.302 58.1877C254.855 57.5627 254.632 56.8038 254.632 55.9109C254.632 54.9734 254.866 54.1698 255.335 53.5002C255.826 52.8082 256.44 52.2278 257.177 51.7591C257.936 51.268 258.739 50.8774 259.587 50.5872C260.458 50.2747 261.273 50.0403 262.032 49.8841C262.545 49.7724 263.07 49.672 263.605 49.5827C264.141 49.4934 264.666 49.4041 265.179 49.3148C265.179 48.6898 265.146 47.9644 265.079 47.1385C265.034 46.3126 264.867 45.6318 264.576 45.096C264.286 44.5826 263.896 44.125 263.405 43.7232C262.913 43.3214 262.367 43.1206 261.764 43.1206C260.737 43.1206 259.933 43.3884 259.353 43.9241C258.773 44.4599 258.36 45.2188 258.114 46.201C258.092 46.3126 258.07 46.4353 258.047 46.5693C258.047 46.6809 258.036 46.7925 258.014 46.9041C257.991 47.038 257.902 47.1608 257.746 47.2724C257.612 47.3617 257.467 47.4063 257.311 47.4063C256.887 47.4063 256.496 47.3059 256.139 47.105C255.804 46.9041 255.637 46.5693 255.637 46.1005C255.637 45.8326 255.681 45.5983 255.77 45.3974C256.061 44.7054 256.529 44.1362 257.177 43.6898C257.824 43.221 258.538 42.8639 259.32 42.6183C260.123 42.3728 260.871 42.25 261.563 42.25C262.768 42.25 263.862 42.4732 264.844 42.9197C265.826 43.3661 266.608 44.0246 267.188 44.8951C267.791 45.7434 268.092 46.8148 268.092 48.1095C268.092 49.5604 268.081 51.0225 268.059 52.4957C268.059 53.9689 268.103 55.4422 268.193 56.9154C268.215 57.4065 268.315 57.8418 268.494 58.2212C268.672 58.5784 269.041 58.757 269.599 58.757C269.889 58.757 270.19 58.69 270.503 58.5561C270.838 58.3998 271.05 58.3217 271.139 58.3217C271.206 58.3217 271.239 58.3775 271.239 58.4891Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M244.512 38.4261C244.73 34.981 247.593 32.2542 251.093 32.2542H252.823V30.3701H251.093C246.552 30.3701 242.845 33.9398 242.625 38.4261H244.512ZM279.668 38.4261C279.45 34.981 276.587 32.2542 273.087 32.2542H271.356V30.3701H273.087C277.627 30.3701 281.335 33.9398 281.555 38.4261H279.668ZM281.555 63.137H279.668C279.45 66.582 276.586 69.3085 273.087 69.3085H272.373V71.1927H273.087C277.627 71.1927 281.334 67.6231 281.555 63.137ZM244.512 63.137H242.625C242.845 67.6231 246.552 71.1927 251.093 71.1927H253.143V69.3085H251.093C247.593 69.3085 244.73 66.582 244.512 63.137Z"
            fill="#FFFBFB"
          />
        </svg>

        <h2 className="mt-[20px] mb-[75px] md:text-[60px] text-[45px]  text-white lh-1 font-normal">
          Unlock Your <br /> Property's Full
          <br /> Potential.
        </h2>
        <p className="text-white">
          <b>
            Acreage is a property technology (PropTech) start-up that offers a
            powerful land use tool.
          </b>{" "}
          We provide homeowners and landowners with the tools needed to maximize
          the use or value of their property. With our land use tool, you can
          unlock the full potential of your property and make informed decisions
          based on data insights.
        </p>
      </div>
    </div>
  );
};

export default Hero;
