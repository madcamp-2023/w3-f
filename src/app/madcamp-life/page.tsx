import Gifloader from "@/components/GifLoader";
import animationData from "./madcamp.json";
import Layout from "@/components/Layout";
import Link from "@/components/Link";

const Text = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-bold text-4xl text-right p-2">{children}</div>;
};

export default function MadcampLifePage() {
  return (
    <Layout>
      <div className="flex flex-col p-12">
        <div className="group z-10">
          <Text>한달간의 몰입생활을</Text>
          <Text>여러분께 소개합니다.</Text>
          <div className="flex justify-end">
            <Link route="/madcamp-life/detail">몰입생활 자세히보기</Link>
          </div>
        </div>

        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-0">
          <Gifloader animationData={animationData} width={1000} height={1000} />
        </div>
      </div>
    </Layout>
  );
}
