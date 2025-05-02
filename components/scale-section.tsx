export function ScaleSection() {
  return (
    <section className="w-full bg-black text-white py-8 md:py-12">
      <div className="container text-center">
        <h2
          className="text-2xl md:text-3xl font-bold mb-0.6"
          style={{
            fontFamily: "'Montserrat', sans-serif",
          }}
        >
          MASTER YOUR LOCAL MARKET
        </h2>
        <h3
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent mb-1.2"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            backgroundSize: "200% auto",
            animation: "gradient 3s linear infinite",
          }}
        >
          GROW BOLDLY
        </h3>
        <p className="max-w-3xl mx-auto text-lg mb-2">
          Crush the competition and own your space. We help top-tier home service and professional businesses scale fast
          and smart—<span className="font-extrabold">capturing 70%+</span> of their market with{" "}
          <span className="font-extrabold">strategies that deliver</span>.
        </p>
      </div>
    </section>
  )
}
