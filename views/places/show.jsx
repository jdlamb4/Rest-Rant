const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="showPage">
          <img src={data.place.pic} alt={data.place.name} />
          <div className="info">
            <h1>{data.place.name}</h1>
            <div className="rating">
              <h2>Rating</h2>
              <p>Not currently rated</p>
            </div>
            <div className="description">
              <h2>Description</h2>
              <p>
                Located in {data.place.city}, {data.place.state} and serving{" "}
                {data.place.cuisines}
              </p>
            </div>
            <div className="comments">
              <h2>Comments</h2>
              <p>Not currently commented</p>
            </div>
          </div>

          
        </div>

        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>

          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
          
      </main>
    </Def>
  );
}

module.exports = show;
