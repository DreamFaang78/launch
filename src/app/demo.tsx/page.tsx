"use client"
import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from 'next/image';
import chacha from 'public\image 7.png';
import Vector from 'public\Vector.png';
export default function LoginPage() {	
  	return (
    		<div className="relative rounded-[5px] bg-darkslategray w-full h-[841px] overflow-hidden text-left text-[105px] text-white font-roboto">
      			<i className="absolute top-[21px] left-[54px] inline-block font-extrabold w-[585px] h-[545px] [-webkit-text-stroke:2px_#000]">
        				<p className="m-0">Let’s</p>
        				<p className="m-0">Discover</p>
        				<p className="m-0">Ganga’s</p>
        				<p className="m-0">Secrets With</p>
        				<p className="m-0">&nbsp;</p>
        				<p className="m-0">&nbsp;</p>
      			</i>
      			<div className="absolute top-[586px] left-[calc(50%_-_623.5px)] text-[140px] leading-[70px] font-rhodium-libre text-center flex items-center w-[470px] h-[342px] [-webkit-text-stroke:3px_#000]">
        				<span className="[line-break:anywhere] w-full">
          					<p className="[margin-block-start:0] [margin-block-end:70px] tracking-[0.1em]">&nbsp;</p>
          					<p className="[margin-block-start:0] [margin-block-end:70px]">“चाचा</p>
          					<p className="[margin-block-start:0] [margin-block-end:70px]">चौधरी”</p>
        				</span>
      			</div>
      			<Image className="absolute top-[14px] left-[430px] w-[495px] h-[873px] object-cover" alt="" src="chacha" />
                
      			<div className="absolute top-[261px] left-[873px] w-[461px] h-[422px] overflow-hidden text-5xl">
        				<div className="absolute top-[40px] left-[33px] rounded-mini shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[400px] h-[50px] overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[212px] pl-8 border-[3px] border-solid border-white">
          					<div className="absolute my-0 mx-[!important] top-[17px] left-[19px] flex items-center w-[165px] h-4 shrink-0 z-[0]">Mobile/Email</div>
        				</div>
        				<div className="absolute top-[118px] left-[30px] rounded-mini shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[400px] h-[50px] overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[212px] pl-8 border-[3px] border-solid border-white">
          					<div className="absolute my-0 mx-[!important] top-[17px] left-[19px] flex items-center w-[165px] h-4 shrink-0 z-[0]">Password</div>
        				</div>
        				<div className="absolute top-[325px] left-[33px] rounded-mini shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[400px] h-[50px] overflow-hidden flex flex-row items-start justify-start py-3.5 pr-[212px] pl-8 cursor-pointer border-[3px] border-solid border-white" >
          					<div className="absolute my-0 mx-[!important] top-[17px] left-[19px] flex items-center w-[282px] h-4 shrink-0 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] [-webkit-text-stroke:1px_#000] z-[0]">              Sign up now..</div>
        				</div>
        				<div className="absolute top-[190px] left-[295px] text-[28px] font-extrabold flex items-center w-[138px] h-[41px] [-webkit-text-stroke:2px_#000]">Sign in</div>
        				<Image className="absolute h-[6.64%] w-[8.24%] top-[41.76%] right-[20.44%] bottom-[51.59%] left-[71.33%] max-w-full overflow-hidden max-h-full" alt="" src="Vector" />
        				<b className="absolute top-[220px] left-[187px] text-[34px] inline-block w-[87px] h-9 [-webkit-text-stroke:1px_#000]">or</b>
        				<div className="absolute top-[289px] left-[52px] text-[26px] flex items-center w-[332px] h-[15px] [-webkit-text-stroke:1px_#000]">New to Chacha Chaudhary ?</div>
          					</div>
          					</div>
                            );
        				
    }		