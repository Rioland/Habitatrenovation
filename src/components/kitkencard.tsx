const KetchenCard = (props: any) => {
  return (
    <div className="col-12 col-md-6">
      <div
        className="m-2 pt-5"
        style={{
          backgroundImage: `url(${props.data.image})`,
          backgroundSize: "cover", // Optional: Ensures the image covers the div
          backgroundPosition: "center", // Optional: Centers the image
          height: "400px", // Optional: Set height for visibility
        }}
      >
        {/* You can add content here if needed */}
<br /><br />
        <h1
          className="text-center text-white mt-5"
          style={{ textTransform: "capitalize" }}
        >
          {props.data.title}
        </h1>
        <div style={{justifyContent:"center"}}  className="d-flex">
          {" "}
          <button
            className="btn text-white"
            style={{ border: "1px solid white" }}
          >
            SHOW THE LINE
          </button>
        </div>
      </div>
    </div>
  );
};

export default KetchenCard;
