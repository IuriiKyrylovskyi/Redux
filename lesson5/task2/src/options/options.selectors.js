export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const availableOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter((option) => selectedIds !== option.id);
};

export const selectedOptionsSelector = (state) => {
  const allOptionsList = state.options.optionsList;
  const selectedIds = state.options.selected;

  return allOptionsList.filter((option) => selectedIds === option.id);
};
