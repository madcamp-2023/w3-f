import Gifloader from "@/components/GifLoader";
import animationData from "./camp-introduction.json";
import Layout from "@/components/Layout";
import Link from "@/components/Link";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-4xl p-2">{children}</div>;
};

export default function CampIntroductionPage() {
  return (
    <Layout>
      <div className="flex flex-col p-12">
        <div className="group z-10">
          <div>
            <Text>몰입캠프는</Text>
            <Text>
              학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프입니다
            </Text>
          </div>
          <div className="flex justify-start">
            <Link route="/camp-introduction/detail">몰입캠프 자세히보기</Link>
          </div>
        </div>
        <div className="fixed top-0 right-0 z-0">
          <Gifloader animationData={animationData} width={1000} height={1000} />
        </div>
      </div>
    </Layout>
  );
}
