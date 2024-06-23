import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col  ">
        <h1 > winter is coming </h1>

        <Link href="products">product</Link>
      </div>
    </div>
  );
}
