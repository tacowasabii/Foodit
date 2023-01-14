import { useLocale } from "../contexts/LocaleContext";

const dict = {
  ko: {
    "edit button": "수정",
    "delete button": "삭제",
  },
  en: {
    "edit button": "Edit",
    "delete button": "Delete",
  },
};

function useTranslate() {
  const locale = useLocale();
  const translate = (key) => dict[locale][key] || "";
  return translate;
}

export default useTranslate;
