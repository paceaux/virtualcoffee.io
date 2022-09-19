import { handle as issue202209 } from '~/routes/newsletter/issues/2022-09';
import { handle as issue202208 } from '~/routes/newsletter/issues/2022-08';
import { handle as issue202207 } from '~/routes/newsletter/issues/2022-07';
import { handle as issue202206 } from '~/routes/newsletter/issues/2022-06';
import { handle as issue202205 } from '~/routes/newsletter/issues/2022-05';
import { handle as issue202204 } from '~/routes/newsletter/issues/2022-04';
import { handle as issue202203 } from '~/routes/newsletter/issues/2022-03';
import { handle as issue202202 } from '~/routes/newsletter/issues/2022-02';
import { handle as issue202201 } from '~/routes/newsletter/issues/2022-01';

import { handle as issue202112 } from '~/routes/newsletter/issues/2021-12';
import { handle as issue202111 } from '~/routes/newsletter/issues/2021-11';
import { handle as issue202110 } from '~/routes/newsletter/issues/2021-10';
import { handle as issue202109 } from '~/routes/newsletter/issues/2021-09';
import { handle as issue202108 } from '~/routes/newsletter/issues/2021-08';
import { handle as issue202107 } from '~/routes/newsletter/issues/2021-07';
import { handle as issue202106 } from '~/routes/newsletter/issues/2021-06';
import { handle as issue202105 } from '~/routes/newsletter/issues/2021-05';
import { handle as issue202104 } from '~/routes/newsletter/issues/2021-04';
import { handle as issue202103 } from '~/routes/newsletter/issues/2021-03';
import { handle as issue202102 } from '~/routes/newsletter/issues/2021-02';
import { handle as issue202101 } from '~/routes/newsletter/issues/2021-01';

const newsletters = [
	{ handleData: issue202209, slug: '2022-09' },
	{ handleData: issue202208, slug: '2022-08' },
	{ handleData: issue202207, slug: '2022-07' },
	{ handleData: issue202206, slug: '2022-06' },
	{ handleData: issue202205, slug: '2022-05' },
	{ handleData: issue202204, slug: '2022-04' },
	{ handleData: issue202203, slug: '2022-03' },
	{ handleData: issue202202, slug: '2022-02' },
	{ handleData: issue202201, slug: '2022-01' },

	{ handleData: issue202112, slug: '2021-12' },
	{ handleData: issue202111, slug: '2021-11' },
	{ handleData: issue202110, slug: '2021-10' },
	{ handleData: issue202109, slug: '2021-09' },
	{ handleData: issue202108, slug: '2021-08' },
	{ handleData: issue202107, slug: '2021-07' },
	{ handleData: issue202106, slug: '2021-06' },
	{ handleData: issue202105, slug: '2021-05' },
	{ handleData: issue202104, slug: '2021-04' },
	{ handleData: issue202103, slug: '2021-03' },
	{ handleData: issue202102, slug: '2021-02' },
	{ handleData: issue202101, slug: '2021-01' },
];

function getIssueData(issue) {
	return {
		title: issue.handleData.listTitle || issue.handleData.meta.title,
		description: issue.handleData.meta.description,
		to: `/newsletter/issues/${issue.slug}`,
	};
}

export default async function getNewsletters({ limit } = {}) {
	return newsletters.slice(0, limit).map((issue) => getIssueData(issue));
}
