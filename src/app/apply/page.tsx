import Gifloader from "@/components/GifLoader";
import animationData from "./apply.json";
import Layout from "@/components/Layout";
import Link from "@/components/Link";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-4xl p-2">{children}</div>;
};

export default function ApplyPage() {
  return (
    <Layout>
      <div className="flex flex-col p-12 ">
        <div className="group z-10">
          <div>
            <Text>몰입캠프에서 함께할 다음 몰디 여러분을 기다립니다!</Text>
          </div>
          <div className="flex justify-start">
            <Link route="/apply/detail">몰입캠프 지원하기</Link>
          </div>
        </div>
        <div className="fixed top-0 right-40 z-0">
          <Gifloader animationData={animationData} width={1000} height={1000} />
        </div>
      </div>
    </Layout>
  );
}
