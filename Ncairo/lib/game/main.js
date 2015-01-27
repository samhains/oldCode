ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
    'game.levels.drsword',
    'plugins.tween'

)
.defines(function(){

MyGame = ig.Game.extend({
	
	// Load a font
	font: new ig.Font( 'media/04b03.font.png' ),



    init: function() {
        ig.input.bind( ig.KEY.MOUSE1 , 'click');
        ig.input.initMouse();
        ig.input.bind( ig.KEY.A , 'left');
        ig.input.bind( ig.KEY.D , 'dig');
        ig.input.bind( ig.KEY.W , 'jump');
        ig.input.bind( ig.KEY.LEFT_ARROW , 'left');
        ig.input.bind( ig.KEY.RIGHT_ARROW , 'right');
        ig.input.bind( ig.KEY.UP_ARROW , 'up');
        ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
        ig.input.bind( ig.KEY.M , 'exit');
        ig.input.bind( ig.KEY.MOUSE1 , 'click');

        this.gravity = 0;



        this.loadLevel( LevelDrsword );

	},
	
	update: function() {
		// Update all entities and backgroundMaps
		this.parent();
		
		// Add your own, additional update code here
	},
	
	draw: function() {
		// Draw all entities and backgroundMaps

		this.parent();
		
		
		// Add your own drawing code here



	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', MyGame, 60, 400, 200, 2 );

});
