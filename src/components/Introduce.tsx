import { JanginfoList, MADCAMP, RueinfoList } from "@/utils/constants";
import JBJ from "/public/JBJ.jpg";
import RUE from "/public/RUE.jpg";
import MANAGEMENT from "/public/management_team.png";
import Image from "next/image";

export default function Introduce() {
  const videoId = "DWGAHwzPs0Q"; // YouTube 동영상 ID

  return (
    <div
      className="flex flex-row justify-center items-start"
      style={{ height: "90vh" }}
    >
      <div className="flex flex-col mt-16">
        <div className="text-4xl font-bold mb-4 text-center">강사진</div>
        <div className="flex flex-row p-2">
          <div className="flex justify-center items-start">
            <Image
              src={JBJ}
              alt="장병규 의장"
              className="w-20 h-20 rounded-full m-4"
            />
          </div>
          <div className="flex flex-col p-2">
            <a href="https://namu.wiki/w/%EC%9E%A5%EB%B3%91%EA%B7%9C">
              <div className="p-1 font-bold border-b hover:text-2xl">
                장병규
              </div>
            </a>
            {JanginfoList.map((info, index) => (
              <div key={index} className="p-1">
                {info}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row p-2">
          <div className="flex justify-center items-start">
            <Image
              src={RUE}
              alt="류석영 교수"
              className="w-20 h-20 rounded-full m-4"
            />
          </div>
          <div className="flex flex-col p-2">
            <a href="https://ko.wikipedia.org/wiki/%EB%A5%98%EC%84%9D%EC%98%81">
              <div className="p-1 font-bold border-b hover:text-2xl">
                류석영
              </div>
            </a>

            {RueinfoList.map((info, index) => (
              <div key={index} className="p-1">
                {info}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="p-16">
        <iframe
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>
      </div> */}
      <div className="flex flex-col ml-16 justify-center items-center mt-16">
        <div className="text-4xl font-bold">운영진</div>
        <div className="p-16">
          <Image src={MANAGEMENT} alt="운영진" />
        </div>
        <div className="font-bold text-xl">다음 운영진 몰디를 기다립니다!</div>
      </div>
      {/* <div className="flex flex-col items-center ml-16  p-16">
        <div className="flex items-start justify-start ">
          <div className="text-4xl font-bold mb-4 ">운영진</div>
        </div>
        <Image src={MANAGEMENT} alt="운영진" className="h-1/2" />
      </div> */}
    </div>
  );
}
