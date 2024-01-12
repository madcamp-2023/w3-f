import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main>
      <AnimatedCursor
        innerSize={20}
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
    </main>
  );
}
