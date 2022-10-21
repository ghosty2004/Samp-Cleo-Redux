/// <reference path="../.config/sa.d.ts" />

/**
 * Checks the initialization of SAMP structures.
 * @returns {Boolean}
 */
export const isSampAvailable = () => native("isSampAvailable");

/**
 * Adds a string to chat
 * @param {string} text 
 * @param {number} color 
 */
export const sampAddChatMessage = (text, color) => native("sampAddChatMessage", text, color);

/**
 * Sends a text message or command to the server if the message starts with the '/' character. Different from the opcode in that it does not accept a dynamic number of arguments for formatting.
 * @param {string} text
 */
export const sampSendChat = (text) => native("sampSendChat", text);

/**
 * 
 * @param {string} cmd 
 * @param {void} func 
 * @returns {boolean}
 */
export const sampRegisterChatCommand = (cmd, func) => native("sampRegisterChatCommand", cmd, func);