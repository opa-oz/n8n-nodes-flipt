import { INodeProperties } from 'n8n-workflow';

// When the resource `getFlag` is selected, this `operation` parameter will be shown.
export const httpVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['getFlag'],
			},
		},
		options: [
			{
				name: 'GET',
				value: 'get',
				action: 'Perform a GET request',
				routing: {
					request: {
						method: 'GET',
						url: '=/api/v1/namespaces/{{$parameter.namespace}}/flags/{{$parameter.featureFlag}}',
					},
				},
			},
		],
		default: 'get',
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const getOperation: INodeProperties[] = [
	{
		displayName: 'Namespace',
		name: 'namespace',
		default: 'default',
		description: 'Select namespace',
		displayOptions: {
			show: {
				resource: ['getFlag'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Feature Flag',
		name: 'featureFlag',
		default: 'my_flag',
		description: 'Flag name',
		displayOptions: {
			show: {
				resource: ['getFlag'],
				operation: ['get'],
			},
		},
		type: 'string',
		required: true,
	},
];


export const httpVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
	...getOperation,
];
