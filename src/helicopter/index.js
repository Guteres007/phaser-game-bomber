import {GameObjects} from 'phaser'
export default class Helicopter extends GameObjects.Sprite {
    constructor(scene,  x, y, textureKey){
        super(scene, x, y, textureKey)
        this.scene = scene
        this.textureKey = textureKey
        this.x = x
        this.y = y
        this.setScale(0.04,0.04)
        this.scene.add.existing(this)
    }
}