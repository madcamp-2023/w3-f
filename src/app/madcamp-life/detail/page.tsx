import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import JBJ from "/public/JBJ.jpg";

const Item = ({ content }: { content: string[] }) => {
  return (
    <div className="flex flex-row">
      <div className="mr-5">
        {content.map((item, index) => {
          return (
            <div key={index} className="block pt-2 text-base">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Item2 = ({ content }: { content: string[] }) => {
  return (
    <div className="flex flex-row">
      <div className="mr-5">
        {content.map((item, index) => {
          return (
            <div key={index} className="block pt-2 text-base w-full text-end">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function MadcampLifeDetailPage() {
  const applicationDetails = `비슷한 부류의 다른 사람들과 함께하면 즐겁겠죠?
  또한, 당연히 혼자 하는 것보다 함께 하는 것이 빠르게 학습하고 성장할 수 있습니다.`;
  const applicationDetailsArray = applicationDetails.split("\n");

  const applicationItemList = [
    {
      title: "",
      content: applicationDetailsArray,
    },
  ];

  const applicationDetails1 = `열정을 가진 사람들과 함께하는 과정에서는, 평소 느끼기 힘든 몰입의 즐거움이 생깁니다.
  주당 80-100시간씩 개발을 해도 즐거운 상태,
  정말 이해하기 힘든 그런 경험을 느껴보고 싶지 않으신가요?`;
  const applicationDetailsArray1 = applicationDetails1.split("\n");

  const applicationItemList1 = [
    {
      title: "",
      content: applicationDetailsArray1,
    },
  ];

  const applicationDetails2 = `대학에서는 스타트업, 대기업, 연구소 등과 같은 여러 형태에 대해서 경험하기 어렵습니다.
  몰입캠프에서 스타트업이나 창업, 혹은 본인의 일에 온전히 매진하는 삶을 간접적으로 경험해보세요.`;
  const applicationDetailsArray2 = applicationDetails2.split("\n");

  const applicationItemList2 = [
    {
      title: "",
      content: applicationDetailsArray2,
    },
  ];

  return (
    <Layout>
      <div style={{ height: "90vh" }}>
        <div className="flex flex-row p-8  justify-center items-center">
          <div className="font-bold  text-4xl w-1/6  justify-center items-center">
            <Image src={JBJ} alt="1" />
          </div>
          <div className="flex flex-col pl-12 w-full">
            <div className="font-bold text-4xl pt-4 pb-4">함께하는 즐거움</div>
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>

        <div className="flex flex-row p-8 bg-black text-white justify-center items-center">
          <div className="flex flex-col pr-12 w-full justify-end items-end ">
            <div className="font-bold text-4xl pt-4 pb-4 w-full text-end ">
              몰입하는 즐거움
            </div>
            {applicationItemList1.map((item, index) => (
              <Item2 content={item.content} key={index} />
            ))}
          </div>
          <div className="font-bold  text-4xl w-1/6 justify-center items-center">
            <Image src={JBJ} alt="1" />
          </div>
        </div>

        <div className="flex flex-row p-8  justify-center items-center">
          <div className="font-bold  text-4xl w-1/6  justify-center items-center">
            <Image src={JBJ} alt="1" />
          </div>
          <div className="flex flex-col pl-12 w-full">
            <div className="font-bold text-4xl pt-4 pb-4">함께하는 즐거움</div>
            {applicationItemList.map((item, index) => (
              <Item content={item.content} key={index} />
            ))}
          </div>
        </div>

        <div className="flex justify-end p-8 font-bold text-2xl">
          <button className="flex flex-row justify-center items-center">
            <LinkButton route="/review">
              <span className="p-2">몰입캠프 후기 자세히보기</span>{" "}
            </LinkButton>
            <FaArrowRight size={40} />
          </button>
        </div>
      </div>
    </Layout>
  );
}
