import { useCallback } from 'react';
import debounce from 'lodash.debounce';

const defaultOptions = {
  leading: false,
  trailing: true,
};

const useDebouncedFn = (fn, wait = 100, options = defaultOptions, dependencies) => {
  const debounced = debounce(fn, wait, options);

  return useCallback(debounced, dependencies);
};

export default useDebouncedFn;
