import { CacheConfig } from './cacheConfig';

export class Configuration {

	constructor() {
		this.cache = new CacheConfig();
	}

	static getDefaultConfiguration(): Configuration {
		return {
			db_path: './data/walkoff.db',
			walkoff_db_type: 'sqlite',
			case_db_path: './data/events.db',
			case_db_type: 'sqlite',
			clear_case_db_on_startup: false,
			host: '127.0.0.1',
			port: 5000,
			access_token_duration: 15,
			refresh_token_duration: 30,
			zmq_results_address: 'tcp://127.0.0.1:5556',
			zmq_communication_address: 'tcp://127.0.0.1:5557',
			number_processes: 4,
			number_threads_per_process: 3,
			cache: CacheConfig.getDefault()
		};
	}


	db_path: string;

	walkoff_db_type: string;

	case_db_path: string;

	case_db_type: string;

	clear_case_db_on_startup: boolean;

	host: string;

	port: number;

	access_token_duration: number; //in minutes

	refresh_token_duration: number; //in days

	zmq_results_address: string;

	zmq_communication_address: string;

	number_processes: number;

	number_threads_per_process: number;

	cache: CacheConfig;
}
