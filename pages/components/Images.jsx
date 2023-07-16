import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function Images() {
  return (
    <div id="Photos" className="my-20 mx-auto max-w-2xl">
      <ImageList className="grid grid-cols-3 gap-4" cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} className="relative cursor-pointer">
            <div className="w-full h-full overflow-hidden rounded-lg border-4 border-gray-300">
              <image
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
];
