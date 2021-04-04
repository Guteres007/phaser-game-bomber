import {GameObjects, Math as PhaserMath} from 'phaser'
export default class Bullet extends GameObjects.Sprite {
    
    constructor(scene, x, y, textureKey){
        super(scene, x, y, textureKey)
        this.scene = scene
        this.textureKey = textureKey
        this.x = x
        this.y = y
        this.setScale(0.08,0.08)
        this.cursor = this.scene.input.keyboard.createCursorKeys()  
        this.speed = PhaserMath.GetSpeed(200, 1); 
        this.xSpeed = 0
        this.ySpeed = 0
        this.isFiring = false
        
    }

    fire(shooter) {
        
        this.angle = shooter.angle
        this.xSpeed = this.speed * Math.sin(Math.PI * this.angle / 180)
        this.ySpeed = this.speed * Math.cos(Math.PI * this.angle / 180)
        this.scene.add.existing(this)
        this.y = shooter.y - (100 * Math.cos(this.rotation))
        this.x = shooter.x + (100 * Math.sin(this.rotation))
        this.isFiring = true

         
    }

    preUpdate(time, delta) {
        
        if (this.isFiring) { 
           this.x += this.xSpeed * delta;
           this.y -= this.ySpeed * delta;
        }    
    }

}