import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import ItemList from "@/components/shared/ItemList";

import { FaArrowRight } from "react-icons/fa";

const videoId = "DWGAHwzPs0Q"; // YouTube 동영상 ID

const applicationDetails = `스타트업이던, 대기업이던, 중견기업이던, 항상 좋은 인재들이 모자란다고 합니다. 
  공대생들은 각박한 공부와 경쟁 속에서 지쳐가는 것 같은데, 왜 그럴까요?
  
  본 코스를 통해서, 다양한 학생들과 함께 자율적으로 개발 경험을 쌓으면서 개발 실력의 향상과 스스로 성장해 나가는 모습을 발견해보세요. 그리고 이런 집중 성장의 경험은 참가자들의 삶에 커다란 긍정적 영향을 끼칩니다. 또한, 여러 스타트업 창업자들의 강연을 통해서, 본인의 삶을 온전히 느낄 수 있는 스타트업의 매력도 접할 수 있으며, 스스로의 삶에 대해서 한 번쯤 돌아보고 방향성을 고민해 볼 수 있는 기회를 제공합니다.
  
  비슷한 교육을 받은 사람들이 비슷한 방식으로 가치를 창출하는 비중은 점점 줄어들고, 다양한 사고방식과 경험을 가진 사람들이 함께 어우러져 가치를 창출하는 비중이 점점 늘어날 것이라 믿습니다.
  
  몰입캠프와 함께 집중적으로 개발 경험을 쌓으면서, 본인의 삶을 돌아보지 않으시겠습니까?`;
const applicationDetailsArray = applicationDetails.split("\n");

const applicationDetails1 = `몰입캠프의 목표는, 참가한 학생들의 성장과 참가자들의 네트워킹입니다.

  2-3명이 한 팀을 이루어 앱(서비스)를 기획하고 개발하며 팀과 협업하는 것을 지향합니다.
  스스로 학습하며, 실제 필드에서 개발을 시작할 수 있는 기본적인 경험과 태도를 갖추는 것을 지향합니다.
  또한, 스타트업 창업자들의 특강과 교류를 통해서 본인의 태도와 삶을 돌아보는 것을 지향합니다`;
const applicationDetailsArray1 = applicationDetails1.split("\n");

const applicationDetails2 = `몰입캠프는 2010년 본엔젤스의 매드캠프에서 시작되었습니다.

  매드캠프는 ‘Mobile Application Development Camp’의 약자로 모바일 앱 개발에 관심 있는 학생들이 모여 함께 프로젝트를 하며 빠르게 성장하는 합숙 캠프입니다. 2010년 겨울학기에 1기 모집을 시작으로 9기까지 운영되었으며, 오랜 기간 운영 경험과 노하우를 통해 최적의 프로그래밍 캠프로 발전해 왔습니다.
  
  학생들의 성원에 힘입어, 더 많은 학생들에게 캠프 참여의 기회를 제공하고자, 2015년 겨울부터 KAIST 전산학부와 협업하여 몰입캠프로 그 명성을 이어가고 있습니다.
  
  2017년 겨울학기부터 타 대학으로 지원 범위를 넓히고, 2018년 여름학기에는 해외 대학으로 모집을 확대하여 국내외 다양한 학생들이 참여하고 있습니다.
  
  몰입캠프는 다년간의 운영 경험으로 개선과 발전을 거듭하였으며, 앞으로도 학생들에게 유익한 캠프가 되도록 지속적으로 노력하고 성장해 나갈 것입니다.`;
const applicationDetailsArray2 = applicationDetails2.split("\n");

const SectionComponent = ({
  title,
  itemList,
  textAligned,
  bgColor = "white",
  textColor = "black",
}: {
  title: string;
  itemList: string[];
  textAligned: string;
  bgColor?: string;
  textColor?: string;
}) => {
  const titleClasses = `font-bold text-4xl w-1/6 text-center border-${
    textAligned === "left" ? "r" : "l"
  } border-${textColor}`;
  const containerClasses = `flex flex-row p-12  ${
    bgColor === "black" ? "bg-black text-white" : ""
  }`;
  const contentClasses = `flex flex-col w-full   ${
    textAligned === "left" ? "pl-12" : "pr-12"
  } w-full`;

  return (
    <div className={containerClasses}>
      {textAligned === "left" && <div className={titleClasses}>{title}</div>}
      <div className={contentClasses}>
        <ItemList content={itemList} textAligned={textAligned} />
      </div>
      {textAligned === "right" && <div className={titleClasses}>{title}</div>}
    </div>
  );
};

export default function CampIntroductionDetailPage() {
  return (
    <Layout>
      <div style={{ height: "95vh" }}>
        <div className="bg-black rotate-translate">
          <div className="flex items-center justify-center ">
            <iframe
              width="600"
              height="400"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
              className="mt-20 mb-20"
            ></iframe>
          </div>
        </div>

        <SectionComponent
          title="개요"
          itemList={applicationDetailsArray}
          textAligned="left"
        />

        <SectionComponent
          title="목적"
          itemList={applicationDetailsArray1}
          textAligned="right"
          bgColor="black"
          textColor="white"
        />

        <SectionComponent
          title="역사"
          itemList={applicationDetailsArray2}
          textAligned="left"
        />

        <div className="flex justify-end p-8 font-bold text-2xl ">
          <div className="flex flex-row justify-center items-center">
            {/* <LinkButton route="/history">
              <span className="p-2">몰입캠프 연혁 자세히 보기</span>{" "}
            </LinkButton> */}
            {/* <FaArrowRight size={40} /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
