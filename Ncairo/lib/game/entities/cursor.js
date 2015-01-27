/**
 * Created by zazou on 14/05/2014.
 */
ig.module(
    'game.entities.cursor'
)
    .requires(
    'impact.entity'
)
    .defines(function(){

        EntityCursor = ig.Entity.extend({
            name:'cursor',
            size: {x:11,y:11},
            collides: ig.Entity.COLLIDES.NONE,
            type: ig.Entity.TYPE.B,
            busy: false,
            gravityFactor: 0,

            // Load an animation sheet
          /*  animSheet: new ig.AnimationSheet( 'media/cursor.png', 11, 11 ),*/

            init: function( x, y, settings ){
                this.parent( x, y, settings );
               /* this.addAnim( 'idle', 1, [0] );*/
                this.gravityFactor = 0;
            },
            update: function(){
                this.pos.x = ig.input.mouse.x -5;
                this.pos.y = ig.input.mouse.y -5;
                this.parent();
            }

        })

    });