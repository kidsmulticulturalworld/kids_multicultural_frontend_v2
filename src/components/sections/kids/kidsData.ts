export interface Kid {
  id: string;
  name: string;
  age: number;
  image: string;
  ethnicity: string;
  gender: string;
  height: string;
  weight: string;
  eyeColor: string;
  hair: string;
  dressSize: string;
}

/**
 * Legacy procedural mock — not used. The kids directory uses `kids_view` via
 * `KidsPageContent` and `parseKidsViewResponse`.
 */
export const mockKids: Kid[] = [];
