"use client";

import { useEffect, useCallback, useState } from "react";
import sdk, {
  AddFrame,
  FrameNotificationDetails,
} from "@farcaster/frame-sdk";
import Image from 'next/image'
import { Press_Start_2P } from 'next/font/google'

// Update the context type to match SDK's type
type FrameContext = {
  client: {
    notificationDetails?: FrameNotificationDetails | undefined;
    added?: boolean;
  };
  user?: {
    fid: number;
  };
};

// Initialize the pixel font
const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
})

export default function Demo() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [context, setContext] = useState<FrameContext>();
  const [notificationDetails, setNotificationDetails] =
    useState<FrameNotificationDetails | null>(null);

  useEffect(() => {
    setNotificationDetails(context?.client.notificationDetails ?? null);
  }, [context]);

  useEffect(() => {
    const load = async () => {
      const context = await sdk.context;
      setContext(context as FrameContext);
      
      console.log("Calling ready");
      sdk.actions.ready({});
    };

    if (sdk && !isSDKLoaded) {
      console.log("Calling load");
      setIsSDKLoaded(true);
      load();
      return () => {
        sdk.removeAllListeners();
      };
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Container with inline styles for better control */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'var(--bg-image)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 pt-16 flex-grow pb-8">
        {/* White Background Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 mb-12">
          {/* First Middle Container - Origin */}
          <div className="w-full max-w-xs mx-auto overflow-hidden shadow-2xl bg-white rounded-3xl mb-12 border-2 border-black">
            {/* Black Header Bar */}
            <div className="w-full bg-black py-6 px-4 mb-4 text-center">
              <h2 className="text-lg font-bold text-white">Origin</h2>
            </div>
            {/* Container Content */}
            <div className="px-4 pb-8 flex flex-col justify-center">
              {/* GIF Image */}
              <div className="mb-6">
                <Image
                  src="/FULL-BODY-DON-V2.gif"
                  alt="DON Full Body"
                  width={125}
                  height={125}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>

          {/* Second Middle Container - Tokenomics */}
          <div className="w-full max-w-xs mx-auto overflow-hidden shadow-2xl bg-white rounded-3xl mb-12 border-2 border-black">
            {/* Black Header Bar */}
            <div className="w-full bg-black py-6 px-4 mb-4 text-center">
              <h2 className={`text-lg font-bold ${pixelFont.className} text-white`}>Tokenomics</h2>
            </div>
            {/* Container Content */}
            <div className="px-4 pb-8 flex flex-col justify-center">
              {/* GIF Image */}
              <div className="mt-6 mb-6">
                <Image
                  src="/7736b1d30d303e4.gif"
                  alt="Tokenomics GIF"
                  width={115}
                  height={115}
                  className="mx-auto"
                  priority
                />
              </div>
              {/* Tokenomics Text */}
              <div className="text-xs text-black font-bebas-neue text-center px-4 mb-6">
                <p>The circulating supply is 100,000,000,000 $DON.</p>
                <p>
                  $DON was fairly launched by clanker, an autonomous bot on farcaster that enables users to launch memecoins with a simple cast mentioning the bot. It starts with only the token supply (no eth), as clanker uses one-sided liquidity on uniswap v3.
                </p>
              </div>
            </div>
          </div>

          {/* Third Middle Container - Duplicated Tokenomics */}
          <div className="w-full max-w-xs mx-auto overflow-hidden shadow-2xl bg-white rounded-3xl mb-12 border-2 border-black">
            {/* Black Header Bar */}
            <div className="w-full bg-black py-6 px-4 mb-4 text-center">
              <h2 className={`text-lg font-bold ${pixelFont.className} text-white`}>How to Buy</h2>
            </div>
            {/* Container Content */}
            <div className="px-4 pb-8 flex flex-col justify-center">
              {/* GIF Image */}
              <div className="mt-6 mb-6">
                <Image
                  src="/7736b1d30d303e4.gif"
                  alt="Tokenomics GIF"
                  width={115}
                  height={115}
                  className="mx-auto"
                  priority
                />
              </div>
              {/* Tokenomics Text */}
              <div className="text-xs text-black font-bebas-neue text-center px-4 mb-6">
                <p>The circulating supply is 100,000,000,000 $DON.</p>
                <p>
                  $DON was fairly launched by clanker, an autonomous bot on farcaster that enables users to launch memecoins with a simple cast mentioning the bot. It starts with only the token supply (no eth), as clanker uses one-sided liquidity on uniswap v3.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section - Outside the white container */}
        <div className="w-full max-w-md mx-auto px-4 mb-8 mt-8">
          <div className="grid grid-cols-3 gap-2">
            {/* First Row */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/DON-YELLOW-NOUNS.gif"
                alt="DON Yellow Nouns"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/DON-SPACE-SUIT-MOON.png"
                alt="DON Space Suit"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/COMING-SOON-4.gif"
                alt="Coming Soon"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>

            {/* Second Row */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/COMING SOON (3).gif"
                alt="Coming Soon"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/WHITE DOG HOUSE.gif"
                alt="White Dog House"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>

            <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-black">
              <Image
                src="/DON-WITH-BALLON.png"
                alt="DON With Balloon"
                width={120}
                height={120}
                className="w-full h-full object-contain bg-white"
                priority
              />
            </div>
          </div>
        </div>

        {/* Social Icons - Outside the white container */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          {/* Twitter/X Icon */}
          <a 
            href="https://x.com/dononbase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-white hover:fill-gray-300 transition-colors"
            >
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <g transform="scale(8,8)">
                  <rect x="3" y="2" width="8" height="2"></rect>
                  <rect x="21" y="28" width="8" height="2"></rect>
                  <rect x="5" y="4" width="2" height="3"></rect>
                  <rect x="7" y="7" width="2" height="3"></rect>
                  <rect x="11" y="4" width="2" height="3"></rect>
                  <rect x="9" y="10" width="2" height="3"></rect>
                  <rect x="13" y="7" width="2" height="3"></rect>
                  <rect x="11" y="13" width="2" height="3"></rect>
                  <rect x="15" y="10" width="2" height="3"></rect>
                  <rect x="13" y="16" width="2" height="3"></rect>
                  <rect x="17" y="13" width="2" height="3"></rect>
                  <rect x="19" y="10" width="2" height="3"></rect>
                  <rect x="11" y="19" width="2" height="3"></rect>
                  <rect x="9" y="22" width="2" height="3"></rect>
                  <rect x="7" y="25" width="2" height="3"></rect>
                  <rect x="5" y="28" width="2" height="2"></rect>
                  <rect x="21" y="7" width="2" height="3"></rect>
                  <rect x="23" y="4" width="2" height="3"></rect>
                  <rect x="25" y="2" width="2" height="2"></rect>
                  <rect x="15" y="19" width="2" height="3"></rect>
                  <rect x="19" y="16" width="2" height="3"></rect>
                  <rect x="17" y="22" width="2" height="3"></rect>
                  <rect x="21" y="19" width="2" height="3"></rect>
                  <rect x="19" y="25" width="2" height="3"></rect>
                  <rect x="23" y="22" width="2" height="3"></rect>
                  <rect x="25" y="25" width="2" height="3"></rect>
                </g>
              </g>
            </svg>
          </a>

          {/* Telegram Icon */}
          <a 
            href="https://t.me/dononbase" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <polygon fill="#589bd4" points="28,10 28,22 26,22 26,24 24,24 24,26 22,26 22,28 10,28 10,26 8,26 8,24 6,24 6,22 4,22 4,10 6,10 6,8 8,8 8,6 10,6 10,4 22,4 22,6 24,6 24,8 26,8 26,10"></polygon>
              <polygon fill="#e6e5e5" points="21,9 21,23 19,23 19,21 15,21 15,19 13,19 13,21 11,21 11,17 8,17 8,15 11,15 11,13 13,13 13,11 17,11 17,9"></polygon>
              <polygon fill="#b6b5b5" points="13,15 13,17 11,17 11,21 13,21 13,19 15,19 15,15"></polygon>
              <rect width="2" height="2" x="15" y="13" fill="#b6b5b5"></rect>
            </svg>
          </a>

          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/dononbase/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24"
              height="24"
              viewBox="0 0 32 32"
            >
              <path fill="#f18f06" fillRule="evenodd" d="M8.997,28.997h-2v-2h-2v-2l-1-1v-9h24v9l-1,1v2h-2v2h-2h-4l-1-1h-8L8.997,28.997z" clipRule="evenodd"></path>
              <path fill="#f18f06" fillRule="evenodd" d="M3.997,19.997v-7h22v9l1,1v4h-2v2h-2v-2l-1-1l2-2l-1-1h-2v-2h-2l-1-1h-4l-2-2l-1,1h-2v2h-2l-2,2v2h-2v-4L3.997,19.997z" clipRule="evenodd"></path>
              <path fill="#e41e2f" fillRule="evenodd" d="M2.997,14.997v6h2l2-4h2v-2h10l2,4h2v2h2l2,2v2h2v-6l-1-1v-9h-24v5L2.997,14.997z" clipRule="evenodd"></path>
              <path fill="#e41e2f" fillRule="evenodd" d="M2.997,12.997v2h2l2-2h2v-2h4l6,2l1,1l1-1h2v2h3l1,4h2v-2l-3-9h-22L2.997,12.997z" clipRule="evenodd"></path>
              <path fill="#085295" fillRule="evenodd" d="M2.997,12.997v-6h2v-2h2v-2h18v2h2v2h2v10h-2l-2-4h-2v-2l-1-1l-1,1h-2v-2h-10v2h-2l-2,2H2.997z" clipRule="evenodd"></path>
              <path fill="#f18f06" fillRule="evenodd" d="M8.997,28.997v-2l2-2v-2h6v2l2,2v2H8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.996,4.999v1.999h14.001V4.999H8.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.997,24.999v1.999h14.001v-1.999H8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M26.997,8.997h-1.999v14.001h1.999V8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M6.997,8.999H4.999V23h1.999V8.999z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.997,6.996H6.999v2.001h1.999V6.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M24.997,6.997h-1.999v2.001h1.999V6.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M24.997,22.996h-1.999v2.001h1.999V22.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M8.996,22.996H6.997v2.001h1.999V22.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M22.997,8.997h-1.999v2.001h1.999V8.997z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M19,10.996h-6.001v2.001H19V10.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M18.999,18.996h-6.001v2.001h6.001V18.996z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M21,18.999v-6.001h-2.001v6.001H21z" clipRule="evenodd"></path>
              <path fill="#e6e5e5" fillRule="evenodd" d="M13,18.997v-6.001h-2.001v6.001H13z" clipRule="evenodd"></path>
            </svg>
          </a>

          {/* TikTok Icon */}
          <a 
            href="https://www.tiktok.com/@dononbase?is_from_webapp=1&sender_device=pc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-75"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24"
              height="24"
              viewBox="0,0,256,256"
              className="fill-white hover:fill-gray-300 transition-colors"
            >
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
                <g transform="scale(8,8)">
                  <path d="M25,6v-2h-18v2h-3v20h3v2h18v-2h3v-20z" fill="#000000"></path>
                  <rect x="10" y="17" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="12" y="15" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="14" y="21" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="16" y="7" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="14" y="17" width="2" height="2" fill="#c21057"></rect>
                  <rect x="16" y="23" width="2" height="2" fill="#c21057"></rect>
                  <rect x="18" y="9" width="2" height="2" fill="#c21057"></rect>
                  <rect x="20" y="11" width="2" height="2" fill="#c21057"></rect>
                  <rect x="16" y="7" width="2" height="2" fill="#589bd4"></rect>
                  <rect x="12" y="23" width="4" height="2" fill="#e6e5e5"></rect>
                  <rect x="10" y="19" width="2" height="4" fill="#e6e5e5"></rect>
                  <rect x="12" y="17" width="2" height="2" fill="#e6e5e5"></rect>
                  <path d="M20,13v-2h-2v-2h-2v14h2v-8h4v-2z" fill="#e6e5e5"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
