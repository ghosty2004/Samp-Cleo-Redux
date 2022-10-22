/// <reference path="../.config/sa.d.ts" />

export const Samp = {
    /**
     * Checks the initialization of SAMP structures
     * @returns {Boolean}
     */
    isAvailable: () => native("isSampAvailable"),
    /**
     * Adds a string to chat
     * @param {string} text 
     * @param {number} color 
     */
    addChatMessage: (text, color) => native("sampAddChatMessage", text, color),
    /**
     * Sends a text message or command to the server if the message starts with the '/' character. Different from the opcode in that it does not accept a dynamic number of arguments for formatting
     * @param {string} text
     */
    sendChat: (text) => native("sampSendChat", text),
    /**
     * Register a client command
     * @param {string} cmd 
     * @param {void} func 
     * @returns {boolean}
     */
    registerChatCommand: (command, func) => native("sampRegisterChatCommand", command, func),
    /**
     * Sends a request to the server to change the skin
     * @param {number} id
     */
    requestClass: (id) => native("sampRequestClass", id),
    /**
     * Sends information about the modification of t / s to the server
     * @param {number} event 
     * @param {number} id 
     * @param {number} param1 
     * @param {number} param2 
     */
    sendScmEvent: (event, id, param1, param2) => native("sampSendScmEvent", event, id, param1, param2),
    /**
     * Sets a special action to a local player
     * @param {number} action 
     */
    setSpecialAction: (action) => native("sampSetSpecialAction", action),
    /**
     * Sends death information from a player with the specified cause to the server
     * @param {number} playerId 
     * @param {number} reason 
     */
    sendDeathByPlayer: (playerId, reason) => native("sampSendDeathByPlayer", playerId, reason),
    /**
     * Gets a t / s hand on it. If the car is not in the stream zone, then returns 0
     * @param {number} vehicleId 
     * @returns {number}
     */
    getCarHandleBySampVehicleId: (vehicleId) => native("sampGetCarHandleBySampVehicleId", vehicleId),
    /**
     * Gets the player’s handdle on his go. If the player is not in the stream zone, then returns -1
     * @param {number} playerId 
     * @returns {number}
     */
    getCharHandleBySampPlayerId: (playerId) => native("sampGetCharHandleBySampPlayerId", playerId),
    /**
     * Checks if the chat is open
     * @returns {boolean}
     */
    isChatInputActive: () => native("sampIsChatInputActive"),
    /**
     * Checks if the player is connected to the server
     * @param {number} playerId
     * @returns {boolean}
     */
    isPlayerConnected: (playerId) => native("sampIsPlayerConnected", playerId),
    /**
     * Gets the player’s health level
     * @param {number} playerId 
     * @returns {number} 
     */
    getPlayerHealth: (playerId) => native("sampGetPlayerHealth", playerId),
    /**
     * Gets the player’s armour level
     * @param {number} id 
     * @returns {number}
     */
    getPlayerArmour: (playerId) => native("sampGetPlayerArmour", playerId),
    /**
     * Sets server connection status
     * @param {number} gamestate 
     */
    setGameState: (gameState) => native("sampSetGameState", gameState),
    /**
     * Disconnect from server by a specific reason
     * @param {boolean} timeout 
     */
    disconnectWithReason: (timeout) => native("sampDisconnectWithReason", timeout ? 1 : 0),
    /**
     * Sets a new nickname to the local player
     * @param {string} name 
     */
    setLocalPlayerName: (newName) => native("sampSetLocalPlayerName", newName),
    /**
     * Gets a ping player
     * @param {number} playerId
     * @returns {number}
     */
    getPlayerPing: (playerId) => native("sampGetPlayerPing", playerId),
    /**
     * Get the player id by char
     * @param {Char} char 
     * @returns {number}
     */
    getPlayerIdByCharHandle: (char) => native("sampGetPlayerIdByCharHandle", char),
    /**
     * Get the vehicle id by car
     * @param {Car} car 
     * @returns {number}
     */
    getVehicleIdByCarHandle: (car) => native("sampGetVehicleIdByCarHandle", car),
    /**
     * Send a RPC of enter vehicle
     * @param {number} vehicleId 
     * @param {boolean} passenger 
     */
    sendEnterVehicle: (vehicleId, passenger) => native("sampSendEnterVehicle", vehicleId, passenger ? 1 : 0),
    /**
     * Send a RPC of exit vehicle
     * @param {number} vehicleId 
     */
    sendExitVehicle: (vehicleId) => native("sampSendExitVehicle", vehicleId),
    /**
     * Send spawn RPC
     */
    sendSpawn: () => native("sampSendSpawn"),
    /**
     * Returns the pointer to the nickname of the specified player
     * @param {number} playerId
     * @returns {number}
     */
    getPlayerNickname: (playerId) => native("sampGetPlayerNickname", playerId),
    /**
     * Gets color player from scoreboard
     * @param {number} playerId 
     * @returns {number}
     */
    getPlayerColor: (playerId) => native("sampGetPlayerColor", playerId),
    /**
     * Connects to a server
     * @param {string} ip 
     * @param {number} port 
     */
    connectToServer: (serverIp, serverPort) => native("sampConnectToServer", serverIp, serverPort),
    /**
     * Get current server address
     * @returns {string}
     */
    getCurrentServerAddress: () => native("sampGetCurrentServerAddress"),
    /**
     * Get the current server name
     * @returns {string}
     */
    getCurrentServerName: () => native("sampGetCurrentServerName"),
    /**
     * Shows the player a dialog box
     * @param {number} dialogId 
     * @param {string} dialogCaption 
     * @param {string} dialogText 
     * @param {string} dialogButtonOne 
     * @param {string} dialogButtonTwo 
     * @param {number} dialogStyle
     */
    showDialog: (dialogId, dialogCaption, dialogText, dialogButtonOne, dialogButtonTwo, dialogStyle) => native("sampShowDialog", dialogId, dialogCaption, dialogText, dialogButtonOne, dialogButtonTwo, dialogStyle),
    /**
     * Gets information from the local dialog ( should be used in the ) cycle
     * @param {number} dialogId 
     * @returns {any}
     */
    hasDialogRespond: (dialogId) => native("sampHasDialogRespond", dialogId),
    /**
     * Creates a 3D text
     * @param {string} text 
     * @param {number} color 
     * @param {number} posX 
     * @param {number} posY 
     * @param {number} posZ 
     * @param {number} drawDistance 
     * @param {boolean} ignoreWalls 
     * @param {number} playerId 
     * @param {number} vehicleId 
     * @returns {number}
     */
    create3dText: (text, color, posX, posY, posZ, drawDistance, ignoreWalls = false, playerId = -1, vehicleId = -1) => native("sampCreate3dText", text, color, posX, posY, posZ, drawDistance, ignoreWalls, playerId, vehicleId),
    /**
     * Destroy a 3D text
     * @param {number} labelId
     */
    destroy3dText: (labelId) => native("sampDestroy3dText", labelId),
    /**
     * Checks if a 3D text exists
     * @param {number} labelId 
     * @returns {boolean}
     */
    is3dTextDefined: (labelId) => native("sampIs3dTextDefined", labelId),
    /**
     * Closes current dialog with a specific button
     * @param {number} buttonId 
     */
    closeCurrentDialogWithButton: (buttonId) => native("sampCloseCurrentDialogWithButton", buttonId),
    /**
     * Get current dialog list item
     * @returns {number}
     */
    getCurrentDialogListItem: () => native("sampGetCurrentDialogListItem"),
    /**
     * Returns text from 1st style dialog fields
     * @returns {any}
     */
    getCurrentDialogEditboxText: () => native("sampGetCurrentDialogEditboxText"),
    /**
     * Paste text in the field for entering the 1st style dialog
     * @param {string} text 
     */
    setCurrentDialogEditboxText: (text) => native("sampSetCurrentDialogEditboxText", text),
    /**
     * Check if any dialog is active
     * @returns {boolean}
     */
    isDialogActive: () => native("sampIsDialogActive"),
    /**
     * Get current dialog style
     * @returns {number}
     */
    getCurrentDialogType: () => native("sampGetCurrentDialogType"),
    /**
     * Get current dialog id
     * @returns {number}
     */
    getCurrentDialogId: () => native("sampGetCurrentDialogId"),
    /**
     * Get current game state
     * @returns {number}
     */
    getGameState: () => native("sampGetGamestate"),
    /**
     * Get the object handle
     * @param {number} objectId 
     * @returns {number}
     */
    getObjectHandleBySampId: (objectId) => native("sampGetObjectHandleBySampId", objectId),
    /**
     * Get the pickup handle
     * @param {number} pickupId 
     * @returns {number}
     */
    getPickupHandleBySampId: (pickupId) => native("sampGetPickupHandleBySampId", pickupId),
    /**
     * Gets the object ID by its handle
     * @param {Object} object 
     * @returns {number}
     */
    getObjectSampIdByHandle: (object) => native("sampGetObjectSampIdByHandle", object),
    /**
     * Gets the pickup ID by its handle
     * @param {Pickup} pickup 
     * @returns {number}
     */
    getPickupSampIdByHandle: (pickup) => native("sampGetPickupSampIdByHandle", pickup),
}