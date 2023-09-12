import { Session, createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient<Database>(
	"https://lniixxtkrycdqlzaqhur.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuaWl4eHRrcnljZHFsemFxaHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1MzUyMzMsImV4cCI6MjAwMDExMTIzM30.p3LP2a9waCAYNZsFh_l_XQ1lVMY0WnOmmAI9d5KO_L8"
);

export const useSupabase = () => {
	const [session, setSession] = useState<Session | null>(null);

	useEffect(() => {
		supabase.auth.getSession().then((response) => {
			const { session } = response.data;
			setSession(session);
		});

		const { data } = supabase.auth.onAuthStateChange((_, session) => {
			setSession(session);
		});

		return () => data.subscription.unsubscribe();
	}, []);
	
	return { session, supabase };
};
