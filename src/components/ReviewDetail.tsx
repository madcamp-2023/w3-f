import { Dispatch, SetStateAction, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import ReactModal from "react-modal";
import InputForm from "./InputForm";
import axios from "axios";
import { URL } from "@/utils/constants";
import { useRecoilValue } from "recoil";
import { userState } from "@/recoil/recoil";
import Swal from "sweetalert2";

interface ReviewCraeteProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  name: string;
  userId: string;
  title: string;
  content: string;
  next: string;
  github: string;
}

export default function ReviewDetail({
  isModalOpen,
  setIsModalOpen,
  name,
  userId,
  title,
  content,
  next,
  github,
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

  const user = useRecoilValue(userState);

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newNext, setNewNext] = useState(next);
  const [newGithub, setNewGithub] = useState(github);

  const handleDeleteReview = async () => {
    Swal.fire({
      title: "후기 삭제를 진행하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "확인",
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("로그아웃 되었습니다.");
        try {
          axios
            .delete(URL + "/review", {
              params: { userId: user?.id },
            })
            .then(() => {
              setIsModalOpen(false);
            });
        } catch (e: any) {}
        setIsModalOpen(false);
      } else if (result.isDenied) {
      }
    });
  };

  const handlePatchReview = async () => {
    Swal.fire({
      title: "후기 수정을 진행하시겠습니까?",
      showDenyButton: true,
      confirmButtonText: "확인",
      denyButtonText: `취소`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("후기가 수정 되었습니다.");
        try {
          axios.put(
            URL + "/review",
            {
              name: user?.name,
              title: newTitle,
              content: newContent,
              next: newNext,
              github: newGithub,
            },
            {
              params: {
                userId: user?.id,
              },
            }
          );
        } catch (e: any) {
          console.log(e);
        }
        setIsModalOpen(false);
      } else if (result.isDenied) {
      }
    });
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
            {title}
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
              value={newTitle}
              onChange={(e) => {
                if (user && userId === user.id) {
                  setNewTitle(e.target.value);
                }
              }}
              className="w-full border border-gray-500 p-4 mb-4 rounded-md"
              placeholder={title}
            />
          </div>
          <div>
            <textarea
              id="content"
              value={newContent}
              onChange={(e) => {
                if (user && userId === user.id) {
                  setNewContent(e.target.value);
                }
              }}
              className="w-full border h-44 p-4 border-gray-500  mb-4 rounded-md"
              placeholder="몰입 캠프를 함께한 후기를 적어주세요."
            />
          </div>
          <div>
            <textarea
              id="next"
              value={newNext}
              onChange={(e) => {
                if (user && userId === user.id) {
                  setNewNext(e.target.value);
                }
              }}
              className="w-full border h-44 p-4 border-gray-500  mb-4 rounded-md"
              placeholder="다음 기수에게 해주고 싶은 말을 적어주세요."
            />
          </div>
          <div>
            <input
              type="text"
              id="github"
              value={newGithub}
              onChange={(e) => {
                if (user && userId === user.id) {
                  setNewGithub(e.target.value);
                }
              }}
              className="w-full border p-4 border-gray-500  mb-4 rounded-md"
              placeholder="소개하고 싶은 Github URL을 적어주세요."
            />
          </div>
          {user && user.id === userId && (
            <div className="flex justify-end mt-auto">
              <button
                className="bg-black text-white py-2 px-4 rounded mr-4"
                onClick={handleDeleteReview}
              >
                삭제하기
              </button>
              <button
                className="bg-black text-white py-2 px-4 rounded ml-4"
                onClick={handlePatchReview}
              >
                수정하기
              </button>
            </div>
          )}
        </div>
      </div>
    </ReactModal>
  );
}
