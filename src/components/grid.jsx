/* eslint-disable react/prop-types */
const Grid = ({ images, rerend }) => {
  return (
    <>
      <div className="grid grid-cols-[200px,200px,200px,200px] grid-rows-[200px,200px] gap-4">
        {images.map((image) => (
          <div key={image.id} className="card bg-primary w-full shadow-xl">
            <img
              onClick={() => rerend(image.id)}
              src={image.src}
              alt={`memory card ${image.id}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
