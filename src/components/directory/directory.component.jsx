import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const sections = [
    {
      title: "hats",
      imageUrl:
        "https://i.pinimg.com/564x/39/f3/23/39f3238b5ea7039732fd4b034d97ad87.jpg",
      id: 1,
    },
    {
      title: "jackets",
      imageUrl:
        "https://i.pinimg.com/736x/c8/73/65/c873651d521787b532b2ab9eeeb4031c.jpg",
      id: 2,
    },
    {
      title: "sneakers",
      imageUrl:
        "https://i.pinimg.com/564x/a1/34/cd/a134cdeb9014c11652f491ebad33c08f.jpg",
      id: 3,
    },
    {
      title: "womens",
      // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      imageUrl:
        "https://i.pinimg.com/564x/4d/de/98/4dde9895cdf720b0c0cec89d6675d52c.jpg",
      size: "large",
      id: 4,
    },
    {
      title: "mens",
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl:
        "https://i.pinimg.com/564x/0e/21/7b/0e217be4dd10fc82179d47c4f7c24c0c.jpg",
      size: "large",
      id: 5,
    },
  ];

  return (
    <div className="directory-menu">
      {console.log("teste", sections.imageUrl)}
      {sections.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
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
