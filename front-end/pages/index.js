import Head from "next/head";
import Link from "next/link";

export default function Orcamento() {
  return (
    <div className="pt-16">
      <Head>
        <title>Orçamento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto mb-6 bg-blue-800 py-10">
        <div className="text-center text-gray-50">
          <h1 className="w-2/3 mx-auto font-thin text-7xl tracking-widest">
            Temos a solução que a sua empresa precisa
          </h1>
          <p className="py-8 w-2/3 mx-auto font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link href="orcamento">
            <a className="bg-blue-400 px-6 py-2 text-gray-50 text-xl rounded-md tracking-wider shadow-md hover:shadow-none hover:font-bold">
              Orçamento
            </a>
          </Link>
        </div>
      </section>
      <section className="w-2/3 mx-auto text-center tracking-wider">
        <h2 className="font-thin text-7xl">Serviços</h2>
        <p className="font-light mt-4">
          Lorem Ipsum is simply dummy text of the printing industry.
        </p>
        <div className="flex justify-evenly mt-8 items-center">
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] text-5xl pt-10 mx-auto">
              A
            </div>
            <h3 className="text-2xl font-base mt-2">Serviço Um</h3>
            <p className="font-light">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>
          {/*  */}
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] text-5xl pt-10 mx-auto">
              B
            </div>
            <h3 className="text-2xl font-base mt-2">Serviço Dois</h3>
            <p className="font-light">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>
          {/*  */}
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] text-5xl pt-10 mx-auto">
              C
            </div>
            <h3 className="text-2xl font-base mt-2">Serviço Três</h3>
            <p className="font-light">
              Lorem Ipsum is simply dummy text of the printing industry.
            </p>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
}

