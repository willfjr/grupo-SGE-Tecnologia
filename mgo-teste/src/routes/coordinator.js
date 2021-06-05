export const goToCardsScreen = (history) => {
  history.push("/");
};

export const goToFormsScreen = (history) => {
  history.push("/formularios");
};

export const goBack = (history) => {
  history.goBack();
};
