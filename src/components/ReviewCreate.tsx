import { Dispatch, SetStateAction, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ReactModal from "react-modal";
import InputForm from "./InputForm";
import axios from "axios";
import { URL } from "@/utils/constants";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/recoil";
import CustomAlert from "./CustomAlert";

interface ReviewCraeteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

interface postReviewProps {
  userId: string;
  title: string;
  content: string;
  next: string;
  github: string;
}

const postReview = async ({
  userId,
  title,
  content,
  next,
  github,
}: postReviewProps) => {
  await axios.post(URL + "/review", {
    userId: userId,
    title: title,
    content: content,
    next: next,
    github: github,
  });
};

export default function ReviewCreate({
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
  const [next, setNext] = useState("");
  const [github, setGithub] = useState("");
  const user = useRecoilValue(userState);

  const handlePostReview = () => {
    console.log(user);

    if (user) {
      postReview({ userId: user.id, title, content, next, github });
    }

    setTitle("");
    setContent("");
    setNext("");
    setGithub("");

    CustomAlert({ title: "후기", text: "후기 작성이 완료되었습니다." });

    setIsModalOpen(false);
  };

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
            몰입생활후기적기
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
              className="w-full border border-gray-500 p-4 mb-4 rounded-md"
              placeholder="제목을 적어주세요."
            />
          </div>
          <div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border h-44 p-4 border-gray-500  mb-4 rounded-md"
              placeholder="몰입 캠프를 함께한 후기를 적어주세요."
            />
          </div>
          <div>
            <textarea
              id="next"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              className="w-full border h-44 p-4 border-gray-500  mb-4 rounded-md"
              placeholder="다음 기수에게 해주고 싶은 말을 적어주세요."
            />
          </div>
          <div>
            <input
              type="text"
              id="github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className="w-full border p-4 border-gray-500  mb-4 rounded-md"
              placeholder="소개하고 싶은 Github URL을 적어주세요."
            />
          </div>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-black text-white py-2 px-4 rounded"
              onClick={handlePostReview}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
