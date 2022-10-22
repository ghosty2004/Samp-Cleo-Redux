/// <reference path=".config/sa.d.ts" />

import { isSampAvailable, sampAddChatMessage } from "./includes/sampNatives";


while(true) {
    wait(0);
    if(!isSampAvailable()) continue;
    sampAddChatMessage("Ok", 0xFF0000);
    break;
}