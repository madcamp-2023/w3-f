import AnimatedCursor from "react-animated-cursor";
import HomePage from "@/app/main/page";

export default function Home() {
  return (
    <main>
      <AnimatedCursor
        innerSize={10}
        outerSize={50}
        color="0, 0, 0"
        outerAlpha={0.1}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <HomePage />
    </main>
  );
}
