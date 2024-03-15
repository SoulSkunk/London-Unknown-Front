import Image from "next/image";

function Grid() {
  return (
    <>
      <div className="all_grid pb-6">
        <div className="squares_container grid gap-6 grid-cols-12 grid-rows-12 h-[800px] ">
          <div className="col-start-1 col-end-7 row-start-1 row-end-13 relative">
            <Image
              src="/photo1.jpg"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>
          <div className="col-start-7 col-end-13 row-start-1 row-end-7 relative ">
            <Image
              src="/photo2.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              alt="Picture of the author"
            />
          </div>
          <div className="col-start-7 col-end-10 row-start-7 row-end-13 relative">
            <Image
              src="/photo3.jpg"
              className="rounded-lg"
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>
          <div className="col-start-10 col-end-13 row-start-7 row-end-13 relative">
            <Image
              src="/photo4.jpg"
              layout="fill"
              className="rounded-lg"
              objectFit="cover"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Grid;
// faire le grid
