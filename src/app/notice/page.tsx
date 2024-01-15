"use client";

import { MAX_PAGES, URL } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface PostItem {
  number: number;
  title: string;
  createdDate: string;
  content: string;
}

export default function Notice() {
  const [noticeNumber, setNoticeNumber] = useState<Number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postList, setPostList] = useState<PostItem[] | null>([
    {
      number: 0,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "안녕하세요.\n2023년도 KAIST 몰입캠프 겨울학기에 지원해 주셔서 감사합니다.\n서류 심사 결과에 대해, 지원하신 모든 분들께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 1,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
  ]);

  const handleNoticeNumber = (number: number) => {
    setNoticeNumber(number);
  };

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    //TODO : TEST POST
    const getPostList = async () => {
      try {
        const response = await axios.get(`${URL}/post?page=${currentPage}`);
        setPostList(response.data); // 데이터 설정
      } catch (error) {
        console.error("Error fetching post list:", error);
      }
    };

    // getPostList();
  }, [currentPage]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <section>게시판</section>
      <section className="flex flex-col">
        <div>
          {postList &&
            postList
              .filter((postItem) => postItem.number === noticeNumber)
              .map((filteredItem) => (
                <div key={filteredItem.number}>{filteredItem.content}</div>
              ))}
        </div>

        {postList &&
          postList.map((postItem) => {
            return (
              <div
                key={postItem.number}
                className="flex flex-row"
                onClick={() => handleNoticeNumber(postItem.number)}
              >
                <div>{postItem.number}</div>
                <div>{postItem.title}</div>
                <div>{postItem.createdDate}</div>
              </div>
            );
          })}
      </section>
      <section className="mt-auto flex justify-center">
        {Array.from({ length: MAX_PAGES }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageNumber(pageNumber)}
              style={{
                fontWeight: currentPage === pageNumber ? "bold" : "normal",
              }}
            >
              {pageNumber}
            </button>
          )
        )}
      </section>
    </div>
  );
}
