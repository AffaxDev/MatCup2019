const redOuterColor = "#F44336";
const redInnerColor = "#C10D01";

const yellowOuterColor = "#FFC107";
const yellowInnerColor = "#CC8E00";

function load(star) {
	const canvas = document.getElementById('tahti-canvas');
	const ctx = canvas.getContext('2d');

	const positions = [];
	const margin = 13;
	const size = 7;

	/*iziToast.success({
        id: 'success',
        title: 'Success',
        message: 'Successfully generated.',
        position: 'topCenter',
        transitionIn: 'bounceInUp',
        onOpened: function(instance, toast) {

        },
        onClosed: function(instance, toast, closedBy) {
            console.info('closedBy: ' + closedBy);
        }
    });*/

	const middle = {
		'x': 18,
		'y': 22
	}

	positions.push({
		'color': '#ff0000',
		'row': middle.y - (star - 1) * 2,
		'column': middle.x
	});

	positions.push({
		'color': '#ff0000',
		'row': middle.y + (star + 1) * 2,
		'column': middle.x
	});

	const amount = ((middle.y + (star + 1) * 2) - (middle.y - (star - 1) * 2)) / 4;
	
	(function () { 
	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2,
			'column': middle.x
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x + amount
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			const rX = startPos.column + Math.floor(testnum / 2) + 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	positions.push({
		'color': '#ff0000',
		'row': middle.y - (star - 1) * 2 + amount,
		'column': middle.x + amount / 2
	});

	positions.push({
		'color': '#ff0000',
		'row': middle.y - (star - 1) * 2 + amount,
		'column': middle.x + amount + amount / 2
	});

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x + amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x + amount + amount / 2
		};

		const ya = endPos.column - startPos.column - 1;

		for (let x = 0; x < ya; x++) {
			const rY = startPos.row;
			const rX = startPos.column + x + 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
		}
	})();

	(function() {
		const newRow = (middle.y - (star - 1) * 2 + amount) + star;
		const testPos = {
			'color': '#ff0000',
			'row': newRow,
			'column': middle.x + amount
		}
		positions.push(testPos);
	})();

	(function() {
		const newRow = (middle.y - (star - 1) * 2 + amount + amount) + star;
		const testPos = {
			'color': '#ff0000',
			'row': newRow,
			'column': middle.x + amount + amount / 2
		}
		positions.push(testPos);
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount) + star,
			'column': middle.x + amount
		};
		const endPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x + amount + amount / 2
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			const rX = startPos.column + Math.floor(testnum / 2) + 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x + amount + amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount) + star,
			'column': middle.x + amount
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column - Math.floor(testnum / 2) - 1;
			if (star % 2 === 0 && y % 2 === 0) rX += 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	positions.push({
		'color': '#ff0000',
		'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
		'column': middle.x + amount / 2
	});

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x + amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x + amount + amount / 2
		};

		const ya = endPos.column - startPos.column - 1;

		for (let x = 0; x < ya; x++) {
			const rY = startPos.row;
			const rX = startPos.column + x + 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
		}
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x + amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y + (star + 1) * 2,
			'column': middle.x
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column - Math.floor(testnum / 2) - 1;
			if (star % 2 === 0 && y % 2 === 0) rX += 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})(); })();

	(function () { 
	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2,
			'column': middle.x
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column - Math.floor(testnum / 2);
			if (y % 2 !== 0) rX -= 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	positions.push({
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount / 2
	});

	positions.push({
		'color': '#ff0000',
		'row': middle.y - (star - 1) * 2 + amount,
		'column': middle.x - amount - amount / 2
	});

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount - amount / 2
		};

		const ya = startPos.column - endPos.column - 1;

		for (let x = 0; x < ya; x++) {
			const rY = startPos.row;
			const rX = startPos.column - x - 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
		}
	})();

	(function() {
		const newRow = (middle.y - (star - 1) * 2 + amount) + star;
		const testPos = {
			'color': '#ff0000',
			'row': newRow,
			'column': middle.x - amount
		}
		positions.push(testPos);
	})();

	(function() {
		const newRow = (middle.y - (star - 1) * 2 + amount + amount) + star;
		const testPos = {
			'color': '#ff0000',
			'row': newRow,
			'column': middle.x - amount - amount / 2
		}
		positions.push(testPos);
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount - amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount) + star,
			'column': middle.x - amount
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column + Math.floor(testnum / 2) + 1;
			if (y % 2 == 0 && star % 2 !== 0) rX -= 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount) + star,
			'column': middle.x - amount
		};
		const endPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x - amount - amount / 2
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column - Math.floor(testnum / 2) - 1;
			if (y % 2 === 0) rX += 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})();

	positions.push({
		'color': '#ff0000',
		'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
		'column': middle.x - amount / 2
	});

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x - amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y - (star - 1) * 2 + amount,
			'column': middle.x - amount - amount / 2
		};

		const ya = startPos.column - endPos.column - 1;

		for (let x = 0; x < ya; x++) {
			const rY = startPos.row;
			const rX = startPos.column - x - 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
		}
	})();

	(function() {
		const startPos = {
			'color': '#ff0000',
			'row': (middle.y - (star - 1) * 2 + amount + amount) + star,
			'column': middle.x - amount / 2
		};
		const endPos = {
			'color': '#ff0000',
			'row': middle.y + (star + 1) * 2,
			'column': middle.x
		};

		const ya = endPos.row - startPos.row;

		let testnum = 0;
		for (let y = 0; y < ya - 1; y++) {
			const rY = y + 1 + startPos.row;
			let rX = startPos.column + Math.floor(testnum / 2) + 1;
			if (y % 2 === 0 && star % 2 !== 0) rX -= 1;
			positions.push({
				'color': '#ff0000',
				'row': rY,
				'column': rX
			});
			testnum++;
		}
	})(); })();

	// Second

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let row = 0; row < 999; row++) {
		let smallest;
		let biggest;

		for (var currPos = 0; currPos < positions.length; currPos++) {
  			let pos = positions[currPos];
			if (pos.row === row) {
				if (smallest && biggest) {
					if (pos.column < smallest.column) {
						smallest = pos;
					}
					if (pos.column > biggest.column) {
						biggest = pos;
					}
				} else {
					smallest = pos;
					biggest = pos;
				}
			}
		}


		if (smallest && biggest) {
			const lengh = biggest.column - smallest.column;
			if (parseInt(lengh) > 1) {
				for(let newStuff = 0; newStuff < parseInt(lengh); newStuff++) {
					const ne = {
						'color': '#ffff00',
						'row': row,
						'column': smallest.column + newStuff + 1
					};

					let includes = false;

					for (var test = 0; test < positions.length; test++) {
  						let testpos = positions[test];
						if (testpos.row === ne.row && testpos.column === ne.column) {
							includes = true;
						}
					}

					if (!includes) {
						positions.push(ne);
					}
				}
			}
		}
	}

	positions.forEach(pos => {
		let y = pos.row;
		let x = Math.round(pos.column);
		let color = pos.color;

		console.log(y % 2 + ": " + x);
		if (y % 2 === 0) {
			x += 0.5;
		}

		let outerColor = color === "#ff0000" ? redOuterColor : yellowOuterColor;
		let innerColor = color === "#ff0000" ? redInnerColor : yellowInnerColor;

		ctx.fillStyle = outerColor;

		ctx.beginPath();
		ctx.arc(x * (size * 2 + margin) + size / 2, y * (size * 2 + margin) + size / 2, size, 0, Math.PI * 2, true);
		ctx.fill();

		/*ctx.fillStyle = innerColor;

		let newX = x + 3;
		let newY = y + 2;
		let newSize = size - 5;

		ctx.beginPath();
		ctx.arc(x * (size * 2 + margin) + size / 2, y * (size * 2 + margin) + size / 2, newSize, 0, Math.PI * 2, true);
		ctx.fill();*/
	});
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	//color += '0000';
	//return color;
	return '#ff0000'
}

$("#main-form").submit(function(event) {
	event.preventDefault();

	/*let c = 3;
	setInterval(function() {
		load(c);
		c++;
		if (c > 7) c = 3;
	}, 1000);*/

	let newGen = parseInt($('input#number').val()) + 1;
	newGen = Math.min(newGen, 11);
	newGen = Math.max(newGen, 2);

  	load(newGen);
});
