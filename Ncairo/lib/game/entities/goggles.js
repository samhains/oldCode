ig.module(
    'game.entities.goggles'
)
    .requires(
    'impact.entity',
    'impact.font',
    'game.levels.watercave'
)
    .defines(function(){

        EntityGoggles = ig.Entity.extend({
            size: {x:43,y:55},
            collides: ig.Entity.COLLIDES.NONE,
            checkAgainst: ig.Entity.TYPE.B,
            activate: false,
            font: new ig.Font( 'media/04b03.font.png' ),
            // Load an animation sheet
            animSheet: new ig.AnimationSheet( 'media/goggles.png', 43, 55 ),

            init: function( x, y, settings ){
                this.parent( x, y, settings );
                this.addAnim( 'idle', 1, [0] );
                this.gravityFactor = 0;
            },
            update: function(){
                this.activate = false;
                this.parent();
            },

            check: function( other ) {
                this.activate = true;
                if( ig.input.pressed('click')){
                    ig.game.location = 'water';
                    ig.game.loadLevelDeferred( ig.global['LevelWatercave'] );
                }
            },

            draw: function(){
                if(this.activate){
                    this.font.draw('Sea Cave', this.pos.x + this.size.x/2 + 3, this.pos.y-10, ig.Font.ALIGN.CENTER );
                }
                this.parent();
            }

        })

    });