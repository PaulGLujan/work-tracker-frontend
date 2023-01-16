export const callbackAtTime = (time: Date, func: Function) => {
  const currentTime = new Date();
  const timeUntilTarget = time.getTime() - currentTime.getTime();
  setTimeout(func, timeUntilTarget);
};
