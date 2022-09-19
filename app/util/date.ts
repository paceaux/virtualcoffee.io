import { DateTime } from 'luxon';
import type { DateTimeFormatOptions } from 'luxon';

type FormatToken =
	| 'S'
	| 'SSS'
	| 'u'
	| 'uu'
	| 'uuu'
	| 's'
	| 'ss'
	| 'm'
	| 'mm'
	| 'h'
	| 'hh'
	| 'H'
	| 'HH'
	| 'Z'
	| 'ZZ'
	| 'ZZZ'
	| 'ZZZZ'
	| 'ZZZZZ'
	| 'z'
	| 'a'
	| 'd'
	| 'dd'
	| 'c'
	| 'ccc'
	| 'cccc'
	| 'ccccc'
	| 'L'
	| 'LL'
	| 'LLL'
	| 'LLLL'
	| 'LLLLL'
	| 'y'
	| 'yy'
	| 'yyyy'
	| 'G'
	| 'GG'
	| 'GGGGG'
	| 'kk'
	| 'kkkk'
	| 'W'
	| 'WW'
	| 'o'
	| 'ooo'
	| 'q'
	| 'qq'
	| 'D'
	| 'DD'
	| 'DDD'
	| 'DDDD'
	| 't'
	| 'tt'
	| 'ttt'
	| 'tttt'
	| 'T'
	| 'TT'
	| 'TTT'
	| 'TTTT'
	| 'f'
	| 'ff'
	| 'fff'
	| 'ffff'
	| 'F'
	| 'FF'
	| 'FFF'
	| 'FFFF'
	| 'X'
	| 'x';

type AtLeastOneFormatTokenString = `${string}${FormatToken}${string}`;

export type FormattedDate = string;

export function dateForDisplay(
	dateString: string | Date,
	format: AtLeastOneFormatTokenString = 'fff',
	opts: DateTimeFormatOptions = {},
): FormattedDate {
	const resolvedOptions = {
		...opts,
	};

	const isoDateString =
		typeof dateString === 'string' ? dateString : dateString.toISOString();

	return DateTime.fromISO(isoDateString)
		.setZone('America/New_York')
		.toFormat(format, resolvedOptions) as FormattedDate;
}
