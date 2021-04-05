import {Scene, Time} from 'phaser'
import Canon from '../canon'
import Bullet from '../bullet'
import Helicopter from '../helicopter'

const TIME_BETWEEN_BULLETS = 250

export default class LevelOne extends Scene
{
	constructor()
	{
		super('main')
        this.platforms = undefined
        this.spriteCanon = undefined
        this.canon = undefined
        this.bullet = undefined
        this.cursor = undefined
        this.nextFireTime = 0
        this.helicopterCount = 0

	}

        

	preload()
    {
        this.load.image('pozadi', 'assets/pozadi.png')
        this.load.image('ostrov', 'assets/ostrov.png')
        this.load.image('vlny', 'assets/vlny.png')
        this.load.image('bunkr', 'assets/bunkr-ex.png')
        this.load.image('bullet', 'assets/strela-docasna.png')
        this.load.image('kanon', 'assets/kanon-ex.png')
        this.load.image('helikoptera', 'assets/vrtulnik-nahled-cely.png')
    }
    

    create()
    {   
        this.platforms = this.physics.add.staticGroup()
        this.add.image(800, 450, 'pozadi')
        this.add.image(800, 760, 'ostrov')
        this.add.image(800, 880, 'vlny')
        this.canon = new Canon(this, 800, 680, 'kanon')
        this.add.image(800, 706, 'bunkr')
        this.cursor = this.input.keyboard.createCursorKeys()
        new Helicopter(this, 70, 60, 'helikoptera')
        
        this.time.addEvent({delay: 1000, repeat: 1000, loop: true, callback: ()=> { new Helicopter(this, Math.round(Math.random()) * 1000, 60, 'helikoptera')}})

    }

    update(time, delta) {
        this.helicopterCount


    
       
        if (this.cursor.space.isDown && this.nextFireTime < time) { 
            this.bullet = new Bullet(this, 800, 680, 'bullet')
            this.bullet.fire(this.canon)
            this.nextFireTime = time + TIME_BETWEEN_BULLETS
        }
        
    }

}
