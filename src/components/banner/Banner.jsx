const Banner = () => {
  return (
    <div>
      <div className="carousel  h-[550px]">
        <div
          id="slide1"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img
            className="w-full"
            src="https://i.ibb.co/g470pdQ/pexels-olly-3771079.jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-white text-center ">
              <h2 className="text-4xl font-bold">
                Best <span className="text-green-600">Arts & Crafts</span> for
                you
              </h2>
              <p className="text-lg">
                Discover our exquisite collection of arts and crafts. Choose
                from a variety of stunning pieces crafted by skilled artisans.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img src="https://i.ibb.co/g470pdQ/pexels-olly-3771079.jpg" />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">
                Best <span className="text-green-600">Arts & Crafts</span> for
                you
              </h2>
              <p className="text-lg">
                Discover our exquisite collection of arts and crafts. Choose
                from a variety of stunning pieces crafted by skilled artisans.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img
            src="https://i.ibb.co/g470pdQ/pexels-olly-3771079.jpg"
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text- text-center">
              <h2 className="text-4xl font-bold">
                Best <span className="text-green-600">Arts & Crafts</span> for
                you
              </h2>
              <p className="text-lg">
                Discover our exquisite collection of arts and crafts. Choose
                from a variety of stunning pieces crafted by skilled artisans.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
