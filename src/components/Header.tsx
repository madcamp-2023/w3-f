import React from "react";

import { FiAlignRight } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div>ㅁㅇㅋㅍ</div>

      <div className="flex justify-center items-center text-center">
        <button>지원하기</button>
        <button>지원하기</button>
        <button>지원하기</button>
        <button>지원하기</button>
        <button>
          <FiAlignRight size={50} />
        </button>
      </div>
    </header>
  );
}
