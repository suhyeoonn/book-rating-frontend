"use client";

import { Button } from "@/shared/ui/button";
import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export const SocialLogin = () => {
  const params = useSearchParams();

  const handleSocialLogin = (provider: string) => {
    window.location.href = `http://localhost:8080/oauth2/authorization/${provider}`;
  };

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <div className="flex-1 border-t border-gray-300"></div>
        <span>or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
      <Button
        variant="outline"
        className="w-full"
        onClick={() => handleSocialLogin("google")}
      >
        <Image
          alt="google icon"
          src={"/google-icon.png"}
          width={20}
          height={20}
        />
        <span className="ml-2.5 font-semibold">구글 로그인</span>
      </Button>
      {/* <Button
        variant="outline"
        className="w-full bg-[#03c75a] text-white hover:bg-[#03c75a] hover:text-white"
        onClick={() => handleSocialLogin("naver")}
      >
        <Image
          alt="naver icon"
          src={"/naver-icon.png"}
          width={30}
          height={30}
        />

        <span className="font-semibold">네이버 로그인</span>
      </Button> */}
    </div>
  );
};
