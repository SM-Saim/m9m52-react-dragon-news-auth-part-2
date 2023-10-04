import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const { title, image_url, details, _id } = singleNews;
  return (
    <div className="card w-full mb-5 bg-base-100 shadow-xl ">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link
              className="ml-1 font-semibold text-cyan-600"
              to={`/news/${_id}`}
            >
              Read More...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
