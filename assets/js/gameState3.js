var gameState3 = function (game) {
        this.map = null;
        this.layer = null;
        this.car = null;

        this.safetile = 16;
        this.gridsize = 32;

        this.speed = 80;
        this.threshold = 3;
        this.turnSpeed = 150;

        this.marker = new Phaser.Point();
        this.turnPoint = new Phaser.Point();

        this.directions = [ null, null, null, null, null ];
        this.opposites = [ Phaser.NONE, Phaser.RIGHT, Phaser.LEFT, Phaser.DOWN, Phaser.UP ];

        this.current = Phaser.UP;
        this.turning = Phaser.NONE;
    };

    gameState3.prototype = {
        init: function () {
            this.physics.startSystem(Phaser.Physics.ARCADE);
        },

        preload: function () {
            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally
            //this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue005/';
            this.load.crossOrigin = 'anonymous';

            this.load.tilemap('map', 'lands.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'dtiles.png');
            this.load.spritesheet('car', 'girl.png', 32, 48);

            //  Note: Graphics are Copyright 2015 Photon Storm Ltd.
        },

        create: function () {

            this.background = this.game.add.sprite(0, 0, "profile");

            this.map = this.add.tilemap('map');
            this.map.addTilesetImage('tiles', 'tiles');

            this.layer = this.map.createLayer('Dungeon2');
            //this.layer2 = this.map.createLayer('Tile Layer 2');

            this.physics.arcade.enable(this.layer);
            this.car = this.add.sprite(16, 320, 'car');
            this.car.anchor.set(0.5);

            this.map.setCollision(27, true, this.layer);

            this.physics.arcade.enable(this.car);

            this.cursors = this.input.keyboard.createCursorKeys();

            this.car.animations.add('down', [0,1,2,3], 6, true);
            this.car.animations.add('left', [4,5,6,7], 6, true);
            this.car.animations.add('right', [8,9,10,11], 6, true);
            this.car.animations.add('up', [12,13,14,15], 6, true);

            this.move(Phaser.RIGHT);
            this.car.animations.play('right');

        },

        checkKeys: function () {

            if (this.cursors.left.isDown && this.current !== Phaser.LEFT)
            {
                // this.checkDirection(Phaser.LEFT);
                this.move(Phaser.LEFT);
                this.car.animations.play('left');
            }
            else if (this.cursors.right.isDown && this.current !== Phaser.RIGHT)
            {
                // this.checkDirection(Phaser.RIGHT);
                this.move(Phaser.RIGHT);
                this.car.animations.play('right');
            }
            else if (this.cursors.up.isDown && this.current !== Phaser.UP)
            {
                // this.checkDirection(Phaser.UP);
                // this.car.animations.play('up');
                this.move(Phaser.UP);
                this.car.animations.play('up');
            }
            else if (this.cursors.down.isDown && this.current !== Phaser.DOWN)
            {
                // this.checkDirection(Phaser.DOWN);
                this.move(Phaser.DOWN);
                this.car.animations.play('down');
            }
            // else
            // {
            //     //  This forces them to hold the key down to turn the corner
            //     this.turning = Phaser.NONE;
            //     player.animations.stop();
            //     player.frame = 0;
            // }

        },

        // checkDirection: function (turnTo) {
        //     console.log(this.turning);
        //     if (this.turning === turnTo || this.directions[turnTo] === null || this.directions[turnTo].index !== this.safetile)
        //     {
        //         //  Invalid direction if they're already set to turn that way
        //         //  Or there is no tile there, or the tile isn't index a floor tile
        //         return;
        //     }

        //     //  Check if they want to turn around and can
        //     if (this.current === this.opposites[turnTo])
        //     {
        //         this.move(turnTo);
        //     }
        //     else
        //     {
        //         this.turning = turnTo;

        //         this.turnPoint.x = (this.marker.x * this.gridsize) + (this.gridsize / 2);
        //         this.turnPoint.y = (this.marker.y * this.gridsize) + (this.gridsize / 2);
        //     }

        // },

        /*turn: function () {

            var cx = Math.floor(this.car.x);
            var cy = Math.floor(this.car.y);

            //  This needs a threshold, because at high speeds you can't turn because the coordinates skip past
            if (!this.math.fuzzyEqual(cx, this.turnPoint.x, this.threshold) || !this.math.fuzzyEqual(cy, this.turnPoint.y, this.threshold))
            {
                return false;
            }

            this.car.x = this.turnPoint.x;
            this.car.y = this.turnPoint.y;

            this.car.body.reset(this.turnPoint.x, this.turnPoint.y);

            this.move(this.turning);

            this.turning = Phaser.NONE;

            return true;

        },*/

        move: function (direction) {

            var speed = this.speed;

            if (direction === Phaser.LEFT || direction === Phaser.UP)
            {
                speed = -speed;
            }

            if (direction === Phaser.LEFT || direction === Phaser.RIGHT)
            {
                this.car.body.velocity.x = speed;
                this.car.body.velocity.y = 0;
            }
            else
            {
                this.car.body.velocity.y = speed;
                this.car.body.velocity.x = 0;

            }

            // this.add.tween(this.car).to( { angle: this.getAngle(direction) }, this.turnSpeed, "Linear", true);

            this.current = direction;

        },

        // getAngle: function (to) {

        //     //  About-face?
        //     if (this.current === this.opposites[to])
        //     {
        //         return "180";
        //     }

        //     if ((this.current === Phaser.UP && to === Phaser.LEFT) ||
        //         (this.current === Phaser.DOWN && to === Phaser.RIGHT) ||
        //         (this.current === Phaser.LEFT && to === Phaser.DOWN) ||
        //         (this.current === Phaser.RIGHT && to === Phaser.UP))
        //     {
        //         return "-90";
        //     }

        //     return "90";

        // },

        stopAnimation: function() {

            //  This will just top the animation from running, freezing it at its current frame
            // greenJellyfish.animations.stop();

            //  This method will reset the frame to frame 1 after stopping
            this.car.animations.stop(null, true);

        },

        update: function () {
            var flag = false;
            this.physics.arcade.collide(this.car, this.layer, function() {flag = true;})

            this.marker.x = this.math.snapToFloor(Math.floor(this.car.x), this.gridsize) / this.gridsize;
            this.marker.y = this.math.snapToFloor(Math.floor(this.car.y), this.gridsize) / this.gridsize;

            //  Update our grid sensors
            if(this.layer.index!==null){
                this.directions[1] = this.map.getTileLeft(this.layer.index, this.marker.x, this.marker.y);
                this.directions[2] = this.map.getTileRight(this.layer.index, this.marker.x, this.marker.y);
                this.directions[3] = this.map.getTileAbove(this.layer.index, this.marker.x, this.marker.y);
                this.directions[4] = this.map.getTileBelow(this.layer.index, this.marker.x, this.marker.y);
            }

            this.checkKeys();

            if (flag) {
                this.stopAnimation();
            }

            // if (this.speed === 0) {
            //     this.car.animations.stop();
            //     this.car.frame = 0;
            // }

          /*  if (this.turning !== Phaser.NONE)
            {
                this.turn();
            }*/

        },

        render: function () {

            //  Un-comment this to see the debug drawing

            for (var t = 1; t < 5; t++)
            {
                if (this.directions[t] === null)
                {
                    continue;
                }

                var color = 'rgba(0,255,0,0.3)';

                if (this.directions[t].index !== this.safetile)
                {
                    color = 'rgba(255,0,0,0.3)';
                }

                if (t === this.current)
                {
                    color = 'rgba(255,255,255,0.3)';
                }

                this.game.debug.geom(new Phaser.Rectangle(this.directions[t].worldX, this.directions[t].worldY, 32, 32), color, true);
            }

            this.game.debug.geom(this.turnPoint, '#ffff00');

        }

    };
