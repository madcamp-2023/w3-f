"use client";

import { MAX_PAGES, URL } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import TableSheet from "./TableSheet";

interface PostItem {
  number: number;
  title: string;
  createdDate: string;
  content: string;
}

async function getPostList({ page }: { page: number }) {
  return (
    await axios.get(URL + `/post`, {
      params: {
        page: page,
      },
    })
  ).data;
}

export default function Notice() {
  const [noticeNumber, setNoticeNumber] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postList, setPostList] = useState<PostItem[] | null>([
    {
      number: 0,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "\n서류 심사 결과에 대해, 지원하신 모든 분들께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 1,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 2,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 3,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 4,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        " 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 5,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "안해, 지원하신 모든 분들께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 6,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "메일을 확인해 주시고, 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 7,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "안녕하세요.\n2023년도 KAIST 몰입캠프 겨울학기지원하신 모든 분들께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 8,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 p.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
    {
      number: 9,
      title: "[공지] 2023년도 몰입캠프 겨울학기 참가 결과 발표",
      createdDate: "2023년 11월 15일",
      content:
        "안녕하세요.\n2023년도 KAIST 몰입캠프 겨울학기에 지원해 주셔서 감사합니다.\n서류 심사 결과에 대해, 지원하신 모든 분들께 개별 이메일로 공지가 되었습니다. 메일을 확인해 주시고, 혹시라도 메일을 받지 못하신 분은 아래 연락처로 문의해 주세요.\n문의 : 몰입캠프 운영팀 (madcamp.kaist@gmail.com)\n보내주신 성원에 감사드리며, 이번에 아쉽게 참가하지 못하신 분들은 다음 학기 개설 시에 뵐 수 있기를 기대하겠습니다.\n감사합니다.",
    },
  ]);

  const handleNoticeNumber = (cell: any) => {
    setNoticeNumber(cell.row.original.number);
  };

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    //TODO : TEST POST
    getPostList({ page: currentPage }).then((response) => {
      console.log(response);
      // setPostList(response);
    });
  }, [currentPage]);

  const columns: Column[] = useMemo(
    () => [
      {
        accessor: "number",
        Header: "#",
      },
      {
        accessor: "title",
        Header: "제목",
      },
      {
        accessor: "createdDate",
        Header: "등록일",
      },
    ],
    []
  );

  const data = useMemo(() => postList, [postList]);

  return (
    <div
      className="flex flex-col w-full justify-between"
      style={{ height: "90vh" }}
    >
      <div className="flex flex-row h-full">
        <div className="flex flex-col basis-1/2 bg-white  p-12">
          <section className="text-3xl font-bold mb-4">
            <h1>게시판</h1>
          </section>
          <TableSheet
            columns={columns}
            data={data}
            handleNoticeNumber={handleNoticeNumber}
          />
          <section className="mt-auto flex justify-center items-center">
            {Array.from({ length: MAX_PAGES }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageNumber(pageNumber)}
                  className="p-2"
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
        <div className="flex flex-col basis-1/2 bg-black text-white p-12">
          <div className="text-3xl mb-4">
            {postList && postList[noticeNumber]?.title}
          </div>
          <div>{postList && postList[noticeNumber]?.content}</div>
        </div>
      </div>
    </div>
  );
}
