import { Dispatch, SetStateAction, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ReactModal from "react-modal";
import axios from "axios";
import { URL } from "@/utils/constants";

interface ReviewCraeteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface postPostingProps {
  title: string;
  content: string;
}

const postPosting = async ({ title, content }: postPostingProps) => {
  await axios.post(URL + "/post", {
    title: title,
    content: content,
  });
};

export default function PostCreate({
  isModalOpen,
  setIsModalOpen,
}: ReviewCraeteProps) {
  const customModalStyles: ReactModal.Styles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "50vw",
      height: "75vh",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <ReactModal
      isOpen={isModalOpen}
      style={customModalStyles}
      onRequestClose={() => setIsModalOpen(false)}
      shouldCloseOnOverlayClick={false}
    >
      <div className="flex flex-col">
        <div className="flex flex-row w-full">
          <div className="flex w-full justify-start items-center font-bold text-2xl ml-8">
            게시판 작성
          </div>
          <div className="flex w-full justify-end items-center">
            <button onClick={() => setIsModalOpen(false)}>
              <IoIosCloseCircle size={30} />
            </button>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col">
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border h-20 border-gray-500 p-4 mb-4 rounded-md"
              placeholder="제목을 적어주세요."
            />
          </div>
          <div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border h-80 p-4 border-gray-500  mb-4 rounded-md"
              placeholder="공지사항을 적어주세요."
            />
          </div>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-black text-white py-2 px-4 rounded"
              onClick={() => postPosting({ title, content })}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
