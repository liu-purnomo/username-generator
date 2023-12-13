export interface UsernameGeneratorInput {
    fullName: string;
    usedUsernames?: string[]; // Sekarang boleh kosong
    length?: number;
    allowSymbols?: boolean;
    separator?: "-" | "." | "_" | "";
}
  
  
export type UsernameGeneratorOutput = string;
  