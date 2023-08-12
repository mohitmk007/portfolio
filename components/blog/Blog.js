import React from "react";
import "./Blog.css";
import Image1 from "../../assets/blog-1.svg";
import Image2 from "../../assets/blog-2.svg";
import Image3 from "../../assets/blog-3.svg";

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Latest Posts</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <a href="/">
              <span className="blog__category">VScode</span>
            </a>
            <a href="/">
              <img src={Image1} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">7 best shortcuts coder must knows</h3>
            <div className="blog__meta">
              <span>09 January, 2023</span>
              <span className="blog__dot">.</span>
              <span>MK</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="/">
              <span className="blog__category">Websites</span>
            </a>
            <a href="/">
              <img src={Image2} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">5 best websites coder must knows</h3>
            <div className="blog__meta">
              <span>08 March, 2023</span>
              <span className="blog__dot">.</span>
              <span>MK</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <a href="/">
              <span className="blog__category">Extensions</span>
            </a>
            <a href="/">
              <img src={Image3} alt="" className="blog__img" />
            </a>
          </div>

          <div className="blog__details">
            <h3 className="blog__title">3 best Extensions coder must knows</h3>
            <div className="blog__meta">
              <span>07 May, 2023</span>
              <span className="blog__dot">.</span>
              <span>MK</span>
            </div>
          </div>
        </div>
      </div>

     

      
    </section>
  );
};

export default Blog;
