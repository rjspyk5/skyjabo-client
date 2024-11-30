import Swal from "sweetalert2";

export const curdOperationChecker = (result) => {
  if (result?.data?.message !== "Something Went Wrong") {
    return Swal.fire({
      icon: "success",
      title: result?.data?.message,
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    return Swal.fire({
      icon: "error",
      title: result?.data?.message,
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
