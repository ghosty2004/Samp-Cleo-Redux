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
 * Register a client command
 * @param {string} cmd 
 * @param {void} func 
 * @returns {boolean}
 */
export const sampRegisterChatCommand = (cmd, func) => native("sampRegisterChatCommand", cmd, func);

/**
 * Sends a request to the server to change the skin.
 * @param {number} id
 */
export const sampRequestClass = (id) => native("sampRequestClass", id);

/**
 * Sends information about the modification of t / s to the server.
 * @param {number} event 
 * @param {number} id 
 * @param {number} param1 
 * @param {number} param2 
 */
export const sampSendScmEvent = (event, id, param1, param2) => native("sampSendScmEvent", event, id, param1, param2);

/**
 * Sets a special action to a local player
 * @param {number} action 
 */
export const sampSetSpecialAction = (action) => native("sampSetSpecialAction", action);

/**
 * Sends death information from a player with the specified cause to the server
 * @param {number} playerId 
 * @param {number} reason 
 */
export const sampSendDeathByPlayer = (playerId, reason) => native("sampSendDeathByPlayer", playerId, reason);

/**
 * Gets a t / s hand on it. If the car is not in the stream zone, then returns 0.
 * @param {number} id 
 * @returns {number}
 */
export const sampGetCarHandleBySampVehicleId = (id) => native("sampGetCarHandleBySampVehicleId", id);