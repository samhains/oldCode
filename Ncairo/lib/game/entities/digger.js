/**
 * Created by zazou on 17/05/2014.
 */
/**
 * Created by zazou on 14/05/2014.
 */
ig.module(
    'game.entities.digger'
)
    .requires(
    'impact.entity',
    'game.entities.dig',
    'plugins.tween'
)
    .defines(function(){

        EntityDigger = ig.Entity.extend({
            size: {x:20,y:20},

            collides: ig.Entity.COLLIDES.PASSIVE,
            type: ig.Entity.TYPE.A,

            flip:false,
            health:20,


            // Load an animation sheet
            animSheet: new ig.AnimationSheet('media/digger.png', 18 , 20 ),

            init: function( x, y, settings ){
                this.parent( x, y, settings );
                this.addAnim( 'idle',  0.1, [0] );
                this.addAnim( 'dig', 0.1, [0,1,0,1,0,1] );
                this.maxVel.x = 200;
                this.maxVel.y = 1000;
                ig.game.gravity =600;

            },
            update: function(){



                if(ig.input.state('down')){
                    this.vel.y = 50;
                    this.currentAnim = this.anims.idle;
                }

                if(ig.input.pressed('up') && this.standing){
                    this.vel.y = -200;
                    this.currentAnim = this.anims.idle;
                }

                //MOV HORIZONTAL
                if( ig.input.state('left') ) {
                    this.vel.x = -50;
                    this.currentAnim = this.anims.idle;
                    this.flip = true;


                }
                else if( ig.input.state('right') ) {
                    this.vel.x = 50;
                    this.currentAnim = this.anims.idle;
                    this.flip = false;
                }
                else {
                  this.vel.x = 0;

                }

                if( ig.input.pressed('dig') && ig.input.state('left')){
                    ig.game.spawnEntity('EntityDig',this.pos.x, this.pos.y,{direction:'left'});

                    this.currentAnim = this.anims.dig;
                }
                else if(ig.input.pressed('dig') && ig.input.state('right')){
                    ig.game.spawnEntity('EntityDig',this.pos.x, this.pos.y,{direction:'right'});
                    this.currentAnim = this.anims.dig;

                }
                else if (ig.input.pressed('dig')) {
                    ig.game.spawnEntity('EntityDig',this.pos.x, this.pos.y);
                    this.currentAnim = this.anims.dig;
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