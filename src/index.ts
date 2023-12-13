// usernameGenerator.ts
import { UsernameGeneratorInput, UsernameGeneratorOutput } from './types';

export const usernameGenerator = async ({
  fullName,
  usedUsernames = [],
  length = 8,
  allowSymbols = false,
  separator = '',
}: UsernameGeneratorInput): Promise<UsernameGeneratorOutput> => {
  if (!fullName) {
    throw new Error('Full name is required');
  }

  let cleanedFullName = fullName.replace(/\s/g, separator).toLowerCase();

  if (!allowSymbols) {
    cleanedFullName = cleanedFullName.replace(new RegExp(`[^a-zA-Z0-9${separator}]`, 'g'), '');
  }

  if (!usedUsernames.length && cleanedFullName.length >= length) {
    return cleanedFullName.slice(0, length);
  }

  let usernameCount = 1;
  let newUsername: string;

  do {
    newUsername = cleanedFullName + (usernameCount > 1 ? separator + usernameCount.toString() : '');
    usernameCount++;
  } while (
    newUsername.length < length ||
    usedUsernames.includes(newUsername) ||
    (!allowSymbols && /[^\w]/.test(newUsername))
  );

  return newUsername.slice(0, length);
};
