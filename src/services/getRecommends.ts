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
    talents.forEach(talent => (talentsList += ` ${talent}`));
    languages.forEach(language => (languageList += ` ${language}`));

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
    let customLanguages = "";
    customSearch?.talents && customSearch.talents.forEach(talent => (customTalents += ` ${talent}`));
    customSearch?.country && customSearch?.country.forEach(cn => (customCountries += ` ${cn}`));
    customSearch?.languages && customSearch.languages.forEach(ln => (customLanguages += ` ${ln}`));

    let customTarget = undefined;
    if (customSearch?.bio || customTalents || customCountries || customLanguages) {
      customTarget = ` ${customSearch?.bio}` + customTalents + customCountries + customLanguages;
    }

    /* spacy score */
    const {
      data: { recommendProfiles: spacyRecommend },
    }: IGetRandomResponse = await axios.post("/nlp/recommend-me", {
      target: customTarget ? customTarget : target,
      userList: recommendMeInput,
      size,
    });
    // eslint-disable-next-line
    console.log("SPACY_Score >>", spacyRecommend);

    /* sk score */
    const {
      data: { recommendProfiles: skRecommend },
    }: IGetRandomResponse = await axios.post("/sk/score-me", {
      target: customTarget ? customTarget : target,
      userList: recommendMeInput,
      size,
    });
    // eslint-disable-next-line
    console.log("SK_Score >>", skRecommend);

    const nlpRecommendProfiles = [...spacyRecommend];
    nlpRecommendProfiles.forEach(({ id }, index) => {
      skRecommend.forEach(({ id: skID, score: skScore }) => {
        if (id === skID) {
          nlpRecommendProfiles[index].score += skScore;
        }
      });
    });
    // eslint-disable-next-line
    console.log("Score >>", nlpRecommendProfiles);
    /*  filtered data */
    const nlpSuggestions: ICarouselItem[] = [];
    nlpRecommendProfiles.forEach(({ id: _id }) => {
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
