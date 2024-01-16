import Image from "next/image";
import JBJ from "/public/JBJ.jpg";
import Layout from "@/components/Layout";

const Item = ({ content }: { content: string[] }) => {
  return (
    <div className="flex flex-row">
      <div className="mr-5">
        {content.map((item, index) => {
          return (
            <div key={index} className="block pt-4 text-base">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function History() {
  const applicationDetails = `2023 여름참가생 77명, 몰입캠프 15기
  2022 여름참가생 79명, 몰입캠프 14기
  2021 겨울참가생 71명, 몰입캠프 13기
  여름참가생 43명, 몰입캠프 12기
  2020 겨울참가생 55명, 몰입캠프 11기
  여름참가생 58명, 몰입캠프 10기`;
  const applicationDetailsArray = applicationDetails.split("\n");

  const applicationItemList = [
    {
      title: "",
      content: applicationDetailsArray,
    },
  ];

  const applicationDetails1 = `2019 겨울참가생 76명, 몰입캠프 9기
  여름참가생 58명, 몰입캠프 8기
  2018 겨울참가생 58명, 몰입캠프 7기
  여름참가생 58명, 몰입캠프 6기, 해외 대학 모집 시작
  2017 겨울참가생 29명, 몰입캠프 5기, 국내 타 대학 모집 시작
  여름참가생 20명, 몰입캠프 4기`;
  const applicationDetailsArray1 = applicationDetails1.split("\n");

  const applicationItemList1 = [
    {
      title: "",
      content: applicationDetailsArray1,
    },
  ];

  const applicationDetails2 = `2016 겨울참가생 20명, 몰입캠프 3기
  여름참가생 22명, 몰입캠프 2기
  2015 겨울참가생 21명, 몰입캠프 1기, 장병규의장 & KAIST 전산학부 류석영교수 공동진행
  2010 - 2014 참가생 10여 명, 본엔젤스 매드캠프 1기 ~ 9기 운영`;
  const applicationDetailsArray2 = applicationDetails2.split("\n");

  const applicationItemList2 = [
    {
      title: "",
      content: applicationDetailsArray2,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col h-9/10">
        <div className="flex flex-row justify-center items-center h-full p-6">
          <div className="flex-1 flex justify-center items-center border-r-4 border-black">
            <Image src={JBJ} alt="1" className="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-full p-6">
          <div className="flex-1 flex justify-center items-center border-r-4 border-black">
            {applicationItemList1.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image src={JBJ} alt="1" className="" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-full p-6">
          <div className="flex-1 flex justify-center items-center border-r-4 border-black">
            <Image src={JBJ} alt="1" className="" />
          </div>
          <div className="flex-1 flex justify-center items-center">
            {applicationItemList2.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-row bg-red-900 w-full justify-center items-center basis-1/3">
          <Image src={JBJ} alt="1" />
          <div className="flex flex-col pl-12 w-full">
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-row bg-red-900 w-full justify-center basis-1/3">
          <Image src={JBJ} alt="1" />
          <div className="flex flex-col pl-12 w-full">
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-row bg-red-900 w-full justify-center basis-1/3">
          <Image src={JBJ} alt="1" />
          <div className="flex flex-col pl-12 w-full">
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>
      </div> */}
    </Layout>
  );
}
