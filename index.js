/// <reference path=".config/sa.d.ts" />

import { KeyCode } from "./.config/enums";

import { isSampAvailable, sampAddChatMessage, sampGetPlayerArmour, sampGetPlayerHealth, sampGetPlayerNickname, sampSendSpawn } from "./includes/sampNatives";


while(true) {
    wait(0);
    if(!isSampAvailable()) continue;
    sampAddChatMessage("Ok", 0xFF0000);

    while(true) {
        wait(0);
        sampAddChatMessage(`${JSON.stringify(sampGetPlayerNickname(100))}`, 0x00CC00);
        //sampAddChatMessage(`${Zone.GetName(0, 0, 0)}`, 0xFF0000);
        
        if(Pad.IsKeyDown(KeyCode.End)) {
            sampAddChatMessage("Key end was pressed", 0x00CC00);
            sampSendSpawn();
        }
    
    }
    break;
}