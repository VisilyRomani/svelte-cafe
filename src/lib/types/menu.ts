export type MenuType = {
	group: string;
	items: {
		name: string;
		cost?: number;
		sm?: number;
		lg?: number;
		consists?: string[];
	}[];
}[];

export type SelectMenuType = 'chinese' | 'family';
