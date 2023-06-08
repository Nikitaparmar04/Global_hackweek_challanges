//
// Created by NIKITA on 08-06-2023.
#include <iostream>
using namespace std;

// Function to encrypt the message
string encrypt(string message, int shift) {
    string encryptedMessage = "";
    for (int i = 0; i < message.length(); i++) {
        if (isalpha(message[i])) {
            char encryptedChar = (toupper(message[i]) - 'A' + shift) % 26 + 'A';
            encryptedMessage += encryptedChar;
        } else {
            encryptedMessage += message[i];
        }
    }
    return encryptedMessage;
}

// Function to decrypt the message
string decrypt(string message, int shift) {
    string decryptedMessage = "";
    for (int i = 0; i < message.length(); i++) {
        if (isalpha(message[i])) {
            char decryptedChar = (toupper(message[i]) - 'A' - shift + 26) % 26 + 'A';
            decryptedMessage += decryptedChar;
        } else {
            decryptedMessage += message[i];
        }
    }
    return decryptedMessage;
}

int main() {
    string message;
    int shift;

    // Read the message and shift value from the user
    cout << "Enter the message: ";
    getline(cin, message);
    cout << "Enter the shift value: ";
    cin >> shift;

    // Encrypt the message
    string encryptedMessage = encrypt(message, shift);
    cout << "Encrypted message: " << encryptedMessage << endl;

    // Decrypt the message
    string decryptedMessage = decrypt(encryptedMessage, shift);
    cout << "Decrypted message: " << decryptedMessage << endl;

    return 0;
}
