import Image from "next/image";
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
      <div className="container mt-5">
        <button className="btn btn-primary">Test Button</button>
        <p className="text-success mt-3">This text should be green.</p>
      </div>
    </div>
  );
}
