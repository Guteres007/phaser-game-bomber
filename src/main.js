import {AUTO, Game} from 'phaser'

import LevelOne from './scenes/LevelOne'

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
	scene: [LevelOne]
}

export default new Game(config)
