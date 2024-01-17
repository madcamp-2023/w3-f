"use client";

import { MAX_PAGES, URL } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";
import TableSheet from "./TableSheet";
import PostCreate from "./PostCreate";
import { BiSolidEditLocation } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/recoil";

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

const Item = ({ text }: { text: string }) => {
  const applicationDetailsArray = text.split("\n");

  return (
    <div className="flex flex-row">
      <div className="mr-5">
        {applicationDetailsArray.map((item, index) => {
          return (
            <div key={index} className="block pt-4 text-lg ">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Post() {
  const [noticeNumber, setNoticeNumber] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postList, setPostList] = useState<PostItem[] | null>(null);

  const handleNoticeNumber = (index: any) => {
    setNoticeNumber(index);
  };

  const handlePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    //TODO : TEST POST
    getPostList({ page: currentPage }).then((response) => {
      setPostList(response);
    });

    setNoticeNumber(0);
  }, [currentPage]);

  const columns: Column[] = useMemo(
    () => [
      {
        accessor: "number",
        Header: "#",
        Cell: ({ value }) => {
          return <span className="text-lg">{value}</span>;
        },
      },
      {
        accessor: "title",
        Header: "제목",
        Cell: ({ value }) => {
          const parsedValue =
            value.length > 30 ? value.substring(0, 30) + "..." : value;

          return <span className="text-lg hover:font-bold">{parsedValue}</span>;
        },
      },
      {
        accessor: "createdDate",
        Header: "등록일",
        Cell: ({ value }) => {
          return <span className="text-lg">{value}</span>;
        },
      },
    ],
    []
  );

  const data = useMemo(() => postList, [postList]);

  const user = useRecoilValue(userState);

  return (
    <div
      className="flex flex-col w-full justify-between"
      style={{ height: "95vh" }}
    >
      <div className="flex flex-row h-full">
        <div className="flex flex-col basis-1/2 bg-white  p-12">
          <section className="text-3xl font-bold mb-4">
            <h1>게시판</h1>
          </section>
          {postList && (
            <TableSheet
              columns={columns}
              data={data}
              handleNoticeNumber={handleNoticeNumber}
            />
          )}

          {user && user.name === "admin" && (
            <section className="flex justify-end mt-10 mr-10 items-end h-full">
              <BiSolidEditLocation
                size={80}
                onClick={() => setIsModalOpen(true)}
              />
              {isModalOpen && (
                <PostCreate
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </section>
          )}
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
          <div>
            {postList && <Item text={postList[noticeNumber]?.content} />}
          </div>
        </div>
      </div>
    </div>
  );
}
