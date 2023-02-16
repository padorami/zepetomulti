import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import { SpawnInfo, ZepetoCharacter, ZepetoCharacterCreator, ZepetoPlayers, LocalPlayer } from 'ZEPETO.Character.Controller';
import { AnimationClip } from 'UnityEngine';
export default class DOROTY extends ZepetoScriptBehaviour {
    public gesture: AnimationClip;
    Start() {
        let spawn: SpawnInfo = new SpawnInfo()
        spawn.position = this.transform.position;
        spawn.rotation = this.transform.rotation;
        ZepetoCharacterCreator.CreateByZepetoId("xst404", new SpawnInfo(), (character: ZepetoCharacter) => {
            character.SetGesture(this.gesture);
        })
    }
}