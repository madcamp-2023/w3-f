import ItemList from "../shared/ItemList";

const applicationDetails = `지원서 항목은 인적 사항, 대학 전공, 대학 생활, 기타의 4개 섹션으로 구성됩니다.

몰입캠프를 진행해 오면서, 캠프의 성공 요인은 학생들의 '공통성'과 '다양성'의 균형을 적절히 맞추는 것에 있었습니다. 이런 구성원이 모여 서로 협력하며 빠르게 학습하고 성장할 수 있습니다.

'공통성'은 태도, 의지, 열정, 협업 등이고, '다양성'은 학번, 성별, 활동 경험, 개발 실력, 자라온 배경 등 가급적 다양하게 구성되기를 바랍니다. 다만, 다수는 2~3학년의 전산학과 기본과목을 이수한 학생들로 구성되기를 희망합니다.

입력된 자료를 기준으로 서류심사가 진행되오니, 다소 항목이 많은 편이지만, 지원자분들을 잘 파악할 수 있도록 성실한 작성을 부탁드립니다!

몰입캠프 참가자로 선정된 후 취소 시에는, 추후 재지원 시 선발 순위가 많이 낮아집니다.

Internet Explorer에서 강의계획서 및 지원서가 열리지 않을 경우 Chrome, Safari 등 다른 브라우저를 이용해 주세요.

지원서 링크: https://forms.gle/Q3ypdAkDRbys2KkE7`;

// Split applicationDetails into an array of lines
const applicationDetailsArray = applicationDetails.split("\n");

export default function ApplyWriteGuide() {
  return (
    <div className="flex flex-row" style={{ height: "95vh" }}>
      <div className="flex flex-row bg-black text-white w-full h-full">
        <div className="flex flex-col p-12 mt-12">
          <ItemList content={applicationDetailsArray} textAligned="left" />
        </div>
        <div className="flex flex-col mr-16 w-1/2 justify-between">
          <div className="text-right">
            <div className="font-bold text-4xl mt-10">지원서 작성</div>
            <div className="font-bold text-4xl">가이드</div>
          </div>
          <button className="flex justify-end items-center h-20 mt-10 mb-16">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc15O2RuDEDms58RhJe9jaY6hMQ4iJs7CMOKHQ5_4Kvw0fo4Q/closedform">
              <div className="border-4 border-white flex justify-center items-center h-full p-4">
                <div className="font-bold text-xl">지원서 작성</div>
              </div>
            </a>
          </button>
        </div>
      </div>
      <div className="w-1/5 flex justify-center font-bold text-4xl mt-10"></div>
    </div>
  );
}
