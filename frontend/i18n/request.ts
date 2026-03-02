import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (
    !locale ||
    !routing.locales.includes(locale as (typeof routing.locales)[number])
  ) {
    locale = routing.defaultLocale;
  }

  // Cast to string to satisfy type requirements
  const finalLocale: string = locale as string;

  return {
    locale: finalLocale,
    messages: (await import(`../messages/${finalLocale}.json`)).default,
  };
});
