interface CardProps {
  name: string;
  title: string;
  content: string;
  github: string;
}

export default function ReviewDetail({
  name,
  title,
  content,
  github,
}: CardProps) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}
