ig.module('game.entities.dig'	)
    .requires('impact.entity'	)
    .defines( function(){
        EntityDig = ig.Entity.extend({
            size: {x:5,y:3},

            lifetime: 0,
            direction: 'down',
            bounciness: 0,
            velocity: 500,
            speed:500,

            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.A,
            checkAgainst: ig.Entity.TYPE.B,
            /*animSheet: new ig.AnimationSheet('media/bullet.png', 5, 3),*/




            init: function(x, y , settings){
                this.parent(x,y,settings);
                this.timer = new ig.Timer(0.2);
               // this.addAnim( 'idle', 0.3, [0] );

            },
            update:function(){
                this.parent();
                if(this.direction === 'down'){
                    this.vel.y = this.velocity;
                    this.vel.x  = 0;
                }
                else if(this.direction === 'right'){
                    this.vel.x = this.velocity;
                    this.vel.y = 0;
                }
                else if(this.direction ==='left'){
                    this.vel.x = -this.velocity;
                    this.vel.y = 0;
                }
               /* this.currentAnim = this.anims.idle;*/
                if(this.timer.delta()>0){
                    this.kill();
                }
            },
            check: function(other){
                console.log("HIT!");
                other.receiveDamage(5,this);
                this.kill();
                this.parent();


            },
            handleMovementTrace: function( res ) { this.parent( res );
                if( res.collision.x || res.collision.y ){
                    this.kill(); }
            }


        })
    });