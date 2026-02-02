import heroImg from "../assets/discord-background.png";

function Main() {
  return (
    <main className="hero">
      <div className="container hero-grid">
        <section className="hero-left">
          <h1 className="hero-title">IMAGINE A PLACE...</h1>

          <p className="hero-text">
            ...where you can belong to a school club, a gaming group, or a worldwide art
            community. Where just you and a handful of friends can spend time together.
            A place that makes it easy to talk every day and hang out more often.
          </p>

          <div className="hero-actions">
            <button className="btn btn-light">Download for Mac</button>
            <button className="btn btn-dark">Open Discord in your browser</button>
          </div>
        </section>

        <section className="hero-right" aria-hidden="true">
          <img className="hero-illustration" src={heroImg} alt="" />
        </section>
      </div>
    </main>
  );
}

export default Main
