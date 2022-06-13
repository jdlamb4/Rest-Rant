const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            {/* Image */}
            <img src={data.place.pic} alt={data.place.name} /> {/* image */}
            <h3>
              {/* Location */}
              Located in {data.place.city}, {data.place.state} {/* image */}
            </h3>
          </div>
          <div className="col-sm-6">
            {/* Restaurant Name */}
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>Not currently rated</p>
            <h2>Description</h2>
            <h3>
              {/* Data pulled using places.js schema in models/places.js */}
              {data.place.showEstablished()}
            </h3>
            <h4>Serving {data.place.cuisines}</h4>
            <br />
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        <div className="row">
          <p>Not currently commented</p>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
