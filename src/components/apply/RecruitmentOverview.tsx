import ItemListWithTitle from "../shared/ItemListWithTitle";

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

export default function RecruitmentOverview() {
  return (
    <div className="flex flex-row" style={{ height: "95vh" }}>
      <div className=" w-1/5 flex justify-center font-bold text-4xl mt-10"></div>
      <div className="flex flex-row bg-black text-white w-full h-full">
        <div className="font-bold text-4xl mt-10 ml-16">모집개요</div>
        <div className="flex flex-col mt-8">
          {itemList.map((item, index) => {
            return (
              <ItemListWithTitle
                title={item.title}
                content={item.content}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
