const App = () => {
  const [products, setProducts] = React.useState([]);

  const [input, setInput] = React.useState("");

  function fetchProducts() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCourse(data);
      });
  }
  React.useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <>
      <section class="subscribe-section pt-70 pb-70 img-bg course">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6 col-lg-6">
              <div class="section-title mb-30">
                <span class="text-white wow fadeInDown" data-wow-delay=".2s">
                  Courses
                </span>
                <h2 class="text-white mb-40 wow fadeInUp" data-wow-delay=".4s">
                  Search your Course now!
                </h2>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <form
                action="#"
                class="subscribe-form wow fadeInRight"
                data-wow-delay=".4s"
              >
                <input
                  type="text"
                  name="subs-email"
                  onChange={(value) => setInput(value.target.value)}
                  placeholder="Search "
                />
                <button type="submit">
                  <i class="lni lni-search-alt"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-section pt-130">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-7 col-md-9 mx-auto">
              <div class="section-title text-center mb-55">
                <span class="wow fadeInDown" data-wow-delay=".2s">
                  Explore Courses
                </span>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              {products
                .filter((product) => {
                  return product.name
                    .toLowerCase()
                    .includes(input.toLowerCase());
                })
                .map((product) => {
                  return (
                    <div class="col-lg-4 col-md-6">
                      <div class="feature-box box-style card" key={product.id}>
                        <div class="feature-icon box-icon-style">
                          <i class={product.icon}></i>
                        </div>
                        <div class="box-content-style feature-content">
                          <h4>{product.name}</h4>
                          <p>{product.details}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
      <ul className="list-group mt-4"></ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
