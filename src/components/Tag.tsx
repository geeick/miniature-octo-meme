type TagProps = {
  label: string;
};

export default function Tag({ label }: TagProps) {
  return <span>{label}</span>;
}
