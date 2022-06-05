const React = require("react");
const Def = require("./default");
 
function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div>
          <img src="/images/udon.jpg" alt="Udon"  width="400" height="200"/>
          <div>
            Photo by <a href="AUTHOR_LINK">Matthias Oberholzer</a> on <a href="UNSPASH_LINK">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
