		const Engine = Matter.Engine;
		const World = Matter.World;
		const Bodies = Matter.Bodies;
		const Body = Matter.Body;
		var once = true;


		function setup() {
			createCanvas(800, 700);


			engine = Engine.create();
			world = engine.world;
			// engine.world.gravity.y = 1;
			ground = new Ground(width / 2, 695, width, 5)
			paperObject = new Paper(100, 600, 50)
			let X = width / 2
			let G = 690
			side1 = new Bin(X, G - 50, 20, 100)
			side2 = new Bin(X + 220, G - 50, 20, 100)
			binCenter = new Bin(X + 110, G - 10, 200, 20)


			Engine.run(engine);

		}


		function draw() {
			rectMode(CENTER);
			background(0);

			drawSprites();
			ground.display();
			paperObject.display();
			side1.display();
			side2.display();
			binCenter.display();
			KeyPressed();

		}



		function KeyPressed() {
			if ((keyCode === UP_ARROW) && (once == true)) {
				
					Matter.Body.applyForce(paperObject.body, paperObject.body.position, {
						x: 50,
						y: -50
					});
					once = false;
				}
		}