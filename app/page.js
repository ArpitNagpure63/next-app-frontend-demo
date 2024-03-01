'use client'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  return (
    <main className={styles.maincontainer}>
      <h1 className={styles.heading}>Welcome To Home Page</h1>
      {/* <Image
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png'
        height={300}
        width={300}
        alt='Google Image' /> */}
      <div className={styles.mainsubcontainer}>
        <button onClick={() => router.push('/post/student')}>Go To Student Post</button>
        <Link href='/studentlist'>Go To Student List</Link>
        <Link href='/about'>Go To About</Link>
      </div>
    </main>
  )
}
