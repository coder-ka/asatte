import curry from "just-curry-it";

export const addY = curry((years: number, date: Date) => {
  return new Date(
    date.getFullYear() + years,
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const addMo = curry((months: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth() + months,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const addD = curry((dates: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + dates,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const addH = curry((hours: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() + hours,
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const addMi = curry((minutes: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes() + minutes,
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const addS = curry((seconds: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds() + seconds,
    date.getMilliseconds()
  );
});
export const addMS = curry((milliseconds: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds() + milliseconds
  );
});

export const setY = curry((years: number, date: Date) => {
  return new Date(
    years,
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const setMo = curry((months: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    months,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const setD = curry((dates: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    dates,
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const setH = curry((hours: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    hours,
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const setMi = curry((minutes: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    minutes,
    date.getSeconds(),
    date.getMilliseconds()
  );
});
export const setS = curry((seconds: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    seconds,
    date.getMilliseconds()
  );
});
export const setMS = curry((milliseconds: number, date: Date) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    milliseconds
  );
});
