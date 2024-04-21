import axios from "axios"
import { useRef, useState } from "react"
import { toast, Id } from "react-toastify"

const useAddRecommendation = () => {
  const toastID = useRef<Id>();
  const [state, setState] = useState<string>("");

  const addRecommendation = async (
    authorId: string,
    receiverId: string,
    date: Date,
    description: string
  ) => {
    toastID.current = toast.loading("Adding recommendation...");

    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + `/api/nurse/${authorId}/addRecommendation`,
        {
          receiverId,
          date,
          description,
        },
        {
          withCredentials: true,
        }
      );

      handleSuccess(response.data.message);
      return response.data;
    } catch (error) {
      handleFailure(error);
      throw error;
    }
  };

  const handleSuccess = (message: string) => {
    setState("success");
    toast.update(toastID.current ?? "", {
      render: message,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "success",
      isLoading: false,
    });
  };

  const handleFailure = (error: any) => {
    setState("error");
    console.error("Error adding recommendation:", error);
    toast.update(toastID.current ?? "", {
      render: error.response?.data?.message ?? error.message,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      type: "error",
      isLoading: false,
    });
  };

  return { addRecommendation };
};

export default useAddRecommendation;
