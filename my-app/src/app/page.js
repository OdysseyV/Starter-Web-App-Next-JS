import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="nameAnAttributeExample">
        <h1>Header 1</h1>
        <Link
          href="/users"
          style={{
            borderStyle: "solid",
          }}
        >
          Users Page Link
        </Link>
      </main>
    </div>
  );
}
