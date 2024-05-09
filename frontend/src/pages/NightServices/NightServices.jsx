import React from 'react';
import category from '../../ServiceCatogary';
import "./NightServices.css";
import { RightCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const NightServices = () => {
    console.log('Home');

    

  return (
    <div className="home-grid">
        {category.map((e) => {
          return (
            <div className="home-card-body">
              <article className="home-card-item">
                <header className="home-card-header">
                  <h1 className="home-card-title">{e.name} </h1>
                </header>

                <div class="home-card-img-wrapper">
                  <img
                    src={e.image}
                    alt="category-img"
                    className="home-card-img"
                  />

                  <Link
                    className="home-card-see-all"
                    to={`/${e.path}/${e.name}`}
                    // onClick={handleClick}
                  >
                    See All  <RightCircleFilled />
                  </Link>
                </div>
              </article>
            </div>
          );
        })}
      </div>
  )
}

export default NightServices;