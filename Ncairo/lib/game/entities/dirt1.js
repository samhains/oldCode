/**
 * Created by zazou on 13/05/2014.
 */

/*global ig*/

ig.module(
    'game.entities.dirt1'
)
    .requires(
    'impact.entity'
)
    .defines(function() {

        EntityDirt1 = ig.Entity.extend({
            animSheet: new ig.AnimationSheet('media/dirt1.png', 20, 20),
            size: {x:19,y:19},
            gravityFactor:0,
            health:20,
            collides: ig.Entity.COLLIDES.FIXED,
            type: ig.Entity.TYPE.B, // Evil enemy group



            init: function (x, y, settings) {
                this.addAnim( 'idle', 1, [0]);
                this.parent(x, y, settings);
                this.gravityFactor = 0;

            },
            update: function () {
                this.currentAnim = this.anims.idle;
                this.parent();
            }


        });

    });
