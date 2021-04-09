export default function CMS() {
  return (
    <>
      <div className="pt-24 text-center text-5xl font-semibold text-blue-600 py-8">
        <h1>Content Management System</h1>
      </div>
<hr></hr>
      <div className="mx-auto p-10 space-y-4">
        <div className="flex justify-center items-center">
          <label className="font-semibold" for="name">
            Titulo Topo
          </label>
          <input
            className="w-1/3 py-1 px-6 ml-1 rounded-lg outline-none border"
            type="text"
            name="titulo"
            id="titulo"
            placeholder="Título topo"
            //   onChange={onChangeInput}
          ></input>
        </div>
        <div className="flex justify-center items-center">
          <label className="font-semibold" for="name">
            Subtitulo Topo
          </label>
          <input
            className="w-1/3 py-1 px-6 ml-1 rounded-lg outline-none border"
            type="text"
            name="subtitulo"
            id="subtitulo"
            placeholder="Subtitulo topo"
            //   onChange={onChangeInput}
          ></input>
        </div>
      </div>
    </>
  );
}
