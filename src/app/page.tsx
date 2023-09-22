import Link from "next/link"

export default function Home() {
  

  return (
    <div>
      hello Next.js
      <Link href="/login">로그인</Link>
    </div>
  )
}