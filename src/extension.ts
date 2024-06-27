// src/extension.ts
import { extensions } from 'vscode';
import { LanguageClient } from 'vscode-languageclient';

let client: LanguageClient;

export function activate(context: vscode.ExtensionContext) {
  // Create the language client and start the client.
  client = new LanguageClient(
    'zoraLanguageServer',
    'Zora Language Server',
    {
      command: 'zora-language-server',
    },
    {
      documentSelector: [{ scheme: 'file', language: 'zora' }],
      synchronize: {
        configurationSection: 'zora',
      },
    }
  );

  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}