import {GameObjects} from 'phaser'
export default class Canon extends GameObjects.Sprite {
    
constructor(scene, x, y, textureKey){
    super(scene, x, y, textureKey)
    this.scene = scene
    this.textureKey = textureKey
    this.x = x
    this.y = y
    this.scene.add.existing(this)

    this.cursor = this.scene.input.keyboard.createCursorKeys()
    this.setOrigin(0.5,1)
}

preUpdate(){
    if (this.cursor.right.isDown && this.angle < 90 ) {
        this.angle += 3
    } 
    else if (this.cursor.left.isDown && this.angle > -90 ) {
        this.angle -= 3
    } 
}
}