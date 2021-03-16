import React, { useState, useEffect } from "react";

import firebase from "../../firebase";

const Courses = () => {
  const db = firebase.firestore().collection("courses");
  const [products, setProducts] = useState([]);
  const [input, setInput] = React.useState("");


  const getProducts = () => {
    db.onSnapshot((data) => {
      const items = [];
      data.forEach((doc) => {
        items.push(doc.data());
      });
      setProducts(items);
    
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div >
      <section
        className="subscribe-section pt-70 pb-70 img-bg course"
        style={{ marginTop: 0 }}
      >
        <div className="container" >
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="section-title mb-30">
                <span className="text-white wow fadeInDown" data-wow-delay=".2s">
                  Courses
                </span>
                <h2 className="text-white mb-40 wow fadeInUp" data-wow-delay=".4s">
                  Search your Course now!
                </h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <form
                action="#"
                className="subscribe-form wow fadeInRight"
                data-wow-delay=".4s"
              >
                <input
                  type="text"
                  name="subs-email"
                  onChange={(value) => setInput(value.target.value)}
                  placeholder="Search "
                />
            
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-section pt-130" id="course">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-9 mx-auto">
              <div className="section-title text-center mb-55">
                <span className="wow fadeInDown" data-wow-delay=".2s">
                  Explore Courses
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {products
                .filter((product) => {
                  return product.name
                    .toLowerCase()
                    .includes(input.toLowerCase());
                })
                .map((product) => {
                  return (
                    <div className="col-lg-6 col-md-4" key={product.id}>
                      <div className="feature-box box-style card" key={product.id}>
                        <div className="feature-icon box-icon-style">
                          <i className={product.icon}></i>
                        </div>
                        <div className="box-content-style feature-content">
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
    </div>
  );
};

export default Courses;
