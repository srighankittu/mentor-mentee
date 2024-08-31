import { useState } from "react";
import axios from "axios";
import { RegisterMentorURL } from "../config/LocalConfigs";
const useRegisterMentee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const registerMentee = async (username, email, password) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(RegisterMentorURL, {
        username,
        email,
        password,
      });
      setSuccess(response.data);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerMentee, loading, error, success };
};

export default useRegisterMentee;
