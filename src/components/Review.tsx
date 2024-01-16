"use client";

import { URL } from "@/utils/constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { BiSolidEditLocation } from "react-icons/bi";
import ReviewCreate from "./ReviewCreate";

interface CardProps {
  name: string;
  title: string;
  content: string;
  github: string;
}

const Card = ({ name, title, content, github }: CardProps) => {
  return (
    <button className="flex flex-col w-1/2 p-8 justify-between items-start text-start">
      <div className="font-bold text-2xl mb-2">{title}</div>
      <div className="text-base text-gray-500 mt-2 mb-2">{content}</div>
      <div className="mt-auto">
        <div className="text-base text-gray-400 mb-2">{name}</div>
        <a href={github}>
          <FaGithubSquare size={30} />
        </a>
      </div>
    </button>
  );
};

const getCardList = async () => {
  return (await axios.get(URL + `/review`)).data;
};

export default function Review() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardList, setCardList] = useState([
    {
      name: "정OO",
      title: "몰입캠프 후기!",
      content:
        "인생에서 이렇게 다시 열심히 살 수 있을까 생각한 한달이었습니다. [...]캠프를 통해 많은 지식을 배운 것도 있지만, 무엇보다 그런 지식을 배우는 법을 배워가는 것 같습니다. 특히 프로그래밍같은 분야는 새로운 것을 얼마나 빠르게 받아들이느냐가 가장 중요한 척도라고 생각을 하는데 그런 면에 있어서 스스로 성장하는 법을 배워간 것 같습니다.",
      github: "https://haejunejung.github.io",
    },
    {
      name: "정OO",
      title: "몰입캠프 후기!",
      content:
        "인생에서 이렇게 다시 열심히 살 수 있을까 생각한 한달이었습니다. [...]캠프를 통해 많은 지식을 배운 것도 있지만, 무엇보다 그런 지식을 배우는 법을 배워가는 것 같습니다. 특히 프로그래밍같은 분야는 새로운 것을 얼마나 빠르게 받아들이느냐가 가장 중요한 척도라고 생각을 하는데 그런 면에 있어서 스스로 성장하는 법을 배워간 것 같습니다.",
      github: "https://haejunejung.github.io",
    },
  ]);

  useEffect(() => {
    //TODO: TEST
    // getCardList().then((response) => {
    //   setCardList(response);
    // });
  }, []);

  return (
    <div>
      <div className="flex flex-col p-12">
        <div className="ml-8 text-4xl font-bold">몰입 생활을 즐긴 사람들</div>
        <div className="flex flex-wrap">
          {cardList &&
            cardList.map((card: CardProps, index: number) => {
              const content =
                card.content.length > 200
                  ? card.content.substring(0, 200) + "..."
                  : card.content;

              return (
                <Card
                  name={card.name}
                  title={card.title}
                  content={content}
                  github={card.github}
                  key={index}
                />
              );
            })}
        </div>
      </div>
      <div className="fixed bottom-10 right-10 ">
        <BiSolidEditLocation size={80} onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
        <ReviewCreate
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
}
