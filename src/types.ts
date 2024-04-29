// types.ts

/**
 * Interface defining the options for generating a username.
 */
export interface UsernameGeneratorInput {
    /**
     * The full name from which the username will be derived.
     */
    fullName: string;

    /**
     * Optional array of usernames already in use to ensure the generated username is unique.
     * It is optional and can be left empty.
     */
    usedUsernames?: string[];

    /**
     * Optional length of the generated username. If not provided, defaults to 8.
     */
    length?: number;

    /**
     * Optional flag indicating whether symbols are allowed in the username.
     * Defaults to false if not provided.
     */
    allowSymbols?: boolean;

    /**
     * Optional character to replace spaces in the full name. Can be "-", ".", "_", or "" (no separator).
     * Defaults to an empty string if not provided.
     */
    separator?: '-' | '.' | '_' | '';
}

/**
 * Type alias for the output of the usernameGenerator function.
 * Represents the generated username as a string.
 */
export type UsernameGeneratorOutput = string;
