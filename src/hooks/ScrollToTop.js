import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 전환 시 즉시 스크롤을 맨 위로 이동
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 즉시 이동 (부드러운 스크롤 없음)
    });

    // 추가로 document.documentElement와 document.body도 초기화
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
