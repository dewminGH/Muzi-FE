import axios from "../util/axios";
import jwtDecode from "jwt-decode";
import { getAccessToken } from "../_data/localStorage";
import {
  IResponseError,
  IError,
  ICollaborator,
  IRecommendMeRandomInputItem,
  IAccessTokenDecode,
  IGetRandomResponse,
} from "./types/interface";
import { ICarouselItem } from "../components/atoms/carousel/types/interface";

const getRandom = async (collaboratorsList: ICollaborator[]) => {
  /* nlp data */
  let target: string = "";
  const recommendMeInput: IRecommendMeRandomInputItem[] = [];
  /* pre - process data */
  collaboratorsList.forEach(({ id, bio, country, date, languages, talents }) => {
    const accessToken = getAccessToken();
    let talentsList = "";
    let languageList = "";
    talents.forEach(talent => (talentsList += talent));
    languages.forEach(language => (languageList += language));

    /* get login user id */
    const userData = jwtDecode(accessToken as string);
    const { sub } = userData as IAccessTokenDecode;

    /* paper the data formats */
    if (id === sub) {
      target = bio + country + date + talentsList + languageList;
    } else {
      recommendMeInput.push({
        id,
        userData: bio + country + date + talentsList + languageList,
      });
    }
  });
  try {
    const {
      data: { recommendProfiles },
    }: IGetRandomResponse = await axios.post("/nlp/recommend-me", {
      target,
      userList: recommendMeInput,
    });
    /*  filtered data */
    const nlpSuggestions: ICarouselItem[] = [];
    recommendProfiles.forEach(_id => {
      collaboratorsList.forEach(({ bio, f_name: firstName, l_name: lastName, id }) => {
        if (id === _id) {
          nlpSuggestions.push({ content: bio, title: `${firstName}\t${lastName}` });
        }
      });
    });

    return { response: nlpSuggestions, error: null };

    /* error handler */
  } catch (err: unknown) {
    const {
      response: {
        data: { error },
      },
    } = err as IResponseError;
    return { response: null, error: error as IError };
  }
};

export default getRandom;
