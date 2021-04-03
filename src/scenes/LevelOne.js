import {Scene} from 'phaser'
import Canon from '../player'

export default class LevelOne extends Scene
{
	constructor()
	{
		super('main')
        this.platforms = undefined
        this.spriteCanon = undefined
        this.cursor = undefined
        this.novyKanon = undefined
	}

	preload()
    {
        this.load.image('pozadi', 'assets/pozadi.png')
        this.load.image('ostrov', 'assets/ostrov.png')
        this.load.image('vlny', 'assets/vlny.png')
        this.load.image('bunkr', 'assets/bunkr-ex.png')
        this.load.image('kanon', 'assets/kanon-ex.png')
    }
    

    create()
    {   
            //platform
        this.platforms = this.physics.add.staticGroup()
        this.add.image(800, 450, 'pozadi')
        this.add.image(800, 760, 'ostrov')
        this.add.image(800, 880, 'vlny') 
        new Canon(this, 800, 680, 'kanon')       
        this.add.image(800, 706, 'bunkr')

    }

}
