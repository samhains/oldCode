/**
 * Created by zazou on 13/05/2014.
 */

/*global ig*/

ig.module(
    'game.entities.drsword'
)
    .requires(
    'impact.entity'
)
    .defines(function() {

        EntityDrsword = ig.Entity.extend({
            animSheet: new ig.AnimationSheet('media/drsword.png', 128, 128),
            zIndex: 0,


            init: function (x, y, settings) {
                this.addAnim( 'idle', 1, [0]);
                this.parent(x, y, settings);
                this.gravityFactor = 0;

            },
            update: function () {
                this.currentAnim = this.anims.idle;
                this.parent();
            },


        });

    });
