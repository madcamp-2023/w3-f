import Image from "next/image";
import JBJ from "/public/JBJ.jpg";
import Layout from "@/components/Layout";

function ItemList({
  content,
  textAligned = "left",
}: {
  content: string[];
  textAligned?: string;
}) {
  return (
    // <div className="flex flex-row">
    <div className="mr-5">
      {content.map((item, index) => {
        return (
          <div
            key={index}
            className={`block p-1 border-b text-lg w-full  ${
              textAligned === "left" ? "text-start" : "text-end"
            }`}
          >
            {item}
          </div>
        );
      })}
    </div>
    // </div>
  );
}
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

  const applicationDetails2 = `
  2016	겨울	참가생 20명, 몰입캠프 3기
  여름	참가생 22명, 몰입캠프 2기
  2015	겨울	참가생 21명, 몰입캠프 1기, 
  장병규의장 & KAIST 전산학부 류석영교수 공동진행
  2010-2014	참가생 10여 명, 본엔젤스 매드캠프 1기 ~ 9기 운영
  `;
  const applicationDetailsArray2 = applicationDetails2.split("\n");

  const applicationItemList2 = [
    {
      title: "",
      content: applicationDetailsArray2,
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col h-9/10 p-12">
        <div className="flex flex-row  h-full p-6">
          <div className="flex-1 flex w-full justify-end">
            <Image src={JBJ} alt="1" className="" />
          </div>
          <div className="flex-1 flex  border-l-4 border-black">
            {applicationItemList.map((item, index) => (
              <ItemList content={item.content} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-row  h-full p-6 ">
          <div className="flex-1 flex  border-r-4 border-black w-full justify-end">
            {applicationItemList1.map((item, index) => (
              <ItemList
                content={item.content}
                key={index}
                textAligned="right"
              />
            ))}
          </div>
          <div className="flex-1 flex ">
            <Image src={JBJ} alt="1" className="" />
          </div>
        </div>

        <div className="flex flex-row  h-full p-6">
          <div className="flex-1 flex w-full justify-center ">
            <Image src={JBJ} alt="1" className="" />
          </div>
          <div className="flex-1 flex  border-l-4 border-black jus">
            {applicationItemList2.map((item, index) => (
              <ItemList content={item.content} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
