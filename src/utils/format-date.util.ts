import { t } from "i18next";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const monthNames = [
    t("january"),
    t("february"),
    t("march"),
    t("april"),
    t("may"),
    t("june"),
    t("july"),
    t("august"),
    t("september"),
    t("october"),
    t("november"),
    t("december"),
  ];

  const month = monthNames[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  return `${month} ${year}`;
};
