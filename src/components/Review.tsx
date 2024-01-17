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
  next: string;
  github: string;
}

const Card = ({ name, title, content, next, github }: CardProps) => {
  return (
    <button className="flex flex-col w-1/3 p-8 justify-between items-start text-start">
      <div className="font-bold text-2xl mb-2">{title}</div>
      <div className="text-base text-gray-500 mt-2 mb-2">{content}</div>
      <div className="mt-auto">
        <div className="text-base text-gray-400 mb-2">
          {name.substring(0, 1) + "OO"}
        </div>
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
  const [cardList, setCardList] = useState<CardProps[] | null>(null);

  useEffect(() => {
    //TODO: TEST
    getCardList().then((response) => {
      console.log(response);
      setCardList(response);
    });
  }, []);

  const videoId = "DWGAHwzPs0Q"; // YouTube 동영상 ID

  return (
    <div>
      <div className="flex flex-col">
        <div className="pl-12 pt-12">
          <div className="ml-8 text-4xl font-bold">후기영상</div>
        </div>
        <div className="black-bg ">
          <div className="flex justify-center items-center ">
            <iframe
              width="900"
              height="500"
              src="https://www.youtube.com/embed/m8WQJrnEg0Y"
              title="2019년 여름 KAIST 몰입캠프 참가생 후기"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="ml-8 text-4xl font-bold text-white p-12 ">
            참여자후기
          </div>
        </div>

        <div className="flex flex-wrap p-12">
          {cardList &&
            cardList.map((card: CardProps, index: number) => {
              // const content =
              //   card.content.length > 100
              //     ? card.content.substring(0, 100) + "..."
              //     : card.content;

              return (
                <Card
                  name={card.name}
                  title={card.title}
                  content={card.content}
                  next={card.next}
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
