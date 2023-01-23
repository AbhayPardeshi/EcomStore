import { useState, useContext, createContext } from "react";

const initialState = [];

const SelectedFilterContext = createContext(initialState);

const useSelectedFilter = () => useContext(SelectedFilterContext);

const SelectedFiltersProvider = ({ children }) => {
  const [appliedFilters, setAppliedFilters] = useState(initialState);

  const addAppliedFilters = (filterName) => {
    setAppliedFilters((previous) => {
      if (!previous.includes((item) => item === filterName)) {
        return [...previous, filterName];
      }
    });
  };
  const removeAppliedFilters = (filterName) => {
    setAppliedFilters((previous) => {
      return previous.filter((name) => name !== filterName);
    });
  };

  const removeAllAppliedFilters = () => {
    setAppliedFilters(initialState);
  };

  return (
    <SelectedFilterContext.Provider
      value={{
        appliedFilters,
        addAppliedFilters,
        removeAppliedFilters,
        removeAllAppliedFilters,
      }}
    >
      {children}
    </SelectedFilterContext.Provider>
  );
};

export { SelectedFiltersProvider, useSelectedFilter };
