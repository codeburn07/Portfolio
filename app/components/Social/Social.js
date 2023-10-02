"use client";
import "./Social.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
const Social = () => {
  const { theme } = useTheme();
  const fill = theme === "dark" ? "white" : "black";

  return (
    <div className="h-screen flex justify-center text-center items-center flex-col ">
      <p className="font-extrabold text-md dark:text-primaryGreen">
        LET&apos;S CONNECT-
      </p>
      <div className="flex absolute -z-1 flex-col font-[450] text-sm items-center gap-2 max-xl:gap-0">
        <div className="pt-10">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM19.0716 6L12 12.4828L4.92844 6H19.0716ZM20.25 18H3.75V6.95531L11.4928 14.0531C11.6312 14.1801 11.8122 14.2506 12 14.2506C12.1878 14.2506 12.3688 14.1801 12.5072 14.0531L20.25 6.95531V18Z"
                fill={fill}
              />
            </svg>
            <p>design.rajveer@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-2 z-10">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M18.25 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V18.25C0.25 18.6478 0.408035 19.0294 0.68934 19.3107C0.970644 19.592 1.35218 19.75 1.75 19.75H18.25C18.6478 19.75 19.0294 19.592 19.3107 19.3107C19.592 19.0294 19.75 18.6478 19.75 18.25V1.75C19.75 1.35218 19.592 0.970644 19.3107 0.68934C19.0294 0.408035 18.6478 0.25 18.25 0.25ZM18.25 18.25H1.75V1.75H18.25V18.25ZM7 8.5V14.5C7 14.6989 6.92098 14.8897 6.78033 15.0303C6.63968 15.171 6.44891 15.25 6.25 15.25C6.05109 15.25 5.86032 15.171 5.71967 15.0303C5.57902 14.8897 5.5 14.6989 5.5 14.5V8.5C5.5 8.30109 5.57902 8.11032 5.71967 7.96967C5.86032 7.82902 6.05109 7.75 6.25 7.75C6.44891 7.75 6.63968 7.82902 6.78033 7.96967C6.92098 8.11032 7 8.30109 7 8.5ZM15.25 11.125V14.5C15.25 14.6989 15.171 14.8897 15.0303 15.0303C14.8897 15.171 14.6989 15.25 14.5 15.25C14.3011 15.25 14.1103 15.171 13.9697 15.0303C13.829 14.8897 13.75 14.6989 13.75 14.5V11.125C13.75 10.6277 13.5525 10.1508 13.2008 9.79918C12.8492 9.44754 12.3723 9.25 11.875 9.25C11.3777 9.25 10.9008 9.44754 10.5492 9.79918C10.1975 10.1508 10 10.6277 10 11.125V14.5C10 14.6989 9.92098 14.8897 9.78033 15.0303C9.63968 15.171 9.44891 15.25 9.25 15.25C9.05109 15.25 8.86032 15.171 8.71967 15.0303C8.57902 14.8897 8.5 14.6989 8.5 14.5V8.5C8.50093 8.31629 8.56925 8.13931 8.69201 8.00264C8.81477 7.86596 8.98342 7.7791 9.16598 7.75852C9.34853 7.73794 9.53229 7.78508 9.68239 7.891C9.8325 7.99691 9.93851 8.15423 9.98031 8.33313C10.4877 7.98894 11.0792 7.78947 11.6914 7.75611C12.3036 7.72276 12.9133 7.85679 13.455 8.14381C13.9968 8.43083 14.4501 8.86 14.7664 9.38523C15.0826 9.91046 15.2498 10.5119 15.25 11.125ZM7.375 5.875C7.375 6.0975 7.30902 6.31501 7.1854 6.50002C7.06179 6.68502 6.88609 6.82922 6.68052 6.91436C6.47495 6.99951 6.24875 7.02179 6.03052 6.97838C5.81229 6.93498 5.61184 6.82783 5.4545 6.6705C5.29717 6.51316 5.19002 6.31271 5.14662 6.09448C5.10321 5.87625 5.12549 5.65005 5.21064 5.44448C5.29578 5.23891 5.43998 5.06321 5.62498 4.9396C5.80999 4.81598 6.0275 4.75 6.25 4.75C6.54837 4.75 6.83452 4.86853 7.0455 5.0795C7.25647 5.29048 7.375 5.57663 7.375 5.875Z"
                fill={fill}
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7473 9.41498 20.7192 6.93661 18.8913 5.10872C17.0634 3.28084 14.585 2.25273 12 2.25ZM20.2172 11.2669C19.9784 11.2556 19.7394 11.25 19.5 11.25C18.1088 11.2504 16.7237 11.4345 15.3806 11.7975C15.0532 10.8259 14.6309 9.88883 14.1197 9C15.4528 8.19611 16.6596 7.19938 17.7009 6.04219C19.1459 7.42075 20.0402 9.27769 20.2172 11.2669ZM16.5263 5.10562C15.5895 6.13498 14.5067 7.0213 13.3125 7.73625C12.3124 6.32852 11.0891 5.09352 9.69094 4.08C10.8379 3.74517 12.0439 3.66347 13.2256 3.84056C14.4072 4.01764 15.5363 4.44928 16.5347 5.10562H16.5263ZM8.02969 4.77C9.56212 5.73506 10.8981 6.98135 11.9672 8.44312C10.0962 9.30548 8.06021 9.75138 6 9.75C5.36416 9.74967 4.72903 9.70739 4.09875 9.62344C4.7259 7.55485 6.13652 5.81319 8.02969 4.77ZM3.75 12C3.74997 11.6981 3.76655 11.3964 3.79969 11.0963C4.52866 11.1986 5.26388 11.25 6 11.25C8.3527 11.2522 10.6759 10.7268 12.7988 9.7125C13.2664 10.5201 13.653 11.3721 13.9528 12.2559C13.1561 12.5552 12.3851 12.9189 11.6475 13.3434C9.58976 14.5322 7.82537 16.1681 6.48469 18.1303C5.62375 17.358 4.93524 16.4129 4.46405 15.3566C3.99285 14.3003 3.74955 13.1566 3.75 12ZM7.6875 19.0312C8.90472 17.231 10.5153 15.731 12.3975 14.6447C13.0268 14.2815 13.6835 13.9681 14.3616 13.7072C14.5936 14.737 14.7109 15.7894 14.7113 16.845C14.7118 17.8713 14.6021 18.8946 14.3841 19.8975C13.27 20.2341 12.0972 20.3309 10.943 20.1816C9.7888 20.0323 8.67929 19.6402 7.6875 19.0312ZM16.0369 19.1934C16.1526 18.4175 16.2109 17.6342 16.2113 16.8497C16.2111 15.6355 16.0711 14.4253 15.7941 13.2431C17.0024 12.917 18.2484 12.7512 19.5 12.75C19.7375 12.75 19.9753 12.7559 20.2134 12.7678C20.0879 14.0964 19.6424 15.3748 18.915 16.4936C18.1877 17.6125 17.2001 18.5385 16.0369 19.1925V19.1934Z"
                fill={fill}
              />
            </svg>
          </Link>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 7.5C15 7.30109 15.079 7.11032 15.2197 6.96967C15.3603 6.82902 15.5511 6.75 15.75 6.75H21.75C21.9489 6.75 22.1397 6.82902 22.2803 6.96967C22.421 7.11032 22.5 7.30109 22.5 7.5C22.5 7.69891 22.421 7.88968 22.2803 8.03033C22.1397 8.17098 21.9489 8.25 21.75 8.25H15.75C15.5511 8.25 15.3603 8.17098 15.2197 8.03033C15.079 7.88968 15 7.69891 15 7.5ZM12.75 14.8125C12.75 15.8568 12.3352 16.8583 11.5967 17.5967C10.8583 18.3352 9.85679 18.75 8.8125 18.75H3C2.80109 18.75 2.61032 18.671 2.46967 18.5303C2.32902 18.3897 2.25 18.1989 2.25 18V6C2.25 5.80109 2.32902 5.61032 2.46967 5.46967C2.61032 5.32902 2.80109 5.25 3 5.25H8.4375C9.15482 5.25076 9.8552 5.46805 10.447 5.87344C11.0388 6.27882 11.4944 6.85341 11.7543 7.52201C12.0141 8.19062 12.0661 8.92209 11.9033 9.62071C11.7406 10.3193 11.3707 10.9525 10.8422 11.4375C11.4243 11.7877 11.9059 12.2825 12.2403 12.8739C12.5746 13.4653 12.7502 14.1332 12.75 14.8125ZM3.75 10.875H8.4375C8.98451 10.875 9.50911 10.6577 9.89591 10.2709C10.2827 9.88411 10.5 9.35951 10.5 8.8125C10.5 8.26549 10.2827 7.74089 9.89591 7.35409C9.50911 6.9673 8.98451 6.75 8.4375 6.75H3.75V10.875ZM11.25 14.8125C11.25 14.4924 11.187 14.1754 11.0645 13.8797C10.942 13.584 10.7624 13.3153 10.5361 13.0889C10.3097 12.8626 10.041 12.683 9.74529 12.5605C9.44956 12.438 9.1326 12.375 8.8125 12.375H3.75V17.25H8.8125C9.1326 17.25 9.44956 17.187 9.74529 17.0645C10.041 16.942 10.3097 16.7624 10.5361 16.5361C10.7624 16.3097 10.942 16.041 11.0645 15.7453C11.187 15.4496 11.25 15.1326 11.25 14.8125ZM23.25 14.25C23.25 14.4489 23.171 14.6397 23.0303 14.7803C22.8897 14.921 22.6989 15 22.5 15H15.8438C15.9849 15.5473 16.2778 16.0435 16.6887 16.4316C17.0996 16.8196 17.6118 17.0838 18.1662 17.1935C18.7206 17.3032 19.2948 17.2541 19.8225 17.0518C20.3502 16.8495 20.8101 16.5022 21.1491 16.05C21.2082 15.9712 21.2823 15.9048 21.3671 15.8547C21.4519 15.8045 21.5458 15.7716 21.6433 15.7577C21.7409 15.7438 21.8402 15.7493 21.9356 15.7738C22.0311 15.7983 22.1207 15.8413 22.1995 15.9005C22.2783 15.9596 22.3447 16.0337 22.3949 16.1185C22.445 16.2033 22.478 16.2972 22.4919 16.3947C22.5057 16.4923 22.5003 16.5916 22.4758 16.687C22.4513 16.7825 22.4082 16.8721 22.3491 16.9509C21.7077 17.8055 20.7832 18.404 19.7409 18.6392C18.6987 18.8745 17.6067 18.7313 16.6604 18.2351C15.7141 17.739 14.9752 16.9223 14.576 15.9312C14.1767 14.9401 14.1431 13.8393 14.4812 12.8258C14.8193 11.8122 15.507 10.952 16.4213 10.3991C17.3356 9.84616 18.4168 9.6366 19.4714 9.80789C20.5261 9.97919 21.4854 10.5202 22.1777 11.334C22.87 12.1479 23.2501 13.1815 23.25 14.25ZM21.6562 13.5C21.491 12.8547 21.1157 12.2827 20.5895 11.8743C20.0633 11.4658 19.4161 11.2441 18.75 11.2441C18.0839 11.2441 17.4367 11.4658 16.9105 11.8743C16.3843 12.2827 16.009 12.8547 15.8438 13.5H21.6562Z"
                fill={fill}
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="absolute">
        <p className="font-black text-[10.5rem] text-stroke max-xl:text-[5.25rem] max-sm:text-[3.5rem] ">THANK YOU!</p>
      </div>
      <div className=" relative h-screen w-80">
        <div className="absolute inset-x-0 bottom-0">
          <div className="absolute top-[-30%] left-[20%]">
            <Image className="" src="/round.gif" height={200} width={200} alt=""/>
          </div>
          <Image
            className="mx-auto"
            width={150}
            height={150}
            src="/profile.png"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
