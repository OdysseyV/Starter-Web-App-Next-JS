import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="main">
        <h1>Hello World</h1>
        <Link href="/users"> Users </Link>
      </main>
    </div>
  );
}
