import {AUTO, Game} from 'phaser'

import MainScene from './scenes/MainScene'

const config = {
	type: AUTO,
	width: 1600,
	height: 900,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300  },
			debug: true,
		}
	},
	scene: [MainScene]
}

export default new Game(config)
