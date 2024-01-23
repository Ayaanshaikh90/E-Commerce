import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minus excepturi aliquam nobis molestiae nostrum tempora adipisci
          dolore eum at, reiciendis ipsum, dolorem illo aperiam consequatur ipsa
          culpa nam nesciunt.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          minus excepturi aliquam nobis molestiae nostrum tempora adipisci
          dolore eum at, reiciendis ipsum, dolorem illo aperiam consequatur ipsa
          culpa nam nesciunt.
        </p>

      </div>
    </div>
  );
};

export default DescriptionBox;
