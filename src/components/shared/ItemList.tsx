export default function ItemList({
  content,
  textAligned = "left",
}: {
  content: string[];
  textAligned?: string;
}) {
  return (
    <div className="flex flex-row">
      <div className="mr-5">
        {content.map((item, index) => {
          return (
            <div
              key={index}
              className={`block pt-2 text-lg w-full ${
                textAligned === "left" ? "text-start" : "text-end"
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
