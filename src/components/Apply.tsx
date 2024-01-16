const Item = ({ title, content }: { title: string; content: string[] }) => {
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
};

const Item2 = ({ content }: { content: string[] }) => {
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

export default function Apply() {
  const itemList = [
    { title: "모집인원", content: ["80명 이내(4개 분반)"] },
    {
      title: "참가대상",
      content: [
        "KAIST와 MOU를 맺은 국내 대학 학부생",
        "25세 (1999년생)까지 지원 가능",
      ],
    },
    { title: "모집기간", content: ["MM원 DD일 ~ MM월 DD일(자정까지)"] },
    {
      title: "강의계획서",
      content: ["강의계획서[첨부]"],
    },
    {
      title: "선별방법",
      content: ["서류 심사"],
    },
    {
      title: "선발기준",
      content: ["학번, 성별, 활동 경험 등의 다양성을 고려하며 선발"],
    },
    {
      title: "결과발표",
      content: ["MM월 DD일"],
    },
    {
      title: "발표방법",
      content: ["개별 이메일 공지"],
    },
    {
      title: "캠프기간",
      content: ["MM월 DD일 ~ MM월 DD일"],
    },
    {
      title: "장소",
      content: ["대전 KAIST"],
    },
    {
      title: "참가비용",
      content: [
        "수강료   : 5만원(1학점)",
        "운영비    : 5만원",
        "기숙사비   : KAIST 재학생은 학교 기준에 따름\n KAIST 휴학생 및 타 대학생은 35만원 내외",
        "식비     : 본인 부담",
      ],
    },
    {
      title: "지원사항",
      content: ["24시간 전용 실습실, 개인별 모니터 1대, 공기계폰(2~3인당 1대)"],
    },
    {
      title: "참가생 준비사항",
      content: ["노트북 개인 지참, OS 종류(윈도우, 맥)은 관계 없음"],
    },
  ];

  const applicationDetails = `지원서 항목은 인적 사항, 대학 전공, 대학 생활, 기타의 4개 섹션으로 구성됩니다.

몰입캠프를 진행해 오면서, 캠프의 성공 요인은 학생들의 '공통성'과 '다양성'의 균형을 적절히 맞추는 것에 있었습니다. 이런 구성원이 모여 서로 협력하며 빠르게 학습하고 성장할 수 있습니다.

'공통성'은 태도, 의지, 열정, 협업 등이고, '다양성'은 학번, 성별, 활동 경험, 개발 실력, 자라온 배경 등 가급적 다양하게 구성되기를 바랍니다. 다만, 다수는 2~3학년의 전산학과 기본과목을 이수한 학생들로 구성되기를 희망합니다.

입력된 자료를 기준으로 서류심사가 진행되오니, 다소 항목이 많은 편이지만, 지원자분들을 잘 파악할 수 있도록 성실한 작성을 부탁드립니다!

몰입캠프 참가자로 선정된 후 취소 시에는, 추후 재지원 시 선발 순위가 많이 낮아집니다.

Internet Explorer에서 강의계획서 및 지원서가 열리지 않을 경우 Chrome, Safari 등 다른 브라우저를 이용해 주세요.

지원서 링크: https://forms.gle/Q3ypdAkDRbys2KkE7`;

  // Split applicationDetails into an array of lines
  const applicationDetailsArray = applicationDetails.split("\n");

  const applicationItemList = [
    {
      title: "",
      content: applicationDetailsArray,
    },
  ];

  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-row" style={{ height: "90vh" }}>
        <div className=" w-1/5 flex justify-center font-bold text-4xl mt-10"></div>
        <div className="flex flex-row bg-black text-white w-full h-full">
          <div className="font-bold text-4xl mt-10 ml-16">모집개요</div>
          <div className="flex flex-col mt-8">
            {itemList.map((item, index) => {
              return (
                <Item title={item.title} content={item.content} key={index} />
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-row" style={{ height: "90vh" }}>
        <div className="flex flex-row bg-black text-white w-full h-full">
          <div className="flex flex-col p-12 mt-12">
            {applicationItemList.map((item, index) => (
              <Item2 content={item.content} key={index} />
            ))}
          </div>
          <div className="flex flex-col mr-16 w-1/2 justify-between">
            <div className="text-right">
              <div className="font-bold text-4xl mt-10">지원서 작성</div>
              <div className="font-bold text-4xl">가이드</div>
            </div>
            <button className="flex justify-end items-center h-20 mt-10 mb-16">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSc15O2RuDEDms58RhJe9jaY6hMQ4iJs7CMOKHQ5_4Kvw0fo4Q/closedform">
                <div className="border-8 border-white flex justify-center items-center h-full px-4">
                  <div className="font-bold text-xl">지원서 작성</div>
                </div>
              </a>
            </button>
          </div>
        </div>
        <div className="w-1/5 flex justify-center font-bold text-4xl mt-10"></div>
      </div>
    </div>
  );
}
