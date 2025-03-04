import { type DependencyList, useCallback, useEffect, useRef } from "react";

// @ts-ignore
import throttle from "lodash.throttle";
import { type GenericFunction } from "./shared/types";
import useWillUnmount from "./useWillUnmount";

interface ThrottleSettings {
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}

const defaultOptions: ThrottleSettings = {
  leading: false,
  trailing: true,
};

/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
 * before allowing the next execution.
 * If time is not defined, its default value will be 250ms.
 */
const useThrottledCallback = <TCallback extends GenericFunction>(
  fn: TCallback,
  dependencies?: DependencyList,
  wait: number = 600,
  options: ThrottleSettings = defaultOptions
) => {
  const throttled = useRef(throttle<TCallback>(fn, wait, options));

  useEffect(() => {
    throttled.current = throttle(fn, wait, options);
  }, [fn, wait, options]);

  useWillUnmount(() => {
    throttled.current?.cancel();
  });

  return useCallback(throttled.current, dependencies ?? []);
};

export default useThrottledCallback;
