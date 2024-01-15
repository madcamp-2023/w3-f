import { JanginfoList, MADCAMP, RueinfoList } from "@/utils/constants";

export default function Introduce() {
  const videoId = "DWGAHwzPs0Q"; // YouTube 동영상 ID

  return (
    <div
      className="flex flex-col justify-center md:flex-row items-center bg-black"
      style={{ height: "90vh" }}
    >
      <iframe
        width="400"
        height="250"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
      <div className="flex flex-col ">
        <div className="flex justify-center">강사진</div>
        <div className="flex flex-row">
          <img src={MADCAMP} alt="1" className="w-10 h-10 rounded-3xl" />
          <div className="flex flex-col text-white">
            {JanginfoList.map((info, index) => (
              <div key={index}>{info}</div>
            ))}
          </div>
        </div>
        <div className="flex flex-row text-white">
          <img src={MADCAMP} alt="1" className="w-10 h-10 rounded-3xl" />
          <div className="flex flex-col">
            {RueinfoList.map((info, index) => (
              <div key={index}>{info}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
