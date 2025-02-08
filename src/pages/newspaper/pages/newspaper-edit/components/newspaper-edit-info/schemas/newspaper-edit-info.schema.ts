import { t } from "i18next";
import * as yup from "yup";

export const newspaperInfoSchema = yup.object({
  title: yup.string().required(t("validation.requiredTitle")),
  description: yup.string().required(t("validation.requiredDesc")),
  posterId: yup.number().required(t("validation.requiredPoster")),
});

export type NewspaperInfoSchemaType = yup.InferType<typeof newspaperInfoSchema>;
