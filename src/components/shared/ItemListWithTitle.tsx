export default function ItemListWithTitle({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div className="flex flex-row mt-5 ml-28 ">
      <div className="w-28 border-r">
        <div className=" mr-3">{title}</div>
      </div>
      <div className="ml-5">
        {content.map((item, index) => {
          return (
            <div key={index} className="block pt-1 text-base">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
