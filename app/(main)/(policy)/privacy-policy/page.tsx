import React from "react";

const page = () => {
  return (
    <>
      <h2 className="text-center">개인정보 처리방침</h2>
      <div className="text-sm">
        <p>
          본 Book rating 웹사이트는 Google OAuth를 통해 사용자의 정보를
          인증하며, 다음과 같은 개인정보를 처리합니다.
        </p>
        <ol className="ml-4 list-decimal">
          <li>
            수집하는 개인정보
            <ul>
              <li>구글 고유 ID: 사용자 구분을 위해 수집됩니다.</li>
              <li>이메일 주소: 사용자 인증을 위해 수집됩니다.</li>
              {/* <li>
          프로필 이미지 URL: 사용자의 프로필 이미지를 표시하기 위해 수집됩니다.
        </li> */}
            </ul>
          </li>
          <li>
            개인정보 사용 목적
            <ul>
              <li>사용자 인증 및 로그인 기능 제공</li>
              <li>웹사이트의 개인화된 사용자 경험 제공</li>
            </ul>
          </li>
          <li>
            개인정보 보관 및 삭제
            <ul>
              <li>
                개인정보는 사용자가 웹사이트를 이용하는 동안만 보관됩니다.
              </li>
              <li>사용자가 요청하는 경우, 개인정보는 즉시 삭제됩니다.</li>
            </ul>
          </li>
          <li>
            개인정보 보호를 위한 보안 조치
            <ul>
              <li>
                웹사이트는 보안 프로토콜(SSL/TLS)을 사용하여 데이터 전송을
                보호합니다.
              </li>
            </ul>
          </li>
          <li>
            제3자 제공 여부
            <ul>
              <li>
                웹사이트는 사용자의 개인정보를 제3자에게 제공하지 않습니다.
              </li>
              <li>
                단, 법적 요구 또는 사용자의 동의가 있는 경우에 한해 제공될 수
                있습니다.
              </li>
            </ul>
          </li>
          <li>
            타사 서비스
            <ul>
              <li>
                본 웹사이트는 Google OAuth를 사용합니다. Google의 개인정보
                처리방침은
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  className="px-1 font-bold text-blue-700 underline"
                >
                  여기
                </a>
                에서 확인할 수 있습니다.
              </li>
            </ul>
          </li>
          <li>
            문의처
            <ul>
              <li>
                개인정보와 관련된 문의 사항은 아래 이메일로 연락해 주세요.
              </li>
              <li>이메일: suhyeon1740@gmail.com</li>
            </ul>
          </li>
        </ol>

        <p>본 개인정보 처리방침은 2025년 2월 7일부터 시행됩니다.</p>
      </div>
    </>
  );
};

export default page;
