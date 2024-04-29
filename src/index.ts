// usernameGenerator.ts
import { UsernameGeneratorInput, UsernameGeneratorOutput } from './types';

/**
 * Generates a username based on provided criteria.
 *
 * @param {UsernameGeneratorInput} options - The options for username generation.
 * @returns {Promise<UsernameGeneratorOutput>} A promise that resolves to the generated username.
 * @throws {Error} Throws an error if the full name is not provided.
 */
export const usernameGenerator = async ({
    fullName,
    usedUsernames = [],
    length = 8,
    allowSymbols = false,
    separator = '',
}: UsernameGeneratorInput): Promise<UsernameGeneratorOutput> => {
    // Ensure the full name is provided
    if (!fullName) {
        throw new Error('Full name is required');
    }

    // Clean the full name by replacing spaces with the specified separator and converting to lowercase
    let cleanedFullName = fullName.replace(/\s/g, separator).toLowerCase();

    // Remove symbols if not allowed, only allow alphanumeric characters and the separator
    if (!allowSymbols) {
        cleanedFullName = cleanedFullName.replace(
            new RegExp(`[^a-zA-Z0-9${separator}]`, 'g'),
            ''
        );
    }

    // Directly return the username if it's unused and matches the desired length
    if (!usedUsernames.length && cleanedFullName.length >= length) {
        return cleanedFullName.slice(0, length);
    }

    // Initialize the count for appending numbers to make username unique
    let usernameCount = 1;
    let newUsername: string;

    do {
        // Append a number if this is not the first iteration
        newUsername =
            cleanedFullName +
            (usernameCount > 1 ? separator + usernameCount.toString() : '');
        usernameCount++;
    } while (
        newUsername.length < length || // Ensure the username meets the minimum length
        usedUsernames.includes(newUsername) || // Check if the username is already used
        (!allowSymbols && /[^\w]/.test(newUsername)) // Ensure no invalid symbols if not allowed
    );

    // Return the username truncated to the desired length
    return newUsername.slice(0, length);
};
