export type CardProps = {
  slug?: string;
  cover: {
    fileName: string;
    url: string;
  };
  title: string;
  category: string;
};

export const Card = ({ slug, cover, title, category }: CardProps) => {
  return (
    <a href={`/projeto/${slug}`} className="flex flex-col gap-4">
      <img
        className="size-[480px] bg-neutral-100 object-cover sm:h-80"
        alt={cover.fileName}
        src={cover.url}
      />

      <div className="flex flex-col gap-1">
        <h5 className="text-2xl/none font-semibold">{title}</h5>
        <span className="text-base/none font-normal text-neutral-500">
          {category}
        </span>
      </div>
    </a>
  );
};

export const CardFallback = ({ cover, title, category }: CardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <img
        className="size-[480px] bg-neutral-100 object-cover sm:h-80"
        alt={cover.fileName}
        src={cover.url}
      />

      <div className="flex flex-col gap-1">
        <h5 className="text-2xl/none font-semibold">{title}</h5>
        <span className="text-base/none font-normal text-neutral-500">
          {category}
        </span>
      </div>
    </div>
  );
};
