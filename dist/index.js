"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usernameGenerator = void 0;
const usernameGenerator = ({ fullName, usedUsernames = [], length = 8, allowSymbols = false, separator = '', }) => __awaiter(void 0, void 0, void 0, function* () {
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
    let newUsername;
    do {
        newUsername = cleanedFullName + (usernameCount > 1 ? separator + usernameCount.toString() : '');
        usernameCount++;
    } while (newUsername.length < length ||
        usedUsernames.includes(newUsername) ||
        (!allowSymbols && /[^\w]/.test(newUsername)));
    return newUsername.slice(0, length);
});
exports.usernameGenerator = usernameGenerator;
