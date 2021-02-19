import {Scene} from 'phaser'

export default class MainScene extends Scene
{
	constructor()
	{
		super('main')
        this.platforms = null
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
        this.add.image(800, 650, 'kanon')
        this.add.image(800, 706, 'bunkr')
    
       // this.platforms.create(233, 568, 'ground').setScale(2).refreshBody()
       // this.platforms.create(400, 233, 'ground')


    }

    update(){
       
    }
}
