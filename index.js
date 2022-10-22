/// <reference path=".config/sa.d.ts" />

import { KeyCode } from "./.config/enums";

import { Samp } from "./includes/Samp";

while(true) {
    wait(0);
    if(!Samp.isAvailable()) continue;

    Samp.addChatMessage("SA:MP Cleo-Redux loaded", 0xFF0000);

    while(true) {
        wait(0);

        if(Pad.IsKeyDown(KeyCode.End)) {
            const char = new Player().getChar();
            //Samp.addChatMessage(`${JSON.stringify(Samp.getAnimationNameAndFile(1))}`, 0xFF0000);
            //Samp.addChatMessage(`${Object.entries(GameState).find(f => f[1] == Samp.getGameState())[0]}`, 0xFF0000);
            //Samp.addChatMessage(`${Samp.getCurrentDialogId()}`, 0xFF0000);
            //Samp.addChatMessage(`${Object.entries(DialogStyle).find(f => f[1] === Samp.getCurrentDialogType())[0]}`, 0xFF0000);
            //Samp.addChatMessage(`${JSON.stringify(Samp.isDialogActive())}`, 0xFF0000);
            //Samp.setCurrentDialogEditboxText("test");
            //Samp.addChatMessage(`${Samp.getCurrentDialogEditboxText()}`, 0xFF0000);
            //Samp.addChatMessage(`${Samp.getCurrentDialogListItem()}`, 0xFF0000);
            //Samp.closeCurrentDialogWithButton(1);
            //Samp.addChatMessage(`${Samp.is3dTextDefined(1)}`, 0xFF0000);
            //Samp.addChatMessage(`${Samp.create3dText("Hi", -1, char.getCoordinates().x, char.getCoordinates().y, char.getCoordinates().z, 50)}`);
            //Samp.addChatMessage(`${JSON.stringify(Samp.hasDialogRespond(1))}`, 0xFF0000);
            //Samp.addChatMessage(`${Samp.getCurrentServerAddress()}`, 0xFF0000);
            //Samp.showDialog(1, "Salut frate", "Salut frate", "Ok", "Close", DialogStyle.MSGBOX);
            //Samp.addChatMessage(`${Samp.getCharHandleBySampPlayerId(3)}`, 0xFF0000);
            //Samp.addChatMessage(Samp.getCharHandleBySampPlayerId(3).getHealth().toString(), 0xFF0000);
            //Samp.addChatMessage("You have successfully pressed button \"END\"", 0x00CC00);
        }
    }
}