/**
 * Created by zazou on 14/05/2014.
 */
ig.module(
    'game.entities.player'
)
    .requires(
    'impact.entity',
    'plugins.tween'
)
    .defines(function(){

        EntityPlayer = ig.Entity.extend({
            size: {x:16,y:16},
            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.A,
            flip:false,
            health:20,
            offset:{x:0,y:0},
            // Load an animation sheet
            animSheet: new ig.AnimationSheet( 'media/playerss.png', 20, 20 ),

            init: function( x, y, settings ){
                this.parent( x, y, settings );
                this.addAnim( 'right', 0.3, [1] );

                this.addAnim( 'down', 0.1, [3] );
                this.addAnim( 'up', 0.1, [0] );
                this.maxVel.x = 200;
                this.maxVel.y = 1000;
                ig.game.gravity =0;

            },
            update: function(){
                //water-like gravity

                if(this.vel.y >0){
                    this.vel.y -=1;
                }
                if (this.vel.y<0){
                    this.vel.y +=1;
                }
                if( ig.input.state('up')){
                    this.vel.y = -50;
                    this.currentAnim = this.anims.up;
                }

                if(ig.input.state('down')){
                    this.vel.y = 50;
                    this.currentAnim = this.anims.down;
                }
                //MOV HORIZONTAL
                if( ig.input.state('left') ) {
                    this.vel.x = -50;
                    this.currentAnim = this.anims.right;
                    this.flip = true;


                }
                else if( ig.input.state('right') ) {
                    this.vel.x = 50;
                    this.currentAnim = this.anims.right;
                    this.flip = false;
                }
                else {
                    if(this.vel.x >0){
                    this.vel.x -= 1;
                    }
                    else if(this.vel.x <0){
                    this.vel.x += 1;
                        }

                }

                this.currentAnim.flip.x = this.flip;

                this.parent();
            },
            kill: function(){
                ig.game.loadLevelDeferred( ig.global['LevelDrsword'] );
                this.parent();
            }

        })

    });