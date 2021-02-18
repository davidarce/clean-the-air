import { DateTime } from 'luxon';

export function formatDate(date: Date) {
  return DateTime.fromJSDate(date).toISODate();
}

export function formatToLocalDate(date: string) {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);
}

export function formatToHHMM(date: string) {
  return DateTime.fromISO(date).toLocaleString(DateTime.TIME_24_SIMPLE);
}

export function resolveTimezone(): string {
  return DateTime.local().zoneName;
}
