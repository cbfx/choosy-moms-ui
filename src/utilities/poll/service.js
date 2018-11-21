export default function($timeout) {
  const Poller = (promiseFn, delay = 45 * 1000) => {
    if (!promiseFn && angular.isFunction(promiseFn)) {
      throw 'You need to provide a function that returns a promise to start polling.';
    }

    let shouldCancel = false;
    let promise;

    const poll = () => {
      return promiseFn().then(() => {
        if (shouldCancel) {
          return $timeout.cancel(promise);
        }

        return promise = $timeout(() => {
          return poll();
        }, delay);
      });
    };

    const cancel = () => {
      shouldCancel = true;
    };

    promise = $timeout(() => {
      return poll();
    }, 0);

    return {
      promise,
      cancel
    };
  };

  return {
    Poller
  };
};
