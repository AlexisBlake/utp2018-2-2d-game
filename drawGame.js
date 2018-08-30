function drawGame() {

	if (ctx == null) {
		return;
	}
 	if (!isAllLoaded) {
		requestAnimationFrame(drawGame);
		return;
	}

	let currentFrameTime = Date.now(),
		timeElapsed = currentFrameTime - lastFrameTime;
	
	gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);
	
	let sec = Math.floor(Date.now() / 1000);

	if (sec != currentSecond) {
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	} else {
		frameCount++;
	}


	if (keysDown[16]) {
		player.delayMove = 75;
	} else {
		player.delayMove = 150;
	}

	if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
		if (keysDown[38] || keysDown[87]) {
			if (player.direction != directions.up) {
				player.direction = directions.up;
			} else {
				if (player.canMoveUp()) {
					player.MoveUp(gameTime);
				}
			}
		} else if (keysDown[40] || keysDown[83]) {
			if (player.direction != directions.down) {
				player.direction = directions.down;
			} else {
				if (player.canMoveDown()) {
					player.MoveDown(gameTime);
				}
			}
		} else if (keysDown[39] || keysDown[68]) {
			if (player.direction != directions.right) {
				player.direction = directions.right;
			} else {
				if (player.canMoveRight()) {
					player.MoveRight(gameTime);
				}
			}
		} else if (keysDown[37] || keysDown[65]) {
			if (player.direction != directions.left) {
				player.direction = directions.left;
			} else {
				if (player.canMoveLeft()) {
					player.MoveLeft(gameTime);
				}
			}
		}
	}

	viewport.update(
		player.position[0] + (player.dimensions[0] / 2),
		player.position[1] + (player.dimensions[1] / 2),
	);

	ctx.fillStyle = '#424242';
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for (let z = 0; z < mapTileData[mapNo].layer; z++) {
		for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; y++) {
			for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; x++) {
				if (z == 0) {
					ctx.drawImage(tileTypes[mapTileData[mapNo].map[toIndex(x, y)].type].sprite,
						viewport.offset[0] + x * tileW,
						viewport.offset[1] + y * tileH,
						tileW, tileH);
				} else if (z == 1) {
					const is = mapTileData[mapNo].map[toIndex(x, y)].itemStack;
					if (is != null) {
						const sprite = itemTypes[is.type].sprite;
						ctx.drawImage(tileset, sprite[0].x, sprite[0].y,
							sprite[0].w, sptite[0].h,
							viewport.offset[0] + (x * tileW) + itemTypes[is.type].offset[0],
							viewport.offset[1] + (y * tileH) + itemTypes[is.type].offset[1],
							sprite[0].w, sprite[0].h);
					}
				}
				const obj = mapTileData[mapNo].map[toIndex(x, y)].object;
				if (obj != null && objectTypes[obj.type].zIndex == z) {
					const objTypes = objectTypes[obj.type];
					ctx.drawImage(objTypes.sp,
						objTypes.sprite[0].x, objTypes.sprite[0].y,
						objTypes.sprite[0].w, objTypes.sprite[0].h,
						viewport.offset[0] + (x * tileW) + objTypes.offset[0],
						viewport.offset[1] + (y * tileH) + objTypes.offset[1],
						objTypes.sprite[0].w, objTypes.sprite[0].h);
				}
			}
		}
		if (z == 1) {
			const sprite = player.sprites[player.direction];
			ctx.drawImage(hero,
				sprite[0].x, sprite[0].y,
				sprite[0].w, sprite[0].h,
				viewport.offset[0] + player.position[0],
				viewport.offset[1] + player.position[1] - 10,
				player.dimensions[0], player.dimensions[1]);
		}
	}
	ctx.textAlign = "right";
	for (let i = 0; i < player.inventory.spaces; i++) {
		ctx.fillStyle = "#ddccaa";
		ctx.fillRect(10 + (i * 41), 430, 40, 40);
		if (typeof player.inventory.stacks[i] != 'undefined') {
			const it = itemTypes[player.inventory.stacks[i].type];
			const sprite = it.sprite;
			ctx.drawImage(tileset, sprite[0].x, sprite[0].y,
				sprite[0].w, sptite[0].h,
				viewport.offset[0] + (x * tileW) + itemTypes[is.type].offset[0],
				viewport.offset[1] + (y * tileH) + itemTypes[is.type].offset[1],
				sprite[0].w, sprite[0].h);
			if (player.inventory.stacks[i].qty > 1) {
				ctx.fillStyle = "#000000";
				ctx.fillText("" + player.inventory.stacks[i].qty, 10 + (i * 41) + 38, 430 + 38);
			}
		}
	}
	ctx.textAlign = "left";
	ctx.font = "bold 50pt helvetica";
	ctx.fillStyle = "#f90606";
	if (gameSpeeds[currentSpeed].name == "Paused") {
		ctx.fillText("Пауза", 235, 260);
	} else {
		ctx.fillText("", 10, 40);
	}
	
	ctx.fillStyle = '#ffffff';
	ctx.font = "bold 10pt helvetica";
	ctx.fillText('[E] Информация', 10, 20);
	ctx.fillText('[Q] Расписание', 10, 40);
	
	if(info) {
		ctx.fillStyle = '#000000';
		ctx.fillRect(100, 100, 440, 280);
		
		ctx.font = 'bold 13pt helvetica';
		ctx.fillStyle = '#dbdbdb';
		ctx.fillText('День ' + dayNo, 125, 130);
		
		ctx.fillText('Успеваемость: ', 125, 180);
		ctx.font = "11pt helvetica";
		ctx.fillText('Информатика  ' + Math.round(100/8 * subject[subjects.CS].Points) + '%',
					 125, 205);
		ctx.fillText('Математический анализ  ' + Math.round(100/6 * subject[subjects.MA].Points) + '%',
					 125, 225);
		ctx.fillText('Линейная алгебра  ' + Math.round(100/6 * subject[subjects.LA].Points) + '%',
					 125, 245);
		ctx.fillText('Иностранный язык  ' + Math.round(100/2 * subject[subjects.EN].Points) + '%',
					 125, 265);
		ctx.fillText('Социальные науки  ' + Math.round(100/3 * subject[subjects.SS].Points) + '%',
					 125, 285);
		ctx.fillText('Языки программирования  ' + Math.round(100/7 * subject[subjects.PR].Points) + '%',
					 125, 305);
		
		if (dayNo < 13) {
			ctx.font = 'bold 12pt helvetica';
			ctx.fillText('Дней до РК осталось: ' + (13 - dayNo), 125, 355);
		}
	}
	
	if(schedule) {
		ctx.fillStyle = '#b2b2b2';
		ctx.fillRect(100, 100, 440, 280);
		
		ctx.fillStyle = '#333333';
		ctx.font = 'bold 17pt helvetica';
		ctx.fillText('РАСПИСАНИЕ', 240, 135);
		
		ctx.font = '16pt helvetica';
		ctx.fillText('Информатика', 125, 180);
		ctx.fillText('Математический анализ', 125, 210);
		ctx.fillText('Линейная алгебра', 125, 240);
		ctx.fillText('Иностранный язык', 125, 270);
		ctx.fillText('Социальные науки', 125, 300);
		ctx.fillText('Языки программирования', 125, 330);
		
		ctx.fillStyle = '#870000';
		ctx.fillText('309', 480, 180);
		ctx.fillText('203', 480, 210);
		ctx.fillText('201', 480, 240);
		ctx.fillText('206', 480, 270);
		ctx.fillText('205', 480, 300);
		ctx.fillText('202', 480, 330);
	}
	
	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
