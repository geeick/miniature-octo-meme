import Link from "next/link";

export default function Card({
  title,
  href,
  blurb,
  badge,
  image,
}: {
  title: string;
  href: string;
  blurb: string;
  badge?: string;
  image?: string;
}) {
  return (
    <Link href={href} className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
        {badge ? <span className="rounded-full bg-mist px-2 py-1 text-xs">{badge}</span> : null}
      </div>
      <p className="mt-2 text-sm text-black/70">{blurb}</p>
      {image ? <img src={image} className="mt-3 rounded-lg border border-black/10" /> : null}
    </Link>
  );
}
