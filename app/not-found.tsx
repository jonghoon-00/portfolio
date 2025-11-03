import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <p className="text-lg mb-8">요청하신 페이지를 찾을 수 없습니다.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        홈으로 돌아가기
      </Link>
      {/* TODO : 버튼 제작 - 클릭해서 문제 상황 알려주기 */}
    </div>
  );
}
