(function () {
	if (window.SVGEditor) {
		return;
	}

	// prettier-ignore
	const RawData = {
		addText: "<svg viewBox='0 -960 960 960' class='SVGEditor-action-icon'><path d='M450.001-320v-260.001h-120V-640h299.998v59.999h-120V-320h-59.998ZM67.694-67.694v-204.613h72.307v-415.386H67.694v-204.613h204.613v72.307h415.386v-72.307h204.613v204.613h-72.307v415.386h72.307v204.613H687.693v-72.307H272.307v72.307H67.694ZM272.307-200h415.386v-72.307H760v-415.386h-72.307V-760H272.307v72.307H200v415.386h72.307V-200ZM127.693-747.691h84.616v-84.616h-84.616v84.616Zm619.998 0h84.616v-84.616h-84.616v84.616Zm0 619.998h84.616v-84.616h-84.616v84.616Zm-619.998 0h84.616v-84.616h-84.616v84.616Zm84.616-619.998Zm535.382 0Zm0 535.382Zm-535.382 0Z'/></svg>",
		addImg: "<svg viewBox='0 -960 960 960' class='SVGEditor-action-icon' style='transform:scale(1.17)'><path d='M204.616-140.001q-29.827 0-51.067-21.241-21.24-21.24-21.24-51.067v-535.382q0-29.827 21.24-51.067 21.24-21.241 51.067-21.241h347.691V-760H204.616q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847v535.382q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h535.383q5.385 0 8.846-3.462 3.462-3.462 3.462-8.847V-560h59.999v347.691q0 29.827-21.241 51.067-21.24 21.241-51.066 21.241H204.616Zm483.077-475.385v-80h-80v-59.998h80v-80h59.998v80h80v59.998h-80v80h-59.998ZM262.309-290.001h423.073L553.845-465.384 441.538-319.231l-79.999-102.306-99.23 131.536ZM192.307-760v560V-760Z'/></svg>",
		share: "<svg viewBox='0 -960 960 960' class='SVGEditor-action-icon'><path d='M696.045-106.001q-45.814 0-77.929-32.083T586.001-216q0-8.49 1.192-15.514 1.192-7.025 3.577-15.794L338.923-401.539q-13.846 16.769-33.431 24.154-19.584 7.384-41.492 7.384-45.833 0-77.916-32.07t-32.083-77.884q0-45.814 32.083-77.929T264-589.999q21.615 0 41.346 7.884 19.731 7.885 33.577 23.654L590.77-712.692q-2.385-8.769-3.577-15.794-1.192-7.024-1.192-15.514 0-45.833 32.07-77.916t77.884-32.083q45.814 0 77.929 32.07t32.115 77.884q0 45.814-32.083 77.929T696-634.001q-21.908 0-41.492-7.384-19.585-7.385-33.431-24.154L369.23-511.308q2.385 8.769 3.577 15.767 1.192 6.997 1.192 15.461 0 8.465-1.192 15.542t-3.577 15.846l251.847 154.231q13.846-17.769 33.431-24.654 19.584-6.884 41.492-6.884 45.833 0 77.916 32.07t32.083 77.884q0 45.814-32.07 77.929t-77.884 32.115ZM696-685.999q24.246 0 41.124-16.877 16.877-16.878 16.877-41.124 0-24.246-16.877-41.124-16.878-16.877-41.124-16.877-24.246 0-41.124 16.877-16.877 16.878-16.877 41.124 0 24.246 16.877 41.124 16.878 16.877 41.124 16.877Zm-432 264q24.246 0 41.124-16.877 16.877-16.878 16.877-41.124 0-24.246-16.877-41.124-16.878-16.877-41.124-16.877-24.246 0-41.124 16.877-16.877 16.878-16.877 41.124 0 24.246 16.877 41.124 16.878 16.877 41.124 16.877Zm432 264q24.246 0 41.124-16.877 16.877-16.878 16.877-41.124 0-24.246-16.877-41.124-16.878-16.877-41.124-16.877-24.246 0-41.124 16.877-16.877 16.878-16.877 41.124 0 24.246 16.877 41.124 16.878 16.877 41.124 16.877ZM696-744ZM264-480Zm432 264Z'/></svg>",
		canvas: `
		<svg xmlns="http://www.w3.org/2000/svg">
			<image id="SVGEditor-bg" href=""></image>
		</svg>`,
		templates: {
			"Template 1": {
				src: "./templates/template-1.png",
				size: [1500, 1000]
			},
			"Template 2": {
				src: "./templates/template-2.png",
				size: [500, 500]
			},
			"Template 3": {
				src: "./templates/template-3.png",
				size: [500, 500]
			},
			"Template 4": {
				src: "./templates/template-4.png",
				size: [500, 500]
			},
			"Template 5": {
				src: "./templates/template-5.png",
				size: [1500, 1000]
			},
			"Template 6": {
				src: "./templates/template-6.png",
				size: [750, 477]
			},
			"Template 7": {
				src: "./templates/template-7.png",
				size: [1000, 667]
			},
		},
		colorPicker: "colorpicker",
		colorSwathces: [
			"#264653",
			"#2a9d8f",
			"#e9c46a",
			"#f4a261",
			"#e76f51",
			"#d62828",
			"#023e8a",
			"#0077b6",
			"#0096c7",
			"#00b4d8",
			"#48cae4",
		],
		input: `
		<div class="SVGEditor-text SVGEditor-elements">
		<textarea xmlns='http://www.w3.org/1999/xhtml'
		style="width: 200px; height: 30px">Type Here</textarea>
		<button class="SVGEditor-action-translate"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-93.847 323.847-250l42.768-42.768 83.386 83.385v-240.618l-240.003-.615 83.386 83.385L250-323.847 93.847-480l155.538-155.537 42.768 42.768-82.77 82.77h240.618v-240.618l-83.386 83.385L323.847-710 480-866.153 636.153-710l-42.768 42.768-83.386-83.385v240.618l240.003.615-83.386-83.385L710-636.153 866.153-480 710-323.847l-42.768-42.768 83.385-83.386H509.999l-.615 240.003 83.385-83.386L636.153-250 480-93.847Z"/></svg></button>
		<button class="SVGEditor-action-scale"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M140.001-440v-80H200v80h-59.999Zm0-160v-80H200v80h-59.999Zm0-160v-59.999H200V-760h-59.999ZM280-760v-59.999h80V-760h-80Zm160 619.999V-200h80v59.999h-80ZM440-760v-59.999h80V-760h-80Zm160 619.999V-200h80v59.999h-80Zm160 0V-200h59.999v59.999H760Zm0-136.153v-80h59.999v80H760ZM760-440v-80h59.999v80H760Zm0-163.846V-760H600v-59.999h219.999v216.153H760ZM140.001-140.001V-360H200v160h160v59.999H140.001Z"/></svg></button>
		<button class="SVGEditor-action-cancel"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
		<button class="SVGEditor-action-delete"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z"/></svg></button>
		</div>`
	},
	createElement = _ => document.createElement(_),
	setClass = (elem, name) => elem.setAttribute("class", name);

	class SVGEditor {
		/** @type {HTMLElement} */
		container;
		/** @type {HTMLElement} */
		canvasContainer;
		/** @type {HTMLElement} */
		toolbar;
		/** @type {HTMLElement} */
		leftToolbar;
		/** @type {HTMLElement} */
		rightToolbar;
		/** @type {SVGElement} */
		canvas;
		/** @type {string} */
		template;
		/** @type {HTMLElement} */
		activeTool;

		/**
		 * Creates an instance of SVGEditor.
		 * @param {HTMLElement} container
		 * @memberof SVGEditor
		 */
		constructor(container) {
			this.container = container;
			this.createCanvas();
			this.setTemplate("Template 1");
			this.createToolBar();

			this.createTool(RawData.addText, "SVGEditor-add-text", "click", () =>
				this.addText(),
			);
			// this.createTool(RawData.addImg, "SVGEditor-add-img", "click", () => {});
			this.createTool(
				RawData.colorPicker,
				"SVGEditor-set-color",
				"click",
				() => {},
			);
			this.createTool(
				this.createTemplateSelector(),
				"SVGEditor-themes",
				"change",
				(e) => this.setTemplate(e.target.value),
			);
			this.createTool(
				RawData.share,
				"SVGEditor-share",
				"click",
				() => {
					svgToPng(this.canvas, RawData.templates[this.template].size, (e) =>
						console.log(e),
					);
				},
				false,
			);
			const alwan = new Alwan("#SVGEditor-set-color", {
				theme: "dark",
				margin: 10,
				swatches: RawData.colorSwathces,
				color: "#fff",
			});

			alwan.on("change", (e) => {
				this.activeTool.setColor(e.hex);
			});

			window.onresize = () => {
				this.setTemplate(this.template);
			};
			this.addText();
		}
		addText() {
			let fo = document.createElementNS(
				"http://www.w3.org/2000/svg",
				"foreignObject",
			);
			let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
			fo.draggable = "true";
			fo.setAttribute("width", "240");
			fo.setAttribute("height", "70");
			fo.setAttribute("x", "50");
			fo.setAttribute("y", "50");
			fo.setAttribute("transform", "scale(1)");
			fo.innerHTML = RawData.input;
			this.canvas.appendChild(fo);
			this.canvas.appendChild(text);
			text.style.display = "none";
			let translateBtn = fo.querySelector(".SVGEditor-action-translate");
			let scalerBtn = fo.querySelector(".SVGEditor-action-scale");
			let cancelBtn = fo.querySelector(".SVGEditor-action-cancel");
			let deleteBtn = fo.querySelector(".SVGEditor-action-delete");
			let input = fo.querySelector("textarea");
			dragElement(fo, translateBtn);
			resizeElement([fo, input], scalerBtn);
			fo.setColor = function (col) {
				input.style.color = col;
				text.setAttribute("fill", col);
			};

			this.activeTool = fo;
			cancelBtn.onclick = () => {
				text.textContent = input.value;
				text.style.display = "block";
				let cvsBR = this.canvas.getBoundingClientRect();
				let inpBR = input.getBoundingClientRect();
				text.setAttribute("width", fo.getAttribute("width"));
				text.setAttribute("height", fo.getAttribute("height"));
				text.setAttribute("x", inpBR.x - cvsBR.x);
				text.setAttribute("y", inpBR.y - cvsBR.y);
				text.setAttribute("transform", fo.getAttribute("transform"));
				fo.style.display = "none";
			};

			deleteBtn.onclick = () => {
				this.canvas.removeChild(fo);
			};
			text.onclick = () => {
				text.style.display = "none";
				fo.style.display = "block";
			};
		}
		createCanvas() {
			this.canvasContainer = createElement("div");
			setClass(this.canvasContainer, "SVGEditor-wishcard-container");
			this.canvasContainer.innerHTML += RawData.canvas;
			this.container.append(this.canvasContainer);
			this.canvas = this.canvasContainer.querySelector("svg");
			this.bgTemplate = this.canvasContainer.querySelector("#SVGEditor-bg");
		}

		createToolBar() {
			let toolbar = createElement("div"),
				left = createElement("div"),
				right = createElement("div");
			setClass(toolbar, "SVGEditor-toolbar");
			setClass(left, "SVGEditor-left-toolbar");
			setClass(right, "SVGEditor-right-toolbar");
			toolbar.append(left, right);

			this.container.append(toolbar);
			this.toolbar = toolbar;
			this.leftToolbar = left;
			this.rightToolbar = right;
		}

		/**
		 * Creates a new toolbar
		 *
		 * @param {string} innerHTML svg path source code
		 * @param {string} id id of button
		 * @param {string} event
		 * @param {Function} handler
		 * @param {boolean} [mainBar=true]
		 * @returns {HTMLElement}
		 */
		createTool(innerHTML, id, event, handler, mainBar = true) {
			let btn;
			if (
				innerHTML == RawData.colorPicker ||
				innerHTML == RawData.templateSelection
			) {
				btn = createElement("div");
			} else {
				btn = createElement("button");
			}
			btn.innerHTML += innerHTML;
			btn.setAttribute("id", id);
			setClass(btn, "SVGEditor-tool");
			if (mainBar) this.leftToolbar.append(btn);
			else this.rightToolbar.append(btn);
			btn.addEventListener(event, handler);
			return btn;
		}

		createTemplateSelector() {
			let html = `<select name="" id="" class="SVGEditor-tool" style="border: 1px solid #fff; padding: 0 5px">`;
			for (let temp of Object.keys(RawData.templates)) {
				html += `<option value="${temp}">${temp}</option>`;
			}
			return html + "</select>";
		}

		getContainerGeometry() {
			let geometry = this.canvasContainer.getBoundingClientRect();
			return [geometry.width, geometry.height];
		}

		setTemplate(temp) {
			this.template = temp;
			temp = RawData.templates[temp];
			this.bgTemplate.setAttribute("href", temp.src);
			let [cWidth, cHeight] = this.getContainerGeometry();
			// img -> cWidth
			let [iWidth, iHeight] = temp.size;
			let w = cWidth,
				h = (cWidth / iWidth) * iHeight;
			if (h > cHeight) {
				h = cHeight;
				w = (cHeight / iHeight) * iWidth;
			}

			// offset 2px for border
			w = Math.round(w - 2);
			h = Math.round(h - 2);

			this.canvas.setAttribute("width", w + "px");
			this.canvas.setAttribute("height", h + "px");
			this.canvas.setAttribute("viewport", "0 0 " + iWidth + " " + iHeight);
			this.bgTemplate.setAttribute("width", w + "px");
			this.bgTemplate.setAttribute("height", h + "px");
		}
	}

	/**
	 *
	 * @param {HTMLElement} target
	 * @param {HTMLElement} reference
	 */
	function dragElement(target, reference) {
		reference.onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e.preventDefault();
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e.preventDefault();
			// TODO: compensate overtranslation due to scaling
			// let scaling = parseFloat(target.outerHTML.match(/(?<=scale\()\d+.?\d*/)[0])
			let x = parseInt(target.getAttribute("x")) + e.movementX;
			let y = parseInt(target.getAttribute("y")) + e.movementY;
			target.setAttribute("x", x);
			target.setAttribute("y", y);
		}

		function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}

	/**
	 *
	 * @param {HTMLElement[]} targets
	 * @param {HTMLElement} reference
	 */
	function resizeElement(targets, reference) {
		reference.onmousedown = dragMouseDown;
		let trackX;
		function dragMouseDown(e) {
			e.preventDefault();
			document.onmouseup = closeDragElement;
			document.onmousemove = elementDrag;
			trackX = e.pageX;
		}

		function elementDrag(e) {
			e.preventDefault();
			for (let target of targets) {
				let w = target.getBoundingClientRect().width + e.movementX;
				let h = target.getBoundingClientRect().height + e.movementY;

				target.setAttribute("width", w);
				target.setAttribute("height", h);
				target.style.width = w + "px";
				target.style.height = h + "px";
			}
		}

		function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
		}
	}
	window.SVGEditor = SVGEditor;
})();
