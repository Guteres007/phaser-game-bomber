import {Scene} from 'phaser'

export default class LevelOne extends Scene
{
	constructor()
	{
		super('main')
        this.platforms = null
        this.spriteKanon = null
        this.cursor = null
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
        this.spriteKanon = this.add.sprite(800, 680, 'kanon')
        this.add.image(800, 706, 'bunkr')
    
        this.spriteKanon.setOrigin(0.5,1)
        this.cursor = this.input.keyboard.createCursorKeys()
       // this.platforms.create(233, 568, 'ground').setScale(2).refreshBody()
       // this.platforms.create(400, 233, 'ground')

    }

    update(){

        if (this.cursor.right.isDown && this.spriteKanon.angle < 90 ) {
            this.spriteKanon.angle += 3
        } 
        else if (this.cursor.left.isDown && this.spriteKanon.angle > -90 ) {
            this.spriteKanon.angle -= 3
        } 
    }
}
