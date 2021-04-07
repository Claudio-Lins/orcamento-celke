export default function Orcamento() {
  return (
    <div className="py-16">
      <div className="py-16 bg-blue-700 text-center text-gray-50 font-thin text-5xl">
        <h1>Orçamento</h1>
      </div>
      <section className='flex justify-center items-center w-1/3 mx-auto'>
      <form className="py-4 min-w-full p-4 mt-4 space-y-5 rounded-lg shadow-md justify-start">
        <div className="flex items-center">
          <label className='font-semibold' for="name">Nome</label>
          <input
            className="w-full py-1 px-6 ml-1 rounded-lg outline-none border"
            type="text"
            name="name"
            id="name"
            placeholder="Preencha o nome completo"
          ></input>
        </div>
        <div className="flex items-center">
          <label className='font-semibold' for="email">Email</label>
          <input
            className="w-full py-1 px-6 ml-1 rounded-lg outline-none border"
            type="email"
            name="email"
            id="email"
            placeholder="Preencha seu email"
          ></input>
        </div>
        <div className="flex items-center">
          <label className='font-semibold' for="phone">Phone</label>
          <input
            className="w-full py-1 px-6 ml-1 rounded-lg outline-none border"
            type="text"
            name="phone"
            id="phone"
            placeholder="+xxx - xxx xxx xxx"
          ></input>
        </div>
        <div className="flex items-center">
          <label className='font-semibold' for="whatsup">WhatsUp</label>
          <input
            className="w-full py-1 px-6 ml-1 rounded-lg outline-none border"
            type="text"
            name="whatsup"
            id="whatsup"
            placeholder="+xxx - xxx xxx xxx"
          ></input>
        </div>
        <div className="flex items-center">
          <label className='font-semibold' for="projeto">Projeto</label>
          <textarea
            className="w-full py-1 px-6 ml-1 rounded-lg outline-none border"
            type='text-area'
            name="projeto"
            id="projeto"
            placeholder="Descreva seu projeto"
          ></textarea>
        </div>
        <div className='w-full bg-blue-500 rounded-lg py-2 text-center text-gray-50 font-semibold tracking-wide'>
            <button type='submit'>Solicitar</button>
        </div>
      </form>
      </section>
    </div>
  );
}
