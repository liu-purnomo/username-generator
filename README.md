# Username Generator

## Description

`usernameGenerator` is a flexible JavaScript library designed to integrate seamlessly with Express.js controllers. It efficiently generates unique usernames based on user-provided criteria without blocking the event loop, ideal for handling HTTP requests within an Express application.

## Installation

Install the package using npm:

```bash
npm install username-generator
```

## Features

- **Asynchronous Username Generation**: Perfect for real-time web applications.
- **Customizable**: Supports custom lengths, inclusion of symbols, and various separators.
- **Express Compatibility**: Optimized for use within Express.js server environments.

## API Reference

### `generateUsername(options: UsernameGeneratorInput): Promise<string>`

Generates a unique username based on provided options.

#### Parameters

- **fullName (string)**: The user's full name from which the username will be generated.
- **usedUsernames (string[])**: An array of usernames already in use to ensure uniqueness.
- **length (number)**: Optional. Desired length of the username, default is 8 characters.
- **allowSymbols (boolean)**: Optional. Whether to include symbols, default is false.
- **separator (string)**: Optional. Character to replace spaces in names, default is an empty string.

#### Returns

- **Promise<string>**: A promise that resolves to the generated username.

## Example Usage

Below is an example of how `usernameGenerator` can be used within an Express.js controller:

```typescript
import { usernameGenerator, UsernameGeneratorInput } from 'username-generator';
import { Request, Response } from 'express';

async function generateAndSendUsername(req: Request, res: Response) {
  const options: UsernameGeneratorInput = {
    fullName: req.body.fullName,
    usedUsernames: req.body.usedUsernames || [],
    length: req.body.length || 8,
    allowSymbols: req.body.allowSymbols || false,
    separator: req.body.separator || '',
  };

  try {
    const generatedUsername = await usernameGenerator(options);
    res.status(200).json({ username: generatedUsername });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { generateAndSendUsername };
```

This example demonstrates how the `generateAndSendUsername` function acts as an Express controller that asynchronously generates a username based on user input and sends it in the response.

## Support

For support, issues, or further documentation, please visit our [GitHub repository](https://github.com/liu-purnomo/username-generator).

```
