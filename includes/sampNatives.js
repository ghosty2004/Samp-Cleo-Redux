/// <reference path="../.config/sa.d.ts" />

/**
 * Checks the initialization of SAMP structures
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
 * Sends a text message or command to the server if the message starts with the '/' character. Different from the opcode in that it does not accept a dynamic number of arguments for formatting
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
 * Sends a request to the server to change the skin
 * @param {number} id
 */
export const sampRequestClass = (id) => native("sampRequestClass", id);

/**
 * Sends information about the modification of t / s to the server
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
 * Gets a t / s hand on it. If the car is not in the stream zone, then returns 0
 * @param {number} id 
 * @returns {number}
 */
export const sampGetCarHandleBySampVehicleId = (id) => native("sampGetCarHandleBySampVehicleId", id);

/**
 * Gets the player’s handdle on his go. If the player is not in the stream zone, then returns -1
 * @param {number} id 
 * @returns {number}
 */
export const sampGetCharHandleBySampPlayerId = (id) => native("sampGetCharHandleBySampPlayerId", id);

/**
 * Checks if the chat is open
 * @returns {boolean}
 */
export const sampIsChatInputActive = () => native("sampIsChatInputActive");


/**
 * Checks if the player is connected to the server
 * @param {number} id
 * @returns {boolean}
 */
export const sampIsPlayerConnected = (id) => native("sampIsPlayerConnected", id);

/**
 * Gets the player’s health level
 * @param {number} id 
 * @returns {number} 
 */
export const sampGetPlayerHealth = (id) => native("sampGetPlayerHealth", id);

/**
 * Gets the player’s armour level
 * @param {number} id 
 * @returns {number}
 */
export const sampGetPlayerArmour = (id) => native("sampGetPlayerArmour", id);

/**
 * Sets server connection status
 * @param {number} gamestate 
 */
export const sampSetGamestate = (gameState) => native("sampSetGamestate", gameState);

/**
 * Disconnect from server by a specific reason
 * @param {boolean} timeout 
 */
export const sampDisconnectWithReason = (timeout) => native("sampDisconnectWithReason", timeout ? 1 : 0);

/**
 * Sets a new nickname to the local player
 * @param {string} name 
 */
export const sampSetLocalPlayerName = (name) => native("sampSetLocalPlayerName", name);

/**
 * Gets a ping player
 * @param {number} playerId
 * @returns {number}
 */
export const sampGetPlayerPing = (playerId) => native("sampGetPlayerPing", playerId);

/**
 * Get the player id by ped
 * @param {Char} ped 
 * @returns {number}
 */
export const sampGetPlayerIdByCharHandle = (ped) => native("sampGetPlayerIdByCharHandle", ped);

/**
 * Get the vehicle id by car
 * @param {Car} car 
 * @returns {number}
 */
export const sampGetVehicleIdByCarHandle = (car) => native("sampGetVehicleIdByCarHandle", car);

/**
 * Send a RPC of enter vehicle
 * @param {number} vehicleId 
 * @param {boolean} passenger 
 */
export const sampSendEnterVehicle = (vehicleId, passenger) => native("sampSendEnterVehicle", vehicleId, passenger ? 1 : 0);

/**
 * Send a RPC of exit vehicle
 * @param {number} vehicleId 
 */
export const sampSendExitVehicle = (vehicleId) => native("sampSendExitVehicle", vehicleId);

/**
 * Send spawn RPC
 */
export const sampSendSpawn = () => native("sampSendSpawn");

/**
 * Returns the pointer to the nickname of the specified player
 * @param {number} playerId
 * @returns {number}
 */
export const sampGetPlayerNickname = (playerId) => native("sampGetPlayerNickname", playerId)[0];

/**
 * Gets color player from scoreboard
 * @param {number} playerId 
 * @returns {number}
 */
export const sampGetPlayerColor = (playerId) => native("sampGetPlayerColor", playerId);

/**
 * Connects to server
 * @param {string} ip 
 * @param {number} port 
 */
export const sampConnectToServer = (ip, port) => native("sampConnectToServer", ip, port);

/**
 * Returns the pointer to the name of the server name
 * @returns {number}
 */
export const sampGetCurrentServerName = () => native("sampGetCurrentServerName");