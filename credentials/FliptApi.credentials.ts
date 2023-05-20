import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FliptApi implements ICredentialType {
	name = 'fliptApi';
	displayName = 'Flipt API';
	icon = "file:logo.svg";
	documentationUrl = 'https://www.flipt.io/docs/integration';
	properties: INodeProperties[] = [
		// {
		// 	displayName: 'Token',
		// 	name: 'token',
		// 	type: 'string',
		// 	default: '',
		// },
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: 'https://www.flipt.io',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-Custom-Header': 'n8n-ndoes-flipt'
				// Authorization: '={{"Bearer " + $credentials.token}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/api/v1/namespaces',
		},
	};
}
