/// <reference path=".config/sa.d.ts" />

import { isSampAvailable, sampAddChatMessage, sampRegisterChatCommand } from "./includes/sampNatives";
 
function test() {
    sampAddChatMessage("work", 0x00CC00);
}

while(true) {
    wait(0);
    if(!isSampAvailable()) continue;

    sampAddChatMessage("Ok", 0xFF0000);

    sampRegisterChatCommand("test", test);

    break;
}