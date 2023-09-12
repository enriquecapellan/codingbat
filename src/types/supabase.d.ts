type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

interface Database {
	public: {
		Tables: {
			modules: {
				Row: {
					created_at: string | null;
					description: string | null;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string | null;
					description?: string | null;
					id?: string;
					name?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
