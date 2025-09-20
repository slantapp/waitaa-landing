import Image from "next/image";

const logos = [
  "/images/logos/forbes.png",
  "/images/logos/cnbc.png",
  "/images/logos/bloomberg.png",
  "/images/logos/reuters.png",
  "/images/logos/cnn.png",
];

const Partners = () => {
  return (
    <section>
      <p className="uppercase text-center mt-20 font-medium">
        Featured and seen in
      </p>
      <div className="flex items-center justify-between w-[60%] mx-auto mt-10">
        {logos.map((d, i) => {
          return (
            <div key={i} className="relative w-32 h-12">
              <Image
                key={i}
                src={d}
                alt={`logo ${i + 1}`}
                fill
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Partners;
