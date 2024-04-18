import Link from "next/link";
import type { Metadata } from "next";
import styles from './page.module.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <p>
        <Link href='/users'>Users</Link>
      </p>
     
    </main>
  );
}
