/// <reference path=".config/sa.d.ts" />

import { isSampAvailable, sampAddChatMessage, sampRegisterChatCommand } from "./includes/sampNatives";
 

while(true) {
    wait(0);
    if(!isSampAvailable()) continue;

    sampAddChatMessage("Ok", 0xFF0000);

    sampRegisterChatCommand("test", () => {
        sampAddChatMessage("Work", 0x00CC00);
    });

    break;
}