export const SET_LANGUAGES = "LANGUAGE/SET_LANGUAGES";

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGES,
    payload: {
      language: language,
    },
  };
};
