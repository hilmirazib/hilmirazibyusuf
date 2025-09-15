import Image, { ImageProps } from "next/image";

export default function MdxImage(props: ImageProps) {
  return (
    <span className="my-4 block">
      <Image {...props} alt={props.alt ?? ""} className="rounded-lg" />
      {props.alt && <span className="mt-2 block text-center text-sm text-zinc-500">{props.alt}</span>}
    </span>
  );
}
