export function PageHero({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative flex h-[40vh] min-h-[320px] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="container-page relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white sm:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/80 text-balance">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
