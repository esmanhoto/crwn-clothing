import React from "react";
import hatsImg from "../../assets/images/hats.png";
import jacketsImg from "../../assets/images/jackets.png";
import menImg from "../../assets/images/men.png";
import sneakersImg from "../../assets/images/sneakers.png";
import womensImg from "../../assets/images/womens.png";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl: hatsImg,
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: jacketsImg,
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "sneakers",
      imageUrl: sneakersImg,
      id: 3,
      linkUrl: "sneakers",
    },
    {
      title: "womens",
      // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      imageUrl: womensImg,
      size: "large",
      id: 4,
      linkUrl: "womens",
    },
    {
      title: "mens",
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl: menImg,
      size: "large",
      id: 5,
      linkUrl: "mens",
    },
  ];

  return (
    <div className="directory-menu">
      {console.log("teste", sections.imageUrl)}
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;

// class Directory extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       sections: [
//         {
//           title: "hats",
//           imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//           id: 1,
//           linkUrl: "shop/hats",
//         },
//         {
//           title: "jackets",
//           imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
//           id: 2,
//           linkUrl: "shop/jackets",
//         },
//         {
//           title: "sneakers",
//           imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
//           id: 3,
//           linkUrl: "shop/sneakers",
//         },
//         {
//           title: "womens",
//           imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
//           size: "large",
//           id: 4,
//           linkUrl: "shop/womens",
//         },
//         {
//           title: "mens",
//           imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
//           size: "large",
//           id: 5,
//           linkUrl: "shop/mens",
//         },
//       ],
//     };
//   }

//   render() {
//     return (
//       <div className="directory-menu">
//         {this.state.sections.map(({ title, imageUrl, id, size }) => (
//           <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//         ))}
//       </div>
//     );
//   }
// }

// export default Directory;
