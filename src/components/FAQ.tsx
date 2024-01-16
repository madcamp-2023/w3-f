"use client";

import {
  applyFAQs,
  attendFAQs,
  dormitoryFAQs,
  etcFAQs,
  totalFAQs,
} from "@/utils/constants";
import React, { useEffect, useState } from "react";

const Button = ({
  onClick,
  children,
  isSelected,
}: {
  onClick: any;
  children: React.ReactNode;
  isSelected: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`mr-8 font-bold text-2xl ${
        isSelected ? "text-black" : "text-gray-500"
      } hover:text-black`}
    >
      {children}
    </button>
  );
};

export default function FAQ() {
  const [subject, setSubject] = useState("total");
  const [FAQList, setFAQList] = useState(totalFAQs);

  useEffect(() => {
    if (subject === "total") {
      setFAQList(totalFAQs);
    } else if (subject === "apply") {
      setFAQList(applyFAQs);
    } else if (subject === "attend") {
      setFAQList(attendFAQs);
    } else if (subject === "dormitory") {
      setFAQList(dormitoryFAQs);
    } else {
      setFAQList(etcFAQs);
    }
  }, [subject]);

  return (
    <div className="flex flex-col pt-12">
      <div className="flex flex-row items-start justify-center">
        <div className="flex text-5xl font-bold">자주 묻는 질문</div>
        <div className="flex items-start text-Gray">FAQ</div>
      </div>

      <div className="ml-12 mt-12">
        <Button
          onClick={() => setSubject("total")}
          isSelected={subject === "total"}
        >
          전체
        </Button>
        <Button
          onClick={() => setSubject("apply")}
          isSelected={subject === "apply"}
        >
          지원
        </Button>
        <Button
          onClick={() => setSubject("attend")}
          isSelected={subject === "attend"}
        >
          참가
        </Button>
        <Button
          onClick={() => setSubject("dormitory")}
          isSelected={subject === "dormitory"}
        >
          기숙사
        </Button>
        <Button
          onClick={() => setSubject("etc")}
          isSelected={subject === "etc"}
        >
          기타
        </Button>
      </div>

      <div className="ml-12 mt-12 text-sm">
        <span className="font-bold">총 {FAQList.length}건</span>의 FAQ가 있어요
      </div>
      <div className="flex flex-col ml-8 mr-8 mt-4">
        {FAQList.map((item, index) => {
          return (
            <div className="flex flex-row border-t border-b p-4" key={index}>
              <div className="font-bold mr-4 text-lg">Q.</div>
              <div className="flex flex-col">
                <div className="font-bold text-lg">{item.question}</div>
                <div className="mt-4 text-base text-gray-500">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
