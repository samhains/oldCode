ig.module(
    'game.entities.skull'
)
    .requires(
    'impact.entity',
    'impact.font',
    'game.levels.dirt'
)
    .defines(function(){

        EntitySkull = ig.Entity.extend({
            size: {x:20,y:30},
            collides: ig.Entity.COLLIDES.NONE,
            checkAgainst: ig.Entity.TYPE.B,
            activate: false,
            font: new ig.Font( 'media/04b03.font.png' ),
            // Load an animation sheet
            animSheet: new ig.AnimationSheet( 'media/skull.png', 20, 30 ),

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
                    ig.game.loadLevelDeferred( ig.global['LevelDirt'] );
                }
            },

            draw: function(){
                if(this.activate){
                    this.font.draw('Dig Lazurus!', this.pos.x + this.size.x/2 + 3, this.pos.y-10, ig.Font.ALIGN.CENTER );
                }
                this.parent();
            }

        })

    });