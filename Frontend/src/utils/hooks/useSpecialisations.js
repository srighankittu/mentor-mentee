import { useState, useEffect } from "react";
import axios from "axios";
import { SpecialisationsURL } from "../config/LocalConfigs";

const useSpecialisations = () => {
  const [specialisations, setSpecialisations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpecialisations = async () => {
      try {
        setLoading(true);
        const response = await axios.get(SpecialisationsURL);
        setSpecialisations(response.data);
      } catch (err) {
        setError(
          err.message || "An error occurred while fetching specialisations.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialisations();
  }, []);

  return { specialisations, loading, error };
};

export default useSpecialisations;
