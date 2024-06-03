"use client";

import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "@/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";

export function LocaleSwitcher() {
  const { usePathname, useRouter } = createSharedPathnamesNavigation({
    locales,
  });

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations();
  const locale = useLocale();

  function onSelectChange(value: string) {
    router.replace(pathname, {
      ...params,
      locale: value,
      scroll: true,
    });
  }

  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t(cur)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
