import 'server-only';

type Dictionary = Record<string, any>;

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('../../dictionaries/en.json').then(m => m.default),
  pt: () => import('../../dictionaries/pt.json').then(m => m.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const dictionary = dictionaries[locale as keyof typeof dictionaries];
  
  if (!dictionary) {
    console.warn(`Dictionary for locale "${locale}" not found, falling back to "en"`);
    return dictionaries.en();
  }
  
  return dictionary();
}
