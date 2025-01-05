import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import ExitAnimation from "./components/ExitAnimation";

export default function Home() {
  return (
    <main>
      <Link href="/users">Users</Link>
      <ProductCard />
      <div style={{ height: "20px" }} />
      <ExitAnimation />
    </main>
  );
}
