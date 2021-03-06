const columns = [
	{ dataIndex: 'image', key: 'image', title: 'Image', render: (data) => data || 'will display img' },
	{ dataIndex: 'fullname', key: 'fullname', title: 'Fullname', editable: true, type: 'text' },
	{ dataIndex: 'facebookID', key: 'facebookID', title: 'FacebookID', editable: true, type: 'text' },
	{ dataIndex: 'sex', key: 'sex', title: 'Sex', editable: true, type: 'single' },
	{ dataIndex: 'dob', key: 'dob', title: 'Age', editable: true, type: 'date' },
	{ dataIndex: 'contact', key: 'contact', title: 'Contact', editable: true, type: 'phone' },
	{ dataIndex: 'email', key: 'email', title: 'Email', editable: true, type: 'email' },
	{ dataIndex: 'address', key: 'address', title: 'Address', editable: true, type: 'single' },
	{ dataIndex: 'spent', key: 'spent', title: 'Spent' },
	{ dataIndex: 'orders', key: 'orders', title: 'Active Orders' },
	{ dataIndex: 'creationDate', key: 'creationDate', title: 'Added Since'},
	{ dataIndex: 'CreatedBy', key: 'CreatedBy', title: 'Added By'},
	{ dataIndex: 'option', key: 'option', title: 'Option' }
];

export default columns;
