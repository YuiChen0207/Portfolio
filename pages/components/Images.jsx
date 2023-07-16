import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Images() {
  return (
    <div id="Photos" className="mb-20 mx-auto max-w-2xl">
      <h1 className="mb-12 mt-12 uppercase font-bold text-center text-white text-4xl">
        Photos
      </h1>
      <ImageList
        className="grid grid-cols-3 gap-4 pt-8"
        cols={3}
        rowHeight={164}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="relative cursor-pointer">
            <div className="w-full h-full overflow-hidden rounded-lg border-4 border-gray-300">
              <image
                src={`${item.img}`}
                srcSet={`${item.img}`}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-2 px-4 text-white text-sm">
              {item.title}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: "https://i.ibb.co/Ry4GwKf/tweet.png",
    title: "Tweet",
  },
  {
    img: "https://i.ibb.co/Jts89JJ/Edit.png",
    title: "Profile",
  },
  {
    img: "https://i.ibb.co/8NBKRtL/card.png",
    title: "Card",
  },
  {
    img: "https://i.ibb.co/WtPQ5DQ/catogory.png",
    title: "Category",
  },
  {
    img: "https://i.ibb.co/M7K2ZYF/signin.png",
    title: "Sign in",
  },
  {
    img: "https://i.ibb.co/SJX77g2/ranking.png",
    title: "Ranking",
  },
  {
    img: "https://i.ibb.co/HCnJzqX/newslettter.png",
    title: "Newsletter",
  },
  {
    img: "https://i.ibb.co/99KNJc7/recommend.png",
    title: "Recommend",
  },
  {
    img: "https://i.ibb.co/jzxx290/searching.png",
    title: "Searching",
  },
];
