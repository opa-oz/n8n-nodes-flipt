import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { httpVerbFields, httpVerbOperations } from './HttpVerbDescription';

export class Flipt implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Flipt',
		name: 'flipt',
		icon: 'file:flipt.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with Flipt API',
		defaults: {
			name: 'Flipt',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'fliptApi',
				required: false,
			},
		],
		requestDefaults: {
			baseURL: 'https://flipt.io',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'HTTP Verb',
						value: 'httpVerb',
					},
				],
				default: 'httpVerb',
			},

			...httpVerbOperations,
			...httpVerbFields,
		],
	};
}
