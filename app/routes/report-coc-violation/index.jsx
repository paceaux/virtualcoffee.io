import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { createMetaData } from '~/util/createMetaData.server';

export async function loader() {
	return json({
		meta: createMetaData({
			title: 'Report a Code of Conduct Violation',
			description: `If you have experienced or witnessed violations to Virtual Coffee's Code of Conduct, we need to know about it.`,
		}),
	});
}

export function meta({ data: { meta } = {} } = {}) {
	return meta;
}

// export async function action({ request }) {
// 	const uploadHandler = unstable_createFileUploadHandler({
// 		maxFileSize: 5_000_000,
// 		file: ({ filename }) => filename,
// 	});

// 	// netlify-forms
// 	const body = await unstable_parseMultipartFormData(request, uploadHandler);

// 	const response = await fetch(qualifiedUrl('/netlify-forms'), {
// 		method: 'POST',
// 		body,
// 	}).then((res) => res.text());

// 	console.log({ response });

// 	return redirect(`/report-coc-violation/thanks`);
// }

//
// NOTE:
//
// unstable_parseMultipartFormData is not currently working with netlify forms. So, we're bypassing remix
// entirely and just POSTing directly to the server (combined with a redirect in netlify.toml
// This is only a problem for forms with file upload - regular netlify files work great with action()
// https://github.com/remix-run/remix/issues/2476
//
//

export default function CocForm() {
	const { meta } = useLoaderData();
	return (
		<DefaultLayout
			simple
			heroSubheader={
				<>
					<p>{meta.description}</p>
					<p>
						Your privacy and security will be respected, but if you wish to
						remain anonymous, we will still accept and review your report.
					</p>
				</>
			}
		>
			<form
				action="/report-coc-violation-success"
				method="POST"
				encType="multipart/form-data"
				name="coc-violation"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="coc-violation" />
				<fieldset>
					<div className="form-group">
						<label htmlFor="formName">Your Name</label>
						<input
							type="text"
							className="form-control"
							id="formName"
							name="name"
							aria-describedby="nameHelp"
						/>
						<small id="nameHelp" className="form-text text-muted">
							Optional, skip if you wish to remain anonymous
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="formEmail">Email</label>
						<input
							type="email"
							className="form-control"
							id="formEmail"
							name="email"
							aria-describedby="emailHelp"
						/>
						<small id="emailHelp" className="form-text text-muted">
							Optional, skip if you wish to remain anonymous
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="reporteeName">
							Slack name of member you're reporting
						</label>
						<input
							type="text"
							className="form-control"
							id="reporteeName"
							name="reporteeName"
							required
							aria-describedby="reporteeNameHelp"
						/>
						<small id="reporteeNameHelp" className="form-text text-muted">
							Required
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="timeLocation">Approximate time/location</label>
						<input
							type="text"
							className="form-control"
							id="timeLocation"
							name="timeLocation"
							required
							aria-describedby="timeLocationHelp"
						/>
						<small id="timeLocationHelp" className="form-text text-muted">
							Required
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description of the event:</label>
						<textarea
							className="form-control"
							required
							id="description"
							name="description"
							rows="3"
							aria-describedby="descriptionHelp"
						></textarea>
						<small id="descriptionHelp" className="form-text text-muted">
							Required
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="anyoneElseInvolved">
							Was anyone else involved in this event?
						</label>
						<textarea
							className="form-control"
							id="anyoneElseInvolved"
							name="anyoneElseInvolved"
							rows="3"
						></textarea>
					</div>

					<div className="form-group">
						<label htmlFor="uploadedFiles">Screenshot or any other file:</label>
						<input
							type="file"
							className="form-control"
							id="uploadedFiles"
							name="uploadedFiles"
							aria-describedby="uploadedFilesHelp"
						/>
					</div>
				</fieldset>

				<div className="text-right">
					<button type="submit" className="btn btn-primary btn-lg">
						Submit Report
					</button>
				</div>
			</form>
		</DefaultLayout>
	);
}
