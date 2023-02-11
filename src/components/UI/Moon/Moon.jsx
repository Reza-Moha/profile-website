import AOS from "aos";
import { useEffect } from "react";

export default function Moon() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="zoom-in-left"
        data-aos-delay="900"
        className="col-span-1 relative"
      >
        {/*Moon*/}
        <svg
          data-value="0"
          className="object relative top-12 left-2 w-[320px] md:w-[300px] md:top-44  md:-left-3 lg:left-0 xl:-left-2 xl:top-[11rem]  2xl:w-[350px] 2xl:top-52 2xl:-left-6 z-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 545 545"
        >
          <g fill="none" fillRule="evenodd">
            <path
              fill="#FFFFFA"
              d="M544.8,272.4 C544.8,422.842 422.843,544.799 272.401,544.799 C121.958,544.799 0,422.842 0,272.4 C0,121.958 121.958,0 272.401,0 C422.843,0 544.8,121.958 544.8,272.4"
            />
            <path
              fill="#E6E6E6"
              fillOpacity=".3"
              d="M199.3739 191.5917C199.3739 224.4527 172.7349 251.0917 139.8739 251.0917 107.0129 251.0917 80.3739 224.4527 80.3739 191.5917 80.3739 158.7307 107.0129 132.0917 139.8739 132.0917 172.7349 132.0917 199.3739 158.7307 199.3739 191.5917M296.954 96.5917C296.954 117.6227 279.905 134.6717 258.874 134.6717 237.843 134.6717 220.794 117.6227 220.794 96.5917 220.794 75.5607 237.843 58.5117 258.874 58.5117 279.905 58.5117 296.954 75.5607 296.954 96.5917M293.2451 201.5917C293.2451 215.0517 282.3341 225.9627 268.8741 225.9627 255.4141 225.9627 244.5031 215.0517 244.5031 201.5917 244.5031 188.1317 255.4141 177.2207 268.8741 177.2207 282.3341 177.2207 293.2451 188.1317 293.2451 201.5917"
            />
          </g>
        </svg>
        {/*Stars*/}
        <svg
          data-value="4"
          className="object absolute top-10 w-[700px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1301 952"
        >
          <g fill="#FFF" fillRule="evenodd">
            <path d="M1043 63.5C1043 64.8805 1041.8805 66 1040.5 66 1039.1195 66 1038 64.8805 1038 63.5 1038 62.1195 1039.1195 61 1040.5 61 1041.8805 61 1043 62.1195 1043 63.5M344 43.5C344 44.8805 342.8805 46 341.5 46 340.1195 46 339 44.8805 339 43.5 339 42.1195 340.1195 41 341.5 41 342.8805 41 344 42.1195 344 43.5M199 572.5C199 573.8805 197.8805 575 196.5 575 195.1195 575 194 573.8805 194 572.5 194 571.1195 195.1195 570 196.5 570 197.8805 570 199 571.1195 199 572.5M241 391.5C241 392.881 239.881 394 238.5 394 237.119 394 236 392.881 236 391.5 236 390.119 237.119 389 238.5 389 239.881 389 241 390.119 241 391.5M905 92.5C905 93.881 903.881 95 902.5 95 901.119 95 900 93.881 900 92.5 900 91.119 901.119 90 902.5 90 903.881 90 905 91.119 905 92.5M681 12.5C681 13.881 679.881 15 678.5 15 677.119 15 676 13.881 676 12.5 676 11.119 677.119 10 678.5 10 679.881 10 681 11.119 681 12.5M426 213.5C426 214.881 424.881 216 423.5 216 422.119 216 421 214.881 421 213.5 421 212.119 422.119 211 423.5 211 424.881 211 426 212.119 426 213.5M475 63.5C475 64.881 473.881 66 472.5 66 471.119 66 470 64.881 470 63.5 470 62.119 471.119 61 472.5 61 473.881 61 475 62.119 475 63.5M875 2.5C875 3.881 873.881 5 872.5 5 871.119 5 870 3.881 870 2.5 870 1.119 871.119 0 872.5 0 873.881 0 875 1.119 875 2.5M597.063135 159.056355C596.756215 157.709706 597.597996 156.370055 598.943645 156.063135 600.290294 155.756215 601.628945 156.597996 601.936865 157.943645 602.243785 159.289294 601.402004 160.628945 600.056355 160.936865 598.709706 161.243785 597.371055 160.402004 597.063135 159.056355M1018.06332 249.056231C1017.75588 247.710496 1018.59771 246.37026 1019.94394 246.06332 1021.28967 245.755881 1022.6299 246.597715 1022.93684 247.94345 1023.24377 249.289685 1022.40244 250.629421 1021.05622 250.936861 1019.71049 251.2438 1018.37026 250.401966 1018.06332 249.056231M315.063166 460.056306C314.756218 458.710606 315.597575 457.370405 316.943845 457.063473 318.289615 456.755542 319.629886 457.597854 319.936834 458.943554 320.243782 460.289754 319.402425 461.629456 318.056155 461.936887 316.710385 462.243819 315.370114 461.401507 315.063166 460.056306M441.063498 663.056056C440.755561 661.710234 441.597389 660.370412 442.944114 660.063453 444.289838 659.755493 445.629565 660.598382 445.936502 661.944203 446.244439 663.289025 445.402611 664.629847 444.055886 664.936807 442.710162 665.243766 441.370435 664.402877 441.063498 663.056056M358.063134 793.056136C357.756214 791.710443 358.597995 790.370248 359.944145 790.063318 361.289295 789.755888 362.629446 790.597697 362.936866 791.94339 363.243786 793.289583 362.402005 794.629278 361.055855 794.936708 359.710705 795.244138 358.370554 794.40183 358.063134 793.056136M678.063134 781.056231C677.756214 779.710496 678.597995 778.37026 679.944144 778.06332 681.289294 777.755881 682.629445 778.597715 682.936865 779.94345 683.243785 781.289685 682.402004 782.629421 681.056354 782.936861 679.710705 783.2438 678.370554 782.401966 678.063134 781.056231M849.063134 711.056127C848.756214 709.710427 849.597995 708.370725 850.944145 708.063294 852.289295 707.755862 853.629446 708.598174 853.936866 709.943375 854.243786 711.289575 853.402005 712.629276 852.055855 712.936708 850.710705 713.244139 849.370554 712.401827 849.063134 711.056127M990.063166 880.056306C989.756218 878.710606 990.597575 877.370405 991.943845 877.063473 993.289615 876.755542 994.629886 877.597854 994.936834 878.943554 995.243782 880.289254 994.402425 881.628956 993.056155 881.936887 991.710385 882.243819 990.370114 881.401507 990.063166 880.056306M1173.06332 488.05643C1172.75588 486.710816 1173.59771 485.3707 1174.94395 485.063288 1176.28968 484.755876 1177.62942 485.598135 1177.93686 486.943749 1178.2438 488.289364 1177.40197 489.62898 1176.05623 489.936891 1174.7105 490.243803 1173.37026 489.401545 1173.06332 488.05643M1296.06332 304.055931C1295.75588 302.710816 1296.59771 301.3707 1297.94395 301.063288 1299.28968 300.755876 1300.62992 301.598135 1300.93686 302.94375 1301.2438 304.289364 1300.40197 305.628981 1299.05623 305.936893 1297.7105 306.243805 1296.37026 305.401546 1296.06332 304.055931M807 816.5C807 817.881 805.881 819 804.5 819 803.119 819 802 817.881 802 816.5 802 815.119 803.119 814 804.5 814 805.881 814 807 815.119 807 816.5M733 949.5C733 950.881 731.881 952 730.5 952 729.119 952 728 950.881 728 949.5 728 948.119 729.119 947 730.5 947 731.881 947 733 948.119 733 949.5M977 692.5C977 693.881 975.881 695 974.5 695 973.119 695 972 693.881 972 692.5 972 691.119 973.119 690 974.5 690 975.881 690 977 691.119 977 692.5M233 708.5C233 709.881 231.881 711 230.5 711 229.119 711 228 709.881 228 708.5 228 707.119 229.119 706 230.5 706 231.881 706 233 707.119 233 708.5M1205 404.5C1205 405.881 1203.881 407 1202.5 407 1201.119 407 1200 405.881 1200 404.5 1200 403.119 1201.119 402 1202.5 402 1203.881 402 1205 403.119 1205 404.5M497 888.5C497 889.8805 495.8805 891 494.5 891 493.1195 891 492 889.8805 492 888.5 492 887.1195 493.1195 886 494.5 886 495.8805 886 497 887.1195 497 888.5M5 858.5C5 859.8805 3.8805 861 2.5 861 1.1195 861 0 859.8805 0 858.5 0 857.1195 1.1195 856 2.5 856 3.8805 856 5 857.1195 5 858.5M65 218.5C65 219.8805 63.8805 221 62.5 221 61.1195 221 60 219.8805 60 218.5 60 217.1195 61.1195 216 62.5 216 63.8805 216 65 217.1195 65 218.5M1183 835.5C1183 836.8805 1181.8805 838 1180.5 838 1179.1195 838 1178 836.8805 1178 835.5 1178 834.1195 1179.1195 833 1180.5 833 1181.8805 833 1183 834.1195 1183 835.5M1096 627.5C1096 628.8805 1094.8805 630 1093.5 630 1092.1195 630 1091 628.8805 1091 627.5 1091 626.1195 1092.1195 625 1093.5 625 1094.8805 625 1096 626.1195 1096 627.5M1140 240.5C1140 241.8805 1138.8805 243 1137.5 243 1136.1195 243 1135 241.8805 1135 240.5 1135 239.1195 1136.1195 238 1137.5 238 1138.8805 238 1140 239.1195 1140 240.5M618 98.5C618 99.8805 616.8805 101 615.5 101 614.1195 101 613 99.8805 613 98.5 613 97.1195 614.1195 96 615.5 96 616.8805 96 618 97.1195 618 98.5" />
          </g>
        </svg>
        {/*  Cloud Blue*/}
        <svg
          data-value="6"
          className="object absolute top-[60%] right-44 w-[240px] md:w-[260px] md:right-28 md:top-[50%]  2xl:right-44 2xl:top-[55%] z-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 475 229"
        >
          <g fill="#072142" fillRule="evenodd">
            <path d="M306.1761 13.5799C306.1761 20.6199 299.2641 26.3799 290.8161 26.3799L136.7041 26.3799C128.2561 26.3799 121.3441 20.6199 121.3441 13.5799 121.3441 6.5399 128.2561.7799 136.7041.7799L290.8161.7799C299.2641.7799 306.1761 6.5399 306.1761 13.5799M48.1283 62.2195C48.1283 69.2595 41.2163 75.0205 32.7683 75.0205L15.3593 75.0205C6.9123 75.0205.0003 69.2595.0003 62.2195.0003 55.1805 6.9123 49.4195 15.3593 49.4195L32.7683 49.4195C41.2163 49.4195 48.1283 55.1805 48.1283 62.2195M350.7201 13.5799C350.7201 20.6199 344.9601 26.3799 337.9201 26.3799 330.8801 26.3799 325.1201 20.6199 325.1201 13.5799 325.1201 6.5399 330.8801.7799 337.9201.7799 344.9601.7799 350.7201 6.5399 350.7201 13.5799M431.1039 113.4197C431.1039 120.4597 424.1919 126.2197 415.7449 126.2197L398.3359 126.2197C389.8879 126.2197 382.9759 120.4597 382.9759 113.4197 382.9759 106.3797 389.8879 100.6197 398.3359 100.6197L415.7449 100.6197C424.1919 100.6197 431.1039 106.3797 431.1039 113.4197" />
            <path d="M458.7523,203.0203 L335.8723,203.0203 C327.4243,203.0203 320.5123,197.2593 320.5123,190.2193 C320.5123,183.1803 327.4243,177.4193 335.8723,177.4193 L342.5273,177.4193 C350.9763,177.4193 357.8883,171.6603 357.8883,164.6203 C357.8883,157.5803 350.9763,151.8203 342.5273,151.8203 L259.0713,151.8203 C250.6243,151.8203 243.7123,146.0603 243.7123,139.0203 C243.7123,131.9803 250.6243,126.2193 259.0713,126.2193 L359.4243,126.2193 C367.8723,126.2193 374.7833,120.4593 374.7833,113.4193 C374.7833,106.3793 367.8723,100.6203 359.4243,100.6203 L229.3763,100.6203 C220.9283,100.6203 214.0163,94.8603 214.0163,87.8203 C214.0163,80.7803 220.9283,75.0203 229.3763,75.0203 L336.8963,75.0203 C345.3443,75.0203 352.2563,69.2593 352.2563,62.2193 C352.2563,55.1803 345.3443,49.4193 336.8963,49.4193 L75.7753,49.4193 C67.3283,49.4193 60.4163,55.1803 60.4163,62.2193 C60.4163,69.2593 67.3283,75.0203 75.7753,75.0203 L173.5673,75.0203 C182.0163,75.0203 188.9283,80.7803 188.9283,87.8203 C188.9283,94.8603 182.0163,100.6203 173.5673,100.6203 L136.7043,100.6203 C128.2563,100.6203 121.3443,106.3793 121.3443,113.4193 C121.3443,120.4593 128.2563,126.2193 136.7043,126.2193 L136.1913,126.2193 C144.6403,126.2193 151.5523,131.9803 151.5523,139.0203 C151.5523,146.0603 144.6403,151.8203 136.1913,151.8203 L19.9683,151.8203 C11.5203,151.8203 4.6073,157.5803 4.6073,164.6203 C4.6073,171.6603 11.5203,177.4193 19.9683,177.4193 L221.1843,177.4193 C229.6323,177.4193 236.5443,183.1803 236.5443,190.2193 C236.5443,197.2593 229.6323,203.0203 221.1843,203.0203 L197.6323,203.0203 C189.1843,203.0203 182.2723,208.7803 182.2723,215.8203 C182.2723,222.8603 189.1843,228.6203 197.6323,228.6203 L458.7523,228.6203 C467.1993,228.6203 474.1113,222.8603 474.1113,215.8203 C474.1113,208.7803 467.1993,203.0203 458.7523,203.0203" />
          </g>
        </svg>
        {/*  Cloud two */}
        <svg
          data-value="3"
          className="object absolute top-[60%] -right-28 w-[240px] md:w-[240px] md:-right-30 md:top-[45%]  2xl:-right-32 2xl:top-[50%] z-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 482 231"
        >
          <g fill="#072142" fillRule="evenodd">
            <path d="M60.0756,51.2 C53.0366,51.2 47.2756,56.96 47.2756,64 C47.2756,71.04 53.0366,76.8 60.0756,76.8 C67.1156,76.8 72.8766,71.04 72.8766,64 C72.8766,56.96 67.1156,51.2 60.0756,51.2" />
            <path d="M413.9965 204.7996L292.4575 204.7996C284.0095 204.7996 277.0975 199.0396 277.0975 191.9996 277.0975 184.9596 284.0095 179.1996 292.4575 179.1996L294.9565 179.1996C303.4035 179.1996 310.3155 173.4406 310.3155 166.4006 310.3155 159.3606 303.4035 153.6006 294.9565 153.6006L234.8575 153.6006C226.4095 153.6006 219.4975 147.8396 219.4975 140.7996 219.4975 133.7596 226.4095 127.9996 234.8575 127.9996L345.5165 127.9996C353.9645 127.9996 360.8765 122.2396 360.8765 115.1996 360.8765 108.1596 353.9645 102.4006 345.5165 102.4006L221.0335 102.4006C212.5855 102.4006 205.6735 96.6406 205.6735 89.6006 205.6735 82.5606 212.5855 76.7996 221.0335 76.7996L283.4355 76.7996C291.8845 76.7996 298.7965 71.0396 298.7965 63.9996 298.7965 56.9596 291.8845 51.1996 283.4355 51.1996L284.1375 51.1996C275.6895 51.1996 268.7775 45.4406 268.7775 38.4006 268.7775 31.3606 275.6895 25.6006 284.1375 25.6006L365.3555 25.6006C373.8045 25.6006 380.7165 19.8396 380.7165 12.7996 380.7165 5.7596 373.8045-.0004 365.3555-.0004L181.6765-.0004C173.2275-.0004 166.3155 5.7596 166.3155 12.7996 166.3155 19.8396 173.2275 25.6006 181.6765 25.6006L228.3295 25.6006C236.7775 25.6006 243.6895 31.3606 243.6895 38.4006 243.6895 45.4406 236.7775 51.1996 228.3295 51.1996L106.1555 51.1996C97.7085 51.1996 90.7965 56.9596 90.7965 63.9996 90.7965 71.0396 97.7085 76.7996 106.1555 76.7996L106.3455 76.7996C114.7935 76.7996 121.7055 82.5606 121.7055 89.6006 121.7055 96.6406 114.7935 102.4006 106.3455 102.4006L15.8765 102.4006C7.4285 102.4006.5165 108.1596.5165 115.1996.5165 122.2396 7.4285 127.9996 15.8765 127.9996L179.0495 127.9996C187.4975 127.9996 194.4095 133.7596 194.4095 140.7996 194.4095 147.8396 187.4975 153.6006 179.0495 153.6006L175.2755 153.6006C166.8285 153.6006 159.9165 159.3606 159.9165 166.4006 159.9165 173.4406 166.8285 179.1996 175.2755 179.1996L236.6495 179.1996C245.0975 179.1996 252.0095 184.9596 252.0095 191.9996 252.0095 199.0396 245.0975 204.7996 236.6495 204.7996L115.9165 204.7996C107.4685 204.7996 100.5565 210.5606 100.5565 217.6006 100.5565 224.6406 107.4685 230.4006 115.9165 230.4006L413.9965 230.4006C422.4435 230.4006 429.3555 224.6406 429.3555 217.6006 429.3555 210.5606 422.4435 204.7996 413.9965 204.7996M466.476 204.7996L454.316 204.7996C445.868 204.7996 438.956 210.5606 438.956 217.6006 438.956 224.6406 445.868 230.4006 454.316 230.4006L466.476 230.4006C474.924 230.4006 481.836 224.6406 481.836 217.6006 481.836 210.5606 474.924 204.7996 466.476 204.7996" />
            <path d="M323.1156,166.4002 C323.1156,173.4402 330.0276,179.2002 338.4756,179.2002 L391.5956,179.2002 C400.0446,179.2002 406.9566,173.4402 406.9566,166.4002 C406.9566,159.3602 400.0446,153.6002 391.5956,153.6002 L338.4756,153.6002 C330.0276,153.6002 323.1156,159.3602 323.1156,166.4002" />
          </g>
        </svg>
        {/*  Cloud Three*/}
        <svg
          data-value="2"
          className="object absolute top-[15%] -right-28 w-[200px] md:w-[260px] md:-right-36 md:top-[20%]  2xl:-right-24 2xl:top-[24%] z-30"
          xmlns="http://www.w3.org/2000/svg"
          width="475"
          height="229"
          viewBox="0 0 475 229"
        >
          <g fill="#072142" fillRule="evenodd">
            <path d="M48.1283 167.1805C48.1283 160.1405 41.2163 154.3795 32.7683 154.3795L15.3593 154.3795C6.9123 154.3795.0003 160.1405.0003 167.1805.0003 174.2195 6.9123 179.9805 15.3593 179.9805L32.7683 179.9805C41.2163 179.9805 48.1283 174.2195 48.1283 167.1805M350.7201 215.8201C350.7201 208.7801 344.9601 203.0201 337.9201 203.0201 330.8801 203.0201 325.1201 208.7801 325.1201 215.8201 325.1201 222.8601 330.8801 228.6201 337.9201 228.6201 344.9601 228.6201 350.7201 222.8601 350.7201 215.8201M431.1039 115.9803C431.1039 108.9403 424.1919 103.1803 415.7449 103.1803L398.3359 103.1803C389.8879 103.1803 382.9759 108.9403 382.9759 115.9803 382.9759 123.0203 389.8879 128.7803 398.3359 128.7803L415.7449 128.7803C424.1919 128.7803 431.1039 123.0203 431.1039 115.9803" />
            <path d="M458.7523 26.3797L335.8723 26.3797C327.4243 26.3797 320.5123 32.1407 320.5123 39.1807 320.5123 46.2197 327.4243 51.9807 335.8723 51.9807L342.5273 51.9807C350.9763 51.9807 357.8883 57.7397 357.8883 64.7797 357.8883 71.8197 350.9763 77.5797 342.5273 77.5797L259.0713 77.5797C250.6243 77.5797 243.7123 83.3397 243.7123 90.3797 243.7123 97.4197 250.6243 103.1807 259.0713 103.1807L359.4243 103.1807C367.8723 103.1807 374.7833 108.9407 374.7833 115.9807 374.7833 123.0207 367.8723 128.7797 359.4243 128.7797L229.3763 128.7797C220.9283 128.7797 214.0163 134.5397 214.0163 141.5797 214.0163 148.6197 220.9283 154.3797 229.3763 154.3797L336.8963 154.3797C345.3443 154.3797 352.2563 160.1407 352.2563 167.1807 352.2563 174.2197 345.3443 179.9807 336.8963 179.9807L75.7753 179.9807C67.3283 179.9807 60.4163 174.2197 60.4163 167.1807 60.4163 160.1407 67.3283 154.3797 75.7753 154.3797L173.5673 154.3797C182.0163 154.3797 188.9283 148.6197 188.9283 141.5797 188.9283 134.5397 182.0163 128.7797 173.5673 128.7797L136.7043 128.7797C128.2563 128.7797 121.3443 123.0207 121.3443 115.9807 121.3443 108.9407 128.2563 103.1807 136.7043 103.1807L136.1913 103.1807C144.6403 103.1807 151.5523 97.4197 151.5523 90.3797 151.5523 83.3397 144.6403 77.5797 136.1913 77.5797L19.9683 77.5797C11.5203 77.5797 4.6073 71.8197 4.6073 64.7797 4.6073 57.7397 11.5203 51.9807 19.9683 51.9807L221.1843 51.9807C229.6323 51.9807 236.5443 46.2197 236.5443 39.1807 236.5443 32.1407 229.6323 26.3797 221.1843 26.3797L197.6323 26.3797C189.1843 26.3797 182.2723 20.6197 182.2723 13.5797 182.2723 6.5397 189.1843.7797 197.6323.7797L458.7523.7797C467.1993.7797 474.1113 6.5397 474.1113 13.5797 474.1113 20.6197 467.1993 26.3797 458.7523 26.3797M306.1761 215.8201C306.1761 208.7801 299.2641 203.0201 290.8161 203.0201L136.7041 203.0201C128.2561 203.0201 121.3441 208.7801 121.3441 215.8201 121.3441 222.8601 128.2561 228.6201 136.7041 228.6201L290.8161 228.6201C299.2641 228.6201 306.1761 222.8601 306.1761 215.8201" />
          </g>
        </svg>
        {/*  White Cloud*/}
        <svg
          data-value="-4"
          className="object absolute top-[15%] right-48 w-[200px] md:w-[250px] md:right-36 md:top-[20%]  2xl:right-60 2xl:top-[25%] z-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380 184"
        >
          <g fill="#FFF" fillRule="evenodd" opacity=".3">
            <path d="M134.7601 172.9765C134.7601 167.3435 140.2891 162.7365 147.0481 162.7365L270.3371 162.7365C277.0961 162.7365 282.6251 167.3435 282.6251 172.9765 282.6251 178.6085 277.0961 183.2155 270.3371 183.2155L147.0481 183.2155C140.2891 183.2155 134.7601 178.6085 134.7601 172.9765M341.1986 134.0644C341.1986 128.4314 346.7276 123.8244 353.4866 123.8244L367.4126 123.8244C374.1716 123.8244 379.7006 128.4314 379.7006 134.0644 379.7006 139.6964 374.1716 144.3034 367.4126 144.3034L353.4866 144.3034C346.7276 144.3034 341.1986 139.6964 341.1986 134.0644M99.1244 172.9765C99.1244 167.3435 103.7324 162.7365 109.3644 162.7365 114.9964 162.7365 119.6044 167.3435 119.6044 172.9765 119.6044 178.6085 114.9964 183.2155 109.3644 183.2155 103.7324 183.2155 99.1244 178.6085 99.1244 172.9765M34.8177 93.1044C34.8177 87.4714 40.3467 82.8644 47.1057 82.8644L61.0317 82.8644C67.7907 82.8644 73.3197 87.4714 73.3197 93.1044 73.3197 98.7364 67.7907 103.3434 61.0317 103.3434L47.1057 103.3434C40.3467 103.3434 34.8177 98.7364 34.8177 93.1044" />
            <path d="M12.6996,21.4237 L111.0036,21.4237 C117.7626,21.4237 123.2916,26.0317 123.2916,31.6637 C123.2916,37.2957 117.7626,41.9037 111.0036,41.9037 L105.6786,41.9037 C98.9206,41.9037 93.3896,46.5117 93.3896,52.1447 C93.3896,57.7767 98.9206,62.3837 105.6786,62.3837 L172.4426,62.3837 C179.2016,62.3837 184.7306,66.9917 184.7306,72.6237 C184.7306,78.2557 179.2016,82.8637 172.4426,82.8637 L92.1616,82.8637 C85.4036,82.8637 79.8736,87.4717 79.8736,93.1047 C79.8736,98.7367 85.4036,103.3437 92.1616,103.3437 L196.1996,103.3437 C202.9586,103.3437 208.4876,107.9517 208.4876,113.5837 C208.4876,119.2157 202.9586,123.8237 196.1996,123.8237 L110.1836,123.8237 C103.4256,123.8237 97.8956,128.4317 97.8956,134.0647 C97.8956,139.6957 103.4256,144.3037 110.1836,144.3037 L319.0806,144.3037 C325.8386,144.3037 331.3676,139.6957 331.3676,134.0647 C331.3676,128.4317 325.8386,123.8237 319.0806,123.8237 L240.8466,123.8237 C234.0886,123.8237 228.5576,119.2157 228.5576,113.5837 C228.5576,107.9517 234.0886,103.3437 240.8466,103.3437 L270.3376,103.3437 C277.0966,103.3437 282.6256,98.7367 282.6256,93.1047 C282.6256,87.4717 277.0966,82.8637 270.3376,82.8637 L270.7476,82.8637 C263.9886,82.8637 258.4596,78.2557 258.4596,72.6237 C258.4596,66.9917 263.9886,62.3837 270.7476,62.3837 L363.7256,62.3837 C370.4846,62.3837 376.0136,57.7767 376.0136,52.1447 C376.0136,46.5117 370.4846,41.9037 363.7256,41.9037 L202.7536,41.9037 C195.9956,41.9037 190.4656,37.2957 190.4656,31.6637 C190.4656,26.0317 195.9956,21.4237 202.7536,21.4237 L221.5956,21.4237 C228.3536,21.4237 233.8836,16.8167 233.8836,11.1837 C233.8836,5.5517 228.3536,0.9447 221.5956,0.9447 L12.6996,0.9447 C5.9406,0.9447 0.4116,5.5517 0.4116,11.1837 C0.4116,16.8167 5.9406,21.4237 12.6996,21.4237" />
          </g>
        </svg>
        {/*  cloud White two */}
        <svg
          data-value="-2"
          className="object absolute top-[6%] -right-14 w-[200px] md:w-[250px] md:-right-20 md:top-[10%]  2xl:-right-5 2xl:top-[16%] z-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 475 228"
        >
          <g fill="#FFF" fillRule="evenodd" opacity=".3">
            <path d="M167.9359 12.9599C167.9359 19.9999 174.8479 25.7599 183.2959 25.7599L337.4079 25.7599C345.8559 25.7599 352.7679 19.9999 352.7679 12.9599 352.7679 5.9199 345.8559.1599 337.4079.1599L183.2959.1599C174.8479.1599 167.9359 5.9199 167.9359 12.9599M425.9837 61.5995C425.9837 68.6395 432.8957 74.4005 441.3437 74.4005L458.7527 74.4005C467.1997 74.4005 474.1117 68.6395 474.1117 61.5995 474.1117 54.5605 467.1997 48.7995 458.7527 48.7995L441.3437 48.7995C432.8957 48.7995 425.9837 54.5605 425.9837 61.5995M123.3919 12.9599C123.3919 19.9999 129.1519 25.7599 136.1919 25.7599 143.2319 25.7599 148.9919 19.9999 148.9919 12.9599 148.9919 5.9199 143.2319.1599 136.1919.1599 129.1519.1599 123.3919 5.9199 123.3919 12.9599M43.0081 112.7997C43.0081 119.8397 49.9201 125.5997 58.3671 125.5997L75.7761 125.5997C84.2241 125.5997 91.1361 119.8397 91.1361 112.7997 91.1361 105.7597 84.2241 99.9997 75.7761 99.9997L58.3671 99.9997C49.9201 99.9997 43.0081 105.7597 43.0081 112.7997" />
            <path d="M15.3597,202.4003 L138.2397,202.4003 C146.6877,202.4003 153.5997,196.6393 153.5997,189.5993 C153.5997,182.5603 146.6877,176.7993 138.2397,176.7993 L131.5847,176.7993 C123.1357,176.7993 116.2237,171.0403 116.2237,164.0003 C116.2237,156.9603 123.1357,151.2003 131.5847,151.2003 L215.0407,151.2003 C223.4877,151.2003 230.3997,145.4403 230.3997,138.4003 C230.3997,131.3603 223.4877,125.5993 215.0407,125.5993 L114.6877,125.5993 C106.2397,125.5993 99.3287,119.8393 99.3287,112.7993 C99.3287,105.7593 106.2397,100.0003 114.6877,100.0003 L244.7357,100.0003 C253.1837,100.0003 260.0957,94.2403 260.0957,87.2003 C260.0957,80.1603 253.1837,74.4003 244.7357,74.4003 L137.2157,74.4003 C128.7677,74.4003 121.8557,68.6393 121.8557,61.5993 C121.8557,54.5603 128.7677,48.7993 137.2157,48.7993 L398.3367,48.7993 C406.7837,48.7993 413.6957,54.5603 413.6957,61.5993 C413.6957,68.6393 406.7837,74.4003 398.3367,74.4003 L300.5447,74.4003 C292.0957,74.4003 285.1837,80.1603 285.1837,87.2003 C285.1837,94.2403 292.0957,100.0003 300.5447,100.0003 L337.4077,100.0003 C345.8557,100.0003 352.7677,105.7593 352.7677,112.7993 C352.7677,119.8393 345.8557,125.5993 337.4077,125.5993 L337.9207,125.5993 C329.4717,125.5993 322.5597,131.3603 322.5597,138.4003 C322.5597,145.4403 329.4717,151.2003 337.9207,151.2003 L454.1437,151.2003 C462.5917,151.2003 469.5047,156.9603 469.5047,164.0003 C469.5047,171.0403 462.5917,176.7993 454.1437,176.7993 L252.9277,176.7993 C244.4797,176.7993 237.5677,182.5603 237.5677,189.5993 C237.5677,196.6393 244.4797,202.4003 252.9277,202.4003 L276.4797,202.4003 C284.9277,202.4003 291.8397,208.1603 291.8397,215.2003 C291.8397,222.2403 284.9277,228.0003 276.4797,228.0003 L15.3597,228.0003 C6.9127,228.0003 0.0007,222.2403 0.0007,215.2003 C0.0007,208.1603 6.9127,202.4003 15.3597,202.4003" />
          </g>
        </svg>
      </div>
    </>
  );
}
