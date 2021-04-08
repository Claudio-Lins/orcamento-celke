import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Home( {data} ) {
  return (
    <div className="py-16">
      <Head>
        <title>Orçamento</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="mx-auto mb-6 bg-blue-800 py-10">
        <div className="text-center text-gray-50">
          <h1 className="w-2/3 mx-auto font-thin text-7xl tracking-widest">
            {data.home.topTitulo}
          </h1>
          <p className="py-8 w-2/3 mx-auto font-light">
          {data.home.topSubtitulo}
          </p>
          <Link href={data.home.topLinkBtn}>
            <a className="bg-blue-400 px-6 py-2 text-gray-50 text-xl rounded-md tracking-wider shadow-md hover:shadow-none hover:font-bold">
            {data.home.topTextoBtn}
            </a>
          </Link>
        </div>
      </section>
      <section className="w-2/3 mx-auto text-center tracking-wider">
        <h2 className="font-thin text-7xl">
        {data.home.serTitulo}
        </h2>
        <p className="font-light mt-4">
        {data.home.serSubTitulo}
        </p>
        <div className="flex justify-evenly mt-8 items-center">
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] text-5xl pt-12 mx-auto">
              <FontAwesomeIcon className='w-14 mx-auto' icon={data.home.serUmIcone} />
            </div>
            <h3 className="text-2xl font-base mt-2">{data.home.serUmTitulo}</h3>
            <p className="font-light">
            {data.home.serUmDesc}
            </p>
          </div>
          {/*  */}
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] pt-10 mx-auto">
            <FontAwesomeIcon className='w-10 mx-auto' icon={data.home.serDoisIcone} />
            </div>
            <h3 className="text-2xl font-base mt-2">{data.home.serDoisTitulo}</h3>
            <p className="font-light">
            {data.home.serDoisDesc}
            </p>
          </div>
          {/*  */}
          {/* Serviços */}
          <div className="w-[30%]">
            <div className="bg-yellow-500 rounded-full h-[140px] w-[140px] text-5xl pt-12 mx-auto">
            <FontAwesomeIcon className='w-10 mx-auto' icon={data.home.serTresIcone} />
            </div>
            <h3 className="text-2xl font-base mt-2">{data.home.serTresTitulo}</h3>
            <p className="font-light">
              {data.home.serTresDesc}
            </p>
          </div>
          {/*  */}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:8080/home')
  const data = await response.json()
  
  return {
    props: {
      data
    }
  }
}
