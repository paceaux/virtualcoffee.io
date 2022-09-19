import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import MemberCards from '~/components/MemberCards';
import UndrawIllustration from '~/components/UndrawIllustration';
import getMembers, { MembersResponse } from '~/data/members';
import { createMetaData } from '~/util/createMetaData.server';

export const loader = async () => {
	const members: MembersResponse = await getMembers();

	const meta = createMetaData({
		title: 'Virtual Coffee Members',
		description: 'Meet our amazing members!',
		Hero: 'UndrawTeamSpirit',
	});

	return json({ ...members, meta });
};

export function meta({ data: { meta } = {} } = {}) {
	return meta;
}

export default function EventsIndex() {
	const { core, members, x } = useLoaderData();

	return (
		<DefaultLayout
			Hero="UndrawTeamSpirit"
			heroHeader="Virtual Coffee Members"
			heroSubheader="A community is only as awesome as its members!"
		>
			<div className="bg-light py-5">
				<div className="container-xl">
					<h2 className="mb-sm-3 mb-md-4 display-5">Core Team</h2>
					<MemberCards data={core} />
					{/* {{ membercards(members.memberData.core) }} */}

					<h2 className="mb-sm-3 mb-md-5 display-5">Our Members</h2>
					<MemberCards data={members} />
					<div className="member-footer">
						<h2 className="mb-sm-3 mb-md-5 display-4">Go Team!</h2>
						<UndrawIllustration filename="UndrawCelebration" />
					</div>
				</div>
			</div>
		</DefaultLayout>
	);
}
