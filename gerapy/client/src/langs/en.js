export default {
	objects: {
		client: 'client',
		clients: 'clients',
		project: 'project',
		projects: 'projects',
		spider: 'spider',
		spiders: 'spiders',
		job: 'job',
		jobs: 'jobs',
		log: 'log',
		logs: 'logs',
		item: 'item',
		items: 'items',
		task: 'task',
		tasks: 'tasks',
	},
	buttons: {
		refresh: 'refresh',
		confirm: 'confirm',
		render: 'render',
		yes: 'yes',
		copy: 'copy',
		no: 'no',
		save: 'save',
		create: 'create',
		delete: 'delete',
		normal: 'normal',
		edit: 'edit',
		error: 'error',
		schedule: 'schedule',
		batchDelete: 'batch delete',
		connecting: 'connecting',
		return: 'return',
		run: 'run',
		finished: 'finished',
		pending: 'pending',
		running: 'running',
		stop: 'stop',
		cancel: 'cancel',
		configure: 'configure',
		deploy: 'deploy',
		rename: 'rename',
		batchDeploy: 'batch deploy',
		build: 'build',
		re: 're',
		add: 'add',
		update: 'update',
		generate: 'generate',
		addItem: 'add item',
		addColumn: 'add column',
		addRule: 'add rule',
		addSpider: 'add spider',
		addUrl: 'add url',
		addDomain: 'add domain',
		addAttr: 'add attr',
		addExtractor: 'add extractor',
		addTable: 'add table',
		addCollection: 'add collection',
		status: 'status',
		nextTime: 'next time'
	},
	heads: {
		home: 'Home',
		clientIndex: 'Client List',
		clientCreate: 'Client Create',
		clientEdit: 'Client Edit',
		clientSchedule: 'Client Schedule',
		projectIndex: 'Project List',
		projectEdit: 'Project Edit',
		projectDeploy: 'Project Deploy',
		projectConfigure: 'Project Configure',
		taskIndex: 'Task Index',
		taskCreate: 'Task Create',
		taskEdit: 'Task Edit',
		taskStatus: 'Task Status'
	},
	titles: {
		createClient: 'Create Client',
		editClient: 'Edit Client',
		deployProject: 'Deploy Project',
		buildProject: 'Build Project',
		configureProject: 'Configure Project',
		project: 'Project',
		listSpider: 'Spider List',
		client: 'Client',
		item: 'Item',
		items: 'Items',
		rule: 'Rule',
		rules: 'Rules',
		extractor: 'Extractor',
		extractors: 'Extractors',
		selectConfig: 'Select Config Item',
		selectItem: 'Select Item',
		callback: 'Callback',
		storage: 'Storage',
		newFile: 'New File',
		renameFile: 'Rename File',
		createFile: 'Create File',
		browser: 'Browser',
		error: 'Error',
		proxy: 'Proxy',
		cookies: 'Cookies',
		createTask: 'Create Task',
		editTask: 'Edit Task',
		field: 'Field',
		column: 'Column',
	},
	menus: {
		clients: 'Clients',
		projects: 'Projects',
		tasks: 'Tasks',
	},
	messages: {
		loading: 'Loading...',
		noData: 'No Data',
		enter: 'Please Enter',
		isNull: 'Should Not Be Null',
		notValid: 'Is Not Valid',
		emptyDescription: 'Description Cannot Be None',
		notBuilt: 'Not Built',
		addColumn: 'Please Add Column',
		successAdd: 'Add Successfully',
		successSave: 'Save Successfully',
		successDelete: 'Delete Successfully',
		successCancel: 'Cancel Successfully',
		successRun: 'Run Successfully',
		successGenerate: 'Generate Successfully',
		successBuild: 'Build Successfully',
		successDeploy: 'Deploy Successfully',
		successCopy: 'Copy Successfully',
		errorAdd: 'Failed to Add',
		errorSave: 'Failed to Save',
		errorDelete: 'Failed to Delete',
		errorCancel: 'Failed to Cancel',
		errorRun: 'Failed to Run',
		errorGenerate: 'Failed to Generate',
		errorBuild: 'Failed to Build',
		errorDeploy: 'Failed to Deploy',
		errorLoad: 'Failed to Load',
		errorFormat: 'Error Format',
		errorCopy: 'Failed to Copy',
		processGenerate: 'Generating Project',
		confirm: 'Are You Sure?',
		reGenerate: 'ReGenerate Will Remove All Built Packages, Are You Sure to ReGenerate?',
		canceling: 'Canceling... Please Wait',
		buildFirst: 'Please Build Project',
		loadError: 'Load Error',
		select: 'Please Select',
		errorParse: 'Parse Error Occurred'
	},
	descriptions: {
		normalClients: 'Normal Clients',
		errorClients: 'Error Clients',
		countProjects: 'Projects',
		notGenerated: 'Not Generated',
		chooseDateTime: 'Choose Date Time',
		executedJobs: 'Executed Jobs',
		errorJobs: 'Error Jobs',
		toNextTask: 'To Next Task',
		successRate: 'Success Rate',
	},
	columns: {
		id: 'ID',
		status: 'Status',
		name: 'Name',
		ip: 'IP',
		value: 'Value',
		url: 'URL',
		operations: 'Operations',
		jobID: 'Job ID',
		spiderName: 'Spider Name',
		startTime: 'Start Time',
		endTime: 'End Time',
		description: 'Description',
		built: 'Built',
		deployed: 'Deployed',
		configurable: 'Configurable',
		builtAt: 'Built At',
		deployedAt: 'Deployed At',
		packageName: 'Package Name',
		projectName: 'Project Name',
		generateCode: 'Generate Code',
		column: 'Column',
		allowedDomains: 'Domains',
		startUrls: 'Start Urls',
		innerCode: 'Inner Code',
		outerCode: 'Outer Code',
		customSettings: 'Settings',
		classAttrs: 'Class Attrs',
		outProcessor: 'Out Processor',
		inProcessor: 'In Processor',
		method: 'Method',
		regex: 'Regex',
		processors: 'Processors',
		attrName: 'Attr Name',
		attrValue: 'Attr Value',
		list: 'List',
		code: 'Code',
		port: 'Port',
		host: 'Host',
		table: 'Table',
		tables: 'Tables',
		collection: 'Collection',
		collections: 'Collections',
		database: 'Database',
		user: 'User',
		password: 'Password',
		username: 'Username',
		auth: 'Auth',
		spider: 'Spider',
		project: 'Project',
		clients: 'Clients',
		trigger: 'Trigger',
		year: 'Year',
		years: 'Years',
		month: 'Month',
		months: 'Months',
		week: 'Week',
		weeks: 'Weeks',
		day: 'Day',
		days: 'Days',
		hour: 'Hour',
		hours: 'Hours',
		minute: 'Minute',
		minutes: 'Minutes',
		second: 'Second',
		seconds: 'Seconds',
		startDate: 'Start Date',
		endDate: 'End Date',
		runDate: 'Run Date',
		dayOfWeek: 'Day Of Week',
		uri: 'Uri',
		proxyPool: 'Proxy Pool',
		cookiesPool: 'Cookies Pool',
		failTimes: 'Fail Times',
		timezone: 'Timezone',
		nextTime: 'Next Time',
		lastTime: 'Last Time',
		success: 'Success',
		error: 'Error'
	},
}
