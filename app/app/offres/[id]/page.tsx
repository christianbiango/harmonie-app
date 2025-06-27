import { fetchHolidayAction } from "@/app/(actions)/holidays";
import { HolidayDetailsPage } from "@/components/holidays-offers/pages/HolidayDetailsPage";
import { IdParams } from "@/lib/types/urlParams";
import { createClient } from "@/utils/supabase/server";

export default async function HolidayDetails({
  params,
}: {
  params: Promise<IdParams>;
}) {
  const { id } = await params;
  const data = await fetchHolidayAction("id", id);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id || "";

  return <HolidayDetailsPage holiday={data} userId={userId} />;
}
