function App() {
  return (
    <div className="bg-pink-400 h-screen">
      <h1 className="text-3xl font-bold underline">Hello React</h1>
      <h1 className="text-8xl p-[50px] bg-[#dede]">Hello Tailwindcss</h1>

      <div className="flex gap-3 mt-3">
        <div className="flex flex-col justify-between items-center bg-pink-300 rounded-xl w-1/6 h-[250px]"></div>
        <div className="card">
          <img
            src="https://cdn.pixabay.com/photo/2016/07/11/21/23/water-lily-1510707_1280.jpg"
            alt="flower"
            className="rounded-xl "
          />
          <p>
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
