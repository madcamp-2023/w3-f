import Swal from "sweetalert2";

export default function CustomAlert({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: "success",
  });
}
