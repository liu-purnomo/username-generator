# Username Generator

## Description:

The usernameGenerator function can seamlessly integrate into Express controllers, taking advantage of its asynchronous nature to avoid blocking the event loop. This makes it well-suited for scenarios where you need to generate a username as part of handling HTTP requests in an Express application.

## Installation

To install the package, you can use the following command:

```bash
npm install username-generator
```

## `generateUsername(fullName: string, usedUsernames: string[]): Promise<string>`

This function generates a unique username based on the provided full name and a list of used usernames. It is designed to be used asynchronously, making it suitable for integration into Express application controllers.

### Parameters:

**options (object):** An object containing the following properties:
- **fullName (string)**: The full name from which the username will be generated.
- **usedUsernames (string[])**: An array containing usernames that have already been used. The function ensures that the generated username is unique among the used ones.
- **length (number)**: (Optional) The desired length of the generated username. Default is 8.
- **allowSymbols (boolean)**: (Optional) A flag indicating whether symbols are allowed in the generated username. Default is false.
- **separator (string)**: (Optional) The separator to use when replacing spaces in the full name. Default is an empty string.

### Returns:

- A Promise that resolves to a string representing the generated username.

### Usage in Express Controller:

```typescript
import { usernameGenerator, UsernameGeneratorInput } from 'username-generator';
import { Request, Response } from 'express';

async function generateAndSendUsername(req: Request, res: Response) {
  try {
    const options: UsernameGeneratorInput = {
      fullName: req.body.fullName,
      usedUsernames: req.body.usedUsernames || [],
      length: req.body.length || 8,
      allowSymbols: req.body.allowSymbols || false,
      separator: req.body.separator || '',
    };

    const generatedUsername = await usernameGenerator(options);

    res.status(200).json({ username: generatedUsername });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { generateAndSendUsername };

```

In this example, the generateAndSendUsername function is an Express controller that uses usernameGenerator asynchronously to generate a username based on the provided options. The generated username is then sent as a JSON response. Any errors during the process are handled and returned with an appropriate status code.



