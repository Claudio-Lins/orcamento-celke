import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center bg-blue-500 fixed inset-x-0 shadow-md space-x-8 text-gray-50">
      <div className='hover:bg-blue-300 hover:text-blue-800 hover:font-bold py-6 px-4'>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className='hover:bg-blue-300 hover:text-blue-800 hover:font-bold py-6 px-4'>
        <Link href="/orcamento">
          <a>Orçamento</a>
        </Link>
      </div>
      <div className='hover:bg-blue-300 hover:text-blue-800 hover:font-bold py-6 px-4'>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </div>
    </div>
  );
}
