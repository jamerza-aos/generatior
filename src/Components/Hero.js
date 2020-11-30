const Hero = () => {
  const zeile1 = 'Wait, what does your startup do?';
  const zeile2 = `So, Basically, it's like a`;
  const zeile3 = `ProductHunt`;
  const zeile4 = 'for';
  const zeile5 = 'Attractive People!';

  // Zufallszahl von 0 bis 255
  const generateRandom = () => Math.floor(Math.random() * 255);
  // drei zufallsZahlen von 255 in Array [R,G,B]
  const randomZahl = function () {
    const containerRGB = [
      generateRandom(),
      generateRandom(),
      generateRandom(),
      0.3,
    ];
    return containerRGB.join();
  };
  const test = randomZahl();
  const test2 = 'rgba(' + test + ')';

  return (
    <section className="hero">
      <article className="hero-title">
        <div id="what" style={{ backgroundColor: test2 }}>
          <h2>{zeile1}</h2>
        </div>
        <div id="basically" style={{ backgroundColor: test2 }}>
          <h1>{zeile2}</h1>
        </div>
        <div id="this" style={{ backgroundColor: test2 }}>
          <h3>{zeile3}</h3>
        </div>
        <div id="for">
          <h4>{zeile4}</h4>
        </div>
        <div id="that" style={{ backgroundColor: test2 }}>
          <h5>{zeile5}</h5>
        </div>
        {/* <button id="refresh" onclick="return render()">
              Refresh
            </button> */}
      </article>
    </section>
  );
};

export default Hero;
