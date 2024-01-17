import Gifloader from "@/components/GifLoader";
import animationData from "./management-introduction.json";
import Layout from "@/components/Layout";
import Link from "@/components/Link";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-4xl text-right p-2">{children}</div>;
};

export default function ManagementIntroductionPage() {
  return (
    <Layout>
      <div className="flex flex-col p-12">
        <div className="group z-10">
          <Text>몰입캠프는</Text>
          <Text>
            강사진과 함께 운영진이 함께 기획해 나가는 프로그래밍 캠프입니다
          </Text>
          <div className="flex justify-end p-2">
            <Link route="/management-introduction/detail">
              운영진 자세히보기
            </Link>
          </div>
        </div>

        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-0">
          <Gifloader animationData={animationData} width={1400} height={1200} />
        </div>
      </div>
    </Layout>
  );
}
