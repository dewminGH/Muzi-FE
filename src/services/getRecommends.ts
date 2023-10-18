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
  ICustomAtr,
} from "./types/interface";
import { ICarouselItem } from "../components/atoms/carousel/types/interface";

const getRecommends = async (collaboratorsList: ICollaborator[], size: number, customSearch?: ICustomAtr) => {
  /* nlp data */
  let target: string = "";
  const recommendMeInput: IRecommendMeRandomInputItem[] = [];
  /* pre - process data */
  collaboratorsList.forEach(({ id, bio, country, date, languages, talents }, index) => {
    const accessToken = getAccessToken();
    let talentsList = "";
    let languageList = "";
    talents.forEach(talent => (talentsList += `\t ${talent}`));
    languages.forEach(language => (languageList += `\t ${language}`));

    /* get login user id */
    const userData = jwtDecode(accessToken as string);
    const { sub } = userData as IAccessTokenDecode;
    /* paper the data formats */
    if (id === sub) {
      /* apply default target */
      target = bio + country + date + talentsList + languageList;
    } else {
      recommendMeInput.push({
        id,
        userData: bio + country + date + talentsList + languageList,
      });
    }
  });
  try {
    /* apply custom search */
    let customTalents = "";
    let customCountries = "";
    customSearch?.talents && customSearch.talents.forEach(talent => (customTalents += `\t ${talent}`));
    customSearch?.country && customSearch?.country?.forEach(cn => (customCountries += `\t ${cn}`));

    let customTarget = undefined;
    if (customSearch?.bio || customTalents || customCountries) {
      customTarget = customTalents + customCountries + customSearch?.bio;
    }

    const {
      data: { recommendProfiles },
    }: IGetRandomResponse = await axios.post("/nlp/recommend-me", {
      target: customTarget ? customTarget : target,
      userList: recommendMeInput,
      size,
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

export default getRecommends;
