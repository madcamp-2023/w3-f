import Layout from "@/components/Layout";
import ApplyWriteGuide from "@/components/apply/ApplyWriteGuide";
import RecruitmentOverview from "@/components/apply/RecruitmentOverview";

export default function ApplyDetailPage() {
  return (
    <Layout>
      <div className="flex flex-col">
        <RecruitmentOverview />
        <ApplyWriteGuide />
      </div>
    </Layout>
  );
}
