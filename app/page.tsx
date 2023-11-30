import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Home 首页</h1>
      <Link href="/demo">go to demo</Link>
    </div>
  )
}
