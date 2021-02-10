import {AUTO, Game} from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config = {
	type: AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300  },
			debug: true,
		}
	},
	scene: [HelloWorldScene]
}

export default new Game(config)
