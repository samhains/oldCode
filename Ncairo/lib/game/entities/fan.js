/**
 * Created by zazou on 13/05/2014.
 */

/*global ig*/

ig.module(
    'game.entities.fan'
)
    .requires(
    'impact.entity'
)
    .defines(function() {

        EntityFan = ig.Entity.extend({
            animSheet: new ig.AnimationSheet('media/fan.png', 64, 64),
            zIndex: 50,
            gravityFactor:0,

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
