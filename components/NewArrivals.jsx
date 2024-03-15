function NewArrivals() {
  return (
    // ALL
    <div className="all_new_arrivals">
      <div className="text-3xl font-bold">
        <h1>NEW ARRIVALS</h1>
      </div>
      <div className="articles_cards flex justify-center gap-6 py-6">
        <div className="article_cards">
          <div>
            <img
              className="h-[23vw] h-auto"
              src="https://unknownlondon.com/cdn/shop/files/4-2.jpg?v=1706282964&width=360"
              alt=""
            />
          </div>
          <div>
            {" "}
            <h2> VINTED RED JACKET</h2>
          </div>
          <div>
            {" "}
            <price> 495 $</price>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
