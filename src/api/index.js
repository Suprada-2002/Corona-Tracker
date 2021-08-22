import axios from "axios"; //use to make api requests

const url = "https://corona.lmao.ninja/v2/countries";

export const fetchData = async () => {
  try {
    const {
      data: { cases, recovered, deaths, updated },
    } = await axios.get(url);
    return { cases, recovered, deaths, updated };
  } catch (error) {
    return error;
  }
};

//https://covid19.mathdro.id/api
